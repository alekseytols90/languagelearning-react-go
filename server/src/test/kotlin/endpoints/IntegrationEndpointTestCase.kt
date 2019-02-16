package endpoints

import environment.EnvironmentLoader
import logger.ServerLogger
import model.Course
import model.CourseMetadata
import model.Lesson
import neo4j.Neo4jDatabaseAdaptor
import neo4j.Neo4jDriver
import org.http4k.client.JavaHttpClient
import org.http4k.core.Method
import org.http4k.core.Request
import org.http4k.core.Response
import org.junit.After
import org.junit.Before
import server.Server
import server.ServerApi
import server.ServerHttpApi
import server.ServerResponseFactory

private val environment = EnvironmentLoader(System::getenv).getEnvironment()

private val neo4jDatabaseAdaptor = object : TestDatabaseAdaptor {
    val neo4jDriver = Neo4jDriver(environment.neo4jUser, environment.neo4jPassword, environment.neo4jPort)
    val neo4jDatabaseAdaptor = Neo4jDatabaseAdaptor(
            neo4jDriver,
            environment.imagesPath,
            environment.extractsPath
    )

    override fun allCourses(): List<Course> {
        return neo4jDatabaseAdaptor.allCourses()
    }

    override fun courseMetadata(courseName: String): CourseMetadata {
        return neo4jDatabaseAdaptor.courseMetadata(courseName)
    }

    override fun lesson(courseName: String, lessonName: String): Lesson {
        return neo4jDatabaseAdaptor.lesson(courseName, lessonName)
    }

    override fun clearDatabase() {
        neo4jDatabaseAdaptor.clearDatabase()
    }

    override fun runQuery(query: String) {
        neo4jDriver.session().let { session ->
            session.run(query)
            session.close()
        }
    }
}

private val httpServerClient = object : TestServerClient {
    private val client = JavaHttpClient()
    private val serverUrl = "http://localhost:${environment.serverPort}"

    override fun courseMetadata(courseName: String): Response {
        val request = Request(Method.GET, "$serverUrl/coursemetadata?course=$courseName")
        return client.invoke(request)
    }

    override fun courses(): Response {
        val request = Request(Method.GET, "$serverUrl/courses")
        return client.invoke(request)
    }

    override fun lesson(courseName: String, lessonName: String): Response {
        val request = Request(Method.POST, "$serverUrl/lesson")
                .body("{\"lessonName\":\"$lessonName\",\"courseName\":\"$courseName\"}")
        return client.invoke(request)
    }
}

private val serverHttpApi = ServerHttpApi(ServerApi(neo4jDatabaseAdaptor, ServerResponseFactory(environment.frontendPort)))

private val server: Server = Server(
        serverHttpApi,
        environment.serverPort,
        ServerLogger()
)

open class IntegrationEndpointTestCase : EndpointTestCase(
        environment,
        neo4jDatabaseAdaptor,
        httpServerClient
) {
    @Before
    fun setUp() {
        server.start()
    }

    @After
    open fun tearDown() {
        server.stop()
        testDatabaseAdaptor.clearDatabase()
    }
}
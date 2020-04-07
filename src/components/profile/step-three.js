import React from "react";
import { Col, Row } from "reactstrap";
import { Input, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPngOrGif = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif";
  if (!isJpgOrPngOrGif) {
    message.error("You can only upload JPG/PNG/GIF file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPngOrGif && isLt2M;
}

class StepThree extends React.Component {
  state = {
    loading: false,
  };

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
        })
      );
      this.props.onUpload(info);
    }
  };

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <div className="auth">
        <Row>
          <Col md={3} sm={12}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader mt-2"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={this.handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Col>
          <Col md={9} sm={12}>
            <Input
              className="mt-2"
              placeholder="Twitter"
              onChange={(e) => this.props.onChange(e.target.value, "twitter")}
            />
            <Input
              className="mt-2"
              placeholder="LinkedIn"
              onChange={(e) => this.props.onChange(e.target.value, "linkedin")}
            />
            <Input
              className="mt-2"
              placeholder="Facebook"
              onChange={(e) => this.props.onChange(e.target.value, "facebook")}
            />
            <Input
              className="mt-2"
              placeholder="Personal Website or bio"
              onChange={(e) => this.props.onChange(e.target.value, "web")}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default StepThree;

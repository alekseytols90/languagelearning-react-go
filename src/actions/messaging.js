import { reset } from "redux-form";
import { getData, postData } from "./index";
import io from "socket.io-client";
import {
  CHAT_ERROR,
  FETCH_CONVERSATIONS,
  FETCH_RECIPIENTS,
  START_CONVERSATION,
  SEND_REPLY,
  FETCH_SINGLE_CONVERSATION,
} from "./types";

// Connect to socket.io server
export const socket = io.connect(process.env.REACT_APP_API_HOST);

//= ===============================
// Messaging actions
//= ===============================
export function fetchConversations() {
  const url = "/chat";
  return (dispatch) =>
    getData(FETCH_CONVERSATIONS, CHAT_ERROR, true, url, dispatch);
}

export function fetchConversation(conversation) {
  const url = `/chat/${conversation}`;
  return (dispatch) =>
    getData(FETCH_SINGLE_CONVERSATION, CHAT_ERROR, true, url, dispatch);
}

export function startConversation({ recipient, composedMessage }) {
  const data = { composedMessage };
  const url = `/chat/new/${recipient}`;
  return (dispatch) => {
    postData(START_CONVERSATION, CHAT_ERROR, true, url, dispatch, data);

    // Clear form after message is sent
    dispatch(reset("composeMessage"));
  };
}

export function fetchRecipients() {
  const url = "/chat/recipients";
  return (dispatch) =>
    getData(FETCH_RECIPIENTS, CHAT_ERROR, true, url, dispatch);
}

export function sendReply(replyTo, { composedMessage }) {
  const data = { composedMessage };
  const url = `/chat/${replyTo}`;
  return (dispatch) => {
    postData(SEND_REPLY, CHAT_ERROR, true, url, dispatch, data);

    // Clear form after message is sent
    dispatch(reset("replyMessage"));
    socket.emit("new message", replyTo);
  };
}

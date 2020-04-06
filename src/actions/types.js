//= =====================
// Auth Actions
//= =====================
export const AUTH_USER = "auth_user",
  UNAUTH_USER = "unauth_user",
  AUTH_ERROR = "auth_error",
  FORGOT_PASSWORD_REQUEST = "forgot_password_request",
  RESET_PASSWORD_REQUEST = "reset_password_request",
  PROTECTED_TEST = "protected_test";

//= =====================
// User Profile Actions
//= =====================
export const FETCH_USER = "fetch_user";
export const ERROR_RESPONSE = "error_response";

//= =====================
// Challenge Actions
//= =====================
export const FETCH_CHALLENGE = "fetch_challenge",
  FETCH_CHALLENGELIST = "fetch_challenge_list",
  UPDATE_CHALLENGE = "update_challenge",
  CREATE_CHALLENGE = "create_challenge",
  DELETE_CHALLENGE = "delete_challenge",
  CHALLENGE_ERROR = "challenge_error",
  SET_CURRENT_CHALLENGE = "set_current_challenge";

//= =====================
// Organization Actions
//= =====================
export const FETCH_ORGANIZATION = "fetch_organization",
  FETCH_ORGANIZATIONLIST = "fetch_organization_list",
  UPDATE_ORGANIZATION = "update_organization",
  CREATE_ORGANIZATION = "create_organization",
  DELETE_ORGANIZATION = "delete_organization",
  ORGANIZATION_ERROR = "organization_error",
  SET_CURRENT_ORGANIZATION = "set_current_organization";

//= =====================
// Messaging Actions
//= =====================
export const FETCH_CONVERSATIONS = "fetch_conversations",
  FETCH_RECIPIENTS = "fetch_recipients",
  START_CONVERSATION = "start_conversation",
  FETCH_SINGLE_CONVERSATION = "fetch_single_conversation",
  CHAT_ERROR = "chat_error",
  SEND_REPLY = "send_reply";

//= =====================
// Page Actions
//= =====================
export const SEND_CONTACT_FORM = "send_contact_form",
  STATIC_ERROR = "static_error";

//= =====================
// Customer Actions
//= =====================
export const CREATE_CUSTOMER = "create_customer",
  FETCH_CUSTOMER = "fetch_customer",
  CANCEL_SUBSCRIPTION = "cancel_subscription",
  UPDATE_BILLING = "update_billing",
  BILLING_ERROR = "billing_error",
  CHANGE_SUBSCRIPTION = "change_subscription";

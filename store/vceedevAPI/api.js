import axios from "axios"
const vceedevAPI = axios.create({
  baseURL: "https://vcee2-dev-107109.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return vceedevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_cder_list(payload) {
  return vceedevAPI.get(`/api/v1/cder/`)
}
function api_v1_cder_create(payload) {
  return vceedevAPI.post(`/api/v1/cder/`, payload)
}
function api_v1_cder_retrieve(payload) {
  return vceedevAPI.get(`/api/v1/cder/${payload.id}/`)
}
function api_v1_cder_update(payload) {
  return vceedevAPI.put(`/api/v1/cder/${payload.id}/`, payload)
}
function api_v1_cder_partial_update(payload) {
  return vceedevAPI.patch(`/api/v1/cder/${payload.id}/`, payload)
}
function api_v1_cder_destroy(payload) {
  return vceedevAPI.delete(`/api/v1/cder/${payload.id}/`)
}
function api_v1_cder2_list(payload) {
  return vceedevAPI.get(`/api/v1/cder2/`)
}
function api_v1_cder2_create(payload) {
  return vceedevAPI.post(`/api/v1/cder2/`, payload)
}
function api_v1_cder2_retrieve(payload) {
  return vceedevAPI.get(`/api/v1/cder2/${payload.id}/`)
}
function api_v1_cder2_update(payload) {
  return vceedevAPI.put(`/api/v1/cder2/${payload.id}/`, payload)
}
function api_v1_cder2_partial_update(payload) {
  return vceedevAPI.patch(`/api/v1/cder2/${payload.id}/`, payload)
}
function api_v1_cder2_destroy(payload) {
  return vceedevAPI.delete(`/api/v1/cder2/${payload.id}/`)
}
function api_v1_cder3_list(payload) {
  return vceedevAPI.get(`/api/v1/cder3/`)
}
function api_v1_cder3_create(payload) {
  return vceedevAPI.post(`/api/v1/cder3/`, payload)
}
function api_v1_cder3_retrieve(payload) {
  return vceedevAPI.get(`/api/v1/cder3/${payload.id}/`)
}
function api_v1_cder3_update(payload) {
  return vceedevAPI.put(`/api/v1/cder3/${payload.id}/`, payload)
}
function api_v1_cder3_partial_update(payload) {
  return vceedevAPI.patch(`/api/v1/cder3/${payload.id}/`, payload)
}
function api_v1_cder3_destroy(payload) {
  return vceedevAPI.delete(`/api/v1/cder3/${payload.id}/`)
}
function api_v1_cder4_list(payload) {
  return vceedevAPI.get(`/api/v1/cder4/`)
}
function api_v1_cder4_create(payload) {
  return vceedevAPI.post(`/api/v1/cder4/`, payload)
}
function api_v1_cder4_retrieve(payload) {
  return vceedevAPI.get(`/api/v1/cder4/${payload.id}/`)
}
function api_v1_cder4_update(payload) {
  return vceedevAPI.put(`/api/v1/cder4/${payload.id}/`, payload)
}
function api_v1_cder4_partial_update(payload) {
  return vceedevAPI.patch(`/api/v1/cder4/${payload.id}/`, payload)
}
function api_v1_cder4_destroy(payload) {
  return vceedevAPI.delete(`/api/v1/cder4/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return vceedevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return vceedevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return vceedevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return vceedevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return vceedevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return vceedevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return vceedevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return vceedevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return vceedevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return vceedevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return vceedevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return vceedevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return vceedevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_cder_list,
  api_v1_cder_create,
  api_v1_cder_retrieve,
  api_v1_cder_update,
  api_v1_cder_partial_update,
  api_v1_cder_destroy,
  api_v1_cder2_list,
  api_v1_cder2_create,
  api_v1_cder2_retrieve,
  api_v1_cder2_update,
  api_v1_cder2_partial_update,
  api_v1_cder2_destroy,
  api_v1_cder3_list,
  api_v1_cder3_create,
  api_v1_cder3_retrieve,
  api_v1_cder3_update,
  api_v1_cder3_partial_update,
  api_v1_cder3_destroy,
  api_v1_cder4_list,
  api_v1_cder4_create,
  api_v1_cder4_retrieve,
  api_v1_cder4_update,
  api_v1_cder4_partial_update,
  api_v1_cder4_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}

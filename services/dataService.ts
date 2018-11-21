// tslint:disable:no-object-mutation

import axios from "axios"

export const appBaseUrl = process.env.HOST_ADDRESS

const apiV2 = axios.create({
	baseURL: `${appBaseUrl}/api/v2`,
	timeout: 15000,
	headers: {
		"Content-Type": "application/json"
	}
})

const apiGq = axios.create({
	baseURL: `${appBaseUrl}/api/graphql`,
	timeout: 15000,
	headers: { "Content-Type": "application/json" }
})

export function runGqlQueries(query: string, token: string) {
	apiGq.defaults.headers = { "x-access-token": token }

	return apiGq.post(null, { query })
}

export function loginUser(credentials: string) {
	return apiV2.post("/user/login", credentials)
}

export function getMerchants() {
	return apiV2.post("/users")
}

export function createNewMerchant(payload: string, token: string) {
	apiV2.defaults.headers = { "x-access-token": token }

	return apiV2.post("/merchants", payload)
}

export function updateMerchant(payload: { readonly [key: string]: string }, token: string) {
	apiV2.defaults.headers = { "x-access-token": token }
	const { id, data } = payload

	return apiV2.put(`/merchants/${id}`, data)
}

export function deleteMerchant(payload: { readonly [key: string]: string }, token: string) {
	apiV2.defaults.headers = { "x-access-token": token }
	const { id } = payload

	return apiV2.delete(`/merchants/${id}`)
}

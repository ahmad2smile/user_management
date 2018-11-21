// tslint:disable:no-object-mutation

import axios from "axios"

export const appBaseUrl = process.env.HOST_ADDRESS

const api = axios.create({
	baseURL: appBaseUrl,
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
	return api.post("/user/login", credentials)
}

export function getMerchants() {
	return api.get("/merchants?&_limit=10")
}

export function createNewMerchant(payload: string, token: string) {
	api.defaults.headers = { "x-access-token": token }

	return api.post("/merchants", payload)
}

export function updateMerchant(payload: { readonly [key: string]: string }, token: string) {
	api.defaults.headers = { "x-access-token": token }
	const { id, data } = payload

	return api.put(`/merchants/${id}`, data)
}

export function deleteMerchant(payload: { readonly [key: string]: string }, token: string) {
	api.defaults.headers = { "x-access-token": token }
	const { id } = payload

	return api.delete(`/merchants/${id}`)
}

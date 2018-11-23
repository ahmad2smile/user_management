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

export function getMerchants({ limit = 10, offset = 0 }) {
	return api.get(`/merchants?_page=${offset}&_limit=${limit}`)
}

export function getMerchant(id: string) {
	return api.get(`/merchants/${id}`)
}

export function deleteMerchant({ id, token }: { readonly [key: string]: string }) {
	api.defaults.headers = { "x-access-token": token }

	return api.delete(`/merchants/${id}`)
}

export function createNewMerchant({ merchant, token }: { readonly merchant: IMerchant; readonly token: string }) {
	api.defaults.headers = { "x-access-token": token }

	return api.post("/merchants", merchant)
}

export function updateMerchant({ merchant, token }: { readonly merchant: IMerchant; readonly token: string }) {
	api.defaults.headers = { "x-access-token": token }

	return api.put(`/merchants/${merchant.id}`, merchant)
}

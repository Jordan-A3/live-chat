import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:4000/",
	timeout: 1000 * 60 * 5,
	headers: {
		"Content-Type": "application/json",
	},
});

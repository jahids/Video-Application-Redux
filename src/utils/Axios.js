import axios from "axios";

// const NewInstance = axios.create({
// 	// Configuration
// 	baseURL: 'https://geodb-cities-graphql.p.rapidapi.com',
// 	timeout: 800,
// 	headers: {
// 		Accept: 'application/json',
// 		'x-rapidapi-key': '<your-key-here>'
// 	},
// });

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000'
})

export default axiosInstance;
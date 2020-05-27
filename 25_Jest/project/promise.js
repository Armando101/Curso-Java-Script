import axios from 'axios';

export const getDataFromApi = (url) => {
	return axios.get(url)
		.then(({ data }) => {
			return data;
		});
}
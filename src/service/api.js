import axios from 'axios';

const successResponse = ({ data }) => data;

const errorResponse = ({ response }) => {
  throw response;
};

const api = axios.create({
  baseURL: process.env.REACT_APP_ITUNES_API,
});

api.interceptors.request.use(config => config);

api.interceptors.response.use(successResponse, errorResponse);

export default api;

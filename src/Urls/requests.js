import axios from 'axios';

const timeout = process.env.NODE_ENV === 'development' ? 30000 : 12000;
const api = axios.create({
  Accept: "*/*",
  timeout,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
  responseType: "json",
  baseURL: "http://44.225.113.133:8000/",
});

const tokenHeaders = (useToken) => {
  const token = localStorage.getItem('token');
  const headers = useToken && token ? { headers: { Authorization: `jwt ${token}` } } : {};
  return headers;
};
export const get = async (url, useToken) => {
  const headers = tokenHeaders(useToken);
  const response = await api.get(url, headers);
  return response;
};

export const post = async (url, data, useToken) => {
  const headers = tokenHeaders(useToken);
  const response = await api.post(url, data, headers);
  return response;
};

export const put = async (url, data, useToken) => {
  const headers = tokenHeaders(useToken);
  const response = await api.put(url, data, headers);
  return response;
};
// Note: delete is a reserved word
export const remove = async (url, useToken) => {
  const headers = tokenHeaders(useToken);
  const response = await api.delete(url, headers);
  return response;
};

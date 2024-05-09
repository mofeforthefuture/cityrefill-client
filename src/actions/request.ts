import axios from 'axios';

type requestProp = {
  route: string;
  method: 'get' | 'options' | 'post' | 'put' | 'patch' | 'delete';
  payload: Object;
};
const request = async ({ route, method, payload }: requestProp) => {
  method = method || 'get';
  const headers = {
    Accept: 'application/json',
  };

  return axios({
    data: payload,
    url: `${import.meta.env.VITE_BASE_URL}${route}`,
    method,
    headers,
    timeout: 10000,
  });
};

export default request;

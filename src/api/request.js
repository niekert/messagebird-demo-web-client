import ApiError from 'models/ApiError';
import { API_KEY_STORAGE_KEY, API_URL_BASE } from 'app-constants';

export default function request(path, requestOptions) {
  const apiKey = localStorage.getItem(API_KEY_STORAGE_KEY);
  const headers = new Headers(requestOptions.headers);

  // headers.append('Accept', 'application/json');
  if (apiKey) {
    headers.append('Authorization', `AccessKey ${apiKey}`);
  }

  return fetch(`${API_URL_BASE}${path}`, { ...requestOptions, headers })
    .then(resp => {
      if (resp.status === 401) {
        throw new Error('Unauthorized request');
      }

      return resp.json().then(data => ({
        status: resp.status,
        data,
      }));
    })
    .then(({ status, data }) => {
      if (data.errors && data.errors.length) {
        throw new ApiError(data.errors, status);
      }

      return data;
    });
}

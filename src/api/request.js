import ApiError from 'models/ApiError';

const API_URL_BASE = process.env.REACT_APP_API_URL_BASE;

export default function request(path, requestOptions) {
  return fetch(`${API_URL_BASE}${path}`, requestOptions)
    .then(resp =>
      resp.json().then(data => ({
        status: resp.status,
        data,
      })),
    )
    .then(({ status, data }) => {
      if (data.errors && data.errors.length) {
        throw new ApiError(data.errors, status);
      }

      return data;
    });
}

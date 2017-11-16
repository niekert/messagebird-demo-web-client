import { API_URL_BASE } from 'app-constants';

export function authenticate(apiKey) {
  const headers = new Headers({
    Authorization: `AccessKey ${apiKey}`,
  });

  return fetch(`${API_URL_BASE}/authenticate`, {
    headers,
  }).then(resp => {
    if (resp.status !== 200) {
      throw new Error('Invalid API key');
    }
  });
}

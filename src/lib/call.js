// @flow
const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    if (response.status !== 204) return response.json();
    return response;
  }
  return response
    .json()
    .then(data => {
      const error = new Error(response.statusText);
      // $FlowFixMe
      error.response = data;
      throw error;
    })
    .catch(() => {});
};

const call = (
  url: string,
  method: string = 'GET',
  payload: any = null,
  additionalHeaders: Object = {},
  isCompleteUrl: boolean = false
) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...additionalHeaders,
  };

  // $FlowFixMe
  return fetch(url, {
    method,
    headers,
    body: payload ? JSON.stringify(payload) : null,
  })
    .then(checkStatus)
    .catch(() => {});
};

export default call;

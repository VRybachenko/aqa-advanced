const axios = require('axios');

//Task 1
async function requestWrongUrl() {
  try {
    await axios.get('https://test.com/wrong-url');
    return 'OK';
  } catch (err) {
    if (err.response?.status) {
      return `Error ${err.response.status}`;
    }
    return 'Network error';
  }
}

//Task 2
async function getWithHeadersAndParams() {
  const res = await axios.get('https://test.com/search', {
    headers: { 'X-Test': 'hello' },
    params: { q: 'cat', page: 2 },
  });
  return res.data;
}

module.exports = { requestWrongUrl, getWithHeadersAndParams };

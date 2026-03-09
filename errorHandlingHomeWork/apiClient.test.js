const axios = require('axios');
jest.mock('axios');

/** @type {jest.Mock} */
const mockedGet = axios.get;

const { requestWrongUrl, getWithHeadersAndParams } = require('./apiClient');

//Test #1
test('Task 1: returns correct error message', async () => {
  mockedGet.mockRejectedValueOnce({
    response: {
      status: 404,
    },
  });

  const result = await requestWrongUrl();
  expect(result).toBe('Error 404');
});

//Test #2
test('Task 1: returns OK if request succeeds', async () => {
  mockedGet.mockResolvedValueOnce({});

  const result = await requestWrongUrl();
  expect(result).toBe('OK');
});

//Test #3
test('Task 1: returns Network error if no response', async () => {
  mockedGet.mockRejectedValueOnce({});

  const result = await requestWrongUrl();
  expect(result).toBe('Network error');
});

//Test #4
test('Task 2: sends headers and params correctly', async () => {
  mockedGet.mockResolvedValueOnce({
    data: {
      ok: true,
    },
  });

  const data = await getWithHeadersAndParams();
  expect(data).toEqual({ ok: true });

  expect(axios.get).toHaveBeenCalledWith(
    'https://test.com/search',
    expect.objectContaining({
      headers: { 'X-Test': 'hello' },
      params: { q: 'cat', page: 2 },
    }),
  );
});

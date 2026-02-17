const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API tests Home Work', () => {
  //Tets #1
  test('GET /posts - get all posts', async () => {
    //TestCase data
    const response = await axios.get(`${BASE_URL}/posts`);

    //Verifications
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  //Test #2
  test('GET /posts/1 - get one post', async () => {
    //TestCase data
    const response = await axios.get(`${BASE_URL}/posts/1`);

    //Verifications
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
    expect(response.data.title).toContain('reprehenderit');
    expect(typeof response.data.title).toBe('string');
    expect(response.data).toMatchObject({
      id: 1,
      userId: 1,
    });
  });

  //Test #3
  test('GET /users - get a list of users', async () => {
    //TestCase data
    const response = await axios.get(`${BASE_URL}/users`);

    //Verifications
    expect(response.status).toBe(200);
    expect(response.data[0]).toHaveProperty('email');
  });

  //Test #4
  test('POST /posts - create a new post', async () => {
    //TestCase data
    const newPost = {
      title: 'Test title',
      body: 'Test body',
      userId: 1,
    };
    const response = await axios.post(`${BASE_URL}/posts`, newPost);

    //Verifications
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });

  //Test #5
  test('POST /comments - create a comment', async () => {
    //TestCase data
    const newComment = {
      name: 'Tony Stark',
      email: 'ironman@starkindustries.com',
      body: 'Genius, billionaire, playboy, philanthropist.',
      postId: 1,
    };
    const response = await axios.post(`${BASE_URL}/comments`, newComment);

    //Verifications
    expect(response.status).toBe(201);
    expect(response.data.email).toBe(newComment.email);
    expect(response.data).toMatchObject(newComment);
  });

  //Test #6
  test('DELETE /posts/1 - delete first post', async () => {
    //TestCase data
    const response = await axios.delete(`${BASE_URL}/posts/1`);

    //Verifications
    expect(response.status).toBe(200);
  });

  //Test #7
  test('PUT /posts/1 - updating a post', async () => {
    //TestCase data
    const updatedPost = {
      name: 'Wanda Maximoff',
      email: 'wanda@avengers.com',
      body: 'This is chaos magic, Wanda. And that makes you the Scarlet Witch.',
      userId: 1,
    };
    const response = await axios.put(`${BASE_URL}/posts/1`, updatedPost);

    //Verifications
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject(updatedPost);
  });

  // Test #8
  test('PATCH /posts/1 - partial update of a post', async () => {
    const patchData = {
      title: 'Scarlet Witch',
    };

    const response = await axios.patch(`${BASE_URL}/posts/1`, patchData);

    expect(response.status).toBe(200);
    expect(response.data.title).toBe(patchData.title);
  });
});

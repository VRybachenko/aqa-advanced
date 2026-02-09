const TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1';
const USER_URL = 'https://jsonplaceholder.typicode.com/users/1';

//===========fetch to do (async/await)===========//
async function fetchTodoAsync() {
  const response = await fetch(TODO_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch todo: HTTP ${response.status}`);
  }

  return response.json();
}

//===========fetch user (async/await)===========//
async function fetchUserAsync() {
  const response = await fetch(USER_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch user: HTTP ${response.status}`);
  }

  return response.json();
}

//===========Promise.all and Promise.race===========//
const todoPromiseAsync = fetchTodoAsync();
const userPromiseAsync = fetchUserAsync();

const allPromiseAsync = Promise.all([todoPromiseAsync, userPromiseAsync]);
const racePromiseAsync = Promise.race([todoPromiseAsync, userPromiseAsync]);

allPromiseAsync
  .then(([todo, user]) => {
    console.log('[Async/Await + Promise.all result] :');
    console.log(todo);
    console.log(user);
  })
  .catch((err) => {
    console.error('[Async/Await + Promise.all error] :', err.message);
  });

racePromiseAsync
  .then((result) => {
    console.log('[Async/Await + Promise.race result] :');
    console.log(result);
  })
  .catch((err) => {
    console.error('[Async/Await + Promise.race error] :', err.message);
  });

export { fetchTodoAsync, fetchUserAsync };

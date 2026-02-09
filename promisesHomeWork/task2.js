const TODO_URL = "https://jsonplaceholder.typicode.com/todos/1";
const USER_URL = "https://jsonplaceholder.typicode.com/users/1";

//===========fetch to do===========//
function fetchTodo() {
    return fetch(TODO_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch todo: HTTP ${response.status}`);
            }
            return response.json();
        });
}

//===========fetch user===========//
function fetchUser() {
    return fetch(USER_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch user: HTTP ${response.status}`);
            }
            return response.json();
        });
}

//===========Promise.all and Promise.race===========//
const todoPromise = fetchTodo();
const userPromise = fetchUser();

const allPromise = Promise.all([todoPromise, userPromise]);
const racePromise = Promise.race([todoPromise, userPromise]);

allPromise
    .then(([todo, user]) => {
        console.log("[Promise.all result] :");
        console.log(todo);
        console.log(user);
    })
    .catch((err) => {
        console.error("[Promise.all error] :", err.message);
    });

racePromise
    .then((result) => {
        console.log("[Promise.race result] :");
        console.log(result);
    })
    .catch((err) => {
        console.error("[Promise.race error] :", err.message);
    });

export {fetchTodo, fetchUser};
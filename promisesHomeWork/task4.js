import {fetchTodoAsync, fetchUserAsync} from "./task3.js";

class Timer {
    showMessageLater(text, ms) {
        setTimeout(() => {
            console.log(text);
        }, ms);
    }
}

class DataLoader {
    loadTodo() {
        return fetchTodoAsync();
    }

    loadUser() {
        return fetchUserAsync();
    }
}

async function mainFunction() {
    const timer = new Timer();
    const loader = new DataLoader();

    timer.showMessageLater("Hello from Timer class!", 500);

    const todo = await loader.loadTodo();
    const user = await loader.loadUser();

    console.log("TODO:", todo);
    console.log("USER:", user);
}

mainFunction().catch((err) => {
    console.error(err);
});



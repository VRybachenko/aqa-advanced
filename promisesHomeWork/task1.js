function logAfterDelay(text, ms) {
    if (typeof text !== "string") {
        throw new TypeError("text must be a string");
    }
    if (typeof ms !== "number" || Number.isNaN(ms) || ms < 0) {
        throw new TypeError("ms must be a non-negative number");
    }

    setTimeout(() => {
        console.log(text);
    }, ms);
}

logAfterDelay("Magic is in the air at Hogwarts.", 1000);
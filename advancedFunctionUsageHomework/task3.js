function divide(numerator, denominator) {
    if (typeof numerator !== "number" || Number.isNaN(numerator)) {
        throw new Error("numerator must be a number");
    }
    if (typeof denominator !== "number" || Number.isNaN(denominator)) {
        throw new Error("denominator must be a number");
    }
    if (denominator === 0) {
        throw new Error("denominator cannot be 0");
    }

    return numerator / denominator;
}

try {
    const result = divide(10, 2);
    console.log("[Result] :", result);
} catch (error) {
    console.log("[Error] :", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    const result = divide(55, 0);
    console.log("[Result] :", result);
} catch (error) {
    console.log("[Error] :", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    const result = divide("777", 2);
    console.log("[Result] :", result);
} catch (error) {
    console.log("[Error] :", error.message);
} finally {
    console.log("Робота завершена");
}

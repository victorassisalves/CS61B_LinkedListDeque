"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const __1 = require("..");
(0, globals_1.describe)('My First Test', () => {
    (0, globals_1.test)('should first', () => {
        const text = "Victor!";
        (0, globals_1.expect)((0, __1.hello)(text).match("Hello Victor!!"));
    });
});

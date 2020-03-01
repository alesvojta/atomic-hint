"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function scoreReducer(prev, curr) {
    return {
        o: prev.o + curr.o,
        m: prev.m + curr.m,
        a: prev.a + curr.a
    };
}
exports.scoreReducer = scoreReducer;

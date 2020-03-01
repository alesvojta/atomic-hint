"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var questions_1 = require("./shared/questions");
var calculateScore_1 = require("./index/calculateScore");
function showScore(_a) {
    var o = _a.o, m = _a.m, a = _a.a;
    console.log("Atom: " + a + "; Molecule: " + m + "; Organism: " + o);
}
function default_1() {
    inquirer_1.prompt(questions_1.questions)
        .then(calculateScore_1.calculateScore)
        .then(showScore)
        .catch(console.log);
}
exports.default = default_1;

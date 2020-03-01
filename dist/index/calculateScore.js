"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scoreReducer_1 = require("../shared/scoreReducer");
var questions_1 = require("../shared/questions");
var initialScore = { o: 0, m: 0, a: 0 };
function calculateScore(answers) {
    var scores = Object.keys(answers).map(function (k) {
        var values = questions_1.questionsMap[k];
        return values(answers[k]);
    });
    return scores.reduce(scoreReducer_1.scoreReducer, initialScore);
}
exports.calculateScore = calculateScore;

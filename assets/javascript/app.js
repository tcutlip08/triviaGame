$(function () {
    var questions = {
        adding: { question: "2+2", answer: "4" },
        subtraction: { question: "5-2", answer: "3" },
        multiplication: { question: "4*6", answer: "24" },
        division: { question: "12/4", answer: "3" },
        fraction: {question: "10/4", answer: "5/2" },
        percentages: {question: "20*10%", answer: "2"}
    };
    console.log(questions)
});

function disableButton(id) {
    $(id).css("display", "none");

}
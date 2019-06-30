$(function () {
    var questions = {
        adding: {
            a100: { question: "2+2", answer: "4" },
            a200: {},
            a300: {}
        },
        subtraction: {
            s100: { question: "5-2", answer: "3" },
            s200: {},
            s300: {}
        },
        multiplication: {
            m100: { question: "4*6", answer: "24" },
            m200: {},
            m300: {}
        },
        division: {
            d100: { question: "12/4", answer: "3" },
            d200: {},
            d300: {}
        }
    };
    $(document).on("click", ".question", function () {
        displayQuestionAnswers($(this).attr("id"), questions);
    });

});




function disableButton(id) {
    $(id).css("display", "none");
}

function displayQuestionAnswers(id, questions) {

    if (id[0] === "a") {
        var i = id.length - 1;
        if (id[i] === "1") {
            $("#question").text(questions.adding.a100.question);
        }
    }
}
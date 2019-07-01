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
        displayQuestionCreateAnswers($(this).attr("id"), questions);
    });

});

// Math.floor(Math.random() * Math.floor(max));


function disableButton(id) {
    $(id).css("display", "none");
}

function displayQuestionCreateAnswers(id, questions) {

    if (id[0] === "a") {
        var i = id.length - 1;
        if (id[i] === "1") {
            $("#question").text(questions.adding.a100.question);
            let valuesIncluded = [];
            var answers = ["1", "2", "3", "4"];

            for (let i = 0; i < answers.length; i++) {
                answers[0] = parseInt(questions.adding.a100.answer);

                while (typeof answers[i] === "string") {
                    let ranNum = Math.floor(Math.random() * Math.floor(9) + 1);
                    if (!valuesIncluded.includes(ranNum)) {
                        answers[i] = ranNum;
                    }
                }

                valuesIncluded.push(answers[i]);
            }

            console.log(answers.join(", "));
            displayAnswers(answers);

            optionPicked();
        }
    }
}

function displayAnswers(answers) {
    // let i = 0;
    // while (answers.length !== 0){
    //     let answersUsed = [];

    // }

    for (let i = 0; i < answers.length; i++) {
        var usedOptions = [];
        var test = 0;
        while (test < answers.length) {
            var option = Math.floor(Math.random() * Math.floor(answers.length)).toString(8);

            if (!usedOptions.includes(option)) {
                test++;
                $("#option" + test).text(answers[option]);
                usedOptions.push(option);
            }
        }
    }
}

function determineCorrectAnswer() {
    console.log("fuck you");
}

function optionPicked() {
    $("#option1").on("click", function () {
        determineCorrectAnswer();
    });
    $("#option2").on("click", function () {
        determineCorrectAnswer();
    });
    $("#option3").on("click", function () {
        determineCorrectAnswer();
    });
    $("#option4").on("click", function () {
        determineCorrectAnswer();
    });
}
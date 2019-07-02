$(function () {
    var questions = {
        addition: {
            a100: { question: "3+2", answer: "5" },
            a200: { question: "13+8", answer: "21" },
            a300: { question: "54+67", answer: "121" }
        },
        subtraction: {
            s100: { question: "5-2", answer: "3" },
            s200: { question: "31-12", answer: "19" },
            s300: { question: "101-32", answer: "69" }
        },
        multiplication: {
            m100: { question: "4*3", answer: "12" },
            m200: { question: "12*7", answer: "84" },
            m300: { question: "13*14", answer: "182" }
        },
        division: {
            d100: { question: "12/4", answer: "3" },
            d200: { question: "104/4", answer: "26" },
            d300: { question: "608/8", answer: "76" }
        }
    };

    $(document).on("click", ".question", function () {
        enableOptionButtons();
        displayQuestionCreateAnswers($(this).attr("id"), questions);
    });

});

var totalPoints = 0;
var correct = 0;

function createRandomAnswers(id, answers, valuesIncluded, i, j) {
    while (typeof answers[j] === "string") {
        if (id[i] === "1") {
            var ranNum = Math.floor(Math.random() * Math.floor(15) + 1);
        } else if (id[i] === "2") {
            var ranNum = Math.floor(Math.random() * Math.floor(70) + 20);
        } else {
            var ranNum = Math.floor(Math.random() * Math.floor(100) + 50);
        }
        if (!valuesIncluded.includes(ranNum)) {
            answers[j] = ranNum;
        }
    }

    return answers[j];
}

function displayRandomAnswers(answers) {

    for (let i = 0; i < answers.length; i++) {
        var usedOptions = [];
        var test = 0;
        while (test < answers.length) {
            var option = Math.floor(Math.random() * Math.floor(answers.length));

            if (!usedOptions.includes(option)) {
                test++;
                $("#option" + test).text(answers[option]);
                $("#option" + test).attr("value", answers[option]);
                usedOptions.push(option);
            }
        }
    }
}

function testIfTheyAreRight(test, answers) {
    if (test === answers[0]) {
        return true;
    } else {
        return false;
    }
}

function answerClicks(answers, id) {
    $("#option1").on("click", function () {
        test = parseInt($("#option1").val());
        var bool = testIfTheyAreRight(test, answers);
        if (bool === true) {
            correct++;
            $(this).attr("class", "btn btn-success");
            disableOptionButtons();
            var points = parseInt($('button[type=button][id=' + id + ']').val());
            totalPoints = totalPoints + points;
            $("#displayPoints").text(totalPoints);
            $("#correctAnswers").text(correct);
            stop();
        } else {
            $(this).attr("class", "btn btn-danger");
            $('button[type=button][value=' + answers[0] + ']').attr("class", "btn btn-success");
            disableOptionButtons();
            stop();
        }
    });

    $("#option2").on("click", function () {
        test = parseInt($("#option2").val());
        var bool = testIfTheyAreRight(test, answers);
        if (bool === true) {
            correct++;
            $(this).attr("class", "btn btn-success");
            disableOptionButtons();
            var points = parseInt($('button[type=button][id=' + id + ']').val());
            totalPoints = totalPoints + points;
            $("#displayPoints").text(totalPoints);
            $("#correctAnswers").text(correct);
            stop();
        } else {
            $(this).attr("class", "btn btn-danger");
            $('button[type=button][value=' + answers[0] + ']').attr("class", "btn btn-success");
            disableOptionButtons();
            stop();
        }
    });

    $("#option3").on("click", function () {
        test = parseInt($("#option3").val());
        var bool = testIfTheyAreRight(test, answers);
        if (bool === true) {
            correct++;
            $(this).attr("class", "btn btn-success");
            disableOptionButtons();
            var points = parseInt($('button[type=button][id=' + id + ']').val());
            totalPoints = totalPoints + points;
            $("#displayPoints").text(totalPoints);
            $("#correctAnswers").text(correct);
            stop();
        } else {
            $(this).attr("class", "btn btn-danger");
            $('button[type=button][value=' + answers[0] + ']').attr("class", "btn btn-success");
            disableOptionButtons();
            stop();
        }
    });

    $("#option4").on("click", function () {
        test = parseInt($("#option4").val());
        var bool = testIfTheyAreRight(test, answers);
        if (bool === true) {
            correct++;
            $(this).attr("class", "btn btn-success");
            disableOptionButtons();
            var points = parseInt($('button[type=button][id=' + id + ']').val());
            totalPoints = totalPoints + points;
            $("#displayPoints").text(totalPoints);
            $("#correctAnswers").text(correct);
            stop();
        } else {
            $(this).attr("class", "btn btn-danger");
            $('button[type=button][value=' + answers[0] + ']').attr("class", "btn btn-success");
            disableOptionButtons();
            stop();
        }
    });
}

function disableOptionButtons() {
    $("#option1").prop('disabled', true);
    $("#option2").prop('disabled', true);
    $("#option3").prop('disabled', true);
    $("#option4").prop('disabled', true);

    setTimeout(function () {
        $('.modal').modal('toggle');
    }, 1000);
};

function enableOptionButtons() {
    $("#option1").prop('disabled', false);
    $("#option1").attr("class", "btn btn-secondary");
    $("#option2").prop('disabled', false);
    $("#option2").attr("class", "btn btn-secondary");
    $("#option3").prop('disabled', false);
    $("#option3").attr("class", "btn btn-secondary");
    $("#option4").prop('disabled', false);
    $("#option4").attr("class", "btn btn-secondary");
};

function disableButton(id) {
    $(id).css("display", "none");
}
var number;
var intervalId;

function run(answers) {
    number = 10;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000, answers);
}

function decrement(answers) {
    number--;
    $("#timer").html("<h3>" + number + "</h3>");

    if (number === 0) {
        stop();
        disableOptionButtons();
        $("#question").text("Times Up!");
        $('button[type=button][value=' + answers[0] + ']').attr("class", "btn btn-success");
    }
}

function stop() {
    clearInterval(intervalId);
}

function displayQuestionCreateAnswers(id, questions) {

    if (id[0] === "a") {
        var i = id.length - 1;
        var valuesIncluded = [];
        if (id[i] === "1") {
            $("#question").text(questions.addition.a100.question);
            var answers = ["1", "2", "3", "4"];

            for (var j = 0; j < answers.length; j++) {
                answers[0] = parseInt(questions.addition.a100.answer);

                valuesIncluded.push(createRandomAnswers(id, answers, valuesIncluded, i, j));
            }

            console.log(answers.join(", "));
            displayRandomAnswers(answers);
            $("#questionPoints").text("100");
            run(answers);
            answerClicks(answers, id);
        } else if (id[i] === "2") {
            $("#question").text(questions.addition.a200.question);
            var answers = ["1", "2", "3", "4"];

            for (var j = 0; j < answers.length; j++) {
                answers[0] = parseInt(questions.addition.a200.answer);

                valuesIncluded.push(createRandomAnswers(id, answers, valuesIncluded, i, j));
            }

            console.log(answers.join(", "));
            displayRandomAnswers(answers);
            $("#questionPoints").text("200");
            run(answers);
            answerClicks(answers, id);
        } else if (id[i] === "3") {
            $("#question").text(questions.addition.a300.question);
            var answers = ["1", "2", "3", "4"];

            for (var j = 0; j < answers.length; j++) {
                answers[0] = parseInt(questions.addition.a300.answer);

                valuesIncluded.push(createRandomAnswers(id, answers, valuesIncluded, i, j));
            }

            console.log(answers.join(", "));
            displayRandomAnswers(answers);
            $("#questionPoints").text("300");
            run(answers);
            answerClicks(answers, id);
        } else {
            console.log("Something Got Fucked");
        }
    } else if (id[0] === "s") {
        var i = id.length - 1;
        var valuesIncluded = [];
        if (id[i] === "1") {
            $("#question").text(questions.subtraction.s100.question);
            var answers = ["1", "2", "3", "4"];

            for (var j = 0; j < answers.length; j++) {
                answers[0] = parseInt(questions.subtraction.s100.answer);

                valuesIncluded.push(createRandomAnswers(id, answers, valuesIncluded, i, j));
            }

            console.log(answers.join(", "));
            displayRandomAnswers(answers);
            $("#questionPoints").text("100");
            run(answers);
            answerClicks(answers, id);
        } else if (id[i] === "2") {
            $("#question").text(questions.subtraction.s200.question);
            var answers = ["1", "2", "3", "4"];

            for (var j = 0; j < answers.length; j++) {
                answers[0] = parseInt(questions.subtraction.s200.answer);

                valuesIncluded.push(createRandomAnswers(id, answers, valuesIncluded, i, j));
            }

            console.log(answers.join(", "));
            displayRandomAnswers(answers);
            $("#questionPoints").text("200");
            run(answers);
            answerClicks(answers, id);
        } else if (id[i] === "3") {
            $("#question").text(questions.subtraction.s300.question);
            var answers = ["1", "2", "3", "4"];

            for (var j = 0; j < answers.length; j++) {
                answers[0] = parseInt(questions.subtraction.s300.answer);

                valuesIncluded.push(createRandomAnswers(id, answers, valuesIncluded, i, j));
            }

            console.log(answers.join(", "));
            displayRandomAnswers(answers);
            $("#questionPoints").text("300");
            run(answers);
            answerClicks(answers, id);
        } else {
            console.log("Something Got Fucked");
        }
    } else if (id[0] === "m") {
        var i = id.length - 1;
        var valuesIncluded = [];
        if (id[i] === "1") {
            $("#question").text(questions.multiplication.m100.question);
            var answers = ["1", "2", "3", "4"];

            for (var j = 0; j < answers.length; j++) {
                answers[0] = parseInt(questions.multiplication.m100.answer);

                valuesIncluded.push(createRandomAnswers(id, answers, valuesIncluded, i, j));
            }

            console.log(answers.join(", "));
            displayRandomAnswers(answers);
            $("#questionPoints").text("100");
            run(answers);
            answerClicks(answers, id);
        } else if (id[i] === "2") {
            $("#question").text(questions.multiplication.m200.question);
            var answers = ["1", "2", "3", "4"];

            for (var j = 0; j < answers.length; j++) {
                answers[0] = parseInt(questions.multiplication.m200.answer);

                valuesIncluded.push(createRandomAnswers(id, answers, valuesIncluded, i, j));
            }

            console.log(answers.join(", "));
            displayRandomAnswers(answers);
            $("#questionPoints").text("200");
            run(answers);
            answerClicks(answers, id);
        } else if (id[i] === "3") {
            $("#question").text(questions.multiplication.m300.question);
            var answers = ["1", "2", "3", "4"];

            for (var j = 0; j < answers.length; j++) {
                answers[0] = parseInt(questions.multiplication.m300.answer);

                valuesIncluded.push(createRandomAnswers(id, answers, valuesIncluded, i, j));
            }

            console.log(answers.join(", "));
            displayRandomAnswers(answers);
            $("#questionPoints").text("300");
            run(answers);
            answerClicks(answers, id);
        } else {
            console.log("Something Got Fucked");
        }
    } else if (id[0] === "d") {
        var i = id.length - 1;
        var valuesIncluded = [];
        if (id[i] === "1") {
            $("#question").text(questions.division.d100.question);
            var answers = ["1", "2", "3", "4"];

            for (var j = 0; j < answers.length; j++) {
                answers[0] = parseInt(questions.division.d100.answer);

                valuesIncluded.push(createRandomAnswers(id, answers, valuesIncluded, i, j));
            }

            console.log(answers.join(", "));
            displayRandomAnswers(answers);
            $("#questionPoints").text("100");
            run(answers);
            answerClicks(answers, id);
        } else if (id[i] === "2") {
            $("#question").text(questions.division.d200.question);
            var answers = ["1", "2", "3", "4"];

            for (var j = 0; j < answers.length; j++) {
                answers[0] = parseInt(questions.division.d200.answer);

                valuesIncluded.push(createRandomAnswers(id, answers, valuesIncluded, i, j));
            }

            console.log(answers.join(", "));
            displayRandomAnswers(answers);
            $("#questionPoints").text("200");
            run(answers);
            answerClicks(answers, id);
        } else if (id[i] === "3") {
            $("#question").text(questions.division.d300.question);
            var answers = ["1", "2", "3", "4"];

            for (var j = 0; j < answers.length; j++) {
                answers[0] = parseInt(questions.division.d300.answer);

                valuesIncluded.push(createRandomAnswers(id, answers, valuesIncluded, i, j));
            }

            console.log(answers.join(", "));
            displayRandomAnswers(answers);
            $("#questionPoints").text("300");
            run(answers);
            answerClicks(answers, id);
        } else {
            console.log("Something Got Fucked");
        }
    }
}

$("#reset").on("click", function(){
    window.location.reload();
});
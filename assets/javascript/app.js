$(function () {
    var questions = {
        adding: {
            100: { question: "2+2", answer: "4" },
            200: {},
            300: {}
        },
        subtraction: {
            100: { question: "5-2", answer: "3" },
            200: {},
            300: {}
        },
        multiplication: {
            100: { question: "4*6", answer: "24" },
            200: {},
            300: {}
        },
        division: {
            100: { question: "12/4", answer: "3" },
            200: {},
            300: {}
        }
    };



});



$("#add1").on("click", function(){
    console.log("hello");
});

function disableButton(id) {
    setTimeout(function(){
        $(id).css("display", "none");
    }, 500);
}

function displayQuestionAnswers (id){
    
}
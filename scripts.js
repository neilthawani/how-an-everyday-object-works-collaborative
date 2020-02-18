// initial setup
document.addEventListener('DOMContentLoaded', (event) => {
    window.localStorage.setItem("lessonItemCount", 0);
    document.getElementsByClassName("back-button")[0].classList.add("hidden");
    document.getElementsByClassName("back-button")[1].classList.add("hidden");
    document.getElementsByClassName("side-nav")[0].classList.add("hidden");
});

// user control

// top-level menu nav
var navigateTo = function(el) {
    var allInstructionalItems = document.getElementsByClassName("lesson-item");

    // hide menu
    allInstructionalItems[0].classList.add("hidden");

    var lessonItemCount = parseInt(window.localStorage.getItem("lessonItemCount"), 10);
    var newLessonItemCount = parseInt(el.getAttribute("data-attr-item-index"), 10);

    if (lessonItemCount < allInstructionalItems.length - 1) {
        allInstructionalItems[lessonItemCount].classList.add("hidden");
        allInstructionalItems[newLessonItemCount].classList.remove("hidden");
        window.localStorage.setItem("lessonItemCount", newLessonItemCount);
    }

    if (newLessonItemCount === 2 || newLessonItemCount === 8 || newLessonItemCount === allInstructionalItems.length - 1 &&   $("#pretest .active").length === 0 || $("#posttest .active").length === 0) {
        document.getElementsByClassName("back-button")[0].classList.add("hidden");
        document.getElementsByClassName("continue-button")[0].classList.add("hidden");
        document.getElementsByClassName("back-button")[1].classList.add("hidden");
        document.getElementsByClassName("continue-button")[1].classList.add("hidden");
        document.getElementsByClassName("side-nav")[0].classList.add("hidden");
    }

    if (newLessonItemCount === 0) {
        document.getElementsByClassName("back-button")[0].classList.add("hidden");
        document.getElementsByClassName("back-button")[1].classList.add("hidden");
        document.getElementsByClassName("side-nav")[0].classList.add("hidden");
    } else if (lessonItemCount >= 0 && lessonItemCount < allInstructionalItems.length - 1 &&
      newLessonItemCount !== 2 && newLessonItemCount !== 8 && newLessonItemCount !== allInstructionalItems.length - 1) {
        document.getElementsByClassName("back-button")[0].classList.remove("hidden");
        document.getElementsByClassName("back-button")[1].classList.remove("hidden");
        document.getElementsByClassName("side-nav")[0].classList.remove("hidden");
    }

    if (newLessonItemCount < allInstructionalItems.length) {
        allInstructionalItems[lessonItemCount].classList.add("hidden");
        allInstructionalItems[newLessonItemCount].classList.remove("hidden");
    }

    if (newLessonItemCount === allInstructionalItems.length - 1) {
        document.getElementsByClassName("back-button")[0].classList.add("hidden");
        document.getElementsByClassName("continue-button")[0].classList.add("hidden");
        document.getElementsByClassName("back-button")[1].classList.add("hidden");
        document.getElementsByClassName("continue-button")[1].classList.add("hidden");
        document.getElementsByClassName("side-nav")[0].classList.add("hidden");
    }

    if ($(".active").length > 0) {
        document.getElementsByClassName("back-button")[0].classList.remove("hidden");
        document.getElementsByClassName("continue-button")[0].classList.remove("hidden");
        document.getElementsByClassName("back-button")[1].classList.remove("hidden");
        document.getElementsByClassName("continue-button")[1].classList.remove("hidden");
        document.getElementsByClassName("side-nav")[0].classList.remove("hidden");
    }

    stopVideo();
}

// back button
var goBack = function() {
    var lessonItemValue = window.localStorage.getItem("lessonItemCount"),
        lessonItemCount = parseInt(lessonItemValue, 10),
        allInstructionalItems = document.getElementsByClassName("lesson-item"),
        newLessonItemCount = lessonItemCount - 1;

    if (lessonItemCount < allInstructionalItems.length - 1) {
        allInstructionalItems[lessonItemCount].classList.add("hidden");
        allInstructionalItems[newLessonItemCount].classList.remove("hidden");
        window.localStorage.setItem("lessonItemCount", newLessonItemCount);
    }

    if (newLessonItemCount === 0) {
        document.getElementsByClassName("back-button")[0].classList.add("hidden");
        document.getElementsByClassName("back-button")[1].classList.add("hidden");
        document.getElementsByClassName("side-nav")[0].classList.add("hidden");
    }

    stopVideo();
}

// continue button
var continueLesson = function() {
    var lessonItemValue = window.localStorage.getItem("lessonItemCount"),
        lessonItemCount = parseInt(lessonItemValue, 10),
        allInstructionalItems = document.getElementsByClassName("lesson-item"),
        newLessonItemCount = lessonItemCount + 1;

    window.localStorage.setItem("lessonItemCount", newLessonItemCount);

    if (lessonItemValue >= 0 && lessonItemValue < allInstructionalItems.length - 1) {
        document.getElementsByClassName("back-button")[0].classList.remove("hidden");
        document.getElementsByClassName("back-button")[1].classList.remove("hidden");
        document.getElementsByClassName("side-nav")[0].classList.remove("hidden");
    }

    if (newLessonItemCount === 2 || newLessonItemCount === 8 || newLessonItemCount === allInstructionalItems.length - 1) {
        document.getElementsByClassName("back-button")[0].classList.add("hidden");
        document.getElementsByClassName("continue-button")[0].classList.add("hidden");
        document.getElementsByClassName("back-button")[1].classList.add("hidden");
        document.getElementsByClassName("continue-button")[1].classList.add("hidden");
        document.getElementsByClassName("side-nav")[0].classList.add("hidden");
    }

    if (newLessonItemCount < allInstructionalItems.length) {
        allInstructionalItems[lessonItemCount].classList.add("hidden");
        allInstructionalItems[newLessonItemCount].classList.remove("hidden");
        allInstructionalItems[newLessonItemCount].classList.add("active");
    }

    if (newLessonItemCount === 2 && $("#pretest .active").length > 0) {
        document.getElementsByClassName("back-button")[0].classList.remove("hidden");
        document.getElementsByClassName("continue-button")[0].classList.remove("hidden");
        document.getElementsByClassName("back-button")[1].classList.remove("hidden");
        document.getElementsByClassName("continue-button")[1].classList.remove("hidden");
        document.getElementsByClassName("side-nav")[0].classList.remove("hidden");
    }

    stopVideo();
};

// within back/continue functions above, stops all YouTube videos
var stopVideo = function () {
    var videos = $('.youtube-video');

    for (var i = 0; i < videos.length; i++) {
        videos[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    }
};

// pre-test code
document.addEventListener('DOMContentLoaded', (event) => {
    $("#pretest-question-1 .lesson-item-answer-item").click(function() {
        var answerIndex = this.getAttribute("data-attr-answer-id");
        var cousins = this.parentElement.parentElement.children;
        var siblings = [];
        for (var i = 0; i < cousins.length; i++) {
            for (var j = 0; j < cousins[i].children.length; j++) {
                siblings.push(cousins[i].children[j]);
            }
        }

        for (var i = 0; i < siblings.length; i++) {
            if (i !== answerIndex) {
                siblings[i].classList.remove("selected");
            }
        }

        this.classList.add("selected");
    });

    $("#pretest button.submit").click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        this.classList.add("hidden");
        document.getElementsByClassName("back-button")[0].classList.remove("hidden");
        document.getElementsByClassName("continue-button")[0].classList.remove("hidden");
        document.getElementsByClassName("back-button")[1].classList.remove("hidden");
        document.getElementsByClassName("continue-button")[1].classList.remove("hidden");
        document.getElementsByClassName("side-nav")[0].classList.remove("hidden");

        // if question 1 answer is B, select correct feedback
        var selectedAnswer = $("#pretest-question-1 .selected")
        var selectedAnswer1 = selectedAnswer && selectedAnswer[0] && selectedAnswer[0].children[1].getAttribute("data-attr-answer-id");
        if (selectedAnswer1 === "1") {
            $("#pretest-question-1 .correct").removeClass("hidden");
            $("#pretest-question-1 .correct").addClass("active");
        } else {
            $("#pretest-question-1 .incorrect").removeClass("hidden");
            $("#pretest-question-1 .incorrect").addClass("active");
        }

        var pretestQuestionTwoAnswers = ["plug", "spring", "driver-pin", "key-pin", "keyway", "shearline", "case", "shafts"];
        var pretestQuestionTwoAnswersReplace = ["Plug", "Spring", "Driver Pin", "Key Pin", "Keyway", "Shearline", "Case", "Shafts"];
        var questionTwoDropdowns = $("#pretest .pretest-dropdown-question-2");

        for (var i = 0; i < questionTwoDropdowns.length; i++) {
            if (questionTwoDropdowns[i].value !== pretestQuestionTwoAnswers[i]) {
                questionTwoDropdowns[i].outerHTML = `<p><strong>Correct Answer: </strong>${pretestQuestionTwoAnswersReplace[i]}</p>`;
            } else {
                questionTwoDropdowns[i].style.backgroundColor = "#CBDBC5";
            }
        }

        $("#pretest-question-3 .question-feedback-text").removeClass("hidden");

        var pretestQuestionFourAnswers = ["keyway", "springs", "pins", "shaft", "shearline"];
        var questionFourDropdowns = $("#pretest .pretest-dropdown-question-4");

        for (var i = 0; i < questionFourDropdowns.length; i++) {
            if (questionFourDropdowns[i].value !== pretestQuestionFourAnswers[i]) {
                questionFourDropdowns[i].outerHTML = `<span>${pretestQuestionFourAnswers[i]}</span>`;
            } else {
                questionFourDropdowns[i].style.backgroundColor = "#CBDBC5";
            }
        }

        $("#pretest-question-4 .question-feedback-text").removeClass("hidden");

        var questionFiveAnswers = $("#pretest-question-5 input");
        for (var i = 0; i < questionFiveAnswers.length; i++) {
            if (i === 1 && questionFiveAnswers[i].checked) {
                $("#pretest-question-5 .correct").removeClass("hidden");
            } else {
                $("#pretest-question-5 .incorrect").removeClass("hidden");
            }
        }
    });
});

// fa-1 code
document.addEventListener('DOMContentLoaded', (event) => {
    var fa1Answers = ["plug", "keyway", "case", "driver-pin", "key-pin", "spring", "shearline", "shafts"];

    $(".fa-1-dropdown").change(function() {
        var arrayIndex = parseInt(this.id.slice(this.id.length - 1), 10) - 1;
        if ($(`#${this.id}`)[0].value === fa1Answers[arrayIndex]) {
            this.style.backgroundColor = "#CBDBC5";
        } else {
            this.style.backgroundColor = "#FF3358";
        }
    });
});

// fa-2 code
document.addEventListener('DOMContentLoaded', (event) => {
    $("#fa-2 input").change(function() {
        var feedbackBoxes = $("#fa-2 .question-feedback-text");

        for (var i = 0; i < feedbackBoxes.length; i++) {
            feedbackBoxes[i].classList.add("hidden");
        }

        if (this.value === "A") {
            $("#fa-2 .question-feedback-text.incorrect.A")[0].classList.remove("hidden")
        }

        if (this.value === "B") {
            $("#fa-2 .question-feedback-text.correct")[0].classList.remove("hidden")

        }

        if (this.value === "C") {
            $("#fa-2 .question-feedback-text.incorrect.C")[0].classList.remove("hidden")
        }
    });
});

// posttest code
document.addEventListener('DOMContentLoaded', (event) => {
    $("#posttest-question-1 .lesson-item-answer-item").click(function() {
        var answerIndex = this.getAttribute("data-attr-answer-id");
        var cousins = this.parentElement.parentElement.children;
        var siblings = [];
        for (var i = 0; i < cousins.length; i++) {
            for (var j = 0; j < cousins[i].children.length; j++) {
                siblings.push(cousins[i].children[j]);
            }
        }

        for (var i = 0; i < siblings.length; i++) {
            if (i !== answerIndex) {
                siblings[i].classList.remove("selected");
            }
        }

        this.classList.add("selected");
    });

    $("#posttest button.submit").click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.classList.add("hidden");

        // if question 1 answer is B, select correct feedback
        var selectedAnswer = $("#posttest-question-1 .selected")
        var selectedAnswer1 = selectedAnswer && selectedAnswer[0] && selectedAnswer[0].children[1].getAttribute("data-attr-answer-id");
        if (selectedAnswer1 === "1") {
            $("#posttest-question-1 .correct").removeClass("hidden");
        } else if (selectedAnswer[0]) {
            if (selectedAnswer1 === 0) {
                $("#posttest-question-1 .A").removeClass("hidden");
            }

            if (selectedAnswer1 === 2) {
                $("#posttest-question-1 .C").removeClass("hidden");
            }

            if (selectedAnswer1 === 3) {
                $("#posttest-question-1 .D").removeClass("hidden");
            }
        } else {
            $("#posttest-question-1 .no-answer").removeClass("hidden");
        }

        var posttestQuestionTwoAnswers = ["plug", "spring", "driver-pin", "key-pin", "keyway", "shearline", "case", "shafts"];
        var posttestQuestionTwoAnswersReplace = ["Plug", "Spring", "Driver Pin", "Key Pin", "Keyway", "Shearline", "Case", "Shafts"];
        var questionTwoDropdowns = $("#posttest .posttest-dropdown-question-2");

        for (var i = 0; i < questionTwoDropdowns.length; i++) {
            if (questionTwoDropdowns[i].value !== posttestQuestionTwoAnswers[i]) {
                questionTwoDropdowns[i].outerHTML = `<p><strong>Correct Answer: </strong>${posttestQuestionTwoAnswersReplace[i]}</p>`;
            } else {
                questionTwoDropdowns[i].style.backgroundColor = "#CBDBC5";
            }
        }

        var posttestQuestionThreeAnswers = ["keyway", "springs", "pins", "shaft", "shearline"];
        var questionThreeDropdowns = $("#posttest .posttest-dropdown-question-3");

        for (var i = 0; i < questionThreeDropdowns.length; i++) {
            if (questionThreeDropdowns[i].value !== posttestQuestionThreeAnswers[i]) {
                questionThreeDropdowns[i].outerHTML = `<span style="background-color: #FF3358; color: white;padding: 2px 5px;">${posttestQuestionThreeAnswers[i]}</span>`;
            } else {
                questionThreeDropdowns[i].style.backgroundColor = "#CBDBC5";
            }
        }

        var questionFourAnswers = $("#posttest-question-4 input");
        var checked = false;
        for (var i = 0; i < questionFourAnswers.length; i++) {
            if (i === 1 && questionFourAnswers[i].checked) {
                $("#posttest-question-4 .correct").removeClass("hidden");
                checked = true;
            } else if (questionFourAnswers[i].checked) {
                if (i === 0) {
                    $("#posttest-question-4 .A").removeClass("hidden");
                }

                if (i === 2) {
                    $("#posttest-question-4 .C").removeClass("hidden");
                }

                if (i === 3) {
                    $("#posttest-question-4 .D").removeClass("hidden");
                }

                checked = true;
            }
        }



        if (!checked) {
            $("#posttest-question-4 .no-answer").removeClass("hidden");
        }

        $("#posttest .end").removeClass("hidden");
    });
});

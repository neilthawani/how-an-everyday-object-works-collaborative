// document.addEventListener('DOMContentLoaded', (event) => {
//     window.localStorage.setItem("lessonItemCount", 0);
//     document.getElementsByClassName("back-button")[0].classList.add("hidden");
// });
//
// var stopVideo = function ( element ) {
//     var iframe = element.querySelector( 'iframe');
//     var video = element.querySelector( 'video' );
//     if ( iframe ) {
//         var iframeSrc = iframe.src;
//         iframe.src = iframeSrc;
//     }
//     if ( video ) {
//         video.pause();
//     }
// };
//
// var navigateTo = function(el) {
//     var allInstructionalItems = document.getElementsByClassName("lesson-item");
//
//     // hide menu
//     allInstructionalItems[0].classList.add("hidden");
//
//     var newLessonItemCount = parseInt(el.getAttribute("data-attr-item-index"), 10);
//     window.localStorage.setItem("lessonItemCount", newLessonItemCount);
//
//     allInstructionalItems[newLessonItemCount].classList.remove("hidden");
//
//     if (newLessonItemCount === allInstructionalItems.length - 1) {
//         document.getElementsByClassName("back-button")[0].classList.add("hidden");
//         document.getElementsByClassName("continue-button")[0].classList.add("hidden");
//     } else {
//         document.getElementsByClassName("back-button")[0].classList.remove("hidden");
//     }
// }
//
// var goBack = function() {
//     var lessonItemValue = window.localStorage.getItem("lessonItemCount"),
//         lessonItemCount = parseInt(lessonItemValue, 10),
//         allInstructionalItems = document.getElementsByClassName("lesson-item"),
//         newLessonItemCount = lessonItemCount - 1;
//
//     if (lessonItemCount < allInstructionalItems.length - 1) {
//         allInstructionalItems[lessonItemCount].classList.add("hidden");
//         allInstructionalItems[newLessonItemCount].classList.remove("hidden");
//         window.localStorage.setItem("lessonItemCount", newLessonItemCount);
//     }
//
//     if (newLessonItemCount === 0) {
//         document.getElementsByClassName("back-button")[0].classList.add("hidden");
//     }
//
//     // stopVideo();
// }
//
// var continueLesson = function() {
//     var lessonItemValue = window.localStorage.getItem("lessonItemCount"),
//         lessonItemCount = parseInt(lessonItemValue, 10),
//         allInstructionalItems = document.getElementsByClassName("lesson-item"),
//         newLessonItemCount = lessonItemCount + 1;
//
//     window.localStorage.setItem("lessonItemCount", newLessonItemCount);
//
//     if (lessonItemValue >= 0 && lessonItemValue < allInstructionalItems.length - 1) {
//         document.getElementsByClassName("back-button")[0].classList.remove("hidden");
//     }
//
//     if (newLessonItemCount === allInstructionalItems.length - 1) {
//         document.getElementsByClassName("back-button")[0].classList.add("hidden");
//         document.getElementsByClassName("continue-button")[0].classList.add("hidden");
//     }
//
//     if (newLessonItemCount < allInstructionalItems.length) {
//         allInstructionalItems[lessonItemCount].classList.add("hidden");
//         allInstructionalItems[newLessonItemCount].classList.remove("hidden");
//     }
//
//     // stopVideo();
// };
//
// // pre-test code
// document.addEventListener('DOMContentLoaded', (event) => {
//     $("#pretest-question-1 .lesson-item-answer-item").click(function() {
//         var answerIndex = this.getAttribute("data-attr-answer-id");
//         var cousins = this.parentElement.parentElement.children;
//         var siblings = [];
//         for (var i = 0; i < cousins.length; i++) {
//             for (var j = 0; j < cousins[i].children.length; j++) {
//                 siblings.push(cousins[i].children[j]);
//             }
//         }
//
//         for (var i = 0; i < siblings.length; i++) {
//             if (i !== answerIndex) {
//                 siblings[i].classList.remove("selected");
//             }
//         }
//
//         this.classList.add("selected");
//     });
//
//     var pretestAnswerTwoSelections = Array(8);
//     var pretestQuestionTwoAnswers = ["plug", "spring", "driver-pin", "key-pin", "keyway", "shearline", "case", "shafts"];
//
//     $("#pretest-question-2 #dropdown-1").change(function() {
//         pretestAnswerTwoSelections[0] = this.value;
//     });
//
//     $("#pretest-question-2 #dropdown-2").change(function() {
//         pretestAnswerTwoSelections[1] = this.value;
//     });
//
//     $("#pretest-question-2 #dropdown-3").change(function() {
//         pretestAnswerTwoSelections[2] = this.value;
//     });
//
//     $("#pretest-question-2 #dropdown-4").change(function() {
//         pretestAnswerTwoSelections[3] = this.value;
//     });
//
//     $("#pretest-question-2 #dropdown-5").change(function() {
//         pretestAnswerTwoSelections[4] = this.value;
//     });
//
//     $("#pretest-question-2 #dropdown-6").change(function() {
//         pretestAnswerTwoSelections[5] = this.value;
//     });
//
//     $("#pretest-question-2 #dropdown-7").change(function() {
//         pretestAnswerTwoSelections[6] = this.value;
//     });
//
//     $("#pretest-question-2 #dropdown-8").change(function() {
//         pretestAnswerTwoSelections[7] = this.value;
//     });
//
//     // Still need to do comparison between
//     // pretestAnswerTwoSelections and pretestQuestionTwoAnswers
//     // after student hits submit
//
//     var pretestAnswerFourSelections = Array(5);
//     var pretestQuestionFourAnswers = ["keyway", "springs", "pins", "shaft", "shearline"];
//
//     $("#pretest-question-4-dropdown-1").change(function() {
//         pretestAnswerFourSelections[0] = this.value;
//     });
//
//     $("#pretest-question-4-dropdown-2").change(function() {
//         pretestAnswerFourSelections[1] = this.value;
//     });
//
//     $("#pretest-question-4-dropdown-3").change(function() {
//         pretestAnswerFourSelections[2] = this.value;
//     });
//
//     $("#pretest-question-4-dropdown-4").change(function() {
//         pretestAnswerFourSelections[3] = this.value;
//     });
//
//     $("#pretest-question-4-dropdown-5").change(function() {
//         pretestAnswerFourSelections[4] = this.value;
//     });
//
//     // Still need to do comparison between
//     // pretestAnswerFourSelections and pretestQuestionFourAnswers
//     // after student hits submit
// });

$(document).ready(function(){

    $('.question').click(function(){
       $('.answer-showed').fadeOut('fast');
       $(this).find('.question-answer').addClass('answer-showed').fadeIn('fast');
       $(this).addClass('active').siblings().removeClass('active');
    });
});
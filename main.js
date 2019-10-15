// alert('Привет, мир!');
// alert('Привет, мир 2!');
// alert('Привет, мир 3!');

$('body').css('background-color', 'red');
$('.header').css('background-color', 'green');

$('.main-picture-content h1').hide();
$('.main-picture-content h1').fadeIn(5000);
$('.main-picture-content h1').fadeOut(5000);

$('.form-request .button').click(function(){
    //alert('Событие работает');
    $(".form-request-popup").css('display', 'flex').hide().fadeIn(1000);
});

$('.main-picture-content .button').click(function(){
    $(".form-request-popup").css('display', 'flex').hide().fadeIn(1000);
});

$('.form-request-popup-close').click(function(){
    $(".form-request-popup").fadeOut(1000);
    
});

//Вопрос-ответ

$('.questions-box-item').click(function(){
   // $(this) - это тот элемент на который я кликнул
   // find() - позволяет мне искать элементы внутри элемента

   if(  $(this).find('.questions-box-item-a').css('display') == 'none' ){
        $(this).find('.questions-box-item-a p').delay(500).animate({
            'left': 0,
            'opacity': 1
        }, 1000);
   }else{
        $(this).find('.questions-box-item-a p').delay(500).animate({
            'left': '-50px',
            'opacity': 0
        }, 1000);
   }

   $(this).find('.questions-box-item-a').slideToggle(500);


    // $('.questions-box-item-a').slideToggle(500);
});

//https://bit.ly/2CjldOA
$(".cards-block-item-line").click(function(){
    $(this).animate({
        'width': '180px',
        'height': '6px'
    }, 500);
});

$('.cards-block-item-pic').click(function(){
    // let height = $(this).height();

    // if( height > 200 ){
    //     $(this).animate({
    //         'height': '200px'
    //     }, 500);
    // }else{
    //     $(this).animate({
    //         'height': '240px'
    //     }, 500);     
    // }

    $(this).animate({
        'height': '240px'
    }, 500); 

});

$('.header .nav-box a').click(function(){
    $(this).animate({
        'font-size': '30px'
    }, 500);

    $(this).animate({
        'font-size': '25px'
    }, 500);
});

$(".arrow-up").click(function(){
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});

$('.nav-about-us').click(function(){
    $("html, body").animate({
        scrollTop: $('.main-title').offset().top - $('.header').outerHeight()
    }, 1000);

    console.log($('.main-title').offset().top, $('.header').height());
});


//https://bit.ly/2FOmrVC

$('form').submit(function(e){
    e.preventDefault(); //отмена отправки формы

    let errorElement = $(this).find('.error-message');
    let fioVal = $(this).find("[name='fio']").val();
    let emailVal = $(this).find("[name='email']").val();
    let phoneVal = $(this).find("[name='phone']").val();

    //'' - это пустота
    if( fioVal == '' || emailVal == '' || phoneVal == '' ){
        // .html() - позволяет добавить внутрь элемента контент, в том числе и текст и html, как хотите
        
        let errorMessage = 'Вы не заполнили поля: ';

        if( fioVal == '' ){
            $(this).find("[name='fio']").css('border-color', 'red');
            errorMessage = errorMessage + "фамилия; ";
        }else{
            $(this).find("[name='fio']").css('border-color', 'orange');   
        }

        if( emailVal == '' ){
            $(this).find("[name='email']").css('border-color', 'red');
            errorMessage = errorMessage + "email; ";
        }else{
            $(this).find("[name='email']").css('border-color', 'orange');          
        }

        if( phoneVal == '' ){
            $(this).find("[name='phone']").css('border-color', 'red');
            errorMessage = errorMessage + "телефон; ";
        }else{
            $(this).find("[name='phone']").css('border-color', 'orange');
        }

        errorElement.html(errorMessage);
        errorElement.slideDown(); 
    }else{
        alert('Все хорошо, я бы отправил форму');
        errorElement.slideUp();
        $(this).find("[name='fio']").css('border-color', 'orange');
        $(this).find("[name='email']").css('border-color', 'orange');
        $(this).find("[name='phone']").css('border-color', 'orange');
    }
});

$("[name='fio'], [name='email'], [name='phone']").keyup(function(e){
    if( e.keyCode != 27 && e.keyCode != 9 && e.keyCode !=16 && e.keyCode != 17){
        if( $(this).val().length >= 2 && $(this).val().length <= 24 ){
            $(this).css('border-color', 'orange');
        }else{
            $(this).css('border-color', 'red');
        }
    }
});

$(window).keydown(function(e){
    if( e.keyCode == 27 ){
        $('.form-request-popup').fadeOut();     
    }
});

$('.form-request-popup').click(function(){
    $(this).fadeOut();    
});

$('.form-request-popup-content').click(function(e){
    e.stopPropagation();
});
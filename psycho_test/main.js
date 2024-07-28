let radio_buttons = document.querySelectorAll('.main__inputs-item');
let title = document.querySelector('.main-title');
let main_text = document.querySelector('.main-text');
let array_text = {
    "1" : "Контролируете ли вы свои чувства во время общения?",
    "2" : "Чувствуете ли вы себя комфортно наедине с собой?",
    "3" : "Вы довольны своей жизнью?",
    "4" : "Вы любите людей (родители, друзья, вторая половинка) такими, какие они есть?",
    "5" : "Вы преодолеваете проблемы адекватными способами, не прибегая к алкоголю, курению и т.д?",
    "6" : "Вы заботитесь о своем физическом здоровье?",
    "7" : "Вы признаете себя со всеми слабостями и недостатками?",
    "8" : "У вас есть этические или моральные ценности?",
    "9" : "Умеете ли вы говорить «нет»?",
    "10" : "Вы ведете активный образ жизни?",
    "11" : "Доверяете ли вы своим друзьям/второй половинке?",
    "12" : "Любите ли вы себя?",
    "13" : "Вы умеете работать и расслабляться?",
    "14" : "Вы умеете самостоятельно принимать важные решения?",
    "15" : "Вы ощущаете себя живым и нужным человеком?",
    "16" : "Вам удается справляться с тревогой и стрессом?"
};
let array_answers = {
    "1" : '',
    "2" : '',
    "3" : '',
    "4" : '',
    "5" : '',
    "6" : '',
    "7" : '',
    "8" : '',
    "9" : '',
    "10" : '',
    "11" : '',
    "12" : '',
    "13" : '',
    "14" : '',
    "15" : '',
    "16" : '',
}
let correctly_answers_yes = [2,5,7,11,15];
let correctly_answers_no = [1,3,4,6,8,9,10,12,13,14,16];

for(let i = 0; i < radio_buttons.length; i++){
    radio_buttons[i].addEventListener('click', processing_answer, false);
}

function processing_answer(){

    let radio_button = this;

    let number = radio_button.getAttribute('data-id');

    array_answers[number] = radio_button.value;

    if(radio_button.getAttribute('data-id') == '16'){
        check_answers();
        return;
    }

    let next_number = parseInt(number) + 1;

    radio_buttons[0].setAttribute('data-id', next_number);
    radio_buttons[1].setAttribute('data-id', next_number);
    radio_button.checked = false;
    
    main_text.innerHTML = next_number + '. ' + array_text[next_number];

}
function check_answers(){

    let flag = 1;

    for(let i = 0; i < correctly_answers_yes.length; i++){

        let correctly = correctly_answers_yes[i];

        if(array_answers[correctly] != 'yes'){
            flag = 0;
            break;
        }

    }

    
    for(let i = 0; i < correctly_answers_no.length; i++){

        let correctly = correctly_answers_no[i];

        if(array_answers[correctly] != 'no'){
            flag = 0;
            break;
        }

    }


    if(flag == 1){
        main_text.innerText = 'Всё норм, ты не псих';
        return;
    }

    title.style.display = 'none';
    main_text.innerText = 'Женя , ебать ты псих нахуй !';

}
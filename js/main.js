let submitTitle = document.querySelector('.submit__title');
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let sbtn1 = document.querySelector('.s-btn1')
let sbtn2 = document.querySelector('.s-btn2')
let sbtn3 = document.querySelector('.s-btn3')
let sbtn4 = document.querySelector('.s-btn4')
let sbtn5 = document.querySelector('.s-btn5')
let submitSpan1 = document.querySelector('.submit__span1')
let submitSpan2 = document.querySelector('.submit__span2')
let submitSpan3 = document.querySelector('.submit__span3')

let count =1

sbtn1.addEventListener('click', ()=> {

    btn2.classList.add('active__text')
    submitSpan2.classList.add('active-btn' )
    btn3.classList.remove('active__text');
    submitSpan3.classList.remove('active-btn' );

    submitTitle.textContent = 'Choose Description Content';
    sbtn1.classList.add('d-none')
    sbtn2.classList.remove('d-none')
    sbtn3.classList.remove('d-none')
    sbtn4.classList.add('d-none')
    sbtn5.classList.add('d-none')
    count= 2

})
sbtn2.addEventListener('click', ()=> {

    btn1.classList.add('active__text')
    submitSpan2.classList.remove('active-btn' )
    btn3.classList.remove('active__text');
    submitSpan3.classList.remove('active-btn' );

    submitTitle.textContent = 'Choose Title Content';
    sbtn1.classList.remove('d-none')
    sbtn2.classList.add('d-none')
    sbtn3.classList.add('d-none')
    sbtn4.classList.add('d-none')
    sbtn5.classList.add('d-none')
    count= 1

})
sbtn3.addEventListener('click', ()=> {

    btn2.classList.add('active__text')
    submitSpan2.classList.add('active-btn' )
    btn3.classList.add('active__text');
    submitSpan3.classList.add('active-btn' );

    submitTitle.textContent = 'Choose Data Content';
    sbtn1.classList.add('d-none')
    sbtn2.classList.add('d-none')
    sbtn3.classList.add('d-none')
    sbtn4.classList.remove('d-none')
    sbtn5.classList.remove('d-none')
    count= 2

})
sbtn4.addEventListener('click', ()=> {

    btn2.classList.add('active__text')
    submitSpan2.classList.add('active-btn' )
    btn3.classList.remove('active__text');
    submitSpan3.classList.remove('active-btn' );

    submitTitle.textContent = 'Choose Description Content';
    sbtn1.classList.add('d-none')
    sbtn2.classList.remove('d-none')
    sbtn3.classList.remove('d-none')
    sbtn4.classList.add('d-none')
    sbtn5.classList.add('d-none')
    count= 2

})
sbtn5.addEventListener('click', ()=> {

    btn2.classList.add('active__text')
    submitSpan2.classList.add('active-btn' )
    btn3.classList.add('active__text');
    submitSpan3.classList.add('active-btn' );

    submitTitle.textContent = 'Ok, were done. Thanks for sending is your data!';
    sbtn1.classList.add('d-none')
    sbtn2.classList.add('d-none')
    sbtn3.classList.add('d-none')
    sbtn4.classList.add('d-none')
    sbtn5.classList.add('d-none')
})
btn1.addEventListener ('click', ()=> {
    btn2.classList.remove('active__text');
    submitSpan2.classList.remove('active-btn' )
    btn3.classList.remove('active__text');
    submitSpan3.classList.remove('active-btn' );

    submitTitle.textContent = 'Choose title content';
    sbtn1.classList.remove('d-none')
    sbtn2.classList.add('d-none')
    sbtn3.classList.add('d-none')
    sbtn4.classList.add('d-none')
    sbtn5.classList.add('d-none')
    count= 1
})

btn2.addEventListener ('click', ()=> {

    if(count ==1) {
        btn2.classList.add('active__text');
        submitSpan2.classList.add('active-btn' )
        btn3.classList.remove('active__text');
        submitSpan3.classList.remove('active-btn' );
    
        submitTitle.textContent = 'Choose Description content';
        sbtn1.classList.add('d-none')
        sbtn2.classList.remove('d-none')
        sbtn3.classList.remove('d-none')
        sbtn4.classList.add('d-none')
        sbtn5.classList.add('d-none')
        count= 2
    }
})

btn3.addEventListener ('click', ()=> {
    if(count ==2) {
        btn2.classList.add('active__text');
        submitSpan2.classList.add('active-btn' )
        btn3.classList.add('active__text');
        submitSpan3.classList.add('active-btn' );
    
        submitTitle.textContent = 'Choose Data content';
        sbtn1.classList.add('d-none')
        sbtn2.classList.add('d-none')
        sbtn3.classList.add('d-none')
        sbtn4.classList.remove('d-none')
        sbtn5.classList.remove('d-none')
        count= 1
    }

})
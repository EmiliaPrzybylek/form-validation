'use strict';

function validate(e) {
    e.preventDefault();

    const name = this.name.value;
    const mail = this.mail.value;
    const mail2 = this.mail2.value;
    const city = this.city.selectedIndex;
    const rodo = this.rodo.checked;

    const placeError = document.querySelector('#errors');
    placeError.innerHTML = '';
    let errors = [];

    const namePattern = /^[A-ZŁŚĆŻ]+[a-złśćżź]{2,20}$/;
    const testName = namePattern.test(name);

    if(!testName) 
        
        errors.push('Imię niepoprawne');
        
    const mailPattern = /^[a-z\d]+[\w.-]*@[a-z\d]+[a-z\d-]*\.[a-z]{2,4}$/i;
    const testMail = mailPattern.test(mail);

    if(!testMail)
        errors.push('Niepoprawny format e-mail');

    if(mail != mail2)
        errors.push('Maile różnią się od siebie');

    if(!city)
        errors.push('Wybierz miasto');

    if(!rodo)
        errors.push('Zaakceptuj RODO')

    if(errors.length > 0) {
        placeError.innerHTML = errors.join('<br>');
    } 

    const resetBtn = document.querySelector('.reset')

    resetBtn.addEventListener('click', e => {
        e.preventDefault();
    
        [name, mail, mail2, city, rodo].forEach(el);
        el.value = '';
    })
    
} 

const form = document.querySelector('form');
form.addEventListener('submit', validate);




// zrobić czyszczenie formularza i kmunikat, że dane zostały wysłane

let article1 = document.querySelector('.article1');
let article2 = document.querySelector('.article2');
let article3 = document.querySelector('.article3');

let writeus = document.querySelector('.map-button');
let popup = document.querySelector('.modal');
let closeBut = document.querySelector('.modal-close');
let form = popup.querySelector('form');
let surname = popup.querySelector('.feedback-form input[name=surname]');
let email = popup.querySelector('.feedback-form input[name=email]');
let letter = popup.querySelector('.feedback-form textarea[name=letter]');
let grey = '2px solid #e1e1e1';

let isStorageSupport = true;
let storSurname = '';
let storEmail = '';

try {
    storSurname = localStorage.getItem('surname');
    storEmail = localStorage.getItem('email');
}   catch (err)  {
    isStorageSupport = false;
}

writeus.addEventListener('click', function(evt)  {
    evt.preventDefault();
    if (popup.classList.contains('modal-exit'))  {
        popup.classList.remove('modal-exit'); 
    }
    if (popup.classList.contains('modal-error'))  {
        popup.classList.remove('modal-error'); 
    }
    popup.classList.remove('element-hide');
    popup.classList.add('element-show');
    popup.classList.add('modal-animation');
    surname.style.border = grey;
    letter.style.border = grey;
    email.style.border = grey;
    if (storSurname)  {
        surname.value = storSurname;
        email.value = storEmail;
    }
});

closeBut.addEventListener('click', function(evt)  {
    evt.preventDefault();
    popup.classList.add('modal-exit');
    setTimeout(function(){
        popup.classList.remove('modal-animation');
        popup.classList.remove('element-show');
        popup.classList.add('element-hide');
        surname.value = '';
        email.value = ''
        letter.value = '';
        }, 500);
});

window.addEventListener('keydown', function(evt)  {
    if (evt.keyCode == 27)  {
        evt.preventDefault();
        popup.classList.add('modal-exit');
        setTimeout(function(){
            popup.classList.remove('modal-animation');
            popup.classList.remove('element-show');
            popup.classList.add('element-hide');
            surname.value = '';
            email.value = ''
            letter.value = '';
          }, 500);
    }
    if (surname.value)  {
        surname.style.border = grey;
    }
    if (letter.value)  {
        letter.style.border = grey;
    }
});

form.addEventListener('submit', function(evt)  {
    if (!surname.value || !letter.value || !email.value )  {
    evt.preventDefault();
    surname.style.border = grey;
    letter.style.border =  grey;
        if (!surname.value)  {
        surname.style.border = '2px solid #e74246';
        }
        if (!letter.value)  {
        letter.style.border = '2px solid #e74246';
        }
        if (!email.value)  {
            email.style.border = '2px solid #e74246';
            }
        popup.classList.remove('modal-error');
        popup.offsetWidth = popup.offsetWidth; 
        popup.classList.add('modal-error');
        }
    else  {
        if (isStorageSupport)  {
        localStorage.setItem('surname', surname.value);
        localStorage.setItem('email', email.value);
        }
    }
});

function currentSlide(n)  {
    if (n === 1)
    {
        article1.style.display = 'block';
        article2.style.display = 'none';
        article3.style.display = 'none';
    }
    if (n === 2)
    {
        article1.style.display = 'none';
        article2.style.display = 'block';
        article3.style.display = 'none';
    }
    if (n === 3)
    {
        article1.style.display = 'none';
        article2.style.display = 'none';
        article3.style.display = 'block';
    }
}
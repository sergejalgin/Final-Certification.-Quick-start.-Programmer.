
document.querySelector('.form_auth-btn').onclick = () => {
    const userPassword1 = document.querySelector("#password1").value;
    const userPassword2 = document.querySelector("#password2").value;

    if (userPassword1 == "" || userPassword2 == "") {
        document.querySelector('#password1').style = "border: 1px solid red";
        document.querySelector('#password2').style = "border: 1px solid red";
    } else if (userPassword1 != userPassword2) {
        document.querySelector('#password1').style = "border: 1px solid red";
        document.querySelector('#password2').style = "border: 1px solid red";
        return false;
    } else if (userPassword1 == userPassword2) {
        document.querySelector('#password1').style = "border: 1px solid green";
        document.querySelector('#password2').style = "border: 1px solid green";
    }
    return true;
}


/*
    1. При наведении на любую из звезд, данной звезде должен ставиться класс
    golden, также такой класс должен ставиться всем звездам до нее слева.
    */
document.querySelector('.rating-area')
    .addEventListener('mouseover', e => {
        if (!e.target.classList.contains('fas')) {
            return;
        }
        let star = e.target;
        do {
            star.classList.add('golden');
            star = star.previousElementSibling;
        } while (star);
    });

/*
2. Когда мы уводим курсор мыши от звезды, все поставленные классы из первого
задания должны быть удалены.
 */
document.querySelector('.rating-area').addEventListener('mouseout', e => {
    if (!e.target.classList.contains('fas')) {
        return;
    }
    let star = e.target;
    do {
        star.classList.remove('golden');
        star = star.previousElementSibling;
    } while (star);
});


/*
3. Когда мы переводим мышь от одной звезды к другой, у нас могут мигать
звезды (временно могут становиться черными). Убрать это.
*/
document.querySelector('.rating-area').childNodes.forEach(node => {
    if (node.nodeName === '#text') {
        node.remove();
    }
});



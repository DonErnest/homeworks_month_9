var container = $('#container');



function generator(){
    let randomNumber = Math.floor(Math.random()*21);
    return randomNumber
}

var intervalId = setInterval(function () {container.append(`<div class="element">${generator()}</div>`)}, 15000);
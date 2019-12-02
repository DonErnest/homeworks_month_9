var container = $('.container');
var actions = ['add', 'substract', 'multiply', 'divide'];

let answerBlock = $(document.createElement('p'));
answerBlock.text('Жепа');

// form.attr('method', 'POST');
// form.attr('action', `${action}`);

container.append('<input type="number" id="A" name="A">');
container.append('<input type="text" id="B" name="B">');
for (let i = 0; i < actions.length; i++) {
    $(container).append(`<button id="${actions[i]}">${actions[i]}</button>`)
}
// container.append(form);
container.append(answerBlock);

for (let i = 0; i < actions.length; i++) {
    $(`#${actions[i]}`).click(function () {
        $.ajax({
            url: `http://localhost:8000/${actions[i]}/`,
            method: 'post',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({A: $("#A").val(), B: $("#B").val()}),
            success: function(response) {
                console.log(response);
                answerBlock.text(response['answer']);
                answerBlock.removeClass('answer_error')
                answerBlock.addClass('answer_success')
                },
            error: function(response) {
                console.log(response);
                answerBlock.text($.parseJSON(response.responseText).error);
                answerBlock.removeClass('answer_success')
                answerBlock.addClass('answer_error')
            },
        })
    })
}

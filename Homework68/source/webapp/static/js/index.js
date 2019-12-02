var container = $('.container');
var actions = ['add', 'substract', 'multiply', 'divide'];



let inputGroup = $(document.createElement('div'))
inputGroup.addClass('input-group mb-3')
inputGroup.append('<div class="input-group-prepend"><span class="input-group-text">Number A and B</span></div>');
container.append(inputGroup)

inputGroup.append('<input type="number" class="form-control" id="A" name="A">');
inputGroup.append('<input type="number" class="form-control" id="B" name="B">');

let buttonGroup = $(document.createElement('div'))
buttonGroup.addClass('btn-group')
container.append(buttonGroup)

for (let i = 0; i < actions.length; i++) {
    buttonGroup.append(`<button class="btn btn-success" id="${actions[i]}">${actions[i]}</button>`)
}

let answerBlock = $(document.createElement('div'));
answerBlock.addClass('ml-1 pl-2 mt-5 row answer_block align-items-center justify-content-center')
answerBlock.append('<p class="mt-3 mb-3">Answer is </p>')
container.append(answerBlock)

let answerText = $(document.createElement('p'));
answerText.addClass("ml-1 mt-3 mb-3")
answerText.text('дырка от бублика');
answerBlock.append(answerText);

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
                answerText.text(response['answer']);
                answerBlock.removeClass('answer_block_error');
                answerBlock.addClass('answer_block_success');
                },
            error: function(response) {
                console.log(response);
                answerText.text($.parseJSON(response.responseText).error);
                answerBlock.removeClass('answer_block_success');
                answerBlock.addClass('answer_block_error');
            },
        })
    })
}

$(() => {
    $('#askButton').click(() => {
        const question = $('#question').val();
        if (question.trim() === "") {
            alert("Please enter a question");
            return;
        }

        $.get('/8ball', (answer) => {
            $('#question').val(answer);
        });
    });
});

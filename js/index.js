$(function () {

    var minhaVariavel = 'testando';
    var objecto= {'ola':'ola','mundo':'mundo'};
    console.table(objecto);


    $('.submit').on('click',function (event) {
        var dadosDoFOrmulario={
            nome:$('.nome').val(),
            idade:$('.idade').val(),
            morada:$('.morada').val(),
            telefone:$('.telefone').val(),
            maiorMedo:$('.maiorMedo').val()
        };

        $.ajax({
            url:'server.php',
            data:dadosDoFOrmulario,
            type:'get'
        }).done(function (resposta) {
            alert(resposta);
        });
    });
});

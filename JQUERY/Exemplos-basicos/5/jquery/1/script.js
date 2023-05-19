function testeAJAX(){
    /*
    var n1 = $("#num1").val();
    var n2 = $("#num2").val();
    */
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');

    var n1 = Number(num1.value)
    var n2 = Number(num2.value)

    $.get("soma.php", {val1: n1, val2: n2})
        .done(function(data ) {
            //console.log(`o resultado = ${data}`)
            $("#result").html(data);
        });
}
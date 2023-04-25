function acharMenor() {
    var menor = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if(arguments[i] < menor){
            menor = arguments[i]
        }
      //soma += arguments[i];
    }
    return menor;
  }
  
  var arr = [1, 3, 7, 4, 5, 6];
  console.log(acharMenor.apply(null, arr)); // dá 26!
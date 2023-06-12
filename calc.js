function add(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = a+b;
    document.getElementById("message").innerHTML="RESULT IS :- "+c;

}

function subtract(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = a-b;
    document.getElementById("message").innerHTML="RESULT IS :- "+c;

}

function multiply(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = a*b;
    document.getElementById("message").innerHTML="RESULT IS :- "+c;

}

function divide(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = a/b;
    document.getElementById("message").innerHTML="RESULT IS :- "+c;

}


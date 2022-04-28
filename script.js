console.log("hello world");

function btn1Click() {
    var t1 = txt1.value;
    var t2 = txt2.value;
    var t3 = txt3.value;
    var t4 = txt4.value;
    var t5 = txt5.value;
    var t6 = txt6.value;
    var t7 = txt7.value;
    var t8 = txt8.value;
    var t9 = txt9.value;
    lblmaths.innerHTML = parseInt(t1);
    lblss.innerHTML = parseInt(t2) + parseInt(t3) + parseInt(t4);
    lbllang.innerHTML = parseInt(t8) + parseInt(t9);
    lblmisc.innerHTML = parseInt(t5) + parseInt(t6) + parseInt(t7);
}

 function btn2Click() {
    document.getElementById('lblgtotal').innerHTML = parseInt(lblmaths.innerHTML) + parseInt(lblss.innerHTML) + parseInt(lbllang.innerHTML) + parseInt(lblmisc.innerHTML);
}
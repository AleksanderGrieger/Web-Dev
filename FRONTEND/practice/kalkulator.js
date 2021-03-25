function insert(num){
    document.form.textview.value += num
}

function equal(){
    let exp = document.form.textview.value
    if(exp){
        document.form.textview.value = eval(exp)
    }
}

function clean(){
    document.form.textview.value = "";
}

function negativ(){
    let exp = document.form.textview.value
    exp = (-exp)
    document.form.textview.value = (exp)
}
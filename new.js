function vote(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var result = document.getElementById("result");
    if(age >= 18)
    {
        result.innerHTML = "Eligible";
    }
    else
    {
        result.innerHTML = "You are not eligible!";
    }
}

let allow = true;

function required(selector) {
    const inputElement = document.querySelector(selector);
    inputElement.addEventListener("focus",function(){
        this.parentElement.querySelector(".mess-err").classList.remove("block");
        this.parentElement.querySelector(".mess-err").innerText = "";
        this.classList.remove("shadow-err");

    })
    inputElement.addEventListener("blur", function (e) {
        let value = inputElement.value;
        rule(this,"Không được bỏ trống",value);
    })

}

function isOu(selector){
    let inputElement = document.querySelector(selector);
    inputElement.addEventListener("blur",function(){
        let isOu = false;
        if(inputElement.value.search("ou.edu.vn") != -1)
            isOu = true;
            console.log(inputElement.value.search("ou.edu.vn"));
        rule(this,"Không phải mail Ou",isOu);
    });
}

function rule(selector,text,bl) {
    if (bl) {
        selector.parentElement.querySelector(".mess-err").classList.remove("block");
        selector.parentElement.querySelector(".mess-err").innerText = "";
        selector.classList.remove("shadow-err");
    } else {
        selector.parentElement.querySelector(".mess-err").classList.add("block");
        selector.parentElement.querySelector(".mess-err").innerText = text;
        selector.classList.add("shadow-err");
    }
}

// set button next

var buttonNext  = document.querySelector(".next");
buttonNext.addEventListener("click",function(){
    allow = kt(document.querySelectorAll(".n1"));
    if(allow){
        document.querySelector(".info1").style.display = "none";
        document.querySelector(".info2").style.display = "block";
        console.log(document.querySelector(".info2"));
        document.querySelector(".next").style.display = "none";
        document.querySelector(".submit").style.display = "block";
        
        
    }
});

console.log(document.querySelectorAll("input[type ='text']"));
let formElement = document.querySelector("form");
console.log(formElement);
formElement.onsubmit = function(e){
    allow = kt(document.querySelectorAll("input[type = 'text']"));
    return allow;
}


// kiem tra gia tri
function kt(selector){
    for (let index = 0; index < selector.length; index++) {
        if(!selector[index].value)
        return false;
    }
    return true;
}


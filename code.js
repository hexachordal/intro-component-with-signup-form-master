console.clear();


let formItem = document.getElementsByClassName('form-item');
let button = document.getElementsByClassName('button');
let invalid = document.getElementsByClassName('invalid');

    formItem[0].onkeypress= function typing(){
        if(invalid[0].style.color === "rgb(255, 122, 122)"){
            invalid[0].style.color = "white";
            formItem[0].style.backgroundImage = "none"
        }
    }

    formItem[1].onkeypress= function typing(){
        if(invalid[1].style.color === "rgb(255, 122, 122)"){
            invalid[1].style.color = "white";
            formItem[1].style.backgroundImage = "none"
        }
    }

    button[0].onclick= function error(){
        if(formItem[0].value === ""){
            invalid[0].style.color = "rgb(255, 122, 122)";
            formItem[0].style.backgroundImage = `url("images/icon-error.svg")`;
        }

        if(formItem[1].value === ""){
            invalid[1].style.color = "rgb(255, 122, 122)";
            formItem[1].style.backgroundImage = `url("images/icon-error.svg")`;
        }

    }

    




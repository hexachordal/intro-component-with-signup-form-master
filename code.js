console.clear();


let formItem = document.getElementsByClassName('form-item');
let button = document.getElementsByClassName('button');
let invalid = document.getElementsByClassName('invalid');
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



    formItem[0].onchange= function valid(){
        if(invalid[0].style.color === "rgb(255, 122, 122)"){
            invalid[0].style.color = "white";
            formItem[0].style.backgroundImage = "none";
            formItem[0].style.border= "1px solid hsl(246, 25%, 77%)";
            
        }
    }

    formItem[1].onchange= function valid(){
        if(invalid[1].style.color === "rgb(255, 122, 122)"){
            invalid[1].style.color = "white";
            formItem[1].style.backgroundImage = "none"
            formItem[1].style.border= "1px solid hsl(246, 25%, 77%)";
        }
    }

    formItem[2].onchange= function valid(){
        if(invalid[2].style.color === "rgb(255, 122, 122)"){
            invalid[2].style.color = "white";
            formItem[2].style.backgroundImage = "none"
            formItem[2].style.border= "1px solid hsl(246, 25%, 77%)";
        }
    }

    formItem[3].onchange= function valid(){
        if(invalid[3].style.color === "rgb(255, 122, 122)"){
            invalid[3].style.color = "white";
            formItem[3].style.backgroundImage = "none"
            formItem[3].style.border= "1px solid hsl(246, 25%, 77%)";
        }
    }

    button[0].onclick= function error(){
        

        if(formItem[0].value === ""){
            invalid[0].style.color = "rgb(255, 122, 122)";
            formItem[0].style.backgroundImage = `url("images/icon-error.svg")`;
            formItem[0].style.border= "1px solid rgb(255, 122, 122)";
            
        }

        if(formItem[1].value === ""){
            invalid[1].style.color = "rgb(255, 122, 122)";
            formItem[1].style.backgroundImage = `url("images/icon-error.svg")`;
            formItem[1].style.border= "1px solid rgb(255, 122, 122)";
        }

        if(regex.test(formItem[2].value)=== false){
            invalid[2].style.color = "rgb(255, 122, 122)";
            formItem[2].style.backgroundImage = `url("images/icon-error.svg")`;
            formItem[2].style.border= "1px solid rgb(255, 122, 122)";
        } 

        if(formItem[3].value === ""){
            invalid[3].style.color = "rgb(255, 122, 122)";
            formItem[3].style.backgroundImage = `url("images/icon-error.svg")`;
            formItem[3].style.border= "1px solid rgb(255, 122, 122)";
        }

        if((invalid[0].style.color === "white" || invalid[0].style.color === "") && (invalid[1].style.color === "white" || invalid[1].style.color === "") && (invalid[2].style.color === "white" || invalid[2].style.color === "") && (invalid[3].style.color === "white" || invalid[3].style.color === "")){
            alert(`Congratulations ${formItem[0].value}!! Your free trial is on the way`);
            formItem[0].value = "";
            formItem[1].value = "";
            formItem[2].value = "";
            formItem[3].value = "";
        }
        
        
    }

    




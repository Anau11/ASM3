'use strict'
//Global Variable
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const btnSubmit = document.querySelector('.submit');
var getdiv =null;


//Loading Website
function OnPageLoading(){
    Initial();
}

//CheckEMAIL
function InputEmail(){
    var stringemail = document.getElementById('femail').value.toLowerCase().trim();
    if(stringemail.match(regex)){
        document.querySelector('.input').style.display='none';
        document.querySelector('.mt-40').style.visibility ='visible';
        document.querySelector('.icon').style.visibility ='visible';
    } 
    else document.getElementById("msg").innerHTML="Email không chính xác, hãy nhập lại";
}


//Loading
function Initial(){
    getdiv= document.querySelectorAll('.div');
    InitialBtnView();
    
}

//to remove divContent
function InitialBtnView(){
    
    var arr = document.querySelectorAll('.view');

    document.querySelector(".titlefavou").style.visibility ="hidden";
    for(let i = 0; i < getdiv.length;i++){
        getdiv[i].childNodes[3].style.visibility = 'hidden';
        arr[i].style.color="white";
        //viewless
        arr[i].addEventListener('click',function(){
            if(this.innerHTML==="Viewless"){
                getdiv[i].childNodes[3].style.visibility = 'hidden';
                this.innerHTML ="Viewmore";
            }
            //viewmore
            else{
                getdiv[i].childNodes[3].style.visibility = 'visible';
                this.innerHTML="Viewless";
            }
        })

        
    }
}



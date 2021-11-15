window.onscroll=function(){
    scroll=document.documentElement.scrollTop;

    header=document.getElementById("header");
    
    if(scroll>20){
        header.classList.add('nav_mod');
    }
    else if(scroll<20){
        header.classList.remove('nav_mod')
    }
}





document.getElementById('boton_menu').addEventListener("click",mostrar_menu);


menu=body=document.getElementById("header");
body=document.getElementById("container_all");
nav=document.getElementById("nav");

function mostrar_menu(){

    menu.classList.toggle("move_content");
    body.classList.toggle("container_all");
    nav.classList.toggle("move_nav");
}



window.addEventListener("resize", function(){


    if(window.innerWidth>760){

        menu.classList.remove("move_content");
        body.classList.remove("move_content");
        nav.classList.remove("move_nav");
    }
})


var btn_wts=document.querySelector("#wtsicon");
var form=document.querySelector("#form");
var sendbtn=document.querySelector("#sendbtn");

btn_wts.addEventListener("click", function(){
    form.classList.toggle("entrar_y_salir")
})

sendbtn.addEventListener("click", enviarMensaje)

function enviarMensaje(){
    var inputName=document.querySelector(".inputwts").value
    var texttareaMensaje=document.querySelector(".texttarea").value
    let url ="https://api.whatsapp.com/send?phone=50664568711&text="+inputName+"%0a"+texttareaMensaje+""

    window.open(url);
}
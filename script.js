//Responsaive design
function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }


let k=1;
  function ajoutMarge(){
    if(k%2!=0){

    document.getElementsByClassName("slider-container")[0].style.marginTop="145px";
    document.getElementsByClassName("slider-container")[0].style.transition="all ease 0.5s";
    document.getElementsByClassName("main_pages")[0].style. height="100px"
    for(let h=0;h<document.getElementsByClassName("lien").length;h++){
        document.getElementsByClassName("lien")[h].style.transition="all ease 0.5s";
    }
    }else{
        document.getElementsByClassName("slider-container")[0].style.marginTop="0px";
    }
    k++;
  }
  


var slide = new Array("images/fond1.png","images/fond2.png","images/fond3.png","images/fond4.png");

var numero = 0;
function ChangeSlide(sens) {
 numero = numero + sens;

 if (numero < 0)
 numero = slide.length - 1;
 if (numero > slide.length - 1)
 numero = 0;
 document.getElementById("slide").src = slide[numero];
}


setInterval("ChangeSlide(1)", 4000);





//Partie Contacts ou formulaire
let person = {}
let Personjson =[];

function envoyer(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    person={
        name:name,
        email:email,
        message:message
    }
    Personjson.push(person);
    console.log(Personjson);
    //document.getElementById("displayer").innerHTML=Personjson.join();
    var div = document.createElement("div");
    for (var i = 0; i < Personjson.length; i++) {
        
        div.innerHTML = 'Name: ' + Personjson[i].name + '<br> Email: ' + Personjson[i].email +'<br> Message:'+Personjson[i].message;+'<br><br>'
        document.getElementById("displayer").appendChild(div);
}
     //Vider les champs après l'envoi de donnée
     name = document.getElementById("name").value="";
     email = document.getElementById("email").value=""
     message = document.getElementById("message").value="";
}



//Partie Footer
function changeTheme(){
let selectedValue;
selectedValue = document.getElementById("cars").value;
console.log(selectedValue);
switch(selectedValue){
    case "white":
        light();
        break;
    case "dark":
        dark()
        break;
    default:
        console.log("Rien a changé!");
        break;
}
}

function light(){
    document.querySelector("body").style.backgroundColor="white";
    document.getElementsByClassName("container")[0].style.backgroundColor="white";
    document.getElementsByClassName("footer")[0].style.backgroundColor="silver";
    document.getElementsByClassName("active")[0].style.color="black";

}

function dark(){
    document.querySelector("body").style.backgroundColor="black";
    document.getElementsByClassName("container")[0].style.backgroundColor="black";
    document.getElementsByClassName("footer")[0].style.backgroundColor="gray";
    //les liens
    for(let i=0;i<document.getElementsByClassName("lien").length;i++){
        document.getElementsByClassName("lien")[i].style.color="white";
        document.getElementsByClassName("active")[0].style.color="white";
    }
    //Les labels
    for(let j=0;j<document.querySelectorAll("label").length;j++){
        document.document.querySelectorAll("label")[i].style.color="white";
    }

   
   
}

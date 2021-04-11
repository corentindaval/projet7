
async function creerCompte(event){
    event.preventDefault();
let identifiant =document.getElementById("identifiant");
let mdp=document.getElementById("mdp");

let request={
    method:"POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        identifiant:identifiant.value,
        mdp:mdp.value
    })
};
const result=await fetch("http://localhost:3000/api/user/signup",request);
const data=await result.json();
//console.log(data);
if(data.token!=null & data.userId!=null){
    localStorage.setItem("token",data.token);
    localStorage.setItem("userId",data.userId);
    localStorage.setItem("droituser",data.droituser);
    localStorage.setItem("nomuser",data.nomuser);
    location.href="./accueil.html";
    }else if(data.error!=null){
    alert(data.error);
    }
}
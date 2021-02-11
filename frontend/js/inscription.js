
async function creerCompte(event){
    event.preventDefault();
let identifiant =document.getElementById("identifiant");
let mdp=document.getElementById("mdp");
alert(identifiant.value);
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
console.log(data);

}
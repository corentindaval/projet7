
async function creerforum(event){
    event.preventDefault();
    let titre =document.getElementById("titre");
 //alert(titre.value);
    
    let request={
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization':localStorage.getItem("token")
        },
        body:JSON.stringify({
            titre:titre.value,
            idcreateur:localStorage.getItem("userId")
        })
    };
    const result=await fetch("http://localhost:3000/api/forum/nvforum",request);
    const data=await result.json();
    console.log(data);
    location.href="./accueil.html";

}

async function creerlistforum(){
   
 //alert(titre.value);
    
    let request={
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            
        })
    };
    const result=await fetch("http://localhost:3000/api/forum/listforum",request);
    const data=await result.json();
    console.log(data);

	let tab = document.getElementById("affichage");
		const defcol=" <tr><td>Titre</td><td>Date de création</td></tr>";
		let buildtab="";
		for(let forum of data){
            if(forum.idcreateur==localStorage.getItem("userId")||localStorage.getItem("droituser")=="admin"){
			let ligneprod="<tr><td><a href='post.html?id="+forum.id+"'>"+forum.titre+"</a></td><td>"+forum.date_de_creation_format+"</td><td><input type='submit' id='"+forum.id+"' class='bsupr'  onclick='suprforum(event,"+forum.id+")' value='x'></input></td></tr>";
            buildtab=buildtab+ligneprod;
            }else{
                let ligneprod="<tr><td><a href='post.html?id="+forum.id+"'>"+forum.titre+"</a></td><td>"+forum.date_de_creation_format+"</td></tr>";
            buildtab=buildtab+ligneprod;
            }
		}
		let buildf=defcol+buildtab;
		tab.innerHTML=buildf;
    let affusercon=document.getElementById("usercon");
    let buildaff="<p>Bonjour : "+localStorage.getItem("nomuser")+"</p>";
   // affusercon.innerHTML=buildaff;
}

creerlistforum();

async function suprforum(event,id){
    event.preventDefault();
    let titre =document.getElementById("titre");
 //alert(titre.value);
    
    let request={
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization':localStorage.getItem("token")
        },
        body:JSON.stringify({
            id:id,
            userid:localStorage.getItem("userId")
        })
    };
    const result=await fetch("http://localhost:3000/api/forum/suprforum",request);
    const data=await result.json();
    console.log(data);
    location.href="./accueil.html";

}
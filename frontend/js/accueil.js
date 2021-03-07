
async function creerforum(event){
    event.preventDefault();
    let titre =document.getElementById("titre");
 //alert(titre.value);
    
    let request={
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            titre:titre.value
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
		const defcol=" <tr><td>titre</td><td>date de création</td><td>date du dernier message</td></tr>";
		let buildtab="";
		for(let forum of data){
			let ligneprod="<tr><td><a href='post.html?id="+forum.id+"'>"+forum.titre+"</a></td><td>"+forum.date_de_creation_format+"</td><td>"+forum.date_dernier_post+"</td><td><input type='submit' class='bsupr'  onclick='suprforum(event)' value='x'></input></td></tr>";
			buildtab=buildtab+ligneprod;
		}
		let buildf=defcol+buildtab;
		tab.innerHTML=buildf;


}

creerlistforum();

async function suprforum(event){
    event.preventDefault();
    let titre =document.getElementById("titre");
 //alert(titre.value);
    
    let request={
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            titre:titre.value
        })
    };
    const result=await fetch("http://localhost:3000/api/forum/suprforum",request);
    const data=await result.json();
    console.log(data);
    location.href="./accueil.html";

}
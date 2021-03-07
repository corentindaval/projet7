
async function creerpost(event){
    event.preventDefault();
    let image =document.getElementById("image");
    let contenu =document.getElementById("contenu");
 //alert(titre.value);
    
    let request={
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            image:image.value,
            contenu=contenu.value
        })
    };
    const result=await fetch("http://localhost:3000/api/forum/nvpost",request);
    const data=await result.json();
    console.log(data);
    location.href="./accueil.html";

}

async function creerlistpost(){
   
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
    const result=await fetch("http://localhost:3000/api/forum/listpost",request);
    const data=await result.json();
    console.log(data);

	let tab = document.getElementById("affichage");
		let buildtab="";
		for(let post of data){
            if(post.media!=null){

                let ligneprod="<div class='message'><img></img><p>"+post.contenu+"</p><input type='submit' class='bsupr'  onclick='suprpost(event)' value='x'></input></div>";
            }else{
                let ligneprod="<div class='message'><p>"+post.contenu+"</p><input type='submit' class='bsupr'  onclick='suprpost(event)' value='x'></input></div>";
            }
		buildtab=buildtab+ligneprod;
		}
		let buildf=buildtab;
		tab.innerHTML=buildf;


}
creerlistpost();

async function suprpost(event){
    event.preventDefault();
    let image =document.getElementById("image");
    let contenu =document.getElementById("contenu");
 //alert(titre.value);
    
    let request={
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            image:image.value,
            contenu=contenu.value
        })
    };
    const result=await fetch("http://localhost:3000/api/forum/nvpost",request);
    const data=await result.json();
    console.log(data);
    location.href="./accueil.html";

}
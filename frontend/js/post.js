const urlparam =new URLSearchParams(window.location.search);
console.log(urlparam.get("id"));


async function creerpost(event){
    event.preventDefault();
    let image =document.getElementById("image");
    let Contenu =document.getElementById("contenu");
  
 //alert(titre.value);
    const fdata=new FormData();
    if(image.value!=""){
    fdata.append("image",image.files[0],image.value);
    }else{
    fdata.set("image",null);
    }
    fdata.set("contenu",Contenu.value);
    fdata.set("idforum",urlparam.get("id"));
    let request={
        method:"POST",
        headers: {
            'Accept': 'application/json',
           // 'Content-Type': 'multipart/form-data',
            'authorization':localStorage.getItem("token")
        },
       body:fdata
    };
    const result=await fetch("http://localhost:3000/api/post/nvpost",request);
    const data=await result.json();
    console.log(data);
    location.reload();

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
            idforum:urlparam.get("id")
        })
    };
    const result=await fetch("http://localhost:3000/api/post/creerlistpost",request);
    const data=await result.json();
    console.log(data);

	let tab = document.getElementById("affichage");
        let buildtab="";
        let ligneprod="";
		for(let post of data){
            if(post.idcreateur==localStorage.getItem("userId")||localStorage.getItem("droituser")=="admin"){
             if(post.media!=""){
                ligneprod="<div class='message'><img class='imgpost' src='http://localhost:3000/images/"+post.media+"' /><p>"+post.contenu+"</p><input type='submit' class='bsupr'  onclick='suprpost(event,"+post.id+")' value='x'></input></div>";
             }else{
                ligneprod="<div class='message'><p>"+post.contenu+"</p><input type='submit' class='bsupr'  onclick='suprpost(event,"+post.id+")' value='x'></input></div>";
             }
            }else{
                if(post.media!=""){
                    ligneprod="<div class='message'><img class='imgpost' src='http://localhost:3000/images/"+post.media+"' /><p>"+post.contenu+"</p></div>";
                 }else{
                    ligneprod="<div class='message'><p>"+post.contenu+"</p></div>";
                 } 
            }
		buildtab=buildtab+ligneprod;
		}
		let buildf=buildtab;
		tab.innerHTML=buildf;


}
creerlistpost();

async function suprpost(event,id){
    event.preventDefault();
    let image =document.getElementById("image");
    let contenu =document.getElementById("contenu");
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
           
        })
    };
    const result=await fetch("http://localhost:3000/api/post/suprpost",request);
    const data=await result.json();
    console.log(data);
    location.reload();

}

async function supruser(event) {
    event.preventDefault();
    let request = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: localStorage.getItem("userId"),
        })
    };
    const result = await fetch("http://localhost:3000/api/user/supruser", request);
    const data = await result.json();
    localStorage.clear();
    location.href = "./index.html";
}
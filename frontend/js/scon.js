function deconnexion() {
    localStorage.clear();
    location.href = "./index.html";
}

function verification() {
    if (localStorage.getItem("userId") == null || localStorage.getItem("token") == null) {
        deconnexion();
    }
}


verification();
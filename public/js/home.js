
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

window.onload=function(){
    const myModal = new bootstrap.Modal("#trasaction-modal");

    checkLogged();

    let data = {
        transactions: []
    };
}

function checkLogged(){
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(!logged){
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if(dataUser){
        data = JSON.parse(dataUser);
    }

    console.log(data);
}
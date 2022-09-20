// window.onload=function(){
//     document.getElementById("link-conta").addEventListener("click", function(){
//         alert("O usuário clicou no link criar conta.")
//     })
// }

let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

window.onload=function(){
    const myModal = new bootstrap.Modal("#register-modal");

    checkLogged();

    //LOGAR NO SISTEMA
    document.getElementById("login-form").addEventListener("submit", function(e){
        e.preventDefault();

        const email = document.getElementById("email-input").value;
        const password = document.getElementById("password-input").value;
        const checkSession = document.getElementById("session-check").checked;

        const account = getAccount(email);

        if(!account){
            alert("Ooops! Verifique seu usuário e senha.");
            return;
        }

        if(account){
            if(account.password !== password){
                alert("Ooops! Verifique seu usuário e senha.");
                return;
            }

            saveSession(email, checkSession);

            window.location.href = "home.html";
        }
    });

    // CRIAR CONTA
    document.getElementById("create-form").addEventListener("submit",function(e){
        e.preventDefault();

        // alert("Enviou o form.")
        const email = document.getElementById("email-create-input").value;
        const password= document.getElementById("password-create-input").value;

        console.log(email, password);
        
        if(email.length < 5){
            alert("Preencha o campo com email válido.");
            return;
        }

        if(password.length < 4){
            alert("Preencha a senha com no mínimo 4 dígitos.");
            return;
        }

        saveAccount({
            login: email,
            password: password,
            transactions:[]
        })

        myModal.hide();

        alert("Conta criada com sucesso.");

    })
}

function checkLogged(){
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged){
        saveSession(logged, session);

        window.location.href = "home.html"
    }
}

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
}

function getAccount(key){
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }

    return "";
}
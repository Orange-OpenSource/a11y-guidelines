document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("password_visibility").onclick = function (e){
        let password = document.getElementById("password");
        if(password.type=="password"){
            password.type="text";
            this.title ="Cacher le mot de passe";
        }
        else{
            password.type="password";
            this.title ="Afficher le mot de passe";
        }
    }

    document.getElementById("password_visibility_final").onclick = function (e){
        let password = document.getElementById("password_final");
        if(password.type=="password"){
            password.type="text";
            this.title ="Cacher le mot de passe";
        }
        else{
            password.type="password";
            this.title ="Afficher le mot de passe";
        }
    }
})
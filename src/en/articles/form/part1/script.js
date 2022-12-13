document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("password_visibility").onclick = function (e){
        let password = document.getElementById("password");
        console.log(this)
        if(password.type=="password"){
            password.type="text";
            this.title ="Hide password";
        }
        else{
            password.type="password";
            this.title ="Show password";
        }
    }

    document.getElementById("password_visibility_final").onclick = function (e){
        let password = document.getElementById("password_final");
        console.log(this)
        if(password.type=="password"){
            password.type="text";
            this.title ="Hide password";
        }
        else{
            password.type="password";
            this.title ="Show password";
        }
    }
})
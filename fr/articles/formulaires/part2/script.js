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

    document.getElementById("password_visibility_2").onclick = function (e){
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

    document.getElementById("submit").onclick = function (e){
        e.preventDefault();

        let error=false;

        let email = document.getElementById("email_2");
        let password = document.getElementById("password_2");
        let name = document.getElementById("name_2");
        let firstname = document.getElementById("firstname_2");

        if(firstname.value==""){
            error=invalid(firstname,"errorfirstname1");
            document.getElementById("errorfirstname").classList.remove("d-none");

        }
        else{
            valid(firstname);
            document.getElementById("errorfirstname").classList.add("d-none")
        }

        if(name.value==""){
            error=invalid(name,"errorname1");
            document.getElementById("errorname").classList.remove("d-none");
        }
        else{
            valid(name);
            document.getElementById("errorname").classList.add("d-none")
        }

        if(password.value==""){
            error=invalid(password,"errorpassword1 passwordHelpBlock_2");
            document.getElementById("errorpasswordDiv").classList.remove("d-none");
        }
        else{
            if(password.value.length>=6){
                valid(password);
                document.getElementById("errorpasswordDiv").classList.add("d-none")
                document.getElementById("errorpasswordDiv2").classList.add("d-none")
                password.setAttribute("aria-describedby", "passwordHelpBlock_2");
            }
            else{
                error=invalid(password,"errorpassword2 passwordHelpBlock_2");
                document.getElementById("errorpasswordDiv").classList.add("d-none")
                document.getElementById("errorpasswordDiv2").classList.remove("d-none");
            }   
        }
        if(email.value==""){
            error=invalid(email,"erroremail1");
            document.getElementById("erroremailDiv").classList.remove("d-none");
        }
        else{
            if(validateEmail(email.value)){
                valid(email);
                document.getElementById("erroremailDiv").classList.add("d-none")
                document.getElementById("erroremailDiv2").classList.add("d-none")
            }
            else{
                error=invalid(email,"erroremail2");
                document.getElementById("erroremailDiv").classList.add("d-none")
                document.getElementById("erroremailDiv2").classList.remove("d-none");
            }
            
        }

        if(error){
            document.getElementById("alertsucces").classList.add("d-none")
        }
        else{
            document.getElementById("alertsucces").classList.remove("d-none")
        }
    }

    function valid (element){
        element.setAttribute("aria-invalid", false)
        element.classList.remove("is-invalid");
        element.removeAttribute("aria-describedby")
    }

    function invalid(element,errorDiv){
        element.setAttribute("aria-invalid", true);
        element.classList.add("is-invalid");
        element.setAttribute("aria-describedby", errorDiv);
        element.focus();
        return true;
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
})
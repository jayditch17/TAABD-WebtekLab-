       var passwordArray=[];
        
        


        function login(){
            event.preventDefault();

            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            var i = passwordArray.indexOf(password);

            if(passwordArray.indexOf(username) == -1){
                if (username == ""){
                    alert("Username required.");
                    return ;
                }
                alert("Username does not exist.");
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                alert(password + " Welcome ");

                document.getElementById("username").value ="username";
                document.getElementById("password").value="password";
                return ;
            }

        }
      
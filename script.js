
    function validateForm() {
        let name = document.getElementById("name").value.trim();
         let mobile = document.getElementById("mobile").value.trim();
         let email= document.getElementById("email").value.trim();
          let message = document.getElementById("message").value.trim();

          if(name ==="" || email==="" || message==="" || mobile===""){
            alert("Please fill all fields!");
            return false;
          }
         if(!/^[0-9]{10}$/.test(mobile)){
              alert("Mobile number should be at exactly 10 digits!");
              return false;
             }
    return true;
    }
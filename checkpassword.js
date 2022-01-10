function checkPassword(){
let m=document.getElementById("password")
   if(m.value=="12345678")
   {
      let h=document.querySelector("h1")
      h.textContent="Login Successfully" 

    }
   else
      alert("Wrong Password!Fail to Login.")

}

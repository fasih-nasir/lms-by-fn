// =========== LOGIN FORM START =======================
var login_form=document.getElementById("login_form");

login_form.onsubmit =  (e)=>{
e.preventDefault();

    
fetch("https://opensheet.elk.sh/11XqUvEZ55DBXtJLtaR0xe_ScGPA8c2HrkTdDoGhfpCw/Sheet1")
  .then(res => res.json())
  .then((data) =>{
 data.forEach(element => {
       
        if(element.Role === "Admin"){
            
            location.href="../pages/dashboard.html";
            
        }
        else{
                   

            
        }
        
    });
  });
    


// console.log(e.srcElement);


}

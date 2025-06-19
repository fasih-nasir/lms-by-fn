// =========== LOGIN FORM START =======================
var login_form=document.getElementById("login_form");

login_form.onsubmit =  (e)=>{
e.preventDefault();


for (let index = 0; index < e.target.length; index++) {
    console.log( e.target[index].value);
    
    
}


// console.log(e.srcElement);


}

// =========== LOGIN FORM END =========================
// google sheets dependent dropdown list

// google sheets filter data based on dropdown

// google sheets class student dropdown filter

// google sheets dynamic dropdown based on another cell

// google sheets FILTER formula tutorial

// google sheets QUERY formula tutorial

// google sheets linked dropdowns tutorial

// google sheets show data based on dropdown selection

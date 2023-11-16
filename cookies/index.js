//create variables for all buttons 
const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookies("firstName", firstText.value, 365);
    setCookies("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});
//infor filled in cna niw be remembered and populated when get cookie is clicked 


//code used the functions defined below
/*deleteCookie("firstName");
deleteCookie("lastName");*/  //deletes previously created cookies by  func below


/* cookie are small text files stored on our comps
used to remember information about the user saved in 
name=value pairs*/

// to check if any cookies are enabled 
console.log(navigator.cookieEnabled); // returns boolean 

//to add a cookie name=value pairs and an optional expiration date
document.cookie = "firstName=Telma; expires=Mon, 3, March, 2024;";
console.log(document.cookie);
//to delete a cookie set the expiration date to one thats already passed

setCookies("email", "telma@gmail.com", 365);
console.log(document.cookie);

//a function to create cookies 
function setCookies(name, value, expirationDate){
    //create a new date object
    const date = new Date();
    //converting it to miliseconds
    date.setTime(date.getTime() + (expirationDate * 24 *60 * 60 * 1000));
    //now the future date is in miliseconds, convert to Cordinated Universal Time
   let expires = "expires=" + date.toUTCString()
   document.cookie = `${name} = ${value}; ${expires}; path=/;`
}/*
setCookies("firstName", "Telma", 365);
setCookies("lastName", "Trina", 365);
console.log(getCookie("firstName"));
console.log(getCookie("lastName"));*/
//deleting a cookie with a function 

//call the function to delete email in the cookie 
deleteCookie("email");
function deleteCookie(name){
    //name of the function creating cookies above 
    setCookies(name, null, null);
}
// a function to get the value of a cookie by name 
function getCookie(name){
    const cDecode = decodeURIComponent(document.cookie);
    const cArray = cDecode.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result
}
function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "1234") {
        window.location.href = "left.html";
        return false;
    } 
    else if(user ===""&& pass ===""){

        alert("Please Enter Username And Password!");
        return false;
    }
    
    else {
        alert("Invalid username or password!");
        return false;
    }
}

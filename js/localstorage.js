$("#fullnameButton").click(function(){
    var answer = document.getElementById("fullname").value;
    // Store
    localStorage.fullname = answer;
    // Retrieve
    document.getElementById("name").innerHTML = "Full Name on local storage: " + localStorage.fullname;

});
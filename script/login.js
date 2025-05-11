document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const pin =  document.getElementById("pin").value;
    if(accountNumber.length === 11){
        if(pin === "1234"){
            window.location.href="./main.html";
        }
        else{
            alert("Pin is wrong")
        }
    }else
    alert("Not valid account");
})
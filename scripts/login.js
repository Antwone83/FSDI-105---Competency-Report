function login(){
    let userName = $("#txtUserName").val();
    let password = $("#txtPassword").val();
    console.log(userName,password);
    let userList=readUsers();
    let flag=false;
    for (let i=0;i<userList.length;i++){
        let user=userList[i];
        if(user.email===userName && user.password===password){
            console.log("You are logged in");
            window.location="users.html";
            flag=true;
        }
    }// end of the traveling
    if(flag===false){
        console.log("Invalid Credentials")
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide");
        },3000);// 3000 is =  3 mili seconds
    }
}

function init(){
    console.log("Home Page");
    $("#btnLogin").click(login);
}
window.onload=init;
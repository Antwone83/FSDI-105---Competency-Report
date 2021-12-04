function createRow(users){
    //travel the array
    for(let i=0;i<users.length;i++){
        

        let tmp=`<tr>
                <td>${users[i].fname}</td>
                <td>${users[i].lname}</td>
                <td>${users[i].email}</td>
                <td>${users[i].age}</td>
                <td>${users[i].phone}</td>
                <td>${users[i].address}</td>
            </tr> `;
            console.log(tmp);
            //document.getElementById("usersTable").innerHTML+=tmp;
            $("#usersTable").append(tmp);
    }
    //get each one of the user
    //display the user

}

function init(){
    console.log("Listing users");
    var users = readUsers();// this fn is on the storeManager
createRow(users);
    console.log(users);
  
}
window.onload=init;
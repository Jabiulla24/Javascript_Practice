//In this we are learinng about Call function



function setUserName(username){
this.username=username;
}

function setDetails(username,email,password){
    setUserName(username);// if we call like this its not setting username 
    setUserName.call(this,username);// Returns current execute to another function
    this.email=email;
    this.password=password
}

const useron= new setDetails("RAj","raj@gmail.com","123");
console.log(useron);
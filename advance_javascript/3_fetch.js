//In this we learn about Javascript Fetch Method in Node jS
//Fetch is used to fetch or make http request 


fetch('https://api.github.com/users/jabiulla').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
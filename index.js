

function submitData(userUsername, userEmail){
   return fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        name: userUsername,
        email: userEmail
    }),
})
     .then(function (response){
         return response.json();
    })
     .then(object => {
        const para = document.createElement("p")
        para.innerHTML = object.id
        document.body.appendChild(para)
        console.log(object)

     })
     .catch(function(error){
         const para = document.createElement("p")
         
         console.log(error)
        para.innerHTML = error.message
        document.body.appendChild(para)

         
     });


      
}




// Headers for 'Content-Type' and 'Accept', both set to 'application/json'
// A body with the name and email passed in as arguments to submitData. 
// These should be assigned to name and email keys within an object. 
// This object should then be stringified.
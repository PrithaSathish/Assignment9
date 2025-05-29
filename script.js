fetch("https://fakestoreapi.com/users").then(response => {
    
        if(!response.ok){
        throw new Error("API Fetching error");
    }
    return response.json();
    
}).then(data => {
    console.log("User data", data);    
    
}).catch(error => {
    console.error(error);
});

//Example for Filter
fetch("https://fakestoreapi.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("API Fetching error");
    }
    return response.json();
  })
  .then(data => {
   const filteredUsers = data.filter(user => user.id > 5);
    console.log("Filtered Users:", filteredUsers);
  })
  .catch(error => {
    console.error("Error:", error);
  });
// promises
/* pseudocode;
        1.call a fetch()
        2. assign it to a variable: fetchPromise;
        3. log the variable fetch promise;
        4. pass a handler function in to the .then() promise method
                under the handler function; add another promise that will handler log the content of the json file.
                the second promise will have a handler function for displaying the content
        5. when and if the fetch promise succeeds then we shall call our handler function
            passing a response object which constains a response
        6. log the message "started the request"
*/

const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
)
console.log(fetchPromise)
fetchPromise.then((response)=>{
    console.log(`response status:${response.status}`)
    const jsonPromise = response.json();
    
    jsonPromise.then((data)=>{
        console.log(data[4]);
    })
       
})
console.log("started the request")
/*
const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise1.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data[0].name);
    });
  });
  */
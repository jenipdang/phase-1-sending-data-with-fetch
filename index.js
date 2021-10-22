// Add your code here

// const configObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
// }

// fetch('http://localhost:3000/dogs', configObject)
//     .then(resp => resp.json())
//     .then(object => console.log(object))
//     .catch(function(error){
//         alert("Bad things! Ragnarok!")
//         console.log(error.message)
//     })

function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name,
          email
        })
      })
      .then(response => response.json())
      .then(function (object){
        let p = document.createElement("p")
        p.innerHTML = object.id
        debugger
        document.body.appendChild(p) 
      })
      // .then(function ( object ) {
      //       document.body.innerHTML = object[ "id" ]
      //   })
      .catch( function ( error ) {
            document.body.innerHTML = error.message
        })
  }
const express = require('express');
const app = express();

//to route
app.get("/", (request, res, next) => {
  res.send("we are connected on the server")
})


const start = () =>{
  const port = process.eventNames.PORT || 3000;



  app.listen(port, () =>{
    console.log(`The sever is listening on port ${port}`);
  })
}
start()
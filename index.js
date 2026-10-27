const app = require('./app') //express is assigned to app
const port = 3005       

app.listen(port, () => {    
  console.log(`Example app listening on port ${port}`)
}) 
// app.listen function to start a web server and the application is ready to accept request

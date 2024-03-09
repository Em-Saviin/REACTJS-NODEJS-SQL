const vExpress = require("express");
const app = vExpress();
const cors = require('cors')
//json
app.use(vExpress.json())
//use cors to use for connect with react
app.use(cors({
    origin : "*"
}))

// const product = require("./src/route/r_product")
// const user = require("./src/controller/c_user")
const category = require("./src/route/r_category")
const employee = require("./src/route/r_employee")

employee(app)  //calll to used
category(app)


app.listen(8081,()=>{
    
    console.log("http localhost:8081")
}) 

 const ct = require("../controller/c_catagory")

 const category = (app) =>{
    app.get("/api/category", ct.getAll),
    app.get("/api/category/:id",ct.getOne),
    app.post("/api/category", ct.create),
    app.put("/api/category", ct.update),
    app.delete("/api/category/:id", ct.Delete),
    app.get("api/category", ct.changeState)
 }

module.exports = category;

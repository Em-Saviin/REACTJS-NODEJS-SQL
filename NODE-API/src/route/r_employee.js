
const ct = require( "../controller/c_employee")

const employee = (app) =>{
    app.get("/api/employee",ct.getAll)
    app.post("/api/employee", ct.Create)
    app.put("/api/employee", ct.Update)
    app.delete("/api/employee/:id",ct.Delete)
}

module.exports = employee;
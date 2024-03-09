 const db = require("../util/db")

 const getAll = (req,res) =>{
        var sql = "SELECT * FROM tbl_employee"
        db.query(sql,(error,row) =>{
            if(error){
                res.json({
                    message:error,
                    error:true
                })
            }else{
                res.json({
                    list:row
                })
            }
        })
 }
 const Create = (req,res)=>{
    const {
        firstname,
        lastname,
        tel,
        email,
        base_salary,
        address,
        province,
        country
    } = req.body

     var sql = "INSERT INTO tbl_employee (`firstname`, `lastname`, `tel`, `email`, `base_salary`, `address`, `province`, `country`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        //  var sql = "INSERT INTO tbl_employee (firstname=?, lastname=?, tel=?, email=?, base_salary=?, address=?, province=?,country=?)"
        var param_data = [firstname, lastname, tel, email, base_salary, address, province, country]
        db.query(sql,param_data,(error,row) =>{
            if(error){
                res.json({
                    error: true,
                    message: error
                })
            }else[
              res.json({
                message :"Create SuccessFully!",
                data : row
              })
            ]
        })
    }  
 const Update = (req,res) =>{
    const {
        employee_id,
        firstname,
        lastname,
        tel,
        email,
        base_salary,
        address,
        province,
        country
    } = req.body
    var sql = "UPDATE tbl_employee SET firstname=?, lastname=?, tel=?, email=?, base_salary=?, address=?, province=?, country=? WHERE employee_id=?";
   // var sql = "UPDATE tbl_employee SET  firstname=?, lastname=? ,tel=? ,email=? ,base_salary=?, address=?, province=? ,country=?  WHERE employee_id=?"
    var param_sql = [firstname, lastname, tel, email, base_salary, address, province, country, employee_id];

    db.query(sql, param_sql, (error, result) => {
        if (error) {
            res.json({
                error: true,
                message: error
            });
        } else {
            if (result.affectedRows > 0) {
                res.json({
                    message: "Update Successfully!",
                    data: result
                });
            } else {
                res.json({
                    message: "No rows updated. Employee ID not found or values unchanged.",
                    data: result
                });
            }
        }
    });
}
 const Delete = (req,res) =>{
   var {id} = req.params;
    const sql = "DELETE FROM tbl_employee WHERE employee_id = ?"
    const param_sql = [id]
    db.query(sql,param_sql,(error,row) =>{
        if(error){
            res.json({
                message : error,
                error : true
            })
        }else{
            res.json({
                message : "Delete Successfully!",
                data : row
            })
        }
    })
 }
 module.exports = {
    getAll,
    Create,
    Update,
    Delete
 }
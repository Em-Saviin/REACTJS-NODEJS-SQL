const db = require("../util/db");

const  getAll = (req,res) => {
        const sql = "SELECT category_id, name, description, price, parent, status FROM tbl_category"
        db.query(sql,(error,row) =>{
            if(error){
                res.json({
                    message : error,
                    error : true
                })
            }else{
                res.json({
                    message : "Your Data Has Require Successful!",
                    list : row 
                })
            }
        })
}
const getOne =(req,res) =>{
    const {id}= req.params

        const sql = "SELECT * FROM tbl_category WHERE category_id = ?"
        const param_sql = [id]
        db.query(sql,param_sql,(error,row)=>{
            if(error){
                res.json({
                    message : error,
                    error : true
                })
            }else{
                res.json({
                    message : "The Fill You Selected has Succesful!",
                    list : row
                })
            }
        })
}
const create =(req,res) =>{
    const {
        name,
        description,
        price,
        parent,
        status,
    } = req.body

    var sql = "INSERT INTO tbl_category (`name`, `description`, `price`,  `parent`, `status`) VALUE (?, ?,?, ?,?)";
    var param_sql = [name, description, price, parent, status,];
    db.query(sql, param_sql,(error,row) =>{
        if(error){
            res.json({
                message : error,
                error : true
            })
        }else{
            res.json({
                message : "Your Category Create Successfully!!",
                list : row 
            })
        }
    })
}   
const update =(req,res) =>{
  const {
    category_id,
    name,
    description,
    price,
    parent,
    status
  } = req.body;
  var sql = "UPDATE tbl_category SET name=?, description=? , price=?, parent=?, status=? WHERE category_id=?";
  var param_sql = [ name,description, price, parent, status, category_id];
  db.query(sql,param_sql,(error,row) =>{
    if(error){
        res.json({
            message : error,
            error : true
        })
    }else{
        res.json({
            message : "Update Fill SuccessFully!!!",
            list : row
        })
    }
  } )
} 
const Delete =( req,res) =>{
    const {id} = req.params;
    const sql = "DELETE FROM `tbl_category` WHERE category_id=?"
    const param_sql = [id];
    db.query(sql,param_sql,(error,row) =>{
        if(error){
            res.json({
                message : error,
                error : true
            })
        }else{
            res.json({
                message : "Your Fill Delete Successfully!!",
                list : row 
            })
        }
    })
}
const changeState =(req,res) =>{

}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    Delete,
    changeState
}

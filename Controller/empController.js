const emp = require("../Model/empModel")

const addEmp = async (req,res)=>{
try {
      const {name,age,city,mobile,salary} = req.body

    const Newemp = emp({
        name,
        age,
        salary,
        city,
        mobile
    })

    await  Newemp.save()
    res.status(200).json({message:"emp add successfully",Newemp});
} catch (error) {
 res.status(500).json({message: error.message},error);   
}
}

const viewAllEmp = async (req , res) =>{
    try{
    const allemp = await emp.find()
    res.status(200).json({employ:allemp});
    }catch(err){
        res.status(200).json({error:err});
    }
}

const updateEmp = async (req,res)=>{
    try {
        const {id} = req.params
        const {name , age , city, mobile,salary} = req.body

        const newEmp = await emp.findByIdAndUpdate(id,{
            name,
            age,
            city,
            salary,
            mobile
        },{new:true})
         res.status(200).json({message:"Emp Update Sucessfully","newEmp":newEmp});
    } catch (error) {
        res.status(500).json({message:"Emp Not Update","error":error.message});
    }
}

const deletEmp = async (req,res)=>{
    try {
      const {id} = req.params
      await emp.findByIdAndDelete(id)
      res.status(200).json({message:"Emp Deleate Sucessfully"});
    } catch (error) {
        res.status(500).json({message:error});
    }
}



module.exports={addEmp , viewAllEmp , updateEmp ,deletEmp}

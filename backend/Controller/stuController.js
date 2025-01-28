const stuModel = require("../Model/stuModel")
const saveData = async (req, res) => {
    let{rollno, name, city, fees} = req.body
    const data = await stuModel.create({
        rollno : rollno,
        name : name,
        city : city,
        fees : fees
    }) 
    res.send(data)
}
const dataDisplay = async(req, res)=>{
    const data = await stuModel.find();
    res.send(data)
}
const dataSearch = async(req, res)=>{
    const {sturno} =req.body;
    const data= await stuModel.find({rollno:sturno})
    res.send(data);
}
module.exports = {
    saveData, 
    dataDisplay,
    dataSearch

}
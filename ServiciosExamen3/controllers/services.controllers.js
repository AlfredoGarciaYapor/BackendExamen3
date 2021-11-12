async function saludar(req, res){
    const { numero1, numero2 } = req.body;;
    
    
    var suma;
    
    suma = numero1 + numero2;

    return res.status(200).json({"succes": true, "data":suma});
}

module.exports = {
    saludar
}
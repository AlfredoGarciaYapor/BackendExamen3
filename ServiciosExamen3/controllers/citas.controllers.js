const { Cita } = require('../models/citas.modules')

async function getCitas(req, res){
    const {userId, userTypeId, businessId} =req.body;

    let citasList = null 


    console.log('%c⧭', 'color: #0088cc',req.body);
    try {
        if(userId != null && businessId != null && userTypeId == 1){
            citasList = await Cita.find({"businessId": `${businessId}`}, {})
    
            if( citasList && citasList.length > 0 ){
    
                // console.log('%c⧭', 'color: #ff0000', res.body);
                return res.status(200).json(citasList);
            }else{
                return res.status(204).json([]);
            }
        }else{
            return res.status(401).json({"message":'No tienes autorizacion para acceder aqui.'})
        }
    } catch (error) {
        return res.status(500).json({
            message:"Error finding services.",
            data:[]
        });
    }
}

async function newCita(req,res){
    const {date, time, businessId, businessName, name, userName, image} = req.body
    try {
        if(date != null && time != null && businessId != null && businessName != null && name != null && userName != null && date != undefined && time != undefined && businessId != undefined && businessName != undefined && name != undefined && userName != undefined){
            const newCita = await new Cita({
                "date": date,
                "time": time,
                "userName": userName,
                "businessId": businessId,
                "businessName": businessName,
                "name": name,
                "image": image
            }).save();
    
            return res.status(200).json({"succes": true, "data":newCita});
        }else{
            return res.status(500).json({"succes": true, "message":"Error faltan propiedades en el body"});
        }
    } catch (error) {
        return res.status(500).json({
            message:"Error finding services.",
            data:[]
        });
    }

}

module.exports = {
    getCitas,
    newCita
}
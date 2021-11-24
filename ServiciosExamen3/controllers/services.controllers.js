const { Service } = require('../models/services.model')
// const redis = require('redis');
// const client = redis.createClient();

// async function saludar(req, res){
//     try{
//         const { numero1, numero2 } = req.body;
        
        
//         var suma;
        
//         suma = numero1 + numero2;
    
//         return res.status(200).json({"succes": true, "data":suma});
//     }catch (err){
//         console.log("hola soy un error.");
//     }
// }

async function addService(req, res){
    const {
        userId,
        userTypeId, 
        businessId, 
        businessName, 
        name, 
        description, 
        requiredTime, 
        cost, 
        image
    } = req.body;

    // return res.status(200).json({"succes": true, "userId":userId, "userTypeId": userTypeId, "businessId": businessId, "serviceData": [serviceData]})
    
    console.log(res.body);

    // const {userId, userTypeId, businessId, json} = req.body;
    try {
        // res.send('Entro la ruta')
        console.log(req.body)
        if(userId!=null && userTypeId!=null && userId!=undefined && userTypeId!=undefined && businessId!=null && businessId!=undefined){
            console.log('Entro la condicion para crear el servicio')
            const newService = await new Service({
                "businessId": businessId,
                "businessName": businessName,
                "name": name,
                "description": description,
                "requiredTime": requiredTime,
                "cost": cost,
                "image": image
            }).save();
            
            return res.status(200).json({"succes": true, "data":newService});
        }else{
            return res.status(204).json([]);
        }
    } catch (err) {
        
        console.log(err);
        return res.status(500).json({
            message:"Error finding services.",
            data:[]
        });
    }


}

async function updateService (req, res){
    const {newName, id, newDescription, newRequiredTime, newCost, NewImage} = req.body;

    // return res.status(200).json({"succes": true, "userId":userId, "userTypeId": userTypeId, "businessId": businessId, "serviceData": [serviceData]})
    
    console.log(res.body);

    // const {userId, userTypeId, businessId, json} = req.body;
    try {
        // res.send('Entro la ruta')
        console.log(req.body)
        if(id!=null && id != undefined){
            const newService = await Service.updateOne({"_id": `${id}` }, {$set:{
                "name": newName,
                "description": newDescription,
                "requiredTime": newRequiredTime,
                "cost": newCost,
                "image": NewImage
            }}).save();
            
            return res.status(200).json({"succes": true, "data":newService});
        }else{
            return res.status(204).json([]);
        }
    } catch (err) {
        
        console.log(err);
        return res.status(500).json({
            message:"Error finding services.",
            data:[]
        });
    }
} 

    async function getServices(req, res){
    const {userId, userTypeId, businessId} =req.body;

    console.log(req.body);


    try{
        if(userId!=null && userTypeId!=null && userId!=undefined && userTypeId!=undefined){
            // let listaBusiness = 'listaBusiness'
            // let listaClient = 'listaClient'

            let servicesList = null;
            if(businessId != null && businessId != undefined && userTypeId == 1){
                // var r = await client.get(listaBusiness)
                // console.log(r);
                // let listaServicios = JSON.parse(r)
                // if(listaServicios != null && listaServicios != undefined){
                //     return res.status(200).json({succes: true, data: listaServicios})
                // }else{
                    servicesList = await Service.find({"businessId": `${businessId}`},{"_id":1, "name":1, "businessName": 1, "description":1,"requiredTime":1, "cost":1, "image": 1});
                    console.log(servicesList.lenght);
    
                    if( servicesList && servicesList.length > 0 ){
                        // console.log("Guardando en el cache de redis")
                        //  client.set(listaBusiness, JSON.stringify(servicesList));
    
                        // console.log('%c⧭', 'color: #ff0000', res.body);
                        return res.status(200).json(servicesList);
                    }else{
                        return res.status(204).json([]);
                    }

                // }
            }else{
                // var r = await client.get(listaClient)
                // console.log(r);
                // let listaServicios = JSON.parse(r)

                // if(listaServicios != null && listaServicios != undefined){
                //     return res.status(200).json({succes: true, data: listaServicios})
                // }else{
                    servicesList = await Service.find({},{"_id":1, "name":1, "businessName": 1, "description":1,"requiredTime":1, "cost":1, "image": 1});
                    if( servicesList && servicesList.length > 0 ){
                        return res.status(200).json(servicesList);
                    }else{
                        return res.status(200).json([]);
                    }
                // }

            }
        }else{
            console.log("No entro la condicion")
        }
    }catch (err) {
        console.log(err);

        return res.status(500).json({
            message:"Error finding services.",
            data:[]
        });
    }
}

async function getService(req, res){
    const {serviceId} = req.body;
    console.log('%c⧭', 'color: #733d00', req.body);
    let service = null;
    try {
        if(serviceId!=null && serviceId!=undefined ){
            service = await Service.find({"_id": `${serviceId}`}, {})

            if( service && service.length > 0 ){

                // console.log('%c⧭', 'color: #ff0000', res.body);
                return res.status(200).json(service);
            }else{
                return res.status(200).json([]);
            }

        }else{

        }
    } catch (error) {
        console.log(error);
    }

}

async function deleteService(req, res){
    const {userId, userTypeid, name} = req.body;

    if(userId && userTypeid && name){
        try{
            await Service.deleteOne({
                name: name
            });
        }catch (err){
            console.error("ERROR REMOVING SERVICE");
            console.log(err);
        }
    }
        
}

module.exports = {
    getServices,
    addService,
    updateService,
    deleteService,
    getService
}
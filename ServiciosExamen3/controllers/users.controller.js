const { User } = require('../models/users.modules')


async function getUser(req, res){
    const {userName, password} =req.body;

    let userInfo = null 


    console.log('%c⧭', 'color: #0088cc',req.body);
    try {
        if(userName != null && password != null){
            userInfo = await User.findOne({"userName": userName,  "password": password}, {})
            console.log('%c⧭', 'color: #f200e2', userInfo);
    
            if( userInfo != null){
    
                // console.log('%c⧭', 'color: #ff0000', res.body);
                return res.status(200).json(userInfo);
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

module.exports = {getUser}
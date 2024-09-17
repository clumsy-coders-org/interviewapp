
const authservice = require('../service/authservice')



module.exports = {


    user_signup_control:(req,res)=>{
        
        authservice.user_signup_service(req.body).then((respo)=>{
            
        if(respo.flag){
            
            res.status(200).json({msg :"aldready exist"})
        }
        else{
            res.status(200).json({ msg :"account created"})
        }

        }).catch(err=>{
            res.status(500).json({ error: "Signup failed"})

        }) 

        


 }

}



const user = require('../Model/User')
const router = require('../Routers/authrouter')
const bcrypt = require('bcryptjs')


module.exports = {


    user_signup_service:(data)=>{
        
            return new Promise(async(resolve,reject)=>{
                try {
                const { name,email,password} = data
                const  existsUser = await user.findOne({
                    email: email
                })
                if(existsUser){
                    resolve({
                        flag : true 
                    })           
                     }else{
                   let hashpassword =  await bcrypt.hash(password,10)
                     const final = new user({
                          name,
                          email,
                          password : hashpassword
                     })
                     final.save().then(()=>{
                        resolve({
                            flag :false
                        })
                     
                     }).catch(()=>{
                        console.log("create")
                        reject()
                     })
                }
                    
                } catch (error) {
                 

                    console.log(error.message)
                   reject()

             
                    
                }
            })
    }
}
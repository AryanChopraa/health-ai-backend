const authService = require('../services/authService');
const jwtPovider = require('../config/jwtProvider');

const Signup = async(req,res) =>{

    console.log('Signup done',req.body);
    try{
        const user = await authService.registerUser(req.body);
        console.log("this is the user : ", user);
        const token = await jwtPovider.generateToken(user.dataValues.id);
        const userInfo = {userName:user.dataValues.Name,userEmail:user.dataValues.email}
        res.status(200).send({userInfo,token});
    }
    catch (error) {
        console.error("An error from the controller", error);
        res.status(400).send({ error: error.message });
    }
}
const Login = async(req,res) =>{
    try{
        const user = await authService.loginUser(req.body);
        const token = await jwtPovider.generateToken(user.dataValues.id);
        const userInfo = {userName:user.dataValues.Name,userEmail:user.dataValues.email}
        res.status(200).send({userInfo,token});
    }
    catch(error){
        console.log("error from controller",error.message)
        return res.status(400).send({error:error.message})
    }

}
const doctorSignup = async(req,res) =>{

    console.log('Signup done',req.body);
    try{
        const user = await authService.registerDoctor(req.body);
        console.log("this is the user : ", user);
        const token = await jwtPovider.generateToken(user.dataValues.id);
        const userInfo = {userName:user.dataValues.Name,userEmail:user.dataValues.email}
        res.status(200).send({userInfo,token});
    }
    catch (error) {
        console.error("An error from the controller", error);
        res.status(400).send({ error: error.message });
    }
}
const doctorLogin = async(req,res) =>{
    try{
        const user = await authService.loginDoctor(req.body);
        const token = await jwtPovider.generateToken(user.dataValues.id);
        const userInfo = {userName:user.dataValues.Name,userEmail:user.dataValues.email}
        res.status(200).send({userInfo,token});
    }
    catch(error){
        console.log("error from controller",error.message)
        return res.status(400).send({error:error.message})
    }

}

module.exports = {
    Signup,
    Login,
    doctorSignup,
    doctorLogin
};
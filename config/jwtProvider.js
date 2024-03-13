require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECERET_KEY=process.env.SECERET_KEY

const generateToken=async(userId)=>{
    const token=await jwt.sign({userId},SECERET_KEY,{ expiresIn: '48h' })
    console.log('token generated');
    return token;
}

const getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,SECERET_KEY)
    return decodedToken.userId
}


module.exports={generateToken,getUserIdFromToken};
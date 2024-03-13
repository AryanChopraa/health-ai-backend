const jwtProvider  = require('../config/jwtProvider')

const authenticateUser = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        console.log('token', token);
        if(!token){
            return res.status(400).json({
                message: 'No token provided'
            })
        }
        const decodedToken = jwtProvider.getUserIdFromToken(token);
        req.user = decodedToken;
        next();
    }
    catch(error){
        console.log('error', error);
        return res.status(401).json({
            message: 'Invalid token'
        })

    }
}



module.exports = authenticateUser
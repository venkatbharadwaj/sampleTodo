const jwt = require('jsonwebtoken');
module.exports = async (req, res, next)=>{
    const token = req.header('Authorization');
    try {
        if(!token) {
            throw new Error('Login to continue');
        }
        const verified = await jwt.verify(token, process.env.SECRET_TOKEN);
        console.log(verified);
        if (verified) {
            req.user = verified;
            next();
        }
    }catch(error){
        res.send(401).send(error.message || error)        
    }
}
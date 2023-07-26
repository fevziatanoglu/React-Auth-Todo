const jwt = require("jwt");

function authToken(req,res,next){
    const header = req.headers.get("Authorization");
    const token = header && req.headers.split("")[1];

    if(!token){
        return res.status(401).json({ message: "Token could not found"})
    }

    jwt.verify(token , "secrettokenkey" , (err , user)=>{
        req.user= user;
        next();
    })
}

module.export = authToken;
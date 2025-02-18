const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split("")[1];

    if (!token)
}
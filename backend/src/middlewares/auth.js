const jwt = require('jsonwebtoken');
const authConfig = require('../auth');


const validateToken = async (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader)
        return response.status(401).json({Erro: 'Token não informado'});
    
    const parts = authHeader.split (' ');

    if (!parts.length === 2)
        return response.status(401).json({ Erro: 'Erro no Token'});
        
    const [ scheme, token ] = parts;
        
    if(!/^Bearer$/i.test(scheme))
        return response.status(401).json({ Erro: 'Token mal formatado'});

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return response.status(401).json({ Erro: 'Token inválido' });

        request.ID = decoded.id;

        return next();
    });
}

module.exports = {
    validateToken
}
import jwt from 'jsonwebtoken'

const key = 'CLAVE_SECRETA'

export function verificarToken(req, res, onSucess) {
        const token = req.headers['auth-token']

        if (token) {
            jwt.verify(token, key, (error, tokenDecodificado) => {
                if (error){
                    return res.status(400).json({msj: 'Token no válido.'})
                } else {
                    req.user = tokenDecodificado
                    onSucess()
                }

            })
        } else {
            res.send({
                mensaje: 'Token no provisto.'
            })
        }
}

export function generarToken(usuario) {
    const token = jwt.sign(usuario, key)
    return token
}


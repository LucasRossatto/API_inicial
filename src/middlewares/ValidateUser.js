const validateUser = (req, res, next) => {
    const { nome, email, senha } = req.body;

    if ( !nome || !email || !senha ) {
        return res.status(400).json({
            msg: "Campos invalidos, digite novamnete.",
        });
    }
    return next();
};

const validateAmbientId = ( req, res, next ) => {
    const { id } = req.params;

    if ( !id ) {
        return res.status(400).json({
            msg: "Parametro faltando",
        });
    } 
    return next();
};

const validadeProduct = ( req, res, next ) => {
    const { nome, quantidade, preco } = req.body;

    if ( !nome || !quantidade || !preco ) {
        return res.status(400).json({
            msg: "Parametro faltando",
        });
    }
    return next();
};

module.exports = { validateUser, validateAmbientId };
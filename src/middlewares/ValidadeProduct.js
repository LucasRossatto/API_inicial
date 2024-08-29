const validadeProduct = ( req, res, next ) => {
    const { nome, quantidade, preco } = req.body;

    if ( !nome || !quantidade || !preco ) {
        return res.status(400).json({
            msg: "Parametro faltando",
        })
    }
}

const validateProductId = ( req, res, next ) => {
    const { id } = req.params;

    if ( !id ) {
        return res.status(400).json({
            msg: "Parametro faltando",
        });
    } 
    return next();
};

module.exports = { validadeProduct, validateProductId };
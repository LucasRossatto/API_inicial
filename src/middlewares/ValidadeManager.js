const validadeManager = ( req, res, next ) => {
    const { nome, setor, cpf } = req.body;

    if ( !nome || !setor || !cpf ) {
        return res.status(400).json({
            msg: "Parametro faltando",
        })
    }
    return next();
}

const validateManagerId = ( req, res, next ) => {
    const { id } = req.params;

    if ( !id ) {
        return res.status(400).json({
            msg: "Parametro faltando",
        });
    } 
    return next();
};

module.exports = { validadeManager, validateManagerId };
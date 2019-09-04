const catchError = (callback) => {
    return async (req, res) => {
        try {
            await callback(req, res)
        } catch (e) {
        // TODO : Remove this when live server.
            console.error(e)
            res.status(500).send({
                code: "Internal_Server_Error",
                message: e
            })
        }
    }
}

module.exports = {
    catchError
}

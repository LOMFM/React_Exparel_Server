module.exports = function() {
    switch( process.env.NODE_ENV ){
        case 'development':
            return {
                'Database': 'mongodb://localhost:27017/exparel',
                'Root': ''
            }
        case 'production':
            return {
                'Database': 'mongodb+srv://exparel:admin123@cluster0-lohrf.mongodb.net/test?retryWrites=true'
            }
        case 'staging':
            return {
                
            }
        default:
            return {

            }
    }
}

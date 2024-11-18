const ClientError = require('./ClientError'); // Pastikan jalurnya benar

class InputError extends ClientError {
    constructor(message) {
        super(message); // Memanggil constructor dari ClientError
        this.name = 'InputError';
    }
}

module.exports = InputError;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    nombre: { type: String, required: true},
    fechaNacimiento:{ type: Date, required: true},
    sexo: { type: String, required: true},
    altura: { type: Number, required: true}
});

module.exports = mongoose.model('User', UserSchema);
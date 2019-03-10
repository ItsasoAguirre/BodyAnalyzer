const User = require('../models/user')

const userCtrl ={};

userCtrl.getUsers = async (req,res) => {
    const users= await User.find();
    res.json(users);
        
}

userCtrl.getUser = async (req,res) => {
    const user= await User.findById(req.params.id);
    res.json(user);
}

userCtrl.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    console.log(user);
    res.json({
        'status': 'Usuario guardado'
    });
};

userCtrl.editUser = async (req, res) => {
    const {id} = req.params;
    const user= {
        nombre: req.body.nombre,
        fechaNacimiento: req.body.fechaNacimiento,
        sexo: req.body.sexo,
        altura: req.body.altura
    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({
        'status': 'Usuario actualizado'
    });
}

userCtrl.deleteUser = async (req, res) => {
    const {id} = req.params;
    await User.findByIdAndRemove(id);
    
    res.json({
        status: 'Empleado eliminado'
    });
}


module.exports = userCtrl;
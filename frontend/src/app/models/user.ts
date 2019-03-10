export class User {
constructor(_id= '',nombre= '', fechaNacimiento= new Date(), sexo= '', altura = 0){
    this._id = _id;
    this.nombre= nombre;  
    this.fechaNacimiento= fechaNacimiento;
    this.sexo = sexo;
    this.altura = altura;
}

    _id: string;
    nombre: string;  
    fechaNacimiento: Date;
    sexo: string;
    altura:  number;
}

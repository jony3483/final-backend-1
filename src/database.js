//aca hacemos la conexion con moongose

//1) importamos el modulo;

import mongoose from "mongoose";

//2) usamos el metodo connect para vincular la bd:

mongoose.connect("mongodb+srv://coderhouse69990:coderhouse@cluster0.rxgyfzi.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
.then( () => console.log("Conexion Exitosa!"))
.catch( (error) => console.log("Tenemos un error", error))

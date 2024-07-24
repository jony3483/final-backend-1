import express from "express";
//import { engine } from "express-handlebars";
//import { Server } from "socket.io";
import exphbs from "express-handlebars"
import "./database.js";


import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";


const app = express();
const PUERTO = 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./src/public"));

//express-handlebars
app.engine("handlebars", exphbs.engine());
//app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

// Rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/", viewsRouter);



app.listen(PUERTO, ()=> {
  console.log(`servidor listo ${PUERTO}`);
});

//import ProductManager from "./dao/db/product-manager-db.js";
//const productManager = new ProductManager("./dao/models/product.model.js");



//no tengo productos json para real time 



//const io = new Server(httpServer);

//io.on("connection", async (socket) => {
  //console.log("un cliente se conecto");

  //socket.emit("productos", await productManager.getProducts());

  //socket.on("eliminarProducto", async (id) => {
    //  await productManager.deleteProduct(id);

      //io.emit("productos", await productManager.getProducts());
  //})

  //socket.on("agregarProducto", async (producto) => {
    //  await productManager.addProduct(producto);

      //io.emit("productos", await productManager.getProducts());

  //})
//})



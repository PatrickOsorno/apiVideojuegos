const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Obtener listado
module.exports.get = async (request, response, next) => {
  const videojuegos = await prisma.videojuego.findMany();
  response.json(videojuegos);
};
//Obtener por Id
module.exports.getById = async (request, response, next) => {
  //const var let
  let id = parseInt(request.params.id);
  const videojuego = await prisma.videojuego.findUnique({
    where: { id: id },
    include: {
      generos: true,
    },
  });
  response.json(videojuego);
};
//Crear un videojuego
module.exports.create = async (request, response, next) => {
  let videojuego = request.body;
  const newVideojuego = await prisma.videojuego.create({
    data: {
      nombre: videojuego.nombre,
      descripcion: videojuego.descripcion,
      precio: videojuego.precio,
      publicar: videojuego.publicar,
      generos: {
        //Generos [{id:valor}]
        connect: videojuego.generos,
      },
    },
  });
  response.json(newVideojuego);
};
//Actualizar un videojuego
module.exports.update = async (request, response, next) => {
  let videojuego = request.body;
  let idVideojuego = parseInt(request.params.id);
  //Obtener el videojuego que esta registrado en la BD
  const videojuegoExist = await prisma.videojuego.findUnique({
    where: { id: idVideojuego }, 
    include: {
      generos: {
        select: { id: true },
      },
    },
  });

  const newVideojuego = await prisma.videojuego.update({
    where: { id: idVideojuego },
    data: {
      nombre: videojuego.nombre,
      descripcion: videojuego.descripcion,
      precio: videojuego.precio,
      publicar: videojuego.publicar,
      generos: {
        //Generos [{id:valor}]
        //Orden  [{id:idVideojuego, cantidad: valorCantidad}]
        disconnect:videojuegoExist.generos,
        connect: videojuego.generos,
      },
    },
  });
  response.json(newVideojuego);
};

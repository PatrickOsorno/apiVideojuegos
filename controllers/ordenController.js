const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
//Obtener listado
module.exports.get = async (request, response, next) => {
    const orden=await prisma.orden.findMany({
        orderBy:{
            fechaOrden:'desc',
        },
        include:{
            usuario:true,
        }
    });
    response.json(orden);
};
//Obtener por Id
module.exports.getById = async (request, response, next) => {
    let id=parseInt(request.params.id);
    const orden=await prisma.orden.findUnique({
        where:{
            id: id,
        },
        include:{
            videojuegos:{
                select:{
                    videojuego:true,
                    cantidad:true
                }
            },
            usuario:true
        }
    });
    response.json(orden);
};
//Crear
module.exports.create = async (request, response, next) => {
};
//Actualizar
module.exports.update = async (request, response, next) => {
};

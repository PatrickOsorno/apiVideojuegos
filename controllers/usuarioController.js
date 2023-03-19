const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.post = async (req, res) => {
  let credenciales = req.body;

  res.json(
    await prisma.usuario.findFirst({
      where: {
        email: {
          equals: credenciales.email,
        },
        password: {
          equals: credenciales.password,
        },
      },
      select:{
        email:true,
        password:true
      }
    })
  );
};

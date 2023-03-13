const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.get = async (req, res) => {
  let credenciales = req.body;
  let usuario = await prisma.usuario.findMany({
    where: {
      email: { equals: credenciales.email },
      password: { equals: credenciales.password },
    },
  })
  res.json(usuario.length === 1 ? usuario : null);
  
};

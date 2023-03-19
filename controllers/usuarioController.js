const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.post = async (req, res) => {
  let credenciales = req.body;

  res.json(
    await prisma.usuario.findMany({
      where: {
        email: {
          equals: credenciales.email,
        },
        password: {
          equals: credenciales.password,
        },
      },
    })
  );
};

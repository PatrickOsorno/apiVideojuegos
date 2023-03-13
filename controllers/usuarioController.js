const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.get = async (req, res) => {
  let credenciales = req.body;
  res.json(
    await prisma.usuario.findFirst({
      where: { email: credenciales.email, password: credenciales.password },
    })
  );
};

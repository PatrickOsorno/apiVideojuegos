const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.post = async (req, res) => {
  let credenciales = req.body;
  let usuario = await prisma.usuario.findFirst({
    where: {
      email: { equals: credenciales.email },
      password: { equals: credenciales.password },
    },
  });

  res.json(
    usuario.email === credenciales.email &&
      usuario.password === credenciales.password
      ? usuario
      : null
  );
};

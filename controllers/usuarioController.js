const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.post = async (req, res) => {
  let credenciales = req.body;
  let usuario = await prisma.usuario.findFirst({
    where: {
      email: credenciales.email,
      password: credenciales.password,
    },
  });
  console.log(credenciales)
  console.log(usuario)

  res.json(
    usuario.email === credenciales.email &&
      usuario.password === credenciales.password
      ? usuario
      : null
  );
};

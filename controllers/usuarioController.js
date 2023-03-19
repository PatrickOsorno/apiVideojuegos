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
        AND:{
          password:{
            equals: credenciales.password
          }
        }
      },
    })
  );
};

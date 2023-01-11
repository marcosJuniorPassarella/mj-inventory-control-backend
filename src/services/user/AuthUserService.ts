import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaCLient from "../../prisma/index";
import { AuthRequest } from "../../models/interfaces/AuthRequest";

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaCLient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("Wrong username or password!");
    }

    const passwordMatch = await compare(password, user?.password);
    if (!passwordMatch) {
      throw new Error("Wrong username or password!");
    }

    const token = sign(
      {
        name: user?.name,
        email: user?.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user?.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      token: token,
    };
  }
}

export { AuthUserService };

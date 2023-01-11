import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { UserRequest } from "../../models/interfaces/user/UserRequest";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password }: UserRequest = req?.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,
      email,
      password,
    });
    return res.json(user);
  }
}

export { CreateUserController };

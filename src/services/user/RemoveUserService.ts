import prismaCLient from "../../prisma/index";
import { RemoveUserRequest } from "../../models/interfaces/user/RemoveUserRequest";

class RemoveUserService {
  async execute({ user_id }: RemoveUserRequest) {
    const removeUser = await prismaCLient.user.delete({
      where: {
        id: user_id,
      },
    });
    return removeUser;
  }
}

export { RemoveUserService };

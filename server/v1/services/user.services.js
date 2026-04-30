import User from "../models/user.model.js";
import { validateObjectId } from "../utils/mongo.utils.js";

export class UserService {
  static upgradePlan = (id) => {
    validateObjectId(id);
    const user = User.findByIdAndUpdate(
      id,
      { plan: "plus" },
      {
        returnDocument: "after",
      },
    ).select("-password");
    if (!user) throw new NotFoundError("Usuario no encontrado");
    return user;
  };

  static create = async (data) => {
    const user = new User(data);
    await user.save();
    return user;
  };

  static getById = async (id) => {
    validateObjectId(id);
    return await User.findById(id);
  };

  static getByEmail = async (email) => {
    return await User.findOne({ email });
  };
}

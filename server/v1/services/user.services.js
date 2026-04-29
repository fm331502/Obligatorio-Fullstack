import User from "../models/user.model.js";

export class UserService {
  static create = async (data) => {
    const user = new User(data);
    await user.save();
    return user;
  };

  static getById = async (id) => {
    return await User.findById(id);
  };

  static getByEmail = async (email) => {
    return await User.findOne({ email });
  };
}

import User from "../models/user.model.js";

export const createUserService = async (data) => {
  const user = new User(data);
  await user.save();
  return user;
};

export const getUserByEmailService = async (email) => {
  return await User.findOne({ email });
};

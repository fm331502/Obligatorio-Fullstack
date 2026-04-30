import { UserService } from "../services/user.services.js";
import { Res } from "../utils/response.utils.js";

export const upgradePlan = async (req, res) => {
  const user = await UserService.upgradePlan(req.decoded.id);
  Res.ok(res, "Plan upgraded", { user });
};

// REGISTER
export const createUser = (req, res) => {
  const data = req.body;
  res.json({ message: data });
};

// LOGIN
export const loginUser = (req, res) => {
  const data = req.body;
  res.json({ message: data });
};

// UPGRADE PLAN
export const upgadeUserPlan = (req, res) => {};

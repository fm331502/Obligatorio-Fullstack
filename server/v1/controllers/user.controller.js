export const getUsers = (req, res) => {
  res.json({ message: "GET en /user" });
};

export const getUser = (req, res) => {
  res.json({ userId: req.params.id, message: "GET en /user/:id" });
};

export const createUser = (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "No info" });
  }

  res.json({ message: "POST en /user", body: req.body });
};

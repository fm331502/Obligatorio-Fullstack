export const createSocio = (req, res) => {
  const { nombre, apellido, cedula, foto } = req.body;
  if (!nombre || !apellido || !cedula || !foto) {
    return res.status(400).json("Datos incompletos");
  }
};

export const updateSocio = (req, res) => {
  res.json({ message: "Update Socio" });
};

export const deleteSocio = (req, res) => {
  res.json({ message: "Delete socio" });
};

export const getSocios = (req, res) => {
  res.json({ message: "Socios" });
};

export const getSocio = (req, res) => {
  res.json({ message: "Socio", id: req.params.id });
};

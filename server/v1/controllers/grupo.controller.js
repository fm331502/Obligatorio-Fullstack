export const createGrupo = (req, res) => {
  res.json({ message: "Grupo creado" });
};

export const updateGrupo = (req, res) => {
  res.json({ message: "Grupo editado" });
};

export const deleteGrupo = (req, res) => {
  res.json({ message: "Grupo borrado" });
};

export const getGrupo = (req, res) => {
  res.json({ message: "Grupo encontrado", grupo: {} });
};

export const getGrupos = (req, res) => {
  res.json({ message: "Grupos encontrados", grupos: [] });
};

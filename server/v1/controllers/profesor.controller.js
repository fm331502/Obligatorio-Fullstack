export const getProfesores = (req, res) => {
  res.json({ message: "Profesores encontrados", profesores: [] });
};

export const getProfesor = (req, res) => {
  res.json({ message: "Profesor encontrado", profesor: {} });
};

export const createProfesor = (req, res) => {
  res.json({ message: "Profesor creado!" });
};

export const updateProfesor = (req, res) => {
  res.json({ message: "Profesor editado!" });
};

export const deleteProfesor = (req, res) => {
  res.json({ message: "Profesor eliminado!" });
};

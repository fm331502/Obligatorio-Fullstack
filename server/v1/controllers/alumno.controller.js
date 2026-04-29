export const getAlumnos = (req, res) => {
  res.json({ message: "Alumno encontrados", alumnos: [] });
};

export const getAlumno = (req, res) => {
  res.json({ message: "Alumno encontrado", alumno: {} });
};

export const createAlumno = (req, res) => {
  res.json({ message: "Alumno creado!" });
};

export const updateAlumno = (req, res) => {
  res.json({ message: "Alumno editado!" });
};

export const deleteAlumno = (req, res) => {
  res.json({ message: "Alumno eliminado!" });
};

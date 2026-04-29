export const createPago = (req, res) => {
  res.json({ message: "Pago creado" });
};

export const updatePago = (req, res) => {
  res.json({ message: "Pago editado" });
};

export const deletePago = (req, res) => {
  res.json({ message: "Pago borrado" });
};

export const getPagosByAlumno = (req, res) => {
  res.json({ message: "Pagos por alumno encontrados", pagos: [] });
};

export const getPagosByGrupo = (req, res) => {
  res.json({ message: "Pagos por grupo encontrados", pagos: [] });
};

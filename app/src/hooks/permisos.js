// pages/api/asignar_rol_permiso.js
import axios from '@/lib/axios'

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const response = await axios.put('/asignar_rol_permiso', req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error al asignar permisos' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}

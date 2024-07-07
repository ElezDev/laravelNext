// pages/api/roles.js
import axios from '@/lib/axios'
export default async function handler(req, res) {
  try {
    const response = await axios.get('/roles');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los roles' });
  }
}

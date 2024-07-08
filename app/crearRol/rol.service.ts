import axios from '../src/lib/axios';

// Crear un rol
export const createRole = async (name: string): Promise<void> => {
  const formData = { name };

  const response = await axios.post('api/roles', formData);
  return response.data;
};

// Obtener todos los roles
export const getRoles = async (): Promise<any> => {
  const response = await axios.get('api/roles');
  return response.data;
};

// Obtener un rol por ID
export const getRoleById = async (id: number): Promise<any> => {
  const response = await axios.get(`api/roles/${id}`);
  return response.data;
};

// Actualizar un rol
export const updateRole = async (id: number, name: string): Promise<void> => {
  const formData = { name };

  const response = await axios.put(`api/roles/${id}`, formData);
  return response.data;
};

// Eliminar un rol
export const deleteRole = async (id: number): Promise<void> => {
  const response = await axios.delete(`api/roles/${id}`);
  return response.data;
};

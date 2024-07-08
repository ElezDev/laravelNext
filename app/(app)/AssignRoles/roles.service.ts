// src/services/roleService.ts


import axios from '../../src/lib/axios';
import { Role } from '@/app/models/rol-model';
import { Permission } from '@/app/models/permisos-model';

const getRoles = async (): Promise<Role[]> => {
  const response = await axios.get('/api/roles');
  return response.data;
};

const getPermissions = async (): Promise<Permission[]> => {
  const response = await axios.get('/api/permisos');
  return response.data;
};

const getPermissionsForRole = async (roleId: number): Promise<string[]> => {
  const response = await axios.get(`/api/permisos_rol?rol=${roleId}`);
  return response.data;
};

const assignPermissionsToRole = async (roleId: number, permissions: string[]): Promise<void> => {
  const data = {
    idRol: roleId,
    funciones: permissions,
  };
  await axios.put('/api/asignar_rol_permiso', data);
};

export { getRoles, getPermissions, getPermissionsForRole, assignPermissionsToRole };

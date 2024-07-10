'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PrincipalLayout from '@/app/components/PrincipalLayout';
import Modal from '@/app/components/customModal';
import CreaRolpage from '@/app/crearRol/page';
import Button from '@/app/components/Button';
import { deleteRole, getRoles } from '../../crearRol/rol.service';
import Navigation2 from '../menuPrueba';

const GestionRoles: React.FC = () => {
  const [roles, setRoles] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const data = await getRoles();
      setRoles(data);
    } catch (error) {
      toast.error('Error al obtener los roles');
    }
  };

  const updateRoleList = async () => {
    try {
      const rolesData = await getRoles();
      setRoles(rolesData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteRole(id);
      toast.success('Rol eliminado con éxito');
      fetchRoles();
    } catch (error) {
      toast.error('Error al eliminar el rol');
    }
  };

  return (
    
    <PrincipalLayout>
       
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Gestión de Roles</h1>
        <div className="flex justify-end mb-4">
          <Button
            onClick={handleOpenModal}
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            Crear
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full  border border-gray-200 rounded-lg ">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-3 border-b-2 border-gray-200 text-left text-gray-600 text-sm uppercase tracking-wider">ID</th>
                <th className="py-2 px-3 border-b-2 border-gray-200 text-left text-gray-600 text-sm uppercase tracking-wider">Nombre</th>
                <th className="py-2 px-3 border-b-2 border-gray-200 text-left text-gray-600 text-sm uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {roles.map(role => (
                <tr key={role.id} className="hover:bg-gray-50">
                  <td className="py-2 px-3 border-b border-gray-200">{role.id}</td>
                  <td className="py-2 px-3 border-b border-gray-200">{role.name}</td>
                  <td className="py-2 px-3 border-b border-gray-200">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm focus:outline-none focus:shadow-outline mr-2"
                    >
                      Editar
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm focus:outline-none focus:shadow-outline"
                      onClick={() => handleDelete(role.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Agregar un rol">
        <CreaRolpage onCloseModal={handleCloseModal} updateRoleList={updateRoleList} />
      </Modal>
    </PrincipalLayout>
  );
};

export default GestionRoles;

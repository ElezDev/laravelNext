'use client'
import { useState, useEffect } from 'react'
import axios from '../../src/lib/axios'
import PrincipalLayout from '../../components/PrincipalLayout'
import { Role } from '@/app/models/rol-model'
import { Permission } from '@/app/models/permisos-model'
import Modal from '../../components/customModal'
import CreaRolpage from '@/app/crearRol/page'
import Button from '@/app/components/Button'

export default function AssignRoles() {
  const [roles, setRoles] = useState<Role[]>([])
  const [selectedRole, setSelectedRole] = useState<number | null>(null)
  const [permissions, setPermissions] = useState<Permission[]>([])
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    axios
      .get('/api/roles')
      .then(response => {
        const rolesData: Role[] = response.data
        setRoles(rolesData)
      })
      .catch(error => console.error(error))

    axios
      .get('/api/permisos')
      .then(response => {
        const permissionsData: Permission[] = response.data
        setPermissions(permissionsData)
      })
      .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    if (selectedRole) {
      axios
        .get(`/api/permisos_rol?rol=${selectedRole}`)
        .then(response => {
          const permissionsForRole: string[] = response.data
          setSelectedPermissions(permissionsForRole)
        })
        .catch(error => console.error(error))
    }
  }, [selectedRole])

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(Number(event.target.value))
  }

  const handlePermissionToggle = (permissionName: string) => {
    setSelectedPermissions(prevSelected => {
      if (prevSelected.includes(permissionName)) {
        return prevSelected.filter(item => item !== permissionName)
      } else {
        return [...prevSelected, permissionName]
      }
    })
  }

  const handleSubmit = () => {
    const data = {
      idRol: selectedRole,
      funciones: selectedPermissions,
    }

    axios
      .put('/api/asignar_rol_permiso', data)
      .then(response => alert('Permisos asignados correctamente'))
      .catch(error => console.error(error))
  }

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <PrincipalLayout>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Asignar Permisos a Rol
          </h1>
      
          <Button onClick={handleOpenModal} className="ml-3"> Abrir Modal</Button>
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700">
            Seleccionar Rol
          </label>
          <select
            id="role"
            name="role"
            onChange={handleRoleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm">
            <option value="">Seleccione un rol</option>
            {roles.map(role => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 w-full bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-medium mb-2 text-gray-800">
            Permisos
          </h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permiso
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descripción
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Asignar
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {permissions.map(permission => (
                <tr key={permission.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {permission.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {permission.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <input
                      type="checkbox"
                      checked={selectedPermissions.includes(permission.name)}
                      onChange={() => handlePermissionToggle(permission.name)}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4">
          Asignar Permisos
        </button>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Nuevo Modal">
          <CreaRolpage>
              
          </CreaRolpage>
        </Modal>
      </div>
    </PrincipalLayout>
  )
}

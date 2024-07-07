'use client'
import { useState, useEffect } from 'react'
import axios from '../../src/lib/axios'
import PrincipalLayout from '../../components/PrincipalLayout'

export default function AssignRoles() {
  const [roles, setRoles] = useState([])
  const [selectedRole, setSelectedRole] = useState(null)
  const [permissions, setPermissions] = useState([])
  const [selectedPermissions, setSelectedPermissions] = useState([])

  useEffect(() => {
    axios
      .get('/api/roles')
      .then(response => setRoles(response.data))
      .catch(error => console.error(error))

    axios
      .get('/api/permisos')
      .then(response => setPermissions(response.data))
      .catch(error => console.error(error))
  }, [])

  const handleRoleChange = event => {
    setSelectedRole(event.target.value)
  }

  const handlePermissionToggle = permissionName => {
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

  return (
    <PrincipalLayout>
      <div className="">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Asignar Permisos a Rol
        </h1>

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
                    {permission.Descripcion}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <input
                      type="checkbox"
                      checked={selectedPermissions.includes(
                        permission.name,
                      )}
                      onChange={() =>
                        handlePermissionToggle(
                          permission.name,
                        )
                      }
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
      </div>
    </PrincipalLayout>
  )
}

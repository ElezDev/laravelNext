import React from 'react';
import PrincipalLayout from '../components/PrincipalLayout';

const CreaRolpage = () => {
  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(event);
    
  };

  return (
    // <PrincipalLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Crear Nuevo Rol
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre del Rol
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
              Descripción del Rol
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Crear Rol
            </button>
          </div>
        </form>
      </div>
    // </PrincipalLayout>
  );
};

export default CreaRolpage;

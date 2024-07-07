import React from 'react'
import Header from '@/app/(app)/Header'

const Tienda = () => {
  const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', precio: 300 },
  ]

  return (
    <>
      <Header title="Tienda" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {productos.map(producto => (
                  <div key={producto.id} className="p-4 border rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold">{producto.nombre}</h3>
                    <p className="text-gray-700">Precio: ${producto.precio}</p>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Agregar al Carrito</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tienda

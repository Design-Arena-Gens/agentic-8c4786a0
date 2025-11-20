'use client'

import { useState } from 'react'
import { Users, ShoppingCart, TrendingUp, Award, Target, Share2, DollarSign, UserPlus } from 'lucide-react'

type Producto = {
  id: number
  nombre: string
  categoria: string
  precio: number
  comision: number
  imagen: string
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('productos')
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null)
  const [campaignData, setCampaignData] = useState({
    nombre: '',
    objetivo: '',
    duracion: '',
    incentivo: ''
  })

  const productos: Producto[] = [
    { id: 1, nombre: 'HemoHIM', categoria: 'Salud', precio: 89.99, comision: 25, imagen: '🏥' },
    { id: 2, nombre: 'Absolute Celactive', categoria: 'Cuidado Personal', precio: 65.99, comision: 30, imagen: '💆' },
    { id: 3, nombre: 'Atomy Propolis', categoria: 'Salud', precio: 45.99, comision: 28, imagen: '🍯' },
    { id: 4, nombre: 'Evening Care', categoria: 'Belleza', precio: 52.99, comision: 32, imagen: '✨' },
    { id: 5, nombre: 'Sunscreen', categoria: 'Cuidado Personal', precio: 29.99, comision: 25, imagen: '☀️' },
    { id: 6, nombre: 'Toothpaste', categoria: 'Higiene', precio: 15.99, comision: 20, imagen: '🦷' },
  ]

  const niveles = [
    { nivel: 'Distribuidor', ventas: '$0 - $500', comision: '20%', bono: '$0' },
    { nivel: 'Líder de Grupo', ventas: '$500 - $2,000', comision: '25%', bono: '$100' },
    { nivel: 'Gerente', ventas: '$2,000 - $5,000', comision: '30%', bono: '$300' },
    { nivel: 'Director', ventas: '$5,000+', comision: '35%', bono: '$1,000+' },
  ]

  const handleCampaignSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Campaña "${campaignData.nombre}" creada con éxito! Objetivo: ${campaignData.objetivo} distribuidores en ${campaignData.duracion} días.`)
    setCampaignData({ nombre: '', objetivo: '', duracion: '', incentivo: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Share2 className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Red Atomy</h1>
                <p className="text-sm text-gray-600">Sistema de Distribución en Red</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Tu Red</p>
                <p className="text-xl font-bold text-purple-600">47 Miembros</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Comisiones</p>
                <p className="text-xl font-bold text-green-600">$2,345</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex space-x-2 bg-white rounded-lg p-2 shadow-md">
          <button
            onClick={() => setActiveTab('productos')}
            className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-md transition-all ${
              activeTab === 'productos'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ShoppingCart size={20} />
            <span className="font-semibold">Productos</span>
          </button>
          <button
            onClick={() => setActiveTab('reclutamiento')}
            className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-md transition-all ${
              activeTab === 'reclutamiento'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <UserPlus size={20} />
            <span className="font-semibold">Reclutamiento</span>
          </button>
          <button
            onClick={() => setActiveTab('red')}
            className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-md transition-all ${
              activeTab === 'red'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users size={20} />
            <span className="font-semibold">Mi Red</span>
          </button>
          <button
            onClick={() => setActiveTab('compensacion')}
            className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-md transition-all ${
              activeTab === 'compensacion'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Award size={20} />
            <span className="font-semibold">Compensación</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Productos Tab */}
        {activeTab === 'productos' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <ShoppingCart className="mr-3 text-blue-600" />
                Catálogo de Productos Atomy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productos.map((producto) => (
                  <div
                    key={producto.id}
                    className="border-2 border-gray-200 rounded-lg p-6 hover:border-purple-400 transition-all hover:shadow-lg cursor-pointer"
                    onClick={() => setSelectedProduct(producto)}
                  >
                    <div className="text-6xl text-center mb-4">{producto.imagen}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{producto.nombre}</h3>
                    <p className="text-sm text-gray-600 mb-3">{producto.categoria}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-green-600">${producto.precio}</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {producto.comision}% comisión
                      </span>
                    </div>
                    <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-md hover:shadow-lg transition-all">
                      Compartir Producto
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Reclutamiento Tab */}
        {activeTab === 'reclutamiento' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Target className="mr-3 text-blue-600" />
                Crear Campaña de Reclutamiento
              </h2>
              <form onSubmit={handleCampaignSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre de la Campaña
                  </label>
                  <input
                    type="text"
                    value={campaignData.nombre}
                    onChange={(e) => setCampaignData({ ...campaignData, nombre: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                    placeholder="Ej: Expansión Q1 2024"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Objetivo de Distribuidores
                    </label>
                    <input
                      type="number"
                      value={campaignData.objetivo}
                      onChange={(e) => setCampaignData({ ...campaignData, objetivo: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      placeholder="50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Duración (días)
                    </label>
                    <input
                      type="number"
                      value={campaignData.duracion}
                      onChange={(e) => setCampaignData({ ...campaignData, duracion: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      placeholder="30"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Incentivo Especial
                  </label>
                  <input
                    type="text"
                    value={campaignData.incentivo}
                    onChange={(e) => setCampaignData({ ...campaignData, incentivo: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                    placeholder="Ej: Bono $200 por 5 reclutados"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all"
                >
                  Lanzar Campaña
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Share2 className="mr-3 text-purple-600" />
                Herramientas de Reclutamiento
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-all">
                  <h4 className="font-bold text-gray-800 mb-2">Link Personal</h4>
                  <p className="text-sm text-gray-600 mb-3">Comparte tu enlace único</p>
                  <code className="bg-gray-100 px-3 py-2 rounded text-xs block mb-3">
                    atomy.com/ref/TU123
                  </code>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Copiar Link
                  </button>
                </div>
                <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-all">
                  <h4 className="font-bold text-gray-800 mb-2">Material Digital</h4>
                  <p className="text-sm text-gray-600 mb-3">Imágenes y videos promocionales</p>
                  <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                    Descargar Pack
                  </button>
                </div>
                <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-all">
                  <h4 className="font-bold text-gray-800 mb-2">Guías de Presentación</h4>
                  <p className="text-sm text-gray-600 mb-3">Scripts y presentaciones</p>
                  <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                    Ver Guías
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Red Tab */}
        {activeTab === 'red' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="mr-3 text-blue-600" />
                Estructura de Mi Red
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                  <p className="text-sm opacity-90 mb-1">Nivel 1 (Directos)</p>
                  <p className="text-4xl font-bold">12</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                  <p className="text-sm opacity-90 mb-1">Nivel 2</p>
                  <p className="text-4xl font-bold">24</p>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg p-6 text-white">
                  <p className="text-sm opacity-90 mb-1">Nivel 3</p>
                  <p className="text-4xl font-bold">11</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
                  <p className="text-sm opacity-90 mb-1">Total Red</p>
                  <p className="text-4xl font-bold">47</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Distribuidores Activos</h3>
              <div className="space-y-3">
                {[
                  { nombre: 'María González', nivel: 1, ventas: '$1,250', miembros: 8 },
                  { nombre: 'Carlos Ruiz', nivel: 1, ventas: '$980', miembros: 5 },
                  { nombre: 'Ana Martínez', nivel: 1, ventas: '$2,100', miembros: 12 },
                  { nombre: 'José López', nivel: 1, ventas: '$750', miembros: 3 },
                ].map((distribuidor, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-purple-400 transition-all">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {distribuidor.nombre.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{distribuidor.nombre}</p>
                        <p className="text-sm text-gray-600">Nivel {distribuidor.nivel} • {distribuidor.miembros} en su red</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{distribuidor.ventas}</p>
                      <p className="text-sm text-gray-600">Este mes</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Compensación Tab */}
        {activeTab === 'compensacion' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="mr-3 text-blue-600" />
                Plan de Compensación
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
                  <DollarSign size={32} className="mb-2" />
                  <p className="text-sm opacity-90 mb-1">Comisiones del Mes</p>
                  <p className="text-3xl font-bold">$2,345</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                  <TrendingUp size={32} className="mb-2" />
                  <p className="text-sm opacity-90 mb-1">Bonos de Red</p>
                  <p className="text-3xl font-bold">$890</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                  <Award size={32} className="mb-2" />
                  <p className="text-sm opacity-90 mb-1">Total Ganado</p>
                  <p className="text-3xl font-bold">$3,235</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Niveles de Distribución</h3>
              <div className="space-y-4">
                {niveles.map((nivel, idx) => (
                  <div
                    key={idx}
                    className={`border-2 rounded-lg p-6 ${
                      idx === 1 ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Award className={idx === 1 ? 'text-purple-600' : 'text-gray-400'} size={28} />
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">{nivel.nivel}</h4>
                          {idx === 1 && (
                            <span className="text-sm text-purple-600 font-semibold">Tu Nivel Actual</span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">{nivel.comision}</p>
                        <p className="text-sm text-gray-600">de comisión</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-sm text-gray-600">Ventas Mensuales</p>
                        <p className="font-bold text-gray-800">{nivel.ventas}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Bono Mensual</p>
                        <p className="font-bold text-gray-800">{nivel.bono}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-purple-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <TrendingUp className="mr-2 text-purple-600" />
                  Bonos Adicionales
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Bono de Reclutamiento:</strong> $50 por cada distribuidor directo</li>
                  <li>• <strong>Bono de Liderazgo:</strong> 5% adicional sobre ventas de tu red de nivel 2</li>
                  <li>• <strong>Bono de Generación:</strong> 3% sobre niveles 3-5</li>
                  <li>• <strong>Bono Trimestral:</strong> Hasta $5,000 por alcanzar metas grupales</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

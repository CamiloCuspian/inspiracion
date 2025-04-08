import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Élégance Nocturne',
        description: 'Una fragancia sofisticada con notas de jazmín, vainilla y sándalo que evoca elegancia y misterio.',
        price: {
          baja: 75000,
          normal: 89000,
          alta: 115000
        },
        image: '/images/perfumes-mujer/perfume1.avif',
        category: 'mujer',
        topNotes: 'Jazmín, Bergamota',
        middleNotes: 'Rosa, Ylang-ylang',
        baseNotes: 'Vainilla, Sándalo, Ámbar'
      },
      {
        id: 2,
        name: 'Rose Éternelle',
        description: 'Una delicada combinación de pétalos de rosa, frutos rojos y almizcle para una mujer romántica y soñadora.',
        price: {
          baja: 65000,
          normal: 78000,
          alta: 98000
        },
        image: '/images/perfumes-mujer/perfume2.avif',
        category: 'mujer',
        topNotes: 'Frutos rojos, Bergamota',
        middleNotes: 'Rosa, Peonía',
        baseNotes: 'Almizcle, Sándalo'
      },
      {
        id: 3,
        name: 'Séduction Florale',
        description: 'Un bouquet floral con toques cítricos y amaderados que deja una estela encantadora y seductora.',
        price: {
          baja: 82000,
          normal: 95000,
          alta: 125000
        },
        image: '/images/perfumes-mujer/perfume3.avif',
        category: 'mujer',
        topNotes: 'Mandarina, Neroli',
        middleNotes: 'Gardenia, Jazmín',
        baseNotes: 'Pachulí, Cedro'
      },
      {
        id: 4,
        name: 'Aventure Bleu',
        description: 'Una fragancia fresca y vibrante con notas acuáticas y cítricas ideal para el hombre aventurero.',
        price: {
          baja: 70000,
          normal: 85000,
          alta: 110000
        },
        image: '/images/perfumes-hombre/perfume1.avif',
        category: 'hombre',
        topNotes: 'Limón, Bergamota',
        middleNotes: 'Notas acuáticas, Lavanda',
        baseNotes: 'Cedro, Ámbar gris'
      },
      {
        id: 5,
        name: 'Bois Noir',
        description: 'Intenso y misterioso con notas de especias, madera y cuero para un hombre con carácter.',
        price: {
          baja: 78000,
          normal: 92000,
          alta: 120000
        },
        image: '/images/perfumes-hombre/perfume2.avif',
        category: 'hombre',
        topNotes: 'Pimienta negra, Nuez moscada',
        middleNotes: 'Cedro, Vetiver',
        baseNotes: 'Cuero, Ámbar'
      },
      {
        id: 6,
        name: 'L\'Homme Idéal',
        description: 'Elegante y versátil con notas frescas y amaderadas para un hombre moderno y sofisticado.',
        price: {
          baja: 72000,
          normal: 88000,
          alta: 115000
        },
        image: '/images/perfumes-hombre/perfume3.avif',
        category: 'hombre',
        topNotes: 'Bergamota, Menta',
        middleNotes: 'Cardamomo, Lavanda',
        baseNotes: 'Sándalo, Haba Tonka'
      }
    ]
  }),
  getters: {
    getMenProducts: (state) => {
      return state.products.filter(product => product.category === 'hombre')
    },
    getWomenProducts: (state) => {
      return state.products.filter(product => product.category === 'mujer')
    },
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === parseInt(id))
    }
  }
})
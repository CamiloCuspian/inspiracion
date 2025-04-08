import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Coconut Passión',
        description: 'Una fragancia sofisticada con notas de jazmín, vainilla y sándalo que evoca elegancia y misterio.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/coconut-pasion.avif',
        category: 'mujer',
        topNotes: 'Avanillado, Coco',
        middleNotes: 'Dulce, Lactónico',
        baseNotes: 'Atalcado, Tropical'
      },
      {
        id: 2,
        name: 'Aqua Di Gio',
        description: 'Una delicada combinación de pétalos de rosa, frutos rojos y almizcle para una mujer romántica y soñadora.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/aqua-di-gio.avif',
        category: 'mujer',
        topNotes: 'Florales, Fresco, Floral Blanco',
        middleNotes: 'Verde, Vodka, Rosas',
        baseNotes: 'Afrutados, Dulce, Atalcado, Amaderado'
      },
      {
        id: 3,
        name: 'Bombshell',
        description: 'Un bouquet floral con toques cítricos y amaderados que deja una estela encantadora y seductora.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/bombshell.avif',
        category: 'mujer',
        topNotes: 'Fresco, Florales, Cítrico',
        middleNotes: 'Dulce, Tropical, Afrutados',
        baseNotes: 'Amaderado, Aromático, Rosas'
      },
      {
        id: 4,
        name: 'Can Can',
        description: 'Un bouquet floral con toques cítricos y amaderados que deja una estela encantadora y seductora.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/can-can-paris.avif',
        category: 'mujer',
        topNotes: 'Afrutados, Dulce, Ámbar',
        middleNotes: 'Atalcado, Cítrico, Florales',
        baseNotes: 'Amaderado, Animálico'
      },
      {
        id: 5,
        name: 'Cloud',
        description: 'Un bouquet floral con toques cítricos y amaderados que deja una estela encantadora y seductora.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/cloud-arian.avif',
        category: 'mujer',
        topNotes: 'Dulce',
        middleNotes: 'Latónico',
        baseNotes: 'Avainillado, Coco'
      },
      {
        id: 6,
        name: 'Ch',
        description: 'Un bouquet floral con toques cítricos y amaderados que deja una estela encantadora y seductora.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/ch-carolina.avif',
        category: 'mujer',
        topNotes: 'Cítrico, Amaderado, Dulce',
        middleNotes: 'Floral Blanco, Cuero',
        baseNotes: 'Animálico, pachulí'
      },


      // Categoria hombre
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
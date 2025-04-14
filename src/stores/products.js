import { defineStore } from 'pinia'

// Función para generar slugs desde nombres
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')         // Reemplaza espacios con guiones
    .replace(/[^\w\-]+/g, '')     // Elimina caracteres especiales
    .replace(/\-\-+/g, '-')       // Reemplaza múltiples guiones con uno solo
    .replace(/^-+/, '')           // Elimina guiones al inicio
    .replace(/-+$/, '')           // Elimina guiones al final
    .normalize('NFD')             // Normaliza caracteres acentuados
    .replace(/[\u0300-\u036f]/g, ''); // Elimina diacríticos
}

export const useProductsStore = defineStore('products', {
  state: () => {
    // Primero definimos los productos
    const products = [
      // Perfumes de mujer
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

      // Perfumes de hombre
      {
        id: 7,
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
        id: 8,
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
        id: 9,
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
      },

      // Perfumes árabes
      {
        id: 10,
        name: 'Oud Royal',
        description: 'Una exquisita fragancia árabe con auténtico oud, un ingrediente legendario conocido como "oro líquido". Notas profundas de madera, especias exóticas y sutiles toques florales.',
        price: {
          baja: 95000,
          normal: 130000,
          alta: 175000
        },
        image: '/images/perfumes-arabes/oud-royal.avif',
        category: 'arabe',
        topNotes: 'Azafrán, Incienso, Pimienta rosa',
        middleNotes: 'Oud, Cedro, Rosa de Damasco',
        baseNotes: 'Ámbar, Pachulí, Vainilla'
      },
      {
        id: 11,
        name: 'Amber Sultán',
        description: 'Una fragancia cálida y envolvente, inspirada en los palacios de Oriente Medio. Cautivadora combinación de ámbar dorado, sándalo y mirra que evoca el lujo de las noches del desierto.',
        price: {
          baja: 85000,
          normal: 120000,
          alta: 160000
        },
        image: '/images/perfumes-arabes/amber-sultan.avif',
        category: 'arabe',
        topNotes: 'Bergamota, Mirra, Cardamomo',
        middleNotes: 'Ámbar, Rosa, Jazmín',
        baseNotes: 'Sándalo, Vainilla, Almizcle'
      },
      {
        id: 12,
        name: 'Desert Mirage',
        description: 'Una interpretación moderna de la perfumería árabe tradicional. Combina notas frescas de cítricos con corazón de especias exóticas y una base intensa de maderas preciosas.',
        price: {
          baja: 80000,
          normal: 115000,
          alta: 155000
        },
        image: '/images/perfumes-arabes/desert-mirage.avif',
        category: 'arabe',
        topNotes: 'Limón, Canela, Nuez moscada',
        middleNotes: 'Oud, Incienso, Jazmín',
        baseNotes: 'Almizcle, Vainilla, Cuero'
      },
      {
        id: 13,
        name: 'Mystic Night',
        description: 'Una seductora experiencia olfativa que evoca las misteriosas noches de Arabia. Combina esencias exóticas con un fondo amaderado y ambarino que perdura en la piel.',
        price: {
          baja: 90000,
          normal: 125000,
          alta: 165000
        },
        image: '/images/perfumes-arabes/mystic-night.avif',
        category: 'arabe',
        topNotes: 'Cardamomo, Comino, Bergamota',
        middleNotes: 'Rosa, Oud, Pachulí',
        baseNotes: 'Ámbar, Almizcle, Cuero'
      },

      // Bolsos de mano
      {
        id: 14,
        name: 'Bolso Lila',
        description: 'Hermoso bloso para combinar tus mejores outits.',
        price: 50000,
        image: '/images/bolsos/bolso-lila.avif',
        category: 'bolso',
        color: 'Lyla',
        material: 'Sintético',
      },
      {
        id: 15,
        name: 'Bolso Negro',
        description: 'Bolso tote espacioso y versátil para el día a día. Combina estilo y funcionalidad con múltiples bolsillos interiores y un diseño atemporal.',
        price: 50000,
        image: '/images/bolsos/bolso-negro.avif',
        category: 'bolso',
        color: 'Negro',
        material: 'Cuero sintético de alta calidad',
      },
      {
        id: 16,
        name: 'Crossbody Chic',
        description: 'Bolso crossbody compacto y elegante con cadena ajustable. Perfecto para llevar lo esencial con estilo cuando necesitas libertad de movimiento.',
        price: 95000,
        image: '/images/bolsos/crossbody-chic.avif',
        category: 'bolso',
        color: 'Rojo',
        material: 'Cuero sintético',
        dimensions: '20cm x 15cm x 7cm'
      },
      {
        id: 17,
        name: 'Backpack Modern',
        description: 'Mochila moderna con diseño elegante, ideal para la mujer actual. Combina estilo urbano con funcionalidad para el día a día o viajes cortos.',
        price: 135000,
        image: '/images/bolsos/backpack-modern.avif',
        category: 'bolso',
        color: 'Azul marino',
        material: 'Nylon y cuero',
        dimensions: '30cm x 40cm x 15cm'
      }
    ];
    
    // Añadimos los slugs a cada producto
    products.forEach(product => {
      product.slug = generateSlug(product.name);
    });
    
    return { products };
  },
  getters: {
    getMenProducts: (state) => {
      return state.products.filter(product => product.category === 'hombre')
    },
    getWomenProducts: (state) => {
      return state.products.filter(product => product.category === 'mujer')
    },
    getArabicProducts: (state) => {
      return state.products.filter(product => product.category === 'arabe')
    },
    getHandbags: (state) => {
      return state.products.filter(product => product.category === 'bolso')
    },
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === parseInt(id))
    },
    getProductBySlug: (state) => (slug) => {
      return state.products.find(product => product.slug === slug)
    }
  }
})
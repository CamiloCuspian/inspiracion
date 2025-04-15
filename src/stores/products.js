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
      {
        id: 7,
        name: '212 Carolina Herrera',
        description: 'Un aroma fresco, moderno y urbano, ideal para el día a día.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/212-carolina-herrera.avif',
        category: 'mujer',
        topNotes: 'Floral Blanco, Florares',
        middleNotes: 'Citrico, Atalcado',
        baseNotes: 'Animálico, Verde'
      },
      {
        id: 8,
        name: '212 Sexy de Carolina Herrera',
        description: 'Una fragancia seductora y envolvente con un toque de misterio.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/212-sexy-carolina-herrera.avif',
        category: 'mujer',
        topNotes: 'Dulce, Atalcado, Almizclado',
        middleNotes: 'Avanillado, Caramelo, Florales',
        baseNotes: 'Citrico, Amaderado'
      },
      {
        id: 9,
        name: '212 VIP Carolina Herrera',
        description: 'Un aroma exclusivo y festivo, perfecto para destacar en la noche.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/212-vip-carolina-herrera.avif',
        category: 'mujer',
        topNotes: 'Avanillado, Ron, Dulce',
        middleNotes: 'Tropical, Afrutados, Floral Blanco',
        baseNotes: 'Atalcado, Amaderado, Fresco'
      },
      {
        id: 10,
        name: ' 273 Rodeo Drive Fred Hayman',
        description: 'Clásico y glamuroso, con un aire vintage y elegante.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/273-rodeo-drive-fred-hayman.avif',
        category: 'mujer',
        topNotes: 'Floral Blanco, Florares',
        middleNotes: 'Citrico, Atalcado',
        baseNotes: 'Animálico, Verde'
      },
      {
        id: 11,
        name: '360 Perry Ellis',
        description: 'Fresco, limpio y enérgico, ideal para el día a día.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/360-perry-ellis.avif',
        category: 'mujer',
        topNotes: 'Floral Blanco, Florares, Fresco',
        middleNotes: 'Acuatico, Aromático, Afrutados',
        baseNotes: 'Especiado Suave, Amaderado, Almizcldo'
      },
      {
        id: 12,
        name: 'Olympea Paco Rabanne',
        description: 'Femenina y poderosa, con un toque salado y oriental.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/olympea-paco-rabanne.avif',
        category: 'mujer',
        topNotes: 'Floral Blanco, Avanillado',
        middleNotes: 'Citrico, Atalcado, Ambar',
        baseNotes: 'Cálido Especiado, Baisámico'
      },
      {
        id: 13,
        name: 'Omnia Coral Bvlgari',
        description: 'Vibrante y tropical, con notas frutales y florales.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/omnia-coral-bvlgari.avif',
        category: 'mujer',
        topNotes: 'Florares, Amaderado, Fresco Especiado',
        middleNotes: 'Afrutados, Almizclado',
        baseNotes: 'Citrico, Acuatico, Amargo'
      },
      {
        id: 14,
        name: 'Omnia Crystalline Bvlgari',
        description: 'Delicada y pura, inspirada en la transparencia del cristal.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/omnia-crystalline-bvlgari.avif',
        category: 'mujer',
        topNotes: 'Amaderado, Florales, Almizclado',
        middleNotes: 'Acuatico, Verde, Ozónico',
        baseNotes: 'Afrutados, Fresco, Atalcado '
      },
      {
        id: 15,
        name: 'Pure XS For Her Paco Rabanne',
        description: 'Atrevida y adictiva, con una mezcla dulce y sensual.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/pure-xs-for-her-paco-rabanne.avif',
        category: 'mujer',
        topNotes: 'Avanillado, Amaderado, Atalcado',
        middleNotes: 'Coco, Floral Amarillo, Lactonico',
        baseNotes: 'Almizclado, Floral Blanco, Afrutados'
      },
      {
        id: 16,
        name: ' Ralph Ralph Lauren',
        description: 'Juvenil y fresco, con un espíritu libre y veraniego.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/ralph-lauren.avif',
        category: 'mujer',
        topNotes: 'Floral, Frutado',
        middleNotes: 'Citrinos, Fresco',
        baseNotes: 'Verde'
      },
      {
        id: 17,
        name: 'Rose CH Carolina Herrera',
        description: 'Romántico y suave, con el encanto de una rosa moderna.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/rose-ch-carolina-herrera.avif',
        category: 'mujer',
        topNotes: 'Afrutados, Champan, Florares',
        middleNotes: 'Aldehídico, Dulce, Almizclado',
        baseNotes: 'Amaderado, Citrico, Atalcado'
      },
      {
        id: 18,
        name: 'Selena Gomez Eau de Parfum',
        description: 'Dulce, coqueta y divertida, con un toque de fruta jugosa.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/selena-gomez-eau-de-parfum.avif',
        category: 'mujer',
        topNotes: 'Dulce, Afrutados',
        middleNotes: 'Vainilla',
        baseNotes: 'Chocolate'
      },
      {
        id: 19,
        name: 'Sofia Sofia Vergara',
        description: 'Elegante y femenina, con una mezcla floral y oriental.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/sofia-sofia-vergara.avif',
        category: 'mujer',
        topNotes: 'Afrutados, Amaderados, Dulce',
        middleNotes: 'Atalcado, Avanillado, Aromatico',
        baseNotes: 'Florales, Rosas'
      },
      {
        id: 20,
        name: 'Thank U, Next Ariana Grande',
        description: 'Dulce, atrevido y moderno, con personalidad pop.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/thank-u-nex-ariana-grande.avif',
        category: 'mujer',
        topNotes: 'Dulce, Coco, Afrutados',
        middleNotes: 'Afrutados, Avanillado',
        baseNotes: 'Almendrado'
      },
      {
        id: 21,
        name: 'Tommy Girl – Tommy Hilfiger',
        description: 'Refrescante y juvenil, con esencia libre y aventurera.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/tommy-girl-tommy-hilfiger.avif',
        category: 'mujer',
        topNotes: 'Citrico, Floral Blanco, Florales',
        middleNotes: 'Afrutados, Aromático, Rosas',
        baseNotes: 'Verde Atalcado, Amaderado'
      },
      {
        id: 22,
        name: 'Touch of Pink – Lacoste Fragrances',
        description: 'Femenina y alegre, con notas cítricas y florales.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/touch-of-pink-lacoste-fragrances.avif',
        category: 'mujer',
        topNotes: 'Citrico, Atalcado, Dulce',
        middleNotes: 'Afrutados, Avanillado, Aromatico',
        baseNotes: 'Calido Especiado, Floral Blanco, Amaderado'
      },
      {
        id: 23,
        name: 'Viva La Juicy – Juicy Couture',
        description: 'Dulce y glam, ideal para chicas atrevidas y divertidas.',
        price: {
          baja: 10000,
          normal: 15000,
          alta: 20000
        },
        image: '/images/perfumes-mujer/viva-la-juicy-couture.avif',
        category: 'mujer',
        topNotes: 'Dulce, Floral Blanco, Caramelo',
        middleNotes: 'Afrutados, Avanillado, Citrico',
        baseNotes: 'Amaderado, laxtónico, Atalcado'
      },

      // Perfumes de hombre
      {
        id: 40,
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
        id: 41,
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
        id: 42,
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
        id: 60,
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
        id: 61,
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
        id: 62,
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
        id: 63,
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
        id: 80,
        name: 'Bolso Lila',
        description: ' Este bolso de mano refleja elegancia urbana y funcionalidad en cada detalle. Con acabados de calidad y un diseño que se adapta a cualquier ocasión, es el complemento ideal para quienes aman destacar con sutileza.',
        price: 50000,
        image: '/images/bolsos/bolso-lila.avif',
        category: 'bolso',
        color: 'Lyla',
        material: 'Sintético',
      },
      {
        id: 81,
        name: 'Bolso Negro',
        description: ' Este bolso de mano refleja elegancia urbana y funcionalidad en cada detalle. Con acabados de calidad y un diseño que se adapta a cualquier ocasión, es el complemento ideal para quienes aman destacar con sutileza.',
        price: 50000,
        image: '/images/bolsos/bolso-negro.avif',
        category: 'bolso',
        color: 'Negro',
        material: 'Cuero sintético de alta calidad',
      },
      {
        id: 82,
        name: 'Bolso Rojo',
        description: ' Este bolso de mano refleja elegancia urbana y funcionalidad en cada detalle. Con acabados de calidad y un diseño que se adapta a cualquier ocasión, es el complemento ideal para quienes aman destacar con sutileza.',
        price: 95000,
        image: '/images/bolsos/bolso-rojo.avif',
        category: 'bolso',
        color: 'Rojo',
        material: 'Cuero sintético',
        dimensions: '20cm x 15cm x 7cm'
      },
      {
        id: 83,
        name: 'Bolso Blanco con gravado elegante',
        description: ' Este bolso de mano refleja elegancia urbana y funcionalidad en cada detalle. Con acabados de calidad y un diseño que se adapta a cualquier ocasión, es el complemento ideal para quienes aman destacar con sutileza.',
        price: 135000,
        image: '/images/bolsos/bolso-blanco-gravado.avif',
        category: 'bolso',
        color: 'Azul marino',
        material: 'Nylon y cuero',
        dimensions: '30cm x 40cm x 15cm'
      },
      {
        id: 84,
        name: 'Bolso Blanco',
        description: ' Este bolso de mano refleja elegancia urbana y funcionalidad en cada detalle. Con acabados de calidad y un diseño que se adapta a cualquier ocasión, es el complemento ideal para quienes aman destacar con sutileza.',
        price: 135000,
        image: '/images/bolsos/bolso-blanco.avif',
        category: 'bolso',
        color: 'Azul marino',
        material: 'Nylon y cuero',
        dimensions: '30cm x 40cm x 15cm'
      },
      {
        id: 85,
        name: 'Bolso Rosa',
        description: ' Este bolso de mano refleja elegancia urbana y funcionalidad en cada detalle. Con acabados de calidad y un diseño que se adapta a cualquier ocasión, es el complemento ideal para quienes aman destacar con sutileza.',
        price: 135000,
        image: '/images/bolsos/bolso-rosado.avif',
        category: 'bolso',
        color: 'Azul marino',
        material: 'Nylon y cuero',
        dimensions: '30cm x 40cm x 15cm'
      },
      {
        id: 86,
        name: 'Bolso Rosado',
        description: ' Este bolso de mano refleja elegancia urbana y funcionalidad en cada detalle. Con acabados de calidad y un diseño que se adapta a cualquier ocasión, es el complemento ideal para quienes aman destacar con sutileza.',
        price: 135000,
        image: '/images/bolsos/bolso-rosado.avif',
        category: 'bolso',
        color: 'Azul marino',
        material: 'Nylon y cuero',
        dimensions: '30cm x 40cm x 15cm'
      },
      {
        id: 67,
        name: 'Bolso Marrón',
        description: ' Este bolso de mano refleja elegancia urbana y funcionalidad en cada detalle. Con acabados de calidad y un diseño que se adapta a cualquier ocasión, es el complemento ideal para quienes aman destacar con sutileza.',
        price: 135000,
        image: '/images/bolsos/bolso-marron.avif',
        category: 'bolso',
        color: 'Azul marino',
        material: 'Nylon y cuero',
        dimensions: '30cm x 40cm x 15cm'
      },
      {
        id: 88,
        name: 'Bolso Rojo',
        description: ' Este bolso de mano refleja elegancia urbana y funcionalidad en cada detalle. Con acabados de calidad y un diseño que se adapta a cualquier ocasión, es el complemento ideal para quienes aman destacar con sutileza.',
        price: 135000,
        image: '/images/bolsos/bolso-rojo-pitalito.avif',
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
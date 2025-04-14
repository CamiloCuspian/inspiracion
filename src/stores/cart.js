import { defineStore } from 'pinia'
import { useProductsStore } from './products'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  getters: {
    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },
    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    },
    formattedTotal: (state) => {
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      }).format(state.items.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0))
    }
  },
  actions: {
    addToCart(productId, concentration = 'normal') {
      const productsStore = useProductsStore()
      const product = productsStore.getProductById(productId)
      
      if (!product) {
        console.error(`Producto con ID ${productId} no encontrado`)
        return
      }
      
      // Verificamos si es un perfume (que tiene precios por concentración)
      const isFragrance = product.hasOwnProperty('price') && typeof product.price === 'object'
      
      if (isFragrance) {
        const existingItem = this.items.find(
          item => item.id === product.id && item.concentration === concentration
        )
        
        // Obtenemos el precio específico para esta concentración
        const specificPrice = product.price[concentration]
        
        if (existingItem) {
          existingItem.quantity++
          console.log(`Aumentada cantidad de ${product.name} (${concentration})`, this.items)
        } else {
          this.items.push({
            id: product.id,
            name: product.name,
            price: specificPrice,
            image: product.image,
            quantity: 1,
            concentration,
            type: 'fragrance'
          })
          console.log(`Añadido nuevo producto ${product.name} (${concentration}) a ${specificPrice}`, this.items)
        }
      }
      
      // Utilizar localStorage para persistencia
      this.saveToLocalStorage()
    },

    // Método específico para añadir bolsos
    addHandbagToCart(productId) {
      const productsStore = useProductsStore()
      const product = productsStore.getProductById(productId)
      
      if (!product) {
        console.error(`Bolso con ID ${productId} no encontrado`)
        return
      }
      
      const existingItem = this.items.find(
        item => item.id === product.id && item.type === 'handbag'
      )
      
      if (existingItem) {
        existingItem.quantity++
        console.log(`Aumentada cantidad de bolso ${product.name}`, this.items)
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
          type: 'handbag',
          color: product.color,
          material: product.material
        })
        console.log(`Añadido nuevo bolso ${product.name}`, this.items)
      }
      
      // Utilizar localStorage para persistencia
      this.saveToLocalStorage()
    },

    removeFromCart(itemIndex) {
      if (itemIndex >= 0 && itemIndex < this.items.length) {
        this.items.splice(itemIndex, 1)
        this.saveToLocalStorage()
        console.log('Producto eliminado del carrito', this.items)
      } else {
        console.error(`Índice inválido: ${itemIndex}`)
      }
    },

    updateQuantity(itemIndex, quantity) {
      if (itemIndex >= 0 && itemIndex < this.items.length) {
        if (quantity <= 0) {
          this.removeFromCart(itemIndex)
        } else {
          this.items[itemIndex].quantity = quantity
          this.saveToLocalStorage()
          console.log(`Cantidad actualizada para ${this.items[itemIndex].name}`, this.items)
        }
      } else {
        console.error(`Índice inválido: ${itemIndex}`)
      }
    },

    clearCart() {
      this.items = []
      this.saveToLocalStorage()
      console.log('Carrito vaciado')
    },

    getWhatsAppLink() {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const baseUrl = isMobile ? 'whatsapp://send' : 'https://web.whatsapp.com/send'
      
      let message = 'Hola, me gustaría realizar la siguiente compra: \n\n'
      
      this.items.forEach(item => {
        if (item.type === 'fragrance') {
          const concentrationText = 
            item.concentration === 'alta' ? 'Alta concentración' : 
            item.concentration === 'normal' ? 'Concentración normal' : 
            'Baja concentración'
          
          message += `*${item.name}* (Perfume)\n`
          message += `- Cantidad: ${item.quantity}\n`
          message += `- Concentración: ${concentrationText}\n`
        } else if (item.type === 'handbag') {
          message += `*${item.name}* (Bolso)\n`
          message += `- Cantidad: ${item.quantity}\n`
          message += `- Color: ${item.color}\n`
          message += `- Material: ${item.material}\n`
        }
        
        const itemPrice = new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 0
        }).format(item.price)
        
        message += `- Precio unitario: ${itemPrice}\n\n`
      })
      
      message += `Total: ${this.formattedTotal}`
      
      return `${baseUrl}?phone=573209209176&text=${encodeURIComponent(message)}`
    },

    saveToLocalStorage() {
      try {
        localStorage.setItem('inspiracion-cart', JSON.stringify(this.items))
      } catch (error) {
        console.error('Error al guardar el carrito en localStorage:', error)
      }
    },

    loadFromLocalStorage() {
      try {
        const savedCart = localStorage.getItem('inspiracion-cart')
        if (savedCart) {
          this.items = JSON.parse(savedCart)
          console.log('Carrito cargado desde localStorage:', this.items)
        }
      } catch (error) {
        console.error('Error al cargar el carrito desde localStorage:', error)
      }
    }
  }
})
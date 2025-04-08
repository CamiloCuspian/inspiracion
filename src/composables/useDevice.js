import { ref, onMounted, onUnmounted } from 'vue'

export function useDevice() {
  const isMobile = ref(false)
  
  const checkDevice = () => {
    isMobile.value = window.innerWidth <= 768 || 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }
  
  onMounted(() => {
    checkDevice()
    window.addEventListener('resize', checkDevice)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', checkDevice)
  })
  
  return {
    isMobile
  }
}
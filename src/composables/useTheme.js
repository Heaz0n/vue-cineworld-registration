import { ref, onMounted } from 'vue'

export function useTheme() {
  const isDarkTheme = ref(false)

  onMounted(() => {
    const savedTheme = localStorage.getItem('cineworld-theme')
    if (savedTheme) {
      isDarkTheme.value = savedTheme === 'dark'
    }
  })

  return {
    isDarkTheme
  }
}
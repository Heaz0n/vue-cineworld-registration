<template>
  <div id="app" :class="{ 'dark-theme': isDarkTheme }">
    <header class="header">
      <div class="header__container">
        <div class="header__top">
          <h1 class="header__logo">CineWorld</h1>
          <button 
            class="theme-toggle"
            @click="toggleTheme"
            :aria-label="isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'"
          >
            <span class="theme-toggle__text">
              {{ isDarkTheme ? 'Light theme' : 'Dark theme' }}
            </span>
            <div class="theme-toggle__slider" :class="{ 'theme-toggle__slider--active': isDarkTheme }">
              <span class="theme-toggle__knob"></span>
            </div>
          </button>
        </div>
      </div>
    </header>

    <main class="main">
      <RegistrationForm />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RegistrationForm from './components/RegistrationForm.vue'

const isDarkTheme = ref(false)

// Загрузка темы из localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem('cineworld-theme')
  if (savedTheme) {
    isDarkTheme.value = savedTheme === 'dark'
  }
})

// Переключение темы
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  localStorage.setItem('cineworld-theme', isDarkTheme.value ? 'dark' : 'light')
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  // Light theme variables
  --bg-primary: #FFFFFF;
  --bg-secondary: #ECF6FE;
  --text-primary: #242527;
  --text-secondary: #242527;
  --border-color: #8F6CBC;
  --accent-color: #440A8F;
  --accent-hover: #36156e;
  --success-color: #440A8F;
  --error-color: #E7472D;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  --transition: all 0.35s ease;
  --theme-color: #440A8F;
  --input-bg: #FFFFFF;
  --checkbox-bg: #FFFFFF;
}

.dark-theme {
  // Dark theme variables
  --bg-primary: #000000;
  --bg-secondary: #081D2F;
  --text-primary: #BD9BE9;
  --text-secondary: #BD9BE9;
  --border-color: #AA70F5;
  --accent-color: #AA70F5;
  --accent-hover: #BD9BE9;
  --success-color: #AA70F5;
  --error-color: #E7472D;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  --theme-color: #AA70F5;
  --input-bg: #081D2F;
  --checkbox-bg: #081D2F;
}

#app {
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: var(--transition);
  font-family: 'Space Mono', monospace;
}

.header {
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  padding: 1.5rem 0;
  transition: var(--transition);

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__logo {
    color: var(--accent-color);
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    order: 1;

    @media (min-width: 768px) {
      order: 0;
    }
  }
}

.theme-toggle {
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: var(--transition);
  order: 2;
  background-color: var(--bg-primary);
  font-family: 'Space Mono', monospace;
  font-size: 14px;
  font-weight: 400;

  &:hover {
    transform: translateY(-2px);
  }

  &__slider {
    position: relative;
    width: 50px;
    height: 24px;
    background-color: var(--border-color);
    border-radius: 12px;
    transition: var(--transition);
    display: flex;
    align-items: center;
    padding: 0 3px;

    &--active {
      background-color: var(--theme-color);
      
      .theme-toggle__knob {
        transform: translateX(26px);
        background-color: white;
      }
    }
  }

  &__knob {
    width: 18px;
    height: 18px;
    background-color: white;
    border-radius: 50%;
    transition: var(--transition);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &__text {
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
  }
}

.main {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
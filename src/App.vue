<template>
  <div id="app" :class="{ 'dark-theme': isDarkTheme }">
    <header class="header">
      <div class="header__container">
        <div class="header__top">
          <div class="header__logo">
            <img 
              :src="isDarkTheme ? logoDark : logoWhite" 
              alt="CineWorld" 
              class="header__logo-image"
            >
            <h1 class="header__logo-text">CineWorld</h1>
          </div>
          <button 
            class="theme-toggle"
            @click="toggleTheme"
            :aria-label="isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'"
          >
            <div class="theme-toggle__slider" :class="{ 'theme-toggle__slider--active': !isDarkTheme }">
              <span class="theme-toggle__knob"></span>
            </div>
            <span class="theme-toggle__text">
              {{ isDarkTheme ? 'Light theme' : 'Dark theme' }}
            </span>
          </button>
        </div>
      </div>
    </header>

    <main class="main">
      <RegistrationForm :is-dark-theme="isDarkTheme" />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RegistrationForm from './components/RegistrationForm.vue'
import logoWhite from '@/assets/logo/logo-white.svg'
import logoDark from '@/assets/logo/logo-dark.svg'

const isDarkTheme = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('cineworld-theme')
  if (savedTheme) {
    isDarkTheme.value = savedTheme === 'dark'
  }
})

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
  // Цвета фона
  --bg-primary: #ECF6FE;
  --bg-secondary: #ECF6FE;
  --input-bg: #FFFFFF;
  --checkbox-bg: #FFFFFF;
  
  // Цвета текста
  --text-primary: #242527;
  --text-secondary: #242527;
  --input-text: #A185C7;
  --placeholder-color: #A185C7;
  
  // Акцентные цвета
  --accent-color: #440A8F;
  --accent-hover: #36156e;
  --border-color: #A96FF5;
  --theme-color: #440A8F;
  --success-color: #440A8F;
  --success-message-color: #43098F;
  
  // Системные цвета
  --error-color: #E7472D;
  
  // Цвета кнопок
  --button-bg: #878D92;
  --button-hover: #6c7378;
  
  // Эффекты
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  --transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark-theme {
  // Цвета фона
  --bg-primary: #081D2F;
  --bg-secondary: #000000;
  --input-bg: #000000;
  --checkbox-bg: #000000;
  
  // Цвета текста
  --text-primary: #BD9BE9;
  --text-secondary: #BD9BE9;
  --input-text: #FFFFFF;
  --placeholder-color: #FFFFFF;
  
  // Акцентные цвета
  --accent-color: #AA70F5;
  --accent-hover: #BD9BE9;
  --border-color: #FFFFFF;
  --theme-color: #AA70F5;
  --success-color: #AA70F5;
  --success-message-color: #A96FF5;
  
  // Системные цвета (остаются теми же)
  --error-color: #E7472D;
  
  // Цвета кнопок (остаются теми же)
  --button-bg: #878D92;
  --button-hover: #6c7378;
  
  // Эффекты
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  --transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  // Стили для кнопок в темной теме - ЧЕРНЫЙ ТЕКСТ
  .registration__button:not(.registration__button--disabled) {
    background: #a96ff5 !important;
    color: #000000 !important;
    
    &:hover {
      background: #524C7A !important;
      color: #000000 !important;
    }
  }

  // ИСПРАВЛЕНО: неактивная кнопка - цвет #615B8A и черный текст
  .registration__button--disabled {
    background: #a96ff5 !important;
    color: #000000 !important;
    
    &:hover {
      background: #a96ff5 !important;
      color: #000000 !important;
    }
  }

  .success__button {
    background: #a96ff5 !important;
    color: #000000 !important;
    
    &:hover {
      background: #524C7A !important;
      color: #000000 !important;
    }
  }
}

#app {
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: var(--transition);
  font-family: 'Space Mono', monospace;
}

.dark-theme #app {
  font-family: inherit;
}

.header {
  background-color: var(--bg-primary);
  padding: 1rem 0;
  transition: var(--transition);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 40%;
    transform: translateX(-40%);
    width: 95%;
    height: 1.5px;
    background-color: var(--border-color);
 }

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  &__top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    order: 1;

    @media (min-width: 768px) {
      order: 0;
    }
  }

  &__logo-image {
    width: 32px;
    height: 32px;
    transition: var(--transition);
  }

  &__logo-text {
    color: var(--accent-color);
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    margin: 0;
    font-family: 'Space Mono', monospace;
  }
}

.dark-theme .header__logo-text {
  font-family: inherit;
}

.theme-toggle {
  background: none;
  border: none;
  padding: 0.5rem 0;
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: var(--transition);
  order: 2;
  background-color: var(--bg-primary);
  font-size: 14px;
  font-weight: 500;
  flex-direction: row;
  text-transform: none;
  letter-spacing: normal;
  font-family: inherit;

  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
  }

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
    font-weight: 800;
    color: var(--accent-color);
    white-space: nowrap;
    text-transform: none;
    letter-spacing: normal;
    font-family: inherit;
    
    &::first-letter {
      text-transform: uppercase;
    }
  }
}

/* Темная тема для слайдера */
.dark-theme .theme-toggle__slider {
  background-color: #A96FF5 !important;
}

.dark-theme .theme-toggle__slider--active {
  background-color: #A96FF5 !important;
}

.main {
  padding: 1.5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Анимации */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
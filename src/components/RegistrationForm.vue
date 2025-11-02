<template>
  <div class="registration">
    <div v-if="!isSubmitted" class="registration__container">
      <div class="registration__header">
        <h2 class="registration__title">Register for CineWorld</h2>
      </div>

      <form class="registration__form" @submit.prevent="submitForm">
        <div class="registration__columns">
          <!-- Left Column -->
          <div class="registration__column">
            <!-- First Name -->
            <div class="registration__field">
              <label class="registration__label">First Name</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.firstName"
                  type="text"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': errors.firstName,
                    'registration__input--filled': formData.firstName
                  }"
                  placeholder="Placeholder"
                  @blur="validateField('firstName')"
                  @input="clearError('firstName')"
                >
                <button 
                  v-if="formData.firstName" 
                  type="button"
                  class="registration__clear"
                  @click="clearField('firstName')"
                >
                  ×
                </button>
              </div>
              <span v-if="errors.firstName" class="registration__error">
                Please enter a valid value
              </span>
            </div>

            <!-- Date of Birth -->
            <div class="registration__field">
              <label class="registration__label">Date of Birth</label>
              <div class="registration__input-wrapper">
                <input
                  ref="dateInput"
                  type="text"
                  class="registration__input"
                  :class="{ 'registration__input--filled': formData.birthDate }"
                  placeholder="DD.MM.YYYY"
                  readonly
                >
                <button 
                  v-if="formData.birthDate" 
                  type="button"
                  class="registration__clear"
                  @click="clearField('birthDate')"
                >
                  ×
                </button>
              </div>
            </div>

            <!-- Password -->
            <div class="registration__field">
              <label class="registration__label">Password</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.password"
                  type="password"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': errors.password,
                    'registration__input--filled': formData.password
                  }"
                  placeholder="•••••••••••••••"
                  @blur="validateField('password')"
                  @input="validatePasswordMatch"
                >
                <button 
                  v-if="formData.password" 
                  type="button"
                  class="registration__clear"
                  @click="clearField('password')"
                >
                  ×
                </button>
              </div>
              <span v-if="errors.password" class="registration__error">
                Please enter a valid value
              </span>
            </div>
          </div>

          <!-- Right Column -->
          <div class="registration__column">
            <!-- Last Name -->
            <div class="registration__field">
              <label class="registration__label">Last Name</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.lastName"
                  type="text"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': errors.lastName,
                    'registration__input--filled': formData.lastName
                  }"
                  placeholder="Placeholder"
                  @blur="validateField('lastName')"
                  @input="clearError('lastName')"
                >
                <button 
                  v-if="formData.lastName" 
                  type="button"
                  class="registration__clear"
                  @click="clearField('lastName')"
                >
                  ×
                </button>
              </div>
              <span v-if="errors.lastName" class="registration__error">
                Please enter a valid value
              </span>
            </div>

            <!-- Email -->
            <div class="registration__field">
              <label class="registration__label">Email</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.email"
                  type="email"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': errors.email,
                    'registration__input--filled': formData.email
                  }"
                  placeholder="email@email.ru"
                  @blur="validateField('email')"
                  @input="clearError('email')"
                >
                <button 
                  v-if="formData.email" 
                  type="button"
                  class="registration__clear"
                  @click="clearField('email')"
                >
                  ×
                </button>
              </div>
              <span v-if="errors.email" class="registration__error">
                Please enter a valid value
              </span>
            </div>

            <!-- Repeat Password -->
            <div class="registration__field">
              <label class="registration__label">Repeat Password</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.repeatPassword"
                  type="password"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': errors.repeatPassword,
                    'registration__input--filled': formData.repeatPassword
                  }"
                  placeholder="•••••••••••••••"
                  @blur="validateField('repeatPassword')"
                  @input="validatePasswordMatch"
                >
                <button 
                  v-if="formData.repeatPassword" 
                  type="button"
                  class="registration__clear"
                  @click="clearField('repeatPassword')"
                >
                  ×
                </button>
              </div>
              <span v-if="errors.repeatPassword" class="registration__error">
                Please enter a valid value
              </span>
            </div>
          </div>
        </div>

        <!-- Select Genre -->
        <div class="registration__field">
          <label class="registration__label">Select your favourite genre</label>
          <select
            v-model="formData.favoriteGenre"
            class="registration__select"
            :class="{ 'registration__select--filled': formData.favoriteGenre }"
          >
            <option value="">Favorite genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
            <option value="documentary">Documentary</option>
            <option value="cartoon">Cartoon</option>
          </select>
        </div>

        <!-- Checkboxes -->
        <div class="registration__checkboxes">
          <label class="registration__checkbox">
            <input
              v-model="formData.subscribe"
              type="checkbox"
              class="registration__checkbox-input"
            >
            <span class="registration__checkbox-custom"></span>
            <span class="registration__checkbox-text">
              Subscribe to the latest updates of site materials
            </span>
          </label>

          <label class="registration__checkbox">
            <input
              v-model="formData.agree"
              type="checkbox"
              class="registration__checkbox-input"
              :class="{ 'registration__input--error': errors.agree }"
              @change="clearError('agree')"
            >
            <span class="registration__checkbox-custom"></span>
            <span class="registration__checkbox-text">
              I accept the terms of the "Personal Data Processing Policy" and, for the purpose of establishing feedback with me, I consent to the processing of my personal data.
            </span>
          </label>
          <span v-if="errors.agree" class="registration__error">
            Please accept the terms and conditions
          </span>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="registration__button"
          :class="{ 'registration__button--disabled': !isFormValid }"
          :disabled="!isFormValid"
        >
          REGISTER
        </button>
      </form>
    </div>

    <!-- Success Screen -->
    <div v-else class="success">
      <div class="success__container">
        <h2 class="success__title">CineWorld</h2>
        <p class="success__message">
          Thank you for registering on the CineWorld portal
        </p>
        <button class="success__button" @click="resetForm">
          REGISTER AGAIN
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'

// Reactive data
const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
  birthDate: '',
  favoriteGenre: '',
  subscribe: false,
  agree: false
})

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
  agree: ''
})

const isSubmitted = ref(false)
const dateInput = ref(null)
let datepicker = null

// Validation functions
const validateName = (name) => {
  if (!name.trim()) return 'This field is required'
  if (name.length < 2) return 'Must be at least 2 characters'
  if (/\s/.test(name)) return 'No spaces allowed'
  if (!/^[a-zA-Z]+$/.test(name)) return 'Only letters allowed'
  return ''
}

const validateEmail = (email) => {
  if (!email.trim()) return 'Email is required'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) return 'Please enter a valid email address'
  return ''
}

const validatePassword = (password) => {
  if (!password) return 'Password is required'
  if (password.length < 6) return 'Must be at least 6 characters'
  return ''
}

const validatePasswordMatch = () => {
  if (formData.password && formData.repeatPassword && formData.password !== formData.repeatPassword) {
    errors.repeatPassword = 'Passwords do not match'
  } else {
    errors.repeatPassword = ''
  }
}

const clearError = (fieldName) => {
  errors[fieldName] = ''
}

const clearField = (fieldName) => {
  formData[fieldName] = ''
  clearError(fieldName)
  if (fieldName === 'birthDate' && datepicker) {
    datepicker.clear()
  }
}

const validateField = (fieldName) => {
  switch (fieldName) {
    case 'firstName':
      errors.firstName = validateName(formData.firstName)
      break
    case 'lastName':
      errors.lastName = validateName(formData.lastName)
      break
    case 'email':
      errors.email = validateEmail(formData.email)
      break
    case 'password':
      errors.password = validatePassword(formData.password)
      validatePasswordMatch()
      break
    case 'repeatPassword':
      validatePasswordMatch()
      break
  }
}

// Computed properties
const isFormValid = computed(() => {
  const hasErrors = Object.values(errors).some(error => error !== '')
  const requiredFieldsFilled = formData.firstName && 
                              formData.lastName && 
                              formData.email && 
                              formData.password && 
                              formData.repeatPassword &&
                              formData.agree
  
  return !hasErrors && requiredFieldsFilled && formData.password === formData.repeatPassword
})

// Form submission
const submitForm = () => {
  // Validate all fields
  validateField('firstName')
  validateField('lastName')
  validateField('email')
  validateField('password')
  validateField('repeatPassword')
  
  if (!formData.agree) {
    errors.agree = 'You must agree to the terms and conditions'
  }

  // Check if form is valid
  if (isFormValid.value) {
    isSubmitted.value = true
  }
}

// Reset form
const resetForm = () => {
  Object.keys(formData).forEach(key => {
    if (typeof formData[key] === 'boolean') {
      formData[key] = false
    } else {
      formData[key] = ''
    }
  })
  
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })
  
  if (datepicker) {
    datepicker.clear()
  }
  
  isSubmitted.value = false
}

// Datepicker initialization
onMounted(() => {
  datepicker = new AirDatepicker(dateInput.value, {
    autoClose: true,
    position: 'center',
    onShow: () => {
      document.body.style.overflow = 'hidden'
    },
    onHide: () => {
      document.body.style.overflow = ''
    },
    onSelect: ({ date }) => {
      const formattedDate = date.toLocaleDateString('ru-RU')
      formData.birthDate = formattedDate
    }
  })

  // Add styles for datepicker overlay
  const style = document.createElement('style')
  style.textContent = `
    .air-datepicker-overlay {
      background: rgba(0, 0, 0, 0.5) !important;
      z-index: 1000;
    }
    .air-datepicker {
      z-index: 1001;
      background: var(--bg-primary) !important;
      color: var(--text-primary) !important;
      border: 1px solid var(--border-color) !important;
      font-family: 'Space Mono', monospace !important;
    }
    .air-datepicker-body--day-name {
      color: var(--text-secondary) !important;
      font-size: 14px !important;
      font-weight: 400 !important;
    }
    .air-datepicker-cell.-day-.-other-month- {
      color: var(--text-secondary) !important;
    }
    .air-datepicker-cell.-current- {
      color: var(--accent-color) !important;
    }
    .air-datepicker-cell.-selected- {
      background: var(--accent-color) !important;
      color: white !important;
    }
    .air-datepicker-nav--title {
      color: var(--text-primary) !important;
      font-size: 16px !important;
      font-weight: 700 !important;
    }
    .air-datepicker-nav--action:hover {
      background: var(--bg-secondary) !important;
    }
    .air-datepicker-cell.-focus- {
      background: var(--bg-secondary) !important;
    }
  `
  document.head.appendChild(style)
})

onUnmounted(() => {
  if (datepicker) {
    datepicker.destroy()
  }
})
</script>

<style lang="scss" scoped>
.registration {
  max-width: 900px;
  margin: 0 auto;

  &__container {
    background: var(--bg-primary);
    padding: 2rem;
    transition: var(--transition);
  }

  &__header {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__title {
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    color: var(--text-primary);
    margin-bottom: 2rem;
  }

  &__columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__label {
    font-size: 16px;
    font-weight: 700;
    line-height: 160%;
    color: var(--text-primary);
  }

  &__input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__input {
    width: 100%;
    padding: 1rem 1.25rem;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    background: var(--input-bg);
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    transition: var(--transition);
    font-family: 'Space Mono', monospace;
    height: 56px;

    &:focus {
      outline: none;
      border-color: var(--accent-color);
    }

    &:hover {
      border-color: var(--accent-color);
    }

    &--error {
      border-color: var(--error-color) !important;
    }

    &--filled {
      border-color: var(--accent-color);
    }

    &::placeholder {
      color: var(--text-secondary);
      font-size: 16px;
      font-weight: 400;
    }
  }

  &__clear {
    position: absolute;
    right: 1rem;
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    font-size: 20px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);

    &:hover {
      color: var(--error-color);
    }
  }

  &__select {
    width: 100%;
    padding: 1rem 1.25rem;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    background: var(--input-bg);
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    transition: var(--transition);
    cursor: pointer;
    font-family: 'Space Mono', monospace;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23242527' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1.25rem center;
    background-size: 12px;
    height: 56px;

    &:focus {
      outline: none;
      border-color: var(--accent-color);
    }

    &:hover {
      border-color: var(--accent-color);
    }

    &--filled {
      border-color: var(--accent-color);
    }
  }

  .dark-theme &__select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23BD9BE9' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  }

  &__error {
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    color: var(--error-color);
  }

  &__checkboxes {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  &__checkbox {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    cursor: pointer;
    transition: var(--transition);
  }

  &__checkbox-input {
    display: none;

    &:checked + .registration__checkbox-custom {
      background-color: var(--accent-color);
      border-color: var(--accent-color);
      
      &::after {
        content: '✓';
        color: white;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  &__checkbox-custom {
    width: 20px;
    height: 20px;
    border: 2px solid var(--border-color);
    border-radius: 4px;
    background: var(--checkbox-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: var(--transition);
    margin-top: 2px;
  }

  &__checkbox-text {
    color: var(--text-primary);
    line-height: 1.4;
    font-size: 14px;
    font-weight: 400;
  }

  &__button {
    width: 100%;
    padding: 1.25rem 2rem;
    background: var(--accent-color);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    cursor: pointer;
    transition: var(--transition);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Space Mono', monospace;
    height: 60px;

    &:hover:not(:disabled) {
      background: var(--accent-hover);
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }

    &--disabled {
      background: var(--border-color);
      cursor: not-allowed;
      opacity: 0.6;
      
      &:hover {
        transform: none;
      }
    }
  }
}

.success {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;

  &__container {
    background: var(--bg-primary);
    padding: 3rem 2rem;
  }

  &__title {
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    color: var(--accent-color);
    margin-bottom: 1rem;
  }

  &__message {
    color: var(--text-primary);
    margin-bottom: 2rem;
    line-height: 1.6;
    font-size: 16px;
    font-weight: 400;
  }

  &__button {
    padding: 1.25rem 2rem;
    background: var(--accent-color);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    cursor: pointer;
    transition: var(--transition);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Space Mono', monospace;
    height: 60px;

    &:hover {
      background: var(--accent-hover);
      transform: translateY(-2px);
    }
  }
}
</style>
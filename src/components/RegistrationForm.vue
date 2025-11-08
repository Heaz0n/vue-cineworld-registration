<template>
  <div class="registration">
    <div v-if="!isSubmitted" class="registration__container">
      <div class="registration__header">
        <h2 class="registration__title">Register for CineWorld</h2>
      </div>

      <form class="registration__form" @submit.prevent="submitForm">
        <div class="registration__columns">
          <!-- Mobile Order: All fields in one column -->
          <div class="registration__column registration__column--mobile">
            <!-- First Name -->
            <div class="registration__field">
              <label class="registration__label">First Name</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.firstName"
                  type="text"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': showFieldError('firstName'),
                    'registration__input--filled': formData.firstName
                  }"
                  placeholder="Placeholder"
                  @blur="handleBlur('firstName')"
                  @input="handleInput('firstName')"
                  @focus="handleFocus('firstName')"
                >
                <div class="registration__indicators">
                  <span 
                    v-if="showRequiredIndicator('firstName')" 
                    class="registration__error-indicator"
                  ></span>
                  <button 
                    v-if="formData.firstName" 
                    type="button"
                    class="registration__clear"
                    @click="clearField('firstName')"
                  >
                    ×
                  </button>
                </div>
              </div>
              <span v-if="showFieldError('firstName') && showErrors.firstName" class="registration__error">
                {{ errors.firstName }}
              </span>
            </div>

            <!-- Last Name -->
            <div class="registration__field">
              <label class="registration__label">Last Name</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.lastName"
                  type="text"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': showFieldError('lastName'),
                    'registration__input--filled': formData.lastName
                  }"
                  placeholder="Placeholder"
                  @blur="handleBlur('lastName')"
                  @input="handleInput('lastName')"
                  @focus="handleFocus('lastName')"
                >
                <div class="registration__indicators">
                  <span 
                    v-if="showRequiredIndicator('lastName')" 
                    class="registration__error-indicator"
                  ></span>
                  <button 
                    v-if="formData.lastName" 
                    type="button"
                    class="registration__clear"
                    @click="clearField('lastName')"
                  >
                    ×
                  </button>
                </div>
              </div>
              <span v-if="showFieldError('lastName') && showErrors.lastName" class="registration__error">
                {{ errors.lastName }}
              </span>
            </div>

            <!-- Date of Birth -->
            <div class="registration__field registration__field--dob">
              <label class="registration__label">Date of Birth</label>
              <div class="registration__input-wrapper">
                <input
                  ref="dateInput"
                  type="text"
                  class="registration__input"
                  :class="{ 
                    'registration__input--filled': formData.birthDate,
                    'registration__input--error': showFieldError('birthDate')
                  }"
                  placeholder="DD.MM.YYYY"
                  @click="openDatepicker"
                  :value="formData.birthDate"
                  readonly
                >
                <div class="registration__indicators">
                  <span 
                    v-if="showRequiredIndicator('birthDate')" 
                    class="registration__error-indicator"
                  ></span>
                  <button 
                    v-if="formData.birthDate" 
                    type="button"
                    class="registration__clear"
                    @click="clearBirthDate"
                  >
                    ×
                  </button>
                </div>
              </div>
              <span v-if="showFieldError('birthDate') && showErrors.birthDate" class="registration__error">
                {{ errors.birthDate }}
              </span>
            </div>

            <!-- Email -->
            <div class="registration__field registration__field--email">
              <label class="registration__label">Email</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.email"
                  type="email"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': showFieldError('email'),
                    'registration__input--filled': formData.email
                  }"
                  placeholder="email@email.ru"
                  @blur="handleBlur('email')"
                  @input="handleInput('email')"
                  @focus="handleFocus('email')"
                >
                <div class="registration__indicators">
                  <span 
                    v-if="showRequiredIndicator('email')" 
                    class="registration__error-indicator"
                  ></span>
                  <button 
                    v-if="formData.email" 
                    type="button"
                    class="registration__clear"
                    @click="clearField('email')"
                  >
                    ×
                  </button>
                </div>
              </div>
              <span v-if="showFieldError('email') && showErrors.email" class="registration__error">
                {{ errors.email }}
              </span>
            </div>

            <!-- Password -->
            <div class="registration__field registration__field--password">
              <label class="registration__label">Password</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.password"
                  type="password"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': showFieldError('password'),
                    'registration__input--filled': formData.password
                  }"
                  placeholder="*******"
                  @blur="handleBlur('password')"
                  @input="handleInput('password')"
                  @focus="handleFocus('password')"
                >
                <div class="registration__indicators">
                  <span 
                    v-if="showRequiredIndicator('password')" 
                    class="registration__error-indicator"
                  ></span>
                  <button 
                    v-if="formData.password" 
                    type="button"
                    class="registration__clear"
                    @click="clearField('password')"
                  >
                    ×
                  </button>
                </div>
              </div>
              <span v-if="showFieldError('password') && showErrors.password" class="registration__error">
                {{ errors.password }}
              </span>
            </div>

            <!-- Repeat Password -->
            <div class="registration__field registration__field--repeat-password">
              <label class="registration__label">Repeat Password</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.repeatPassword"
                  type="password"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': showFieldError('repeatPassword'),
                    'registration__input--filled': formData.repeatPassword
                  }"
                  placeholder="*******"
                  @blur="handleBlur('repeatPassword')"
                  @input="handleInput('repeatPassword')"
                  @focus="handleFocus('repeatPassword')"
                >
                <div class="registration__indicators">
                  <span 
                    v-if="showRequiredIndicator('repeatPassword')" 
                    class="registration__error-indicator"
                  ></span>
                  <button 
                    v-if="formData.repeatPassword" 
                    type="button"
                    class="registration__clear"
                    @click="clearField('repeatPassword')"
                  >
                    ×
                  </button>
                </div>
              </div>
              <span v-if="showFieldError('repeatPassword') && showErrors.repeatPassword" class="registration__error">
                {{ errors.repeatPassword }}
              </span>
            </div>
          </div>

          <!-- Desktop Order: Two columns -->
          <div class="registration__column registration__column--desktop">
            <!-- First Name -->
            <div class="registration__field">
              <label class="registration__label">First Name</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.firstName"
                  type="text"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': showFieldError('firstName'),
                    'registration__input--filled': formData.firstName
                  }"
                  placeholder="Placeholder"
                  @blur="handleBlur('firstName')"
                  @input="handleInput('firstName')"
                  @focus="handleFocus('firstName')"
                >
                <div class="registration__indicators">
                  <span 
                    v-if="showRequiredIndicator('firstName')" 
                    class="registration__error-indicator"
                  ></span>
                  <button 
                    v-if="formData.firstName" 
                    type="button"
                    class="registration__clear"
                    @click="clearField('firstName')"
                  >
                    ×
                  </button>
                </div>
              </div>
              <span v-if="showFieldError('firstName') && showErrors.firstName" class="registration__error">
                {{ errors.firstName }}
              </span>
            </div>

            <!-- Date of Birth -->
            <div class="registration__field registration__field--dob">
              <label class="registration__label">Date of Birth</label>
              <div class="registration__input-wrapper">
                <input
                  ref="dateInput"
                  type="text"
                  class="registration__input"
                  :class="{ 
                    'registration__input--filled': formData.birthDate,
                    'registration__input--error': showFieldError('birthDate')
                  }"
                  placeholder="DD.MM.YYYY"
                  @click="openDatepicker"
                  :value="formData.birthDate"
                  readonly
                >
                <div class="registration__indicators">
                  <span 
                    v-if="showRequiredIndicator('birthDate')" 
                    class="registration__error-indicator"
                  ></span>
                  <button 
                    v-if="formData.birthDate" 
                    type="button"
                    class="registration__clear"
                    @click="clearBirthDate"
                  >
                    ×
                  </button>
                </div>
              </div>
              <span v-if="showFieldError('birthDate') && showErrors.birthDate" class="registration__error">
                {{ errors.birthDate }}
              </span>
            </div>

            <!-- Password -->
            <div class="registration__field registration__field--password">
              <label class="registration__label">Password</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.password"
                  type="password"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': showFieldError('password'),
                    'registration__input--filled': formData.password
                  }"
                  placeholder="*******"
                  @blur="handleBlur('password')"
                  @input="handleInput('password')"
                  @focus="handleFocus('password')"
                >
                <div class="registration__indicators">
                  <span 
                    v-if="showRequiredIndicator('password')" 
                    class="registration__error-indicator"
                  ></span>
                  <button 
                    v-if="formData.password" 
                    type="button"
                    class="registration__clear"
                    @click="clearField('password')"
                  >
                    ×
                  </button>
                </div>
              </div>
              <span v-if="showFieldError('password') && showErrors.password" class="registration__error">
                {{ errors.password }}
              </span>
            </div>
          </div>

          <div class="registration__column registration__column--desktop">
            <!-- Last Name -->
            <div class="registration__field">
              <label class="registration__label">Last Name</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.lastName"
                  type="text"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': showFieldError('lastName'),
                    'registration__input--filled': formData.lastName
                  }"
                  placeholder="Placeholder"
                  @blur="handleBlur('lastName')"
                  @input="handleInput('lastName')"
                  @focus="handleFocus('lastName')"
                >
                <div class="registration__indicators">
                  <span 
                    v-if="showRequiredIndicator('lastName')" 
                    class="registration__error-indicator"
                  ></span>
                  <button 
                    v-if="formData.lastName" 
                    type="button"
                    class="registration__clear"
                    @click="clearField('lastName')"
                  >
                    ×
                  </button>
                </div>
              </div>
              <span v-if="showFieldError('lastName') && showErrors.lastName" class="registration__error">
                {{ errors.lastName }}
              </span>
            </div>

            <!-- Email -->
            <div class="registration__field registration__field--email">
              <label class="registration__label">Email</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.email"
                  type="email"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': showFieldError('email'),
                    'registration__input--filled': formData.email
                  }"
                  placeholder="email@email.ru"
                  @blur="handleBlur('email')"
                  @input="handleInput('email')"
                  @focus="handleFocus('email')"
                >
                <div class="registration__indicators">
                  <span 
                    v-if="showRequiredIndicator('email')" 
                    class="registration__error-indicator"
                  ></span>
                  <button 
                    v-if="formData.email" 
                    type="button"
                    class="registration__clear"
                    @click="clearField('email')"
                  >
                    ×
                  </button>
                </div>
              </div>
              <span v-if="showFieldError('email') && showErrors.email" class="registration__error">
                {{ errors.email }}
              </span>
            </div>

            <!-- Repeat Password -->
            <div class="registration__field registration__field--repeat-password">
              <label class="registration__label">Repeat Password</label>
              <div class="registration__input-wrapper">
                <input
                  v-model="formData.repeatPassword"
                  type="password"
                  class="registration__input"
                  :class="{ 
                    'registration__input--error': showFieldError('repeatPassword'),
                    'registration__input--filled': formData.repeatPassword
                  }"
                  placeholder="*******"
                  @blur="handleBlur('repeatPassword')"
                  @input="handleInput('repeatPassword')"
                  @focus="handleFocus('repeatPassword')"
                >
                <div class="registration__indicators">
                  <span 
                    v-if="showRequiredIndicator('repeatPassword')" 
                    class="registration__error-indicator"
                  ></span>
                  <button 
                    v-if="formData.repeatPassword" 
                    type="button"
                    class="registration__clear"
                    @click="clearField('repeatPassword')"
                  >
                    ×
                  </button>
                </div>
              </div>
              <span v-if="showFieldError('repeatPassword') && showErrors.repeatPassword" class="registration__error">
                {{ errors.repeatPassword }}
              </span>
            </div>
          </div>
        </div>

        <!-- Select Genre -->
        <div class="registration__field">
          <label class="registration__label">Select your favourite genre</label>
          <div class="registration__select-wrapper">
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
            <div class="registration__select-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Checkboxes -->
        <div class="registration__checkboxes">
          <div class="registration__checkbox-wrapper">
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
          </div>

          <div class="registration__checkbox-wrapper registration__checkbox-wrapper--agree">
            <label class="registration__checkbox">
              <input
                v-model="formData.agree"
                type="checkbox"
                class="registration__checkbox-input"
                :class="{ 'registration__input--error': showFieldError('agree') }"
                @change="handleAgreeChange"
              >
              <span class="registration__checkbox-custom"></span>
              <span class="registration__checkbox-text">
                I accept the terms of the "Personal Data Processing Policy" and, for the purpose of establishing feedback with me, I consent to the processing of my personal data.
              </span>
            </label>
            <span v-if="showFieldError('agree') && showErrors.agree" class="registration__error registration__error--checkbox">
              {{ errors.agree }}
            </span>
          </div>
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
import { ref, reactive, computed, onMounted, onUnmounted, nextTick } from 'vue'
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'

// Импорты SVG файлов для стрелок календаря
import arrowLeftLight from '@/assets/images/arrow-left-light.svg'
import arrowRightLight from '@/assets/images/arrow-right-light.svg'
import arrowLeftDark from '@/assets/images/arrow-left-dark.svg'
import arrowRightDark from '@/assets/images/arrow-right-dark.svg'

// Получаем текущую тему из родительского компонента
const isDarkTheme = ref(false)

// Функции для получения правильных стрелок
const getDatepickerArrowLeft = () => {
  return isDarkTheme.value ? arrowLeftDark : arrowLeftLight
}

const getDatepickerArrowRight = () => {
  return isDarkTheme.value ? arrowRightDark : arrowRightLight
}

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
  birthDate: '',
  agree: ''
})

const touched = reactive({
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  repeatPassword: false,
  birthDate: false,
  agree: false
})

const showErrors = reactive({
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  repeatPassword: false,
  birthDate: false,
  agree: false
})

const isSubmitted = ref(false)
const dateInput = ref(null)
let datepicker = null

// ИСПРАВЛЕННАЯ ФУНКЦИЯ: Показывать красный индикатор только для незаполненных обязательных полей
const showRequiredIndicator = (fieldName) => {
  const requiredFields = ['firstName', 'lastName', 'email', 'password', 'repeatPassword', 'birthDate']
  
  // Показывать индикатор только если поле обязательное И не заполнено
  if (requiredFields.includes(fieldName)) {
    return !formData[fieldName]
  }
  
  return false
}

// ИСПРАВЛЕННАЯ ФУНКЦИЯ: Для текстовых ошибок
const showFieldError = (fieldName) => {
  // Показывать ошибку только если поле было затронуто И есть ошибка
  if (!touched[fieldName]) return false
  
  if (fieldName === 'agree') {
    return !formData.agree
  }
  
  // ИСПРАВЛЕНА ОПЕЧАТКА: было ffieldName, стало fieldName
  if (['firstName', 'lastName', 'email', 'password', 'repeatPassword', 'birthDate'].includes(fieldName)) {
    return !formData[fieldName] && touched[fieldName]
  }
  
  return false
}

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

const validateBirthDate = (date) => {
  if (!date) return 'Date of birth is required'
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
  showErrors[fieldName] = false
}

const clearField = (fieldName) => {
  formData[fieldName] = ''
  clearError(fieldName)
}

// ИСПРАВЛЕННАЯ ФУНКЦИЯ: Очистка даты рождения
const clearBirthDate = () => {
  formData.birthDate = ''
  if (datepicker) {
    datepicker.clear()
    datepicker.selectDate(null)
  }
  // Валидируем поле после очистки
  touched.birthDate = true
  validateField('birthDate')
  showErrors.birthDate = true
}

const validateField = (fieldName) => {
  if (!touched[fieldName]) return // Не валидировать непосещенные поля
  
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
    case 'birthDate':
      errors.birthDate = validateBirthDate(formData.birthDate)
      break
  }
}

const handleFocus = (fieldName) => {
  // При фокусе скрываем ошибку
  showErrors[fieldName] = false
}

const handleBlur = (fieldName) => {
  touched[fieldName] = true
  validateField(fieldName)
  // Показываем ошибку только после blur
  showErrors[fieldName] = true
}

const handleInput = (fieldName) => {
  clearError(fieldName)
  if (touched[fieldName]) {
    validateField(fieldName)
    // Показываем ошибку при вводе только если поле уже было затронуто
    showErrors[fieldName] = true
  }
}

const handleAgreeChange = () => {
  touched.agree = true
  clearError('agree')
  showErrors.agree = true
}

// Computed properties
const isFormValid = computed(() => {
  const hasErrors = Object.values(errors).some(error => error !== '')
  const requiredFieldsFilled = formData.firstName && 
                              formData.lastName && 
                              formData.email && 
                              formData.password && 
                              formData.repeatPassword &&
                              formData.birthDate &&
                              formData.agree
  
  return !hasErrors && requiredFieldsFilled && formData.password === formData.repeatPassword
})

// ИСПРАВЛЕННАЯ ФУНКЦИЯ: Отправка формы
const submitForm = () => {
  // Mark all fields as touched to show all errors
  Object.keys(touched).forEach(key => {
    touched[key] = true
    showErrors[key] = true
  })
  
  // Validate all fields
  validateField('firstName')
  validateField('lastName')
  validateField('email')
  validateField('password')
  validateField('repeatPassword')
  validateField('birthDate')
  
  // Validate agreement checkbox
  if (!formData.agree) {
    errors.agree = 'You must agree to the terms and conditions'
    showErrors.agree = true
  } else {
    errors.agree = ''
  }

  // Check if form is valid
  const hasValidationErrors = Object.values(errors).some(error => error !== '')
  const requiredFieldsFilled = formData.firstName && 
                              formData.lastName && 
                              formData.email && 
                              formData.password && 
                              formData.repeatPassword &&
                              formData.birthDate &&
                              formData.agree
  
  if (!hasValidationErrors && requiredFieldsFilled) {
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
  
  Object.keys(touched).forEach(key => {
    touched[key] = false
  })
  
  Object.keys(showErrors).forEach(key => {
    showErrors[key] = false
  })
  
  if (datepicker) {
    datepicker.clear()
    datepicker.selectDate(null)
  }
  
  isSubmitted.value = false
}

// Datepicker functions
const openDatepicker = () => {
  if (datepicker) {
    datepicker.show()
  }
}

// ИСПРАВЛЕННАЯ ФУНКЦИЯ: Форматирование даты в формат DD.MM.YYYY
const formatDate = (date) => {
  if (!date) return ''
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}

// Datepicker initialization
onMounted(() => {
  nextTick(() => {
    if (dateInput.value) {
      datepicker = new AirDatepicker(dateInput.value, {
        autoClose: false,
        position: 'bottom center',
        container: 'body',
        dateFormat: 'dd.MM.yyyy',
        onShow: (isAnimationComplete) => {
          document.body.style.overflow = 'hidden'
          addDatepickerStyles()
          
          // Принудительно применяем тему к календарю
          setTimeout(() => {
            const appElement = document.getElementById('app')
            const datepickerElement = document.querySelector('.air-datepicker')
            
            if (appElement && appElement.classList.contains('dark-theme')) {
              isDarkTheme.value = true
              if (datepickerElement) {
                datepickerElement.classList.add('dark-theme')
                document.body.classList.add('dark-theme-datepicker')
              }
            } else {
              isDarkTheme.value = false
              if (datepickerElement) {
                datepickerElement.classList.remove('dark-theme')
                document.body.classList.remove('dark-theme-datepicker')
              }
            }
          }, 10)
        },
        onHide: () => {
          document.body.style.overflow = ''
          document.body.classList.remove('dark-theme-datepicker')
        },
        onSelect: ({ date }) => {
          if (date) {
            formData.birthDate = formatDate(date)
            touched.birthDate = true
            validateField('birthDate')
          }
        },
        locale: {
          days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          months: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
          ],
          monthsShort: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ],
          today: 'Today',
          clear: 'Clear',
          dateFormat: 'dd.MM.yyyy',
          timeFormat: 'hh:mm aa',
          firstDay: 1
        },
        monthsField: 'monthsShort',
        // Используем правильные SVG файлы для стрелок в зависимости от темы
        prevHtml: `<img src="${getDatepickerArrowLeft()}" alt="prev" class="datepicker-arrow">`,
        nextHtml: `<img src="${getDatepickerArrowRight()}" alt="next" class="datepicker-arrow">`,
        months: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ],
        days: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
        navTitles: {
          days: 'MMMM yyyy',
          months: 'yyyy',
          years: 'yyyy1 - yyyy2'
        },
        multipleDates: false,
        clearButton: true,
        view: 'days',
        minView: 'days',
        classes: 'custom-datepicker'
      })

      const handleOverlayClick = (e) => {
        if (e.target.classList.contains('air-datepicker-overlay')) {
          datepicker.hide()
        }
      }

      document.addEventListener('click', handleOverlayClick)
    }
  })
})

const addDatepickerStyles = () => {
  if (document.getElementById('datepicker-custom-styles')) {
    return
  }

  const style = document.createElement('style')
  style.id = 'datepicker-custom-styles'
  style.textContent = `
    .air-datepicker-overlay {
      background: transparent !important;
      z-index: 10000 !important;
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      cursor: pointer !important;
      backdrop-filter: none !important;
      transition: background 0.3s ease !important;
    }

    .dark-theme-datepicker .air-datepicker-overlay {
      background: transparent !important;
      backdrop-filter: none !important;
    }
    
    /* СВЕТЛАЯ ТЕМА КАЛЕНДАРЯ ПО УМОЛЧАНИЮ - БЕЛЫЙ ФОН */
    .air-datepicker {
      z-index: 10001 !important;
      background: #FFFFFF !important;
      color: #242527 !important;
      border: 1px solid #43098F !important;
      font-family: 'Space Mono', monospace !important;
      position: fixed !important;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
      border-radius: 8px !important;
      padding: 20px !important;
      width: 320px !important;
    }

    /* ТЕМНАЯ ТЕМА ДЛЯ КАЛЕНДАРЯ - ЧЕРНЫЙ ФОН */
    .air-datepicker.dark-theme,
    .dark-theme-datepicker .air-datepicker {
      background: #000000 !important;
      color: #FFFFFF !important;
      border-color: #AA70F5 !important;
      box-shadow: 0 10px 30px rgba(170, 112, 245, 0.2) !important;
    }

    /* Принудительно черный фон для всех элементов календаря в темной теме */
    .air-datepicker.dark-theme *,
    .dark-theme-datepicker .air-datepicker * {
      background: #000000 !important;
      color: #FFFFFF !important;
    }

    .air-datepicker.dark-theme .air-datepicker-body,
    .dark-theme-datepicker .air-datepicker .air-datepicker-body {
      background: #000000 !important;
    }

    .air-datepicker.dark-theme .air-datepicker-body *,
    .dark-theme-datepicker .air-datepicker .air-datepicker-body * {
      background: #000000 !important;
      color: #FFFFFF !important;
    }

    .air-datepicker.dark-theme .air-datepicker-nav,
    .dark-theme-datepicker .air-datepicker .air-datepicker-nav {
      background: #000000 !important;
    }

    .air-datepicker.dark-theme .air-datepicker-nav *,
    .dark-theme-datepicker .air-datepicker .air-datepicker-nav * {
      background: #000000 !important;
      color: #FFFFFF !important;
    }

    /* Стили для SVG стрелок в календаре */
    .datepicker-arrow {
      width: 12px;
      height: 12px;
    }

    .air-datepicker-cell.-current- {
      color: white !important;
      font-weight: 700 !important;
      position: relative !important;
      z-index: 1 !important;
    }

    .air-datepicker-cell.-current-::before {
      content: '' !important;
      position: absolute !important;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      width: 32px !important;
      height: 32px !important;
      background: #43098F !important;
      border-radius: 8px !important;
      z-index: -1 !important;
    }

    .air-datepicker-cell.-selected- {
      background: transparent !important;
      color: white !important;
      font-weight: 700 !important;
      position: relative !important;
      z-index: 1 !important;
    }

    .air-datepicker-cell.-selected-::before {
      content: '' !important;
      position: absolute !important;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      width: 32px !important;
      height: 32px !important;
      background: #43098F !important;
      border-radius: 8px !important;
      z-index: -1 !important;
    }

    /* Темная тема для выделенных ячеек */
    .air-datepicker.dark-theme .air-datepicker-cell.-current-::before,
    .air-datepicker.dark-theme .air-datepicker-cell.-selected-::before,
    .dark-theme-datepicker .air-datepicker .air-datepicker-cell.-current-::before,
    .dark-theme-datepicker .air-datepicker .air-datepicker-cell.-selected-::before {
      background: #AA70F5 !important;
    }

    .air-datepicker-cell.-current-,
    .air-datepicker-cell.-selected-,
    .air-datepicker-cell.-current-.-selected-,
    .air-datepicker-cell.-current-.-selected-.-other-month-,
    .air-datepicker-cell.-selected-.-other-month-,
    .air-datepicker-cell.-current-.-other-month- {
      color: white !important;
    }

    .air-datepicker-cell.-current-.-selected-::before,
    .air-datepicker-cell.-selected-.-other-month-::before,
    .air-datepicker-cell.-current-.-other-month-::before {
      background: #43098F !important;
    }

    .air-datepicker.dark-theme .air-datepicker-cell.-current-.-selected-::before,
    .air-datepicker.dark-theme .air-datepicker-cell.-selected-.-other-month-::before,
    .air-datepicker.dark-theme .air-datepicker-cell.-current-.-other-month-::before,
    .dark-theme-datepicker .air-datepicker .air-datepicker-cell.-current-.-selected-::before,
    .dark-theme-datepicker .air-datepicker .air-datepicker-cell.-selected-.-other-month-::before,
    .dark-theme-datepicker .air-datepicker .air-datepicker-cell.-current-.-other-month-::before {
      background: #AA70F5 !important;
    }

    .air-datepicker-cell.-day-.-current-,
    .air-datepicker-cell.-day-.-selected- {
      color: white !important;
    }

    /* Цвет дней в светлой теме */
    .air-datepicker-cell.-day- {
      color: #43098F !important;
    }

    /* Цвет дней в темной теме */
    .air-datepicker.dark-theme .air-datepicker-cell.-day-,
    .dark-theme-datepicker .air-datepicker .air-datepicker-cell.-day- {
      color: #FFFFFF !important;
    }

    .air-datepicker-cell.-day-.-other-month- {
      color: #8E6BBC !important;
      opacity: 0.5 !important;
    }

    .air-datepicker.dark-theme .air-datepicker-cell.-day-.-other-month-,
    .dark-theme-datepicker .air-datepicker .air-datepicker-cell.-day-.-other-month- {
      color: #BD9BE9 !important;
      opacity: 0.4 !important;
    }
    
    .air-datepicker-nav {
      border: none !important;
      padding: 0 0 15px 0 !important;
      margin-bottom: 15px !important;
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      position: relative !important;
    }
    
    /* Заголовок в светлой теме */
    .air-datepicker-nav--title {
      color: #242527 !important;
      font-size: 16px !important;
      font-weight: 700 !important;
      font-family: 'Space Mono', monospace !important;
      order: 1 !important;
      margin-right: auto !important;
      text-transform: uppercase !important;
    }

    /* Заголовок в темной теме */
    .air-datepicker.dark-theme .air-datepicker-nav--title,
    .dark-theme-datepicker .air-datepicker .air-datepicker-nav--title {
      color: #FFFFFF !important;
    }
    
    .air-datepicker-nav--action {
      background: #ECF6FE !important;
      border-radius: 4px !important;
      width: 32px !important;
      height: 32px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      transition: var(--transition) !important;
      order: 2 !important;
    }
    
    .air-datepicker-nav--action[data-action="prev"] {
      margin-right: 8px !important;
    }
    
    .air-datepicker-nav--action[data-action="next"] {
      order: 3 !important;
    }
    
    .air-datepicker-nav--action:hover {
      background: #43098F !important;
    }

    .air-datepicker.dark-theme .air-datepicker-nav--action,
    .dark-theme-datepicker .air-datepicker .air-datepicker-nav--action {
      background: rgba(170, 112, 245, 0.1) !important;
    }
    
    .air-datepicker.dark-theme .air-datepicker-nav--action:hover,
    .dark-theme-datepicker .air-datepicker .air-datepicker-nav--action:hover {
      background: #AA70F5 !important;
    }
    
    .air-datepicker-body {
      padding: 0 !important;
    }
    
    .air-datepicker-body--day-names {
      margin: 15px 0 10px 0 !important;
      padding: 0 !important;
      border: none !important;
    }
    
    /* Дни недели в светлой теме */
    .air-datepicker-body--day-name {
      color: #242527 !important;
      font-size: 12px !important;
      font-weight: 400 !important;
      text-transform: uppercase !important;
      font-family: 'Space Mono', monospace !important;
      height: 32px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    /* Дни недели в темной теме */
    .air-datepicker.dark-theme .air-datepicker-body--day-name,
    .dark-theme-datepicker .air-datepicker .air-datepicker-body--day-name {
      color: #FFFFFF !important;
    }
    
    .air-datepicker-cell {
      height: 32px !important;
      font-size: 14px !important;
      font-weight: 400 !important;
      font-family: 'Space Mono', monospace !important;
      border-radius: 4px !important;
      transition: var(--transition) !important;
      position: relative !important;
    }
    
    .air-datepicker-cell.-day-.-focus- {
      background: #ECF6FE !important;
    }

    .air-datepicker.dark-theme .air-datepicker-cell.-day-.-focus-,
    .dark-theme-datepicker .air-datepicker .air-datepicker-cell.-day-.-focus- {
      background: rgba(170, 112, 245, 0.1) !important;
    }
    
    .air-datepicker-cell.-day-:hover {
      background: #ECF6FE !important;
    }

    .air-datepicker.dark-theme .air-datepicker-cell.-day-:hover,
    .dark-theme-datepicker .air-datepicker .air-datepicker-cell.-day-:hover {
      background: rgba(170, 112, 245, 0.1) !important;
    }
    
    .air-datepicker--pointer {
      display: none !important;
    }

    .air-datepicker--buttons {
      border-top: 1px solid #ECF6FE !important;
      padding-top: 15px !important;
      margin-top: 15px !important;
    }

    .air-datepicker--buttons span {
      color: #43098F !important;
      font-weight: 700 !important;
      font-family: 'Space Mono', monospace !important;
      transition: var(--transition) !important;
    }

    .air-datepicker--buttons span:hover {
      color: #36156e !important;
      background: transparent !important;
    }

    .air-datepicker.dark-theme .air-datepicker--buttons,
    .dark-theme-datepicker .air-datepicker .air-datepicker--buttons {
      border-color: rgba(170, 112, 245, 0.3) !important;
    }

    .air-datepicker.dark-theme .air-datepicker--buttons span,
    .dark-theme-datepicker .air-datepicker .air-datepicker--buttons span {
      color: #AA70F5 !important;
    }

    .air-datepicker.dark-theme .air-datepicker--buttons span:hover,
    .dark-theme-datepicker .air-datepicker .air-datepicker--buttons span:hover {
      color: #BD9BE9 !important;
    }
  `
  document.head.appendChild(style)
}

onUnmounted(() => {
  if (datepicker) {
    datepicker.destroy()
  }
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('air-datepicker-overlay')) {
      datepicker?.hide()
    }
  }
  document.removeEventListener('click', handleOverlayClick)
  document.body.style.overflow = ''
  document.body.classList.remove('dark-theme-datepicker')
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.registration {
  max-width: 900px;
  margin: 0 auto;
  position: relative;

  &__container {
    background: var(--bg-primary);
    padding: 2rem;
    transition: var(--transition);
    position: relative;
  }

  &__header {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__title {
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    color: var(--accent-color);
    margin-bottom: 2rem;
    font-family: 'Space Mono', monospace;
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

    &--mobile {
      display: none;
      
      @media (max-width: 768px) {
        display: flex;
      }
    }

    &--desktop {
      display: flex;
      
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 85px;

    &--dob {
      margin-top: 0.5rem;
    }

    &--password {
      margin-top: 0.5rem;
    }

    &--email {
      margin-top: 0.5rem;
    }

    &--repeat-password {
      margin-top: 0.5rem;
    }
  }

  &__label {
    font-size: 16px;
    font-weight: 700;
    line-height: 160%;
    color: var(--text-primary);
    font-family: 'Space Mono', monospace;
  }

  &__input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__input {
    width: 100%;
    padding: 1rem 3.5rem 1rem 1.25rem;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    background: var(--input-bg);
    color: var(--input-text);
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    transition: var(--transition);
    font-family: 'Space Mono', monospace;
    height: 56px;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: var(--accent-color);
    }

    &:hover {
      border-color: var(--accent-color);
    }

    &--error {
      border-color: var(--error-color) !important;
      padding-right: 4rem !important;
    }

    &--filled {
      border-color: var(--border-color);
    }

    &::placeholder {
      color: var(--placeholder-color);
      font-size: 16px;
      font-weight: 400;
      font-family: 'Space Mono', monospace;
    }
  }

  &__indicators {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 24px;
    z-index: 5;
  }

  &__clear {
    background: none;
    border: none;
    color: var(--accent-color);
    cursor: pointer;
    font-size: 20px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    z-index: 10;
    font-family: 'Space Mono', monospace;

    &:hover {
      color: var(--accent-hover);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
    }
  }

  &__error-indicator {
    width: 8px;
    height: 8px;
    background-color: var(--error-color);
    border-radius: 50%;
    display: block;
    position: absolute;
    top: -8px;
    right: -8px;
    z-index: 10;
  }

  &__select-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__select {
    width: 100%;
    padding: 1rem 3rem 1rem 1.25rem;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    background: var(--input-bg);
    color: var(--input-text);
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    transition: var(--transition);
    cursor: pointer;
    font-family: 'Space Mono', monospace;
    appearance: none;
    background: var(--input-bg);
    height: 56px;

    &:focus {
      outline: none;
      border-color: var(--accent-color);
    }

    &:hover {
      border-color: var(--accent-color);
    }

    &--filled {
      border-color: var(--border-color);
    }
  }

  &__select-arrow {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 16px;
      height: 16px;
      
      path {
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: var(--transition);
      }
    }
  }

  .dark-theme &__clear {
    color: var(--accent-color);

    &:hover {
      color: var(--accent-hover);
      background: rgba(255, 255, 255, 0.1);
    }
  }

  &__error {
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    color: var(--error-color);
    height: 20px;
    display: flex;
    align-items: center;
    font-family: 'Space Mono', monospace;

    &--checkbox {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 20px;
    }
  }

  &__checkboxes {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  &__checkbox-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    &--agree {
      position: relative;
      padding-bottom: 24px;
    }
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
        font-family: 'Space Mono', monospace;
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
    line-height: 1.5;
    font-size: 14px;
    font-weight: 700;
    font-family: 'Space Mono', monospace;
  }

  &__button {
    width: 100%;
    max-width: 160px;
    padding: 1.25rem 1.5rem;
    background: var(--button-bg);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Space Mono', monospace;
    height: 60px;
    margin: 0 auto;
    display: block;
    position: relative;
    z-index: 10;

    &:hover:not(:disabled) {
      background: var(--button-hover);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
    }

    &:not(.registration__button--disabled) {
      background: var(--accent-color);
      
      &:hover {
        background: var(--accent-hover);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }
    }

    &--disabled {
      background: var(--button-bg);
      cursor: not-allowed;
      opacity: 0.6;
      
      &:hover {
        transform: none;
        background: var(--button-bg);
        box-shadow: none;
      }
    }
  }

  :deep(.dark-theme) &__button:not(.registration__button--disabled) {
    background: #a96ff5 !important;
    color: #000000 !important;
    
    &:hover {
      background: #524C7A !important;
      color: #000000 !important;
    }
  }

  :deep(.dark-theme) &__button--disabled {
    background: #a96ff5 !important;
    color: #000000 !important;
    
    &:hover {
      background: #a96ff5 !important;
      color: #000000 !important;
    }
  }
}

.success {
  text-align: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100%;
  max-width: none;

  &__container {
    background: transparent;
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    max-width: 500px;
  }

  &__message {
    color: var(--success-message-color, #43098F);
    margin-bottom: 2rem;
    line-height: 1.2;
    font-size: 28px;
    font-weight: 1000;
    font-family: 'Space Mono', monospace !important;
    text-align: center;
  }

  :deep(.dark-theme) .success__message {
    color: #A96FF5 !important;
  }

  &__button {
    padding: 1.25rem 2rem;
    background: var(--accent-color);
    color: #FFFFFF;
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
    margin: 0 auto;
    display: block;

    &:hover {
      background: var(--accent-hover);
      transform: translateY(-2px);
      color: #FFFFFF;
    }

    :deep(.dark-theme) & {
      background: #615B8A !important;
      color: #000000 !important;
      
      &:hover {
        background: #524C7A !important;
        color: #000000 !important;
      }
    }
  }
}
</style>
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
                  placeholder="•••••••••••••••"
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
                  placeholder="•••••••••••••••"
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
                  placeholder="•••••••••••••••"
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
                  placeholder="•••••••••••••••"
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

          <div class="registration__checkbox-wrapper">
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
          </div>
          <span v-if="showFieldError('agree') && showErrors.agree" class="registration__error registration__error--checkbox">
            {{ errors.agree }}
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

// СТАРАЯ ФУНКЦИЯ: Для текстовых ошибок (оставляем без изменений)
const showFieldError = (fieldName) => {
  // Показывать ошибку только если поле было затронуто И есть ошибка
  if (!touched[fieldName]) return false
  
  if (fieldName === 'agree') {
    return !formData.agree
  }
  
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

// ИСПРАВЛЕННАЯ ФУНКЦИЯ: Была опечатка ffieldName
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
  } else {
    console.log('Form validation failed:', {
      errors,
      requiredFieldsFilled,
      formData
    })
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

// Datepicker initialization
onMounted(() => {
  nextTick(() => {
    if (dateInput.value) {
      datepicker = new AirDatepicker(dateInput.value, {
        autoClose: true,
        position: 'bottom center',
        container: 'body',
        dateFormat: 'dd MMMM yyyy',
        onShow: () => {
          document.body.style.overflow = 'hidden'
          addDatepickerStyles()
        },
        onHide: () => {
          document.body.style.overflow = ''
        },
        onSelect: ({ date }) => {
          if (date) {
            const day = String(date.getDate()).padStart(2, '0')
            const monthNames = [
              'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
              'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
            ]
            const month = monthNames[date.getMonth()]
            const year = date.getFullYear()
            formData.birthDate = `${day} ${month} ${year}`
            // Validate birth date after selection
            touched.birthDate = true
            validateField('birthDate')
          }
        },
        // Настройки для английского языка
        locale: {
          days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          months: [
            'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
            'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
          ],
          monthsShort: [
            'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
            'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
          ],
          today: 'Today',
          clear: 'Clear',
          dateFormat: 'dd MMMM yyyy',
          timeFormat: 'hh:mm aa',
          firstDay: 1
        },
        monthsField: 'monthsShort',
        prevHtml: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7.5 9L4.5 6L7.5 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        nextHtml: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        // Английские названия месяцев
        months: [
          'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
          'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
        ],
        // Английские дни недели
        days: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
        // Стрелки справа
        navTitles: {
          days: 'MMMM yyyy',
          months: 'yyyy',
          years: 'yyyy1 - yyyy2'
        },
        // Отключение множественного нажатия
        multipleDates: false,
        // Разрешить очистку даты
        clearButton: true,
        // Включить выбор месяцев
        view: 'days',
        minView: 'days',
        // Цвета для светлой и темной темы
        classes: 'custom-datepicker'
      })

      // Добавляем обработчик клика по оверлею
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
  // Проверяем, добавлены ли стили
  if (document.getElementById('datepicker-custom-styles')) {
    return
  }

  const style = document.createElement('style')
  style.id = 'datepicker-custom-styles'
  style.textContent = `
    .air-datepicker-overlay {
      background: rgba(0, 0, 0, 0.5) !important;
      z-index: 10000 !important;
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      cursor: pointer !important;
    }
    
    .air-datepicker {
      z-index: 10001 !important;
      background: #FFFFFF !important;
      color: #242527 !important;
      border: 1px solid var(--border-color) !important;
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

    /* Текущая дата - белый текст на фиолетовом фоне #43098F */
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

    /* Выбранная дата - белый текст на фиолетовом фоне #43098F */
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


    .air-datepicker-cell.-current-,
    .air-datepicker-cell.-selected-,
    .air-datepicker-cell.-current-.-selected-,
    .air-datepicker-cell.-current-.-selected-.-other-month-,
    .air-datepicker-cell.-selected-.-other-month-,
    .air-datepicker-cell.-current-.-other-month- {
      color: white !important;
    }

    /* Фон для комбинированных состояний */
    .air-datepicker-cell.-current-.-selected-::before,
    .air-datepicker-cell.-selected-.-other-month-::before,
    .air-datepicker-cell.-current-.-other-month-::before {
      background: #43098F !important;
    }

    /* Переопределяем любые возможные конфликтующие стили */
    .air-datepicker-cell.-day-.-current-,
    .air-datepicker-cell.-day-.-selected- {
      color: white !important;
    }

    /* Числа текущего месяца - цвет #43098F */
    .air-datepicker-cell.-day- {
      color: #43098F !important;
    }

    /* Числа вне текущего месяца (другие месяцы)
    .air-datepicker-cell.-day-.-other-month- {
      color: #8E6BBC !important;
      opacity: 0.5 !important;
    }
    
    /* Темная тема для календаря */
    .dark-theme .air-datepicker {
      background: #000000 !important;
      color: #FFFFFF !important;
      border-color: var(--accent-color) !important;
      font-family: 'Space Mono', monospace !important;
    }
    
    /* Темная тема - текущая дата */
    .dark-theme .air-datepicker-cell.-current-,
    .dark-theme .air-datepicker-cell.-selected-,
    .dark-theme .air-datepicker-cell.-current-.-selected-,
    .dark-theme .air-datepicker-cell.-current-.-selected-.-other-month-,
    .dark-theme .air-datepicker-cell.-selected-.-other-month-,
    .dark-theme .air-datepicker-cell.-current-.-other-month- {
      color: white !important;
    }

    .dark-theme .air-datepicker-cell.-current-::before,
    .dark-theme .air-datepicker-cell.-selected-::before,
    .dark-theme .air-datepicker-cell.-current-.-selected-::before {
      background: var(--accent-color) !important;
    }
    
    .dark-theme .air-datepicker-cell.-selected- {
      color: white !important;
    }
    
    .dark-theme .air-datepicker-cell.-day- {
      color: var(--text-primary) !important;
    }
    
    .dark-theme .air-datepicker-cell.-day-.-other-month- {
      color: var(--text-secondary) !important;
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
    
    .air-datepicker-nav--title {
      color: var(--text-primary) !important;
      font-size: 16px !important;
      font-weight: 700 !important;
      font-family: 'Space Mono', monospace !important;
      order: 1 !important;
      margin-right: auto !important;
      text-transform: uppercase !important;
    }
    
    .air-datepicker-nav--action {
      background: var(--bg-secondary) !important;
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
      background: var(--accent-color) !important;
    }
    
    .air-datepicker-nav--action:hover path {
      stroke: white !important;
    }
    
    .air-datepicker-body {
      padding: 0 !important;
    }
    
    .air-datepicker-body--day-names {
      margin: 15px 0 10px 0 !important;
      padding: 0 !important;
      border: none !important;
    }
    
    .air-datepicker-body--day-name {
      color: var(--text-secondary) !important;
      font-size: 12px !important;
      font-weight: 400 !important;
      text-transform: uppercase !important;
      font-family: 'Space Mono', monospace !important;
      height: 32px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
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
      background: var(--bg-secondary) !important;
    }
    
    .air-datepicker-cell.-day-:hover {
      background: var(--bg-secondary) !important;
    }
    
    .air-datepicker--pointer {
      display: none !important;
    }
    
    /* Настройки для темной темы */
    .dark-theme .air-datepicker-nav--action {
      background: rgba(170, 112, 245, 0.1) !important;
    }
    
    .dark-theme .air-datepicker-nav--action:hover {
      background: var(--accent-color) !important;
    }
    
    .dark-theme .air-datepicker-body--day-name {
      color: var(--text-primary) !important;
    }
  `
  document.head.appendChild(style)
}

onUnmounted(() => {
  if (datepicker) {
    datepicker.destroy()
  }
  // Remove event listener
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('air-datepicker-overlay')) {
      datepicker?.hide()
    }
  }
  document.removeEventListener('click', handleOverlayClick)
  document.body.style.overflow = ''
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

  &__select {
    width: 100%;
    padding: 1rem 1.25rem;
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
      border-color: var(--border-color);
    }
  }

  .dark-theme &__select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23FFFFFF' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
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
      margin-top: 0.5rem;
      display: block;
      height: auto;
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
    max-width: 150px;
    padding: 1.25rem 1.5rem;
    background: var(--button-bg);
    color: white;
    border: none;
    border-radius: 8px;
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

    // Стиль когда форма валидна
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
    color: var(--text-primary);
    margin-bottom: 2rem;
    line-height: 1.2;
    font-size: 28px;
    font-weight: 1000;
    font-family: 'Space Mono', monospace !important;
    text-align: center;
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
    margin: 0 auto;
    display: block;

    &:hover {
      background: var(--accent-hover);
      transform: translateY(-2px);
    }
  }
}
</style>
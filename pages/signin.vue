<template>
    <div class="n-padding-lg">
        <div class="page-title">
            Sign IN
        </div>
        <b-form @submit.stop.prevent="onSubmit">
            <b-row>
                <b-col sm="12" lg="5">
                    <b-form-group id="signinEmailGroup" label="Email:" label-for="signinEmailInput">
                        <b-form-input id="signinEmailInput" name="signinEmailInput" v-model="$v.form.email.$model" :state="$v.form.email.$dirty ? !$v.form.email.$error : null" aria-describedby="signinEmailLiveFeedback" placeholder="user@gmail.com" type="email"></b-form-input>
                        <b-form-invalid-feedback id="signinEmailLiveFeedback">
                          Введите минимум 4 символа
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col sm="12" lg="5">
                    <b-form-group id="signinPasswordGroup" label="Insert password:" label-for="sigininPasswordInput">
                        <b-form-input id="sigininPasswordInput" name="sigininPasswordInput" v-model="$v.form.password.$model" :state=" $v.form.password.$dirty ? !$v.form.password.$error : null " aria-describedby="signinPasswordLiveFeedback"
                        placeholder="Password" type="password"
                        ></b-form-input>
                        <b-form-invalid-feedback id="signinPasswordLiveFeedback">
                          Введите минимум 6 символов
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Enter</b-button>
        </b-form>
        <br>
        <div>
            <n-link to="#">Reset password</n-link>
        </div>

    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import axios from "axios"
import { mapMutations } from 'vuex'

export default {
  middleware: 'authen',
  head: {
    title: "Sign in"
  },
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        minLength: minLength(4)
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  created() {

    if (this.$store.state.auth.auth) {
      this.$router.push('/')
    }

  },
  methods: {
    onSubmit() {
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }

      // Form submit logic

      axios
        .post('http://localhost:3377/user/login', this.form)
        .then(response => {
          console.log(response.data)
          localStorage.setItem('auth', response.data.token)
          this.$store.commit('auth/authChange')
          const user = {
            userName: response.data.user.userName,
            email: response.data.user.email,
            id: response.data.user._id
          }
          console.log(user);
          
          this.$store.commit('addUser', user)
          this.$notify({
            group: 'foo',
            title: 'Login',
            text: `Success. Welcome ${response.data.user.userName}`,
            type: 'success'
          })
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.response.data)
          this.$notify({
            group: 'foo',
            title: 'ERROR',
            text: err.response.data,
            type: 'error'
          })
        })

    }
  }
}
</script>
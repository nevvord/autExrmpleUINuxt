<template>
  <div class="n-padding-lg">
    <div class="page-title">
      Sign UP
    </div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-row>
        <b-col sm="12" lg="6">
          <b-form-group id="user-name-group" label="User Name:" label-for="user-name-input">
            <b-form-input id="user-name-input" name="userNameInput" v-model="$v.form.userName.$model"
              :state="$v.form.userName.$dirty ? !$v.form.userName.$error : null"
              aria-describedby="user-name-input-live-feedback" placeholder="Login" @change="chekBack('userName')">
            </b-form-input>
            <div v-html="userNameHtml"></div>
            <b-form-invalid-feedback id="user-name-input-live-feedback">
              This is a required field and must be at least 3 characters.
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12" lg="6">
          <b-form-group id="password-group" label="Password:" label-for="password-input">
            <b-form-input type="password" id="password-input" name="paswordInput" v-model="$v.form.password.$model"
              :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
              aria-describedby="password-input-live-feedback">
            </b-form-input>
            <b-form-invalid-feedback id="password-input-live-feedback">
              This is a required field and must be at least 6 characters.
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col sm="12" lg="6">
          <b-form-group id="repeatPassword-group" label="Repeat password:" label-for="repeatPassword-input">
            <b-form-input type="password" id="repeatPassword-input" name="repeatPasswordInput"
              v-model="$v.form.repeatPassword.$model"
              :state="$v.form.repeatPassword.$dirty ? !$v.form.repeatPassword.$error : null"
              aria-describedby="repeatPassword-input-live-feedback">
            </b-form-input>
            <b-form-invalid-feedback id="repeatPassword-input-live-feedback">
              This is a required field and must be at least 6 characters.
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12" lg="6">
          <b-form-group id="emailGroup" label="Email:" label-for="emailInput">
            <b-form-input type="email" id="emailInput" name="emailIput" v-model="$v.form.email.$model"
              :state="$v.form.email.$dirty ? !$v.form.email.$error : null" aria-describedby="emailLiveFeedback"
              placeholder="user@gmail.com" @change="chekBack('email')">
            </b-form-input>
            <div v-html="emailHtml"></div>
            <b-form-invalid-feedback id="emailLiveFeedback">
              This is a required field and must be at least 6 characters.
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, sameAs, minLength, email } from 'vuelidate/lib/validators'
import axios from "axios"
import { mapGetters} from 'vuex'

function checkInstance (status) {
  
}

export default {
    head: {
        title: "Sign up"
    },
    mixins: [validationMixin],
    data() {
        return {
            form: {
                userName: null,
                password: null,
                repeatPassword: null,
                email: null
            },
            userNameHtml: '',
            userNameVaidateStatus: 201,
            emailHtml: '',
            emailValidateStatus: 201
        }
    },
    created() {
      
      if (this.$store.getters['auth/getAuth']) {
        this.$router.push('/')
      }
      
    },
    validations: {
      form: {
        userName: {
          required,
          minLength: minLength(4),
          checkInstance() {
            if (this.userNameVaidateStatus !== 201) {
              return true
            }
            return false
          }
        },
        password: {
            required,
            minLength: minLength(6)
        },
        repeatPassword: {
            required,
            sameAsPassword: sameAs('password')
        },
        email: {
            required,
            minLength: minLength(6),
            email,
            checkInstance() {
            if (this.emailValidateStatus !== 201) {
              return true
            }
            return false
          }
        }
      }
    },
    methods: {
      async onSubmit() {
        this.$v.form.$touch()
        if (this.$v.form.$anyError) {
          return
        }

        // Form submit logic

        await axios.post('http://localhost:3377/user/registration', this.form)
          .then(response => {
            console.log(response.data)
            this.$router.push('/')
          })
          .catch(err => {
            console.log(err.response.data)
          })
      },
      async chekBack(value){
        let bodyJson
        if(value === 'userName'){
          bodyJson = {
            type: value,
            value: this.form.userName
          }
        }else if(value === 'email') {
          bodyJson = {
            type: value,
            value: this.form.email
          }
        }
        await axios.post('http://localhost:3377/user/check', bodyJson)
          .then(response => {
            if (value === "userName") {
              this.userNameHtml = response.data.msgEn
              this.userNameVaidateStatus = response.status
            }else{
              this.emailHtml = response.data.msgEn
              this.emailValidateStatus = response.status
            }
          })
          .catch(err => {
            if (value === "userName") {
              this.userNameHtml = err.response.data.msgEn
              this.userNameVaidateStatus = err.response.status
            }else{
              this.emailHtml = err.response.data.msgEn
              this.emailValidateStatus = err.response.status
            }
          })
      }
    }
  }
</script>
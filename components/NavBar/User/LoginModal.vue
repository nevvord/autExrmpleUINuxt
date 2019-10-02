<template>
    <b-modal id="signIn">
        <b-form>
            <!--Email-->
            <b-form-group 
                id="inputMailGroup"
                label="Email adress:"
                label-for="inputMail"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                    id="inputMail"
                    v-model="form.mail"
                    type="mail"
                    required
                    placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <!--Password-->
            <b-form-group
                id="inputPasswordGroup"
                label="Password:"
                label-for="inputPassword"
            >
                <b-input-group>
                    <b-form-input
                        id="inputPassword"
                        v-model="form.password"
                        :type="typePasswordInput"
                        required
                        placeholder="Password"
                    ></b-form-input>
                    <b-input-group-append>
                        <b-button variant="outline-danger" @click="showPassword">Show</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-form-group>
        </b-form>
    </b-modal>
</template>

<script>
export default {
    data () {
        return {
            form: {
                mail: ''
            },
            typePasswordInput: 'password'
        }
    },
    methods: {
        showPassword() {
            if (this.typePasswordInput === 'password') {
                this.typePasswordInput = 'text'
            }else{
                this.typePasswordInput = 'password'
            }
        }
    }
}
</script>
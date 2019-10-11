<template>
    <div>
        <div class="bg-light" v-if="!loading">
            <NavBar/>
            <b-container>
                <nuxt />
            </b-container>
            <Massage />
        </div>
        <div class="text-center n-mr-top-ceneter" v-else>
            <b-spinner label="Spinning"></b-spinner>
        </div>
        <notifications group="foo" position="bottom right" />
    </div>
</template>

<script>
import NavBar from '~/components/NavBar/Navbar'
import Massage from '~/components/Administration/Massage/Massage'
import { serverURL } from '../config/default.json'
import Axios from 'axios'

export default {
    components: {
        NavBar,
        Massage
    },
    data() {
        return{
            loading: true
        }
    },
    async mounted(){
        const body = {
            token: localStorage.getItem('auth')
        }

        if (body.token != undefined) {
            return await Axios.post(serverURL + '/user/refresh', body)
                .then(res => {
                    if (res.data.auth === true) {
                        console.log("RES: ", res.data)
                        this.$store.commit('auth/authChange')
                        this.$store.commit('addUser', res.data.userName)
                        this.loading = false
                    }
                })
                .catch(err =>{
                    if (err) {
                        //console.log("ERR: ", err.response.data)

                        switch (err.response.data.status) {
                            case "newToken200":
                                console.log("ERR_STATUS: ", err.response.data.status)
                            
                                localStorage.clear('auth')
                                localStorage.setItem('auth', err.response.data.token )
                                this.$store.commit('addUser', err.response.data.userName)
                                this.$store.commit('auth/authChange')
                                this.loading = false
                                break

                            case "ref401":
                                console.log("ERR_STATUS: ", err.response.data.status)
                                this.loading = false
                                break
                        
                            default:
                                console.log("ERR_STATUS: ", err.response.data.status)
                                this.loading = false
                                break
                        }
                    }else{
                        console.log("ERR: ", err.status, "Samsing wrong", "Странная ошибочка выходит")
                        this.loading = false
                    }
                })
        }else{
            console.log("ERR: 404 Token not found")
            this.loading = false
        }
    }
}
</script>
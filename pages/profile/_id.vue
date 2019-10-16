<template>
    <div>
        <div class="page-title">{{ user.userName }} - <small>PROFILE</small></div>
        <b-row>
            <b-col sm="12" lg="4" class="n-border-right text-center" alt="Profile img">
                <b-img src="~/assets/img/user.png"></b-img>
                <div v-if="$store.state.user.id">
                    <div class="page-title">Action</div>
                    <div class="text-center" v-if=" user.id != $store.state.user.id ">
                        <n-link to="#">Say hello</n-link> | 
                        <n-link to="#">Do something</n-link> | 
                        <n-link to="#">Добавить в друзья</n-link>
                    </div>
                    <div class="text-center" v-else><n-link to="#">Profile</n-link> | <n-link to="#">Password</n-link> | <n-link to="#">Signin Token</n-link> </div>
                </div>
            </b-col>
            <b-col sm="12" lg="8">
                <div><strong>id: </strong> {{ user.id }}</div>
                <div><strong>Email: </strong> {{ user.email }}</div>
            </b-col>
        </b-row>
        <br>
        <br>
        <div class="page-title "><strong>More info</strong></div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit velit, officiis repellendus, consectetur at unde quas necessitatibus perferendis animi distinctio voluptates assumenda repellat adipisci nam? Eos nulla molestiae non consequuntur!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ducimus nobis? Iusto dolorem doloribus natus! Sequi suscipit fugit ex aliquam animi harum perferendis, ratione deleniti consectetur nisi, fuga modi quibusdam!</p>
    </div>
</template>

<script>
import Axios from 'axios'
import { serverURL } from '../../config/default.json'
export default {
    data() {
        return {
            user: {}
        }
    },
    async created(){
        await Axios.get( serverURL + '/api/getuser/' + this.$route.params.id )
            .then(res => {
                console.log(res.data);
                this.user = res.data.user
                
            })
            .catch(err => {
                console.log(err.status);
                
            })
    }
}
</script>
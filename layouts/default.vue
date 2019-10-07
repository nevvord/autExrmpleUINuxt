<template>
    <div class="bg-light">
        <NavBar/>
        <b-container>
            <nuxt />
        </b-container>
        <Massage />
    </div>
</template>

<script>
import NavBar from '~/components/NavBar/Navbar'
import Massage from '~/components/Administration/Massage/Massage'

export default {
    components: {
        NavBar,
        Massage
    }    
}
</script>
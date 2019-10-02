<template>
    <div>
        <NavBar/>
        <nuxt />
    </div>
</template>

<script>
import NavBar from '~/components/NavBar/Navbar'

export default {
    components: {
        NavBar
    }    
}
</script>
<template>
    <div class="massage">
        <h3>{{ $store.state.administration.massage[0].title }}</h3>
        <p>{{ $store.state.administration.massage[0].description }}</p>
    </div>
</template>

<style scoped>
.massage {
    display: none;
    position: fixed;
    right: 0px;
    top: 50vh;
    background-color: rgba(178, 186, 199, 0.568);
    max-height: 250px;
    max-width: 350px;
    min-width: 150px;
    padding: 25px;
    border-radius: 15px 0 0 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.486);
}


</style>
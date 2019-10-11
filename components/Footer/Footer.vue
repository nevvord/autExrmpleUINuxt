<template>
    <div class="bg-warning">
        <b-row class="width100">
            <b-col>
                <h3>Nevvord</h3>
                <p>Welcome to Nevvord auth exemple</p>
            </b-col>
            <b-col>
                <strong>Contact:</strong>
                <ul>
                    <li>
                        <font-awesome-icon :icon="['fab', 'telegram-plane']" />
                        <span> - <a href="https://telegram.me/Nevvord">@Nevvord</a></span>
                    </li>
                    <li>
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                        <span> - <a href="mailto:nevvord@gmail.com?subject = Feedback&body = Message">nevvord@gmail.com</a></span>
                    </li>
                    <li>
                        <font-awesome-icon :icon="['fas', 'phone']" />
                        <span> - <a href="tel:380935482994">+38 (093) 54-82-994</a></span>
                    </li>
                </ul>
            </b-col>
        </b-row>
        <div class="text-center"><strong> Create with Nuxt/VueJS, Bootsrap, Mongo/Mongoose, NodeJS </strong></div>
    </div>
</template>

<style scoped>
a {
    color: rgb(58, 58, 58)
}

.width100{
    width: 100%;
    padding: 25px;
}
</style>
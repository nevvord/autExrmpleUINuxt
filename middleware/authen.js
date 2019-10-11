export default ({ store, redirect }) => {
    console.log(store.getters['auth/auth'])
    if (store.getters['auth/auth']){
        return redirect('/')
    }
    console.log('Hello from middleware')
}
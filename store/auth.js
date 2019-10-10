export const state = () => ({
    auth : false
})

export const mutations = {
    authChange (state) {
        state.auth = !state.auth
    }
}
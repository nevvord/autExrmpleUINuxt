export const state = () => ({
    auth : false
})

export const mutations = {
    authChange (state) {
        state.auth = !state.auth
    }
}

export const getters = {
    getAuth ( state ) {
        return state.auth
    }
}
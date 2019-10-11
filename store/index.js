export const state = () => ({
    user: {}
    
})

export const mutations = {
    addUser (state, user) {
        state.user = user
    }
}

export const getterers = {
    getUser( state ) {
        return state.user
    }
}

export const actionst = { 

}
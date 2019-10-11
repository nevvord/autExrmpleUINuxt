export const state = () => ({
    user: {}
    
})

export const mutations = {
    addUser (state, user) {
        state.user.userName = user
    }

}

export const getterers = {
    user( state ) {
        return state.user
    }
}

export const actionst = { 

}
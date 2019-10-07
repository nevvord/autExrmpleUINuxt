export const state = () => ({
    massage: [{
        title: "Title",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, praesentium sint corporis expedita totam voluptatem atque? Cupiditate, amet. At neque nam, ullam corrupti omnis similique aliquid ipsum totam asperiores magni!   " 
    }]
})

export const mutations = {
    pushMassage(state, massage) {
        state.push(massage)
    }

}

export const actionst = { 

}
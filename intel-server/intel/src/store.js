import { configureStore, createSlice } from '@reduxjs/toolkit'
// state for experiecnes
let experiences = createSlice({
    name: 'experiences',
    initialState: [],
    reducers: {
        // function that adds a experience
        addExperience (state, action) {
            return action.payload;
        },
    }
})

let hobbies = createSlice({
    name: 'hobbies',
    initialState: [],
    reducers: {
        addHobby (state, action) {
            return action.payload;
        },
    }
})

export default configureStore({
  reducer: {
    experiences: experiences.reducer,
    hobbies: hobbies.reducer,
}
}) 

export let { addExperience } = experiences.actions
export let {addHobby} = hobbies.actions;
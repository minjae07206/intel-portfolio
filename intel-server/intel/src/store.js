import { configureStore, createSlice } from '@reduxjs/toolkit'

let newExperience = createSlice({
    name: 'newExperience',
    initialState: {},
    reducers: {
        sendDataToServer(state, e){
            e.payload.preventDefault();
            console.log(e.payload)

        }
    }
})

export default configureStore({
  reducer: {newExperience: newExperience}
}) 

export let { sendDataToServer } = newExperience.actions
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userID: 1,
    selectedServer: 18984156,
    selectedChannel: 0,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setUserID: (state, action) => {
            state.userID = action.payload
        },
        setSelectedServer: (state, action) => {
            state.selectedServer = action.payload
        },
        setSelectedChannel: (state, action) => {
            state.selectedChannel = action.payload
        }
    },
})

export const {setUserID, setSelectedServer, setSelectedChannel} = globalSlice.actions

export const selectSelectedServer = (state) => state.global.selectedServer
export const selectSelectedChannel = (state) => state.global.selectedChannel
export const selectUserID = (state) => state.global.userID

export default globalSlice.reducer
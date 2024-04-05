import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: '',
        password: '',
        error: null,
        message: '',
        loginstatus:'',
        token: ''
    },
    reducers: {
        onchangeInput: (state, action) => {
          return{
            ...state,
            [action.payload.name]:action.payload.value
          }
        },
        loginsuccess: (state, action) => {
          console.log(action.payload)
          return {
            ...state,
            loginstatus:action.payload.loginstatus,
            message:action.payload.message,
            email: '',
            password: '',
          }
        },
      }
})

export const { onchangeInput, loginsuccess } = loginSlice.actions;

export const loginReducer =  loginSlice.reducer;
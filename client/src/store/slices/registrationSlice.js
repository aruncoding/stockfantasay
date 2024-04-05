import { createSlice } from "@reduxjs/toolkit";

export const registrationSlice = createSlice({
    name: 'register',
    initialState: {
        user: {},
        error: null,
        message: '',
        statusregister: ''
    },
    reducers: {
        onchangeField: (state, action) => {
          console.log("stae.user",state.user)
          return{
            ...state,
            user: {...state.user,[action.payload.name]:action.payload.value},
            error : action.payload.error,
            message : action.payload.message,
            statusregister : action.payload.statusregister,
            
          }
        },
        registersuccess: (state, action) => {
          return {
            ...state,
            user: {},
            statusregister:action.payload.statusregister,
            message:action.payload.message,
          }
        },
      }
})

export const { onchangeField, registersuccess } = registrationSlice.actions;

export const registerReducer =  registrationSlice.reducer;
import {ToDoState} from "./productSlice";
import {PayloadAction} from "@reduxjs/toolkit";

export const AddReducer = (state: ToDoState[], action: PayloadAction<{ imgTitle : string}>) => {
    return state
}
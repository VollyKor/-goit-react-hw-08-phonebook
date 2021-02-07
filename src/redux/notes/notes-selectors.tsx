import { IState } from "redux/store.interface";

export const getNotes = (state : IState) => state.notes.entities;

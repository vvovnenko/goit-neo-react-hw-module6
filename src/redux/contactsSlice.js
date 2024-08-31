import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      {
        id: nanoid(),
        name: "Rosie Simpson",
        number: "459-12-56",
      },
      {
        id: nanoid(),
        name: "Hermione Kline",
        number: "443-89-12",
      },
      {
        id: nanoid(),
        name: "Eden Clements",
        number: "645-17-79",
      },
      {
        id: nanoid(),
        name: "Annie Copeland",
        number: "227-91-26",
      },
    ],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            ...values,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload,
      );
    },
  },
  selectors: {
    selectContacts: (state) => state.items,
  },
});

export const { addContact, deleteContact } = slice.actions;

export const { selectContacts } = slice.selectors;

export default slice.reducer;

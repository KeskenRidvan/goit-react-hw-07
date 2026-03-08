# 🚀 Project: goit-react-hw-07

## 📌 Objectives

- Create a repository named `goit-react-hw-07`. 📂
- Provide two links when submitting: one to the source files and one to the live task page on [Vercel](https://vercel.com/keskenridvans-projects). 🔗
- The project must be built using [Vite](https://vite.dev/). ⚡
- There should be no errors or warnings in the console when the code is executed. ✅
- Each component in the `src/components` folder should have its own subfolder containing the JSX file and the style file. The folder, JSX file, and style file (before `.module.css`) must share the same name. 📁
- Use **default exports** for components. 📤
- JS code must be clean and readable; use **Prettier** for formatting. ✨
- The **Redux Toolkit** library must be used. 🛠️
- Styling should be implemented using **CSS Modules**. 🎨

---

## 📞 Phonebook

Refactor the "Phonebook" application code from the previous module.

- Remove Redux Persist codes (the logic for reading and storing contacts in local storage). 🗑️
- Add backend interaction for managing contacts. 🌐

## 🖥️ Backend

Create your own personal backend using the [mockapi.io](https://mockapi.io/projects) UI service. Sign up using your GitHub account and select the free plan. ☁️

## ⚙️ State Management

Add a loading indicator and HTTP request error handling to the Redux state. Modify the contact slice state by adding `loading` and `error` properties. 🔄

```json
{
  "contacts": {
    "items": [],
    "loading": false,
    "error": null
  },
  "filters": {
    "name": ""
  }
}
```

## ⚡ Operations

Create a `contactsOps.js` file in the `redux` folder to store asynchronous action creators. 🏗️

- Use [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) to declare operations.
- Use the [axios](https://axios-http.com/uk/docs/intro) library for HTTP requests. 📨

**Operations to be defined:**

- `fetchContacts` - Fetch the array of contacts (GET method). Base action type: `"contacts/fetchAll"`. 📥
- `addContact` - Add a new contact (POST method). Base action type: `"contacts/addContact"`. ➕
- `deleteContact` - Delete a contact by ID (DELETE method). Base action type: `"contacts/deleteContact"`. ❌

Use `try...catch` blocks within operations to handle errors properly and return `thunkAPI.rejectWithValue` in the `catch` block. 🛡️

Handle the three action states (fulfilled, rejected, pending) in the `extraReducers` property of the contact slice and remove the `reducers` property. 🔄

## 🧠 Selector Memoization

After adding `loading` and `error` to the contact slice, an optimization issue arises: filtering will trigger not only when contacts or the filter change, but also when `loading` or `error` change. ⚠️

**To solve this:**

- Create and export a memoized selector named `selectFilteredContacts` in `contactsSlice.js` using the [createSelector](https://redux-toolkit.js.org/api/createSelector) function. 🧩
- The selector should depend on the current contacts array and the filter value, returning the filtered array.
- Import `selectFilteredContacts` into the `ContactList.jsx` component and use it within `useSelector`. 🎯

## 🗃️ Contact Collection

Since your collection is now stored on the backend, you don't need to generate unique IDs manually; the backend will handle this and return the new contact object. ✨

When the application loads, dispatch the request to fetch contacts from the backend in the `App` component. 🚀

---

## 🏁 Checklist

### ✅ Fast Check

- Repository exists.
- Repository is public.
- `main.jsx` file exists.
- `src/components` folder exists.
- `src/redux` folder exists.
- `store.js` exists.
- `contactsOps.js` exists.

### ⚠️ Error Prevention

`src/redux`

- `contactsSlice.js` and `filtersSlice.js` exist.

`store.js`

- **No** `persistReducer()` call with two arguments (Presence is a critical error). 🚫
- `configureStore` is used to create the store.
- The store is exported from this file. 📤

`filtersSlice.js`

- `createSlice` is used.
- `initialState: { name: "" }` is set.
- `reducers` field contains `changeFilter`.
- Actions are exported (`export const { changeFilter } = filtersSlice.actions;`).
- The reducer is exported.
- `selectNameFilter` selector is exported. 🔍

`contactsSlice.js`

- `createSlice` is used.
- Operations (`fetchContacts`, `deleteContact`, `addContact`) are imported.
- `initialState` includes `items`, `loading`, and `error`.
- **No** `reducers` field; use `extraReducers` for all 3 states (fulfilled, rejected, pending) of each operation.
- Memoized `selectFilteredContacts` is created using `createSelector`. 🧠

`contactsOps.js`

- `createAsyncThunk` and `axios` are used. 📡
- `fetchContacts`, `addContact`, and `deleteContact` are declared and exported.
- `try...catch` and `thunkAPI.rejectWithValue` are used in all operations. 🛡️

`main.jsx`

- `Provider` is present with the `store` prop.
- **No** `PersistGate` (Presence is a critical error). 🚫

`ContactList.jsx`

- Does **not** receive any props (Receiving props is a critical error). 🙅‍♂️
- Uses `selectFilteredContacts` with `useSelector()`.
- Does **not** contain a manual `.filter()` method.

`App.jsx`

- Uses `useDispatch` hook.
- Uses `useEffect` with an empty dependency array to dispatch `fetchContacts`. 🚀

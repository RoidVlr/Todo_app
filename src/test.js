import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// async function apiGetter() {
//     try {
//         const api = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//     } catch (err) {
//         console.error(err);
//     } finally {
//         console.log(api.data);
//     }
// }

// axios.get("/api.json")
//     .then(response => console.log(response.data))
//     .catch(err => console.error(err));



// const fetchItems = createAsyncThunk('items/fetchItems', async () => {
//   const res = await fetch('/api.json');
//   if (!res.ok) throw new Error('Failed to fetch');
//   return res.json();
// });

// console.log(fetchItems);

axios.get('https://jsonplaceholder.typicode.com/todos', {
  params: {
    _limit: 2
  }
})
  .then(res => console.log(res))
  .catch(err => console.log(err));
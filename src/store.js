import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import initialList from "./api.json";

// const listSlice = createSlice({
//   name: 'list',
//   initialState: {value: initialList},
//   reducers: {

//   }
// })


export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  try {
    // const res = await axios.get('https://jsonplaceholder.typicode.com/todos/', {
    //   params: {
    //     _limit: 5
    //   }
    // });
    const res = await axios.get('/api.json');
    return res.data;
  } catch {
    throw new Error('Failed to load');
  }
  // const res = await fetch('/api.json');
  // if (!res.ok) {
  //   throw new Error('Failed to load items');
  // }
  // return res.json();
});


const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    addItem: (state, action) => {
      state.items.unshift({
        id: state.items ? (state.items.at(0).id + 1) : 1,
        title: action.payload,
        completed: false
      });
    },
    removeItem: (state, action) => {
      state.value.filter(item => item.id !== action.payload.id);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchItems.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      })
  }
});



// !!!!!!!!!!!!!!!!!!
// СНАЧАЛА СДЕЛАЮ CREATEENTITYADAPTER И ГЛАВНЫЕ ДАННЫЕ ЧЕРЕЗ RTK,
// УЖЕ ЗАТЕМ СДЕЛАЕМ НОВЫЕ DELETED И RECYCLEBIN, А ПОКА ИХ ОТЛОЖЕМ
// !!!!!!!!!!!!!!!!!!



const themeSlice = createSlice({
  name: 'theme',
  initialState: {value: 'dark'},
  reducers: {
    setLightTheme: state => {state.value = 'light'},
    setDarkTheme: state => {state.value = 'dark'}
  }
});

const reaskSlice = createSlice({
  name: 'reask',
  initialState: {value: true},
  reducers: {
    setReaskTrue: state => {state.value = true},
    setReaskFalse: state => {state.value = false}
  }
});

const deletedSlice = createSlice({
  name: 'deleted',
  initialState: {value: [
    {id: 1, title: 'Backrooooms', completed: false},
    {id: 2, title: 'Tiny Bunny', completed: false},
    {id: 3, title: 'Гений и мрак', completed: false}
  ]},
  reducers: {
    unshiftNewDeleted: (state, action) => {
      state.value.unshift({
        id: state.value.length ? (state.value.at(0).id + 1) : 1,
        title: action.payload,
        completed: false
      });
    },
    filterDeleted: (state, action) => {
      state.value.filter(item => item.id !== action.payload.id);
    }
  }
});

export const {addItem, removeItem} = itemsSlice.actions;
export const {setLightTheme, setDarkTheme} = themeSlice.actions;
export const {setReaskTrue, setReaskFalse} = reaskSlice.actions;
export const {unshiftNewDeleted, filterDeleted} = deletedSlice.actions;


export const store = configureStore({
  reducer: {
    // list: listSlice.reducer,
    theme: themeSlice.reducer,
    reask: reaskSlice.reducer,
    deleted: deletedSlice.reducer,
    items: itemsSlice.reducer
  }
});
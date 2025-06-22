import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./TaskSlice"
import { persistStore, persistReducer } from 'redux-persist';
import { MMKV } from 'react-native-mmkv';

const mmkvStorage = new MMKV({
  id: 'tasks-app',
  encryptionKey: 'hunter2'  // Basic encryption key
});

// Corrected adapter - all methods must return Promises
const MMKVStorageAdapter = {
  getItem: async (key: string) => {
    const value = mmkvStorage.getString(key);
    return Promise.resolve(value === undefined ? null : value);
  },
  setItem: async (key: string, value: string) => {
    mmkvStorage.set(key, value);
    return Promise.resolve();
  },
  removeItem: async (key: string) => {
    mmkvStorage.delete(key);
    return Promise.resolve();
  }
};

const persistConfig = {
  key: 'root',
  storage: MMKVStorageAdapter
};

const persistedReducer = persistReducer(persistConfig, TaskReducer);

const store = configureStore({
  reducer: {
    taskSlice: persistedReducer,
  }
});

export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import React, {useState, useEffect, useReducer} from "react";
import { useFetch } from "./hooks/useFetch";
import todoReducer from './reducer/todoReducer.js';

export const TodoContext = React.createContext();


export default function TodoStore({children}) {
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  const setInitData = (initData) => {
    dispatch({type:"SET_INIT_DATA", payload:initData})
  }

  const loading = useFetch(setInitData, 'https://jsonplaceholder.typicode.com/todos');

  return (
    <TodoContext.Provider value={{todos, loading,dispatch}}>
      {children}
    </TodoContext.Provider>
  );
}

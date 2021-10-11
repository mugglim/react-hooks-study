import {useState, useEffect} from 'react';


const useFetch = (setTodos, url) => {
    const [loading, setLoading] = useState(false);
  
    const fetchingInitData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const initalData = await response.json();
      initalData.forEach(el => el.status="todo")
      setTodos(initalData);
      setLoading(false);
    }
  
    useEffect(() => {
      fetchingInitData();
    }, [])
  
    return loading;
  
}


export {useFetch};
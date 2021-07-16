import React, { useContext, useState, useEffect} from 'react';
import cartContext from '../context/cartContext';

export default function CacheProvider({ defaultValue = [], children }) {
    const [cache, setCache] = useState(defaultValue);
    

    function delete_cache(){
      setCache([]);
      console.log(cache);
    }

    function delete_item(id){
      console.log('delete item');
      const newCache = cache.filter(x => x.id != id);
      
      setCache(newCache);
      console.log(cache);
    } 
    
    function getFromCache(id) {
      return cache.find(x => x.id === id);
    }
  
    function isInCache({ id }) {
      return id === undefined ? undefined : getFromCache(id) !== undefined;
    }
  
    function addToCache(obj) {
        //Esta funcion agrega un producto pero antes verifica que no exista
      if (isInCache(obj)) {
        console.log('Element already in cache store.');
        //si existe tengo que sumar a cant
        cache.map(item =>{
          if(item.id === obj.id){
            item.cant += obj.cant;
          }
        })
      }else{
        setCache([...cache, obj]);
        console.log('Elemento agregado!');
        console.log(obj);
        alert('Se agrego ' + obj.name);
      }
    }
    return (
      <cartContext.Provider
        value={{ cache, addToCache, isInCache ,delete_cache , delete_item,cacheSize: cache.length }}
      >
        {children}
      </cartContext.Provider>
    );
  }
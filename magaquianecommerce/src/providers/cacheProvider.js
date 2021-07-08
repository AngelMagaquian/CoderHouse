import React, { useContext, useState, useEffect} from 'react';
import cartContext from '../context/cartContext';

export default function CacheProvider({ defaultValue = [], children }) {
    const [cache, setCache] = useState(defaultValue);
    
    function getCache(){
      return cache;
    }

    function delete_item(id){
      
      console.log('delete');
      console.log('to delete: ' + id);
      
      
      console.log(cache); //cache origianl
      /* useEffect(()=>{
        const promise = new Promise ((resolve, reject) =>{
            resolve(id)
        });
        promise.then(data =>{
            if(data){
              const newCache = cache.find(x => x.id != id);
              setCache([newCache]);
            }else{
                throw new Error('error');
            }
        }, error =>{
            console.log(error);
        }
        ).catch(error =>{
            alert('NO HAY ITEMS' +error);
        })
      }, []); */

      const newCache = cache.filter(x => x.id != id);
      setCache(newCache);
    
      console.log(cache); //cache despues del find
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
        return;
      }
      setCache([...cache, obj]);
      console.log('Elemento agregado!');
      console.log(obj);
      alert('Se agrego ' + obj.name);
    }
    return (
      <cartContext.Provider
        value={{ cache, addToCache, isInCache, getCache, delete_item ,cacheSize: cache.length }}
      >
        {children}
      </cartContext.Provider>
    );
  }
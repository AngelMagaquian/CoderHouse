import React, { useContext, useState } from 'react';
import cartContext from '../context/cartContext';

export default function CacheProvider({ defaultValue = [], children }) {
    const [cache, setCache] = useState(defaultValue);
  
    function getFromCache(id) {
      return cache.find(x => x.id === id);
    }
  
    function isInCache({ id }) {
      return id === undefined ? undefined : getFromCache(id) !== undefined;
    }
  
    function addToCache(obj) {
      if (isInCache(obj)) {
        console.log('Element already in cache store.');
        return;
      }
      setCache([...cache, obj]);
      console.log('Elemento agregado!');
    }
    return (
      <cartContext.Provider
        value={{ cache, addToCache, isInCache, cacheSize: cache.length }}
      >
        {children}
      </cartContext.Provider>
    );
  }
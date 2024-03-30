

import React, { useEffect, useState } from'react'
import { Input } from 'semantic-ui-react';
import { getFilters } from '../api/FilterApi';
import FilterItem from './FilterItem';

const Filter = () => {


    useEffect(()=>{
        const filterFromApi = async()=>{
             const filtersArray =  await getFilters();
             setRespFilter(filtersArray);
             console.log(filtersArray);        
         }      
        filterFromApi();
     },[])
    


    const [respFilter,setRespFilter] = useState([]);
    const [filters,setFilters] = useState([
        {price:[]},
       { brand:[]},
       { rating:[]},
        {gender:[]}
        
     ] );


     const handleCheckBoxChange = (category, value) => {
        
        const newFilters = [...filters];
        const index = newFilters.findIndex(filter => filter === category);
        if (index === -1) {
                console.log("böyle bir kategori yok");
        }
         else {
                if(newFilters[index].includes(value)) {
                newFilters[index].pop(value);
                setFilters(newFilters);
                console.log("silindi");
                console.log(newFilters);
                }
                else{
                    newFilters[index].push(value);
                    setFilters(newFilters);
                    console.log("eklendi");
                    console.log(newFilters);
                }
        } 

       
      }










    return (
        <div>
        

        {
        respFilter.map((item)=>(

        <div className="ui form card" key={item._id}>      
                <FilterItem filter={item} handleCheckBoxChange={handleCheckBoxChange} />
        </div>
        ))
        }






        </div>
    );
}


     
export default Filter
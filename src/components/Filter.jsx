

import React, { useEffect, useState } from'react'
import { Input } from 'semantic-ui-react';
import { getFilters } from '../api/FilterApi';
import FilterItem from './FilterItem';

const Filter = () => {
    const [respFilter,setRespFilter] = useState([]);
    const [filters,setFilters] = useState([
        {
         category :"",
         values:[],
        }
    ]);

    useEffect(()=>{
        const filterFromApi = async()=>{
             const filtersArray =  await getFilters();
             setRespFilter(filtersArray);
             console.log(filtersArray);        
         }      
        filterFromApi();
     },[])
    


 
/*
   const handleCheckBoxChange = (category, value) => {
  setFilters(prevState=>{
    const index = prevState.findIndex(filter => filter.category === category)
    console.log(index)
    if(index===-1){
       [...prevState,{category : category,values : value}]
         console.log(filters);

    }else if(index!==-1 && index!== "undefined"){
        if(prevState[index].values.includes(value)){
          prevState[index].values = prevState[index].values.filter(filterValue=>filterValue!==value)
          console.log(filters)
        }
        else{
          prevState[index].values.push(value)
          console.log(filters)
        }}})    }
*/

  





    const handleCheckBoxChange = (category, value) => {
        setFilters(prevFilters => {
          const newFilters = [...prevFilters]; 
          const index = newFilters.findIndex(f => f.category === category);
      
          if(index === -1) {
            newFilters.push({category, values: [value]});
          } else {
            if(newFilters[index].values.includes(value)) {
              newFilters[index].values = newFilters[index].values.filter(v => v !== value);
            } else {
              newFilters[index].values.push(value);
            }
          }
      
          console.log(newFilters); // yeni state
          return newFilters; 
        });
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
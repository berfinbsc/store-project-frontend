

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
    


 


  





    const handleCheckBoxChange = (category, value) => {
        setFilters(prevFilters => {
          const newFilters = [...prevFilters]; 
          const index = newFilters.findIndex(f => f.category === category);
          console.log(index);

          if(index === -1) {
               newFilters.push({category :category, values: [value]});
          } 
          else {
            console.log(newFilters[index].values.includes(value))
            console.log(newFilters[index].values);

                if(newFilters[index].values.includes(value)) {
                  console.log("cagegori var filtre var");
                  newFilters[index].values = newFilters[index].values.splice(value,1);
                  console.log(newFilters[index].values);
                } else {
                  console.log("cagegori var filtre yok");
                  newFilters[index].values.push(value);
                }
          }
          console.log(newFilters); // yeni state

          return newFilters; 
        });

     console.log(filters); // yeni state
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
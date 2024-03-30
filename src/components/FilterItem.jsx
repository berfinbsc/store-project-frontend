

const FilterItem=({filter,handleCheckBoxChange})=>{
const array = filter.values;
const category = filter.category;
console.log(filter);
console.log(array);
console.log(category);
    return (

       <div>

        {
            array.map((item)=>(
                 <div className="field" key={item}>
                <div className="ui checkbox">
                <input type="checkbox" name={item} onChange={() => {console.log('Checkbox değişti'); handleCheckBoxChange(category,item)}} />
                    <label>{item}</label>
                </div>
            </div>
            ))
        }


   
       </div>

   
    )



}

export default FilterItem;
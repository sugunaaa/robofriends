import React from "react";

const Searchbox=({searchfield, SearchChange})=>{
    return(
        <div className="pa2">
           < input type='search'
            className='pa3 ba b--green bg-lightest-blue' 
            placeholder="search robots" 
            onChange={SearchChange}/> 
        </div>
    );
}

export default Searchbox;
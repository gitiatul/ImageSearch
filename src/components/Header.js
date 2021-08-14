import React, { useState } from 'react';

function Header(props){

    const [search,setsearch]=useState('');
    const [newValue , setNewValue] =useState([]);
    const [keyvalue,setkeyvalue]=useState(false);
    const [alfavalue ,setalfavalue]=useState(false);
  
    function handleChange(event){
        const{value}=event.target;
        setsearch(value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if (search.length === 0){
            alert("invalid text");
        }
        else{
            setalfavalue(true);
            props.onAdd(search)
          setNewValue((prevValue)=>{
              return(
                  [...prevValue,search]
              )
          });
        }
          setsearch('');
    }

    function onKey(event) {
        if (search.length === 0){
            setkeyvalue(false)
        }
        else{
            setkeyvalue(true);
        }
        
    }

    function deletehist() {
        setNewValue([]);
        setkeyvalue(false);
        setalfavalue(false);
        
    }

    function zetasearch(items) {
        const zetaavalue=items;
        setalfavalue(true);
        props.onAdd(zetaavalue);
    }
    

  return(
      <>
      
      <nav className="navbar searchbox">
      <div className="mx-auto ">
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" value={search} placeholder="Search.." onChange={handleChange} onKeyUp={onKey} />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
          <div className="container searchhistory">
          {(keyvalue ?  (
                <div className="scrolsearch">
                <ul>
                   {newValue.map((items,index)=>(  
                    <a href="#" onClick={ function(){zetasearch(items)}}><li  className="eachhistory"  value={items} key={index} >{items} </li></a>   
                   ))}
                </ul>
                {(alfavalue ?  
                (<button type="button" className="btn btn-danger" onClick={deletehist}>Delete</button>) : false )}
                </div>
                
            ) : false) }
          </div>
          
      </div>
      </nav>
      </>
  )
}

export default Header;
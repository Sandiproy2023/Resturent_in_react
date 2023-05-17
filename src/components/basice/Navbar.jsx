import React from 'react'

const Navbar = ({filteritem,itemlist}) => {
  return (
    <>
        <nav className='navbar' >
      <div className='btn-group'>
        {
            itemlist.map((curelm)=>{
                return(
                    <button className='btn-group__item' onClick={()=> filteritem(curelm)} >   {curelm}  </button>

                )
            })
        }
        
        {/* <button className='btn-group__item' onClick={()=> filteritem("evening")}>Evening</button>
        <button className='btn-group__item' onClick={()=> filteritem("dinner")}>dinner</button>
        <button className='btn-group__item'  onClick={()=> filteritem("lunch")}>lunch</button>
        <button className='btn-group__item' onClick={()=> setMenuData(items)}>All</button> */}
      
      </div>
    </nav>

    </>
  )
}

export default Navbar
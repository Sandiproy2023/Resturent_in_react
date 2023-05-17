import React, { useState } from 'react';
import "./style.css";
import { items } from './menusApi';
import Card from './Card';
import Navbar from './Navbar';


   
const unicklist = [...new Set(items.map((curelm) => {
  return curelm.catagory
})),
"All"
]
console.log(unicklist);

const Resturent = () => {
  const [menuData, setMenuData] = useState(items)
  const [itemlist, setItemlist] = useState(unicklist)
  // console.log(menuData);
  const filteritem = (catagory) => {

if(catagory === "All"){
  setMenuData(items)
  return;
}

    const updatelist = items.filter((curelm) => {
      return curelm.catagory === catagory;
    })
    setMenuData(updatelist)
  }


  return (
    <>
      <Navbar filteritem={filteritem} itemlist={itemlist} />
      <Card menusData={menuData} />

    </>
  )
}

export default Resturent
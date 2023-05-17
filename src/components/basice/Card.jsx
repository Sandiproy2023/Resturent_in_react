import React from 'react';
import "./style.css";

const Card = ({ menusData }) => {
    // console.log(menusData);
    return (
        <>
     <section className='main-card--cointainer'> 

            {
                menusData.map((curelm) => {


                    const  {id,name,description,price,image,catagory} = curelm

                    return (
                        <>


                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className='card-number  card-circle subtle'>{id}</span>
                                        <span className='card-author subtle'> {catagory} </span>
                                        <h2 className="card-title">{name}  </h2>
                                        <span className="card-description subtle">
                                        {description} 
                                        </span>
                                        <div className="card-read">  {price}    </div>
                                    </div>
                                    <img src={image} alt="images" className='card-media' />
                                    <span className="card-tag subtle">oder now</span>
                                </div>
                            </div>

                        </>



                    )
                })
            }
    </section>
        </>
    )
}

export default Card
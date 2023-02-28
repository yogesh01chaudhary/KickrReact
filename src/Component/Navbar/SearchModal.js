import React, { useState } from 'react'

export default function SearchModal(props) {

    let modalIsOpen=props.val;


  return (
    <>
    {modalIsOpen==true?(
        <div className='navSearchBox'>
        <div className="NavSearchModal">
            <input type="text" className='SearchInputNav'></input>
        </div>
    </div>
    ):(
        <></>
    )}
    
    </>
  )
}

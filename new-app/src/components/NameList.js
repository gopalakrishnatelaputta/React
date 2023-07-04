import React from 'react'
import Person from './Person'

function NameList() {

    const names=['Bruce','Clerk','Diana','Bruce']
    const nameList=names.map((name,index)=><h2 key={index}>{index}   {name}</h2>)
    // const persons=[

    //     {
    //         id: 1,
    //         name:'Bruce',
    //         age:20,
    //         skill:'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Diana',
    //         age:25,
    //         skill:'Angular'

    //     },
    //     {
    //         id: 3,
    //         name: 'Clark',
    //         age:30,
    //         skill:'Java Script'
    //     }
        
    // ]

   
        
    return <div>{nameList}</div>
   
  
}

export default NameList

import React from 'react'

function Quiz1(props){
    console.log(props);
    const {name,course}=props;
    return(
        <>
            <div>hello {name}</div>            
            <div>Interested Course {course}</div>            
        </>
    )
}

export default Quiz1
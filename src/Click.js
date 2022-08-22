import { useState } from "react";

const Click = ()=>{
    const [name, setName] = useState('eggy')
    function nameChanger(){
        if (name === 'eggy'){
            setName('silas')
        }else{
            setName('eggy')
        }
    
    }


    const [age, setAge] = useState(40)
    // console.log(useState);
    let number = 20;
    function ageChanger (){
        setAge(55)
    }
    function handleClick(){
        console.log('who clicked me');
    }
    let handleAgain = ((name)=>{
        number = 50 
        let speaker =`${name} clicked me ${number} times`
        console.log(speaker);

    })
    return(
        <div>
            <button onClick={handleClick} style={{fontSize:'16px', padding:'15px 30px', borderRadius: '30px', backgroundColor: 'pink', border: 'none'}}>click me</button>
            <h2>{number}</h2>
            <button onClick={ ()=> handleAgain('Wale')}>click me again</button>
            <h1>{age} </h1>
            <button onClick={ageChanger}>choose age </button>
            <h2>my name is {name} </h2>
            <button  onClick={nameChanger} style={{fontSize:'16px', padding:'15px 30px', borderRadius: '30px', backgroundColor: 'pink', border: 'none'}}>click to get my name</button>
        </div>
    )
}

export default Click;
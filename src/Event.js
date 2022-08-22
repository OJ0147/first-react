
import React, { useState }  from 'react'

const Event = () => {
    // const [name, setName] = useState('Wale')
    // const [height, setHeight] = useState('tall')
    // const [complexion, setComplexion] = useState('light')
    // const [gender, setGender] = useState('guy')
    const [person, setPerson] = useState({
        name: 'wale',
        height: 'tall',
        complexion : 'light',
        gender: 'guy',
    })
    let changeStatus = ()=>{
        if (person.name === 'wale' && person.height ==='tall' && person.complexion === 'light'
         && person.gender ==='guy'){
            setPerson({name:'steff', height:'short', complexion:'dark', gender:'baby girl'})
            // setHeight('short')
            // setComplexion('dark')
            // setGender('baby girl')
            // setName('Stephanie')
        }else {
            setPerson({name:'wale', height:'tall', complexion:'light', gender:'guy'})
            // setHeight('tall')
            // setComplexion('light')
            // setGender('guy')
            // setName('Wale')
        }
    }
  return (
    <div>
        <h2>
            {/* my name is {name}, I am a {height} and {complexion} skinned {gender} */}
            my name is {person.name}, I am a {person.height} and {person.complexion} skinned {person.gender}
            
        </h2>
        <button onClick={changeStatus} style={{fontSize:'16px', padding:'15px 30px', borderRadius: '30px', backgroundColor: 'pink', border: 'none'}}>click me</button>
    </div>
  )
}

export default Event
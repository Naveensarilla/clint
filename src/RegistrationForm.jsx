import axios from 'axios';
import React, { useState } from 'react'

export const RegistrationForm = () => {
    const [value, setValues] = useState({
        CandidateName: '',
        DataOfBirth: '',
    });


    const handleSubmit = e => {
        e.preventDefault();
        // const formdata = new FormData();
        // formdata.append('image',File)
        // axios.post('http://localhost:709/list',value).then(() => alert('data submited'))
        axios.post("http://localhost:5011/stud", value)
        .then(res => {
            console.log(res);
            alert('YOU ARE SUBMITED THE DATA SUCCESSFULLY successfully');
        })
        .catch(err => console.log(err))
     }

  return (
    <div>
        <form onSubmit={handleSubmit}>
         <input type="text" required className='inputss' onChange={e => setValues({...value, CandidateName: e.target.value})}/>

         <input type="date" required className='inputss'  onChange={e => setValues({...value, DataOfBirth: e.target.value})}/>

            <input type="submit" value="submit" />
        </form>

    </div>
  )
}

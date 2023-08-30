import React, { useState } from 'react'
import axios from 'axios'

export const NewoneTow = () => {
    const [value, setValues] = useState({

        userName: '',

        dob: '',

    });

 

    const [file,setFile] = useState("");

    const setimgfile = (e)=>{

        setFile(e.target.files[0])

    }

 

    const onSubmit = (e) => {

        const formData = new FormData();

        formData.append("Files",file)

        formData.append('username', value.userName);

        formData.append('dob', value.dob);

        e.preventDefault();

        // const config = {

        //     headers:{

        //         "Content-Type":"multipart/form-data"

        //     }

        // }

    axios.post('http://localhost:601/upload', formData, {

            headers: {

              'Content-Type': 'multipart/form-data',

            },

          });

    }
  return (
    <div><form onSubmit={onSubmit} encType='multipart/form-data'>

    <div className="custom-file-input">

        <input id="fileInput" type="file" name="Files"    onChange={setimgfile}/>

        {/* <label for="fileInput" id="fileInputLabel">Select Files</label> */}

    </div>



    <div>

        <input type="text" name='username' onChange={e => setValues({...value, userName: e.target.value})} />

        <input type="date"  className='inputss'  name='dob'  onChange={e => setValues({...value, dob: e.target.value})}/>



    </div>

    <button id="myButton" type="submit">Submit</button>

</form></div>
  )
}

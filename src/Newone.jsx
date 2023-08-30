import React from 'react'
import { useState } from 'react';
import axios from 'axios'

export const Newone = () => {

    const [value, setValues] = useState({
        userName: '',
        dateOfBirth: '',
    });
    const setting = (e)=>{
        setValues(e.target.files)
    }


    const [file,setFile] = useState("");
    const setimgfile = (e)=>{
        setFile(e.target.files[0])
    }

    const onSubmit = (e) => {
        const formData = new FormData();
        formData.append("Files",file)
        e.preventDefault();
        // const config = {
        //     headers:{
        //         "Content-Type":"multipart/form-data"
        //     }
        // }
         axios.post('http://localhost:501/upload', formData,value, {
            method: 'POST',
            body: formData,

        }).catch(res => {console.log(file)})
        .catch(error => {console.log(`Error ${error}`)})
      
    }





    
  return (
    <div>
        <form onSubmit={onSubmit} encType='multipart/form-data'>
            <div class="custom-file-input">
                <input id="fileInput" type="file" name="Files"    onChange={setimgfile}/>
                {/* <label for="fileInput" id="fileInputLabel">Select Files</label> */}
            </div>

                <input type="text" name='userName'  onChange={setting} />
                <input type="date" name='dateOfBirth' className='inputss'  onChange={setting}/>

            
            <button id="myButton" type="submit">Submit</button>
        </form> 

        <img src="https://drive.google.com/uc?export=view&id=1WFTRKYMWf-IggC6LBMLDPZVaUSGltZov" width={200} alt="" />
    </div>
  )
}

import React from 'react'
import { useState } from 'react';
import axios from 'axios'

export const Dbdata = () => {

    // const [value, setValues] = useState({
    //     userName: '',
     
    // });
  

  
    const [value, setValues] = useState({
        userName: '',
        dateOfBirth: '',
    });
    // const setting = (e)=>{
    //     setValues(e.target.files)
    // }


    const [file,setFile] = useState("");
    const setimgfile = (e)=>{
        setFile(e.target.files[0])
    } 

    const onSubmit = (e) => {
        const formData = new FormData();
        formData.append("files",file)
        formData.append('username', value.userName);
        formData.append('dob', value.dateOfBirth);
        // const formData = new FormData();
        // formData.append("files",file)
        e.preventDefault();

     axios.post("http://localhost:7019/uploadd", formData, 
        {
            method: 'POST',
            body: formData, 
            headers: {
                'Content-Type': 'multipart/form-data',
              },
            
        }
        
        )
        // .then(res => {
        //     console.log(res);
        //     alert('YOU ARE SUBMITED THE DATA SUCCESSFULLY successfully');
        // })
    //     .catch(res => {console.log(file)})
    //     .catch(error => {console.log(`Error ${error}`)})
    //    console.log(value);
    //    console.log(file)
      
    }





    
  return (
    <div>
        {/* <form onSubmit={onSubmit} encType='multipart/form-data'>
            <div class="custom-file-input">
                <input id="fileInput" type="file" name="Files"    onChange={setimgfile}/>
                <label for="fileInput" id="fileInputLabel">Select Files</label>
            </div>

                <input type="text"   onChange={e => setValues({...value, userName: e.target.value})} />
                <input type="date" name='dateOfBirth' className='inputss'  onChange={setting}/>

            
            <button id="myButton" type="submit">Submit</button>
        </form>  */}
{/* sds */}
<h1>2</h1>
<img src="https://drive.google.com/uc?export=view&id=1WFTRKYMWf-IggC6LBMLDPZVaUSGltZov" alt="ss" width={100} />
        <form onSubmit={onSubmit} encType='multipart/form-data'>
            <div class="custom-file-input">
                <input id="fileInput" type="file" multiple name="files"    onChange={setimgfile}/>
                {/* <label for="fileInput" id="fileInputLabel">Select Files</label> */}
            </div>

                <input type="text" name='username'  onChange={e => setValues({...value, userName: e.target.value})} />
                <input type="date" name='dob' className='inputss' onChange={e => setValues({...value, dateOfBirth: e.target.value})} />

{/*             
            <button type="submit">Submit</button> */}
            <input type="submit" value="submit" />
        </form> 
        <img src="https://drive.google.com/uc?export=view&id=1iEzzxp71OaSUike-wrgS3wAv-ZaNhPS-" width={200} alt="" />
    </div>
  )
}

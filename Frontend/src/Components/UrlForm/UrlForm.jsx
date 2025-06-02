import React from 'react'
import './UrlForm.css'
// import { set } from 'mongoose'
import { useState,useEffect } from 'react'

const UrlForm = () => {

    const [formData,setformData]= useState({
        originalUrl:""
    });
    const [response,setResponse] = useState(false)

    const [shortUrl,setShortUrl] = useState("");
    useEffect(() => {
    
    }, [])


    const changeHandler = (e) =>{
        setformData({...formData,[e.target.name]:e.target.value})
    }
    const getshortenUrl=async()=>{
        
        // let responseData;
       const response= await fetch('https://shortify-2-0e9h.onrender.com/shorten',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData),
        })
        // .then((response)=>response.json()).then((data)=>{responseData=data});
        // console.log(response);
        // console.log(responseData);


        try{
         const data = await response.json();
      console.log(data);

      if (data?.shortUrl) {
        setShortUrl(data.shortUrl);
        setResponse(true);
      } else {
        alert("Failed to get short URL.");
      }
    } catch (error) {
      console.error("Error shortening URL:", error);
      alert("Something went wrong.");
    }

        // if(responseData){
        //     setResponse(true);
        //     setShortUrl(responseData.shortUrl);
        // }
    }
  return (
<div className="entire">
    <div className='urlForm'> 
        <center>
        <form action="">
            
      <label className='label' htmlFor="">Enter your Url</label>
      <br />
      <br />
      <input name='originalUrl' value={formData.originalUrl} className='urlTxt' onChange={changeHandler} type="text" placeholder='   your url here..' required />
      <br />
      <br />
      <button className='shortBtn' type='button' onClick={getshortenUrl} >Shorten URL</button>

        {/* {response? 
            <div className="answer">
                <p>{shortUrl}</p>
            </div>
        :<></> */}
        {response &&
            <div className="answer">
              <p className='srtUrl'>Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
            </div>
          }

      </form>
      </center>
    </div>
    </div>
  )
}

export default UrlForm

import React, { useState } from 'react'
import Coffee from '../assets/1672362705254-jakub-dziubak-XtUd5SiX464-unsplash.jpg'
function GetImages() {
    const [images, setImages] = useState([])
    const getImagesHandler = ()=>{
        fetch('http://localhost:4000/image')
        .then(res=>res.json())
        .then(setImages)
        .catch(console.log)
    }
    console.log(images)
  return (
    <div className='app'>
          <h1>getImages</h1>
          <button onClick={getImagesHandler}>Get Images</button>
          {images.length > 0 && images.map(ele => <div style={{ width: '18rem' }}>
              <img src={`../../../backend/uploads/${ele.image}`} width="100" height="50" />
          </div>)}
          <div style={{ width: '18rem' }}>
              <img src={Coffee} width="100" height="50" />
          </div>

    </div>
  )
}

export default GetImages
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

import Pagelist from './Pagelist'
import Userlist from './Userlist'
import Navbar from './Navbar'
import './style.css'

function Pageform() {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)

    function handleChange(e) {
        console.log(e.target.files);
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await Axios.post('https://bankwithus.onrender.com/api/page',{title, image})
        .then( (response) => {
            navigate('pages');
        })
        .catch( (err) => {
            console.log(err.response)
        })
    }
    return (
        <div className='container'>
        <Navbar/>
        <div className='form_container'>
        <h1>Create Page</h1>
        <form className="post_paget" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className='unit'>
            <label className='form_label'>Page Title</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder={"Page Title"}
                className='form_input'
            />
            </div>
            <label className='form_label'>Company logo: </label>
            <input type="file" onChange={handleChange} />
            {/* <img src={image} /> */} <br/>
            
        <button className="post_user_sbt" >Submit</button>

        </form>
        </div>
        
        <div className='pages'>
            <Pagelist/>
        </div>
        <div className='pages'>
            <Userlist/>
        </div>
        
        </div>
    )
}

export default Pageform;

import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

import './style.css'
import Footer from "./Footer";


function Userform() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit= async (e)=>{
        e.preventDefault()

        Axios.post('http://127.0.0.1:3001/api/users', {email, password})
        .then( (response) => {
            navigate('/signin');
        })
        .catch( (err) => {
            console.log("Error", err.response.data);
        })

    }
  return (
    <div className='container'>
      <div className="form_container">
      <h1>Log in</h1>
        <form className="post_paget" onSubmit={handleSubmit}>
        <div className='unit'>
          <label className='form_label'>Email: </label>
          <input
          type='text'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder={"Enter email here"}
          className='form_input'
          />
        </div>
        <div className='unit'>
          <label className='form_label'>Password:</label>
          <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder={'Enter Password'}
          className='form_input'
          />
          </div>
          <button className="post_user_sbt" >Log in</button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Userform

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './style.css'
import Axios from "axios";
import Userform from './Userform';
import Navbar from './Navbar';

function PageDetail() {
    const { pageid } = useParams()

    const [Page, setPage] = useState(null)

    useEffect( () => {
        const page_id = pageid

        Axios.get(`https://bankwithus.onrender.com/api/page/${page_id}`)
        .then( (response) =>{
            console.log('data', response.data);
            setPage(response.data)
        })
        .catch( (err) => {
            console.log(err.response.data)
        })
    }, [pageid])

  return (
    <div className='container'>
    <Navbar page={ Page ? Page.title : "Cpcacola"}/>
      <div>
        {/* { Page ? Page.title : ""} */}
      </div>
      <img src={Page ? Page.image : Image} alt=''/>
      <div>
        <Userform/>
      </div>
    </div>
  )
}

export default PageDetail

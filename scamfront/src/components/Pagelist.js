import { useEffect, useState } from "react";
import PageD from "./PageD";

function Pagelist() {
    const [ freshPages, SetFreshPages ] = useState(null)

    useEffect(() => {
        const fetchPages = async () => {
            const response = await fetch('https://bankwithus.onrender.com/api/page')
            
            // console.log(response)
            const json = await response.json()
            console.log(json)

            if (response.ok) {
                SetFreshPages(json)
                console.log(json)
            }
        }
        fetchPages()
    }, [])

  return (
    <div>
      <div>
      <h4>Available Pages</h4>
        { freshPages ? freshPages.data.map((page) => (
            <PageD key={page._id} page={page}/>
        )): 'No pages yet'}
      </div>
    </div>
  )
}

export default Pagelist

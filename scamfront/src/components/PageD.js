import { Link } from 'react-router-dom'

const PageD = ({page}) => {
  return (
    <div>
    
      <Link className='' to={`/page/${page._id}`}>
        {/* <div><img src={page ? page.img : {Image}} alt={page.title}/></div> */}
        <div>{page.title}</div>
      </Link>
    </div>
  )
}

export default PageD

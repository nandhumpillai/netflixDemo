import './Banner.css'



function Banner(props) {

  return (
    <div className='bannerMain' style={{backgroundImage: `url("${props.backgroundImage}")`}}>
      <div className='content' >
        <h1 className='title'>{props.title}</h1>
        <div className='banner_buttons' >
          <button className='button' >Play</button>
          <button className='button' >My list</button>
        </div>
        <h1 className='description'>{props.overview}</h1>
      </div>
      <div className="shadow"></div>
    </div>
  )
}

export default Banner

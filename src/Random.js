import React from "react"
import "./Random.css"
import "./Images/youtube-logo.png"


export default function Random() {

    
    const logo = require('./Images/youtube-logo2.png')
    
    const [videos, setVideos] = React.useState([])
    
    const [vidCount, nextvidCount] = React.useState(0)
    
    const [qValue, setqValue] = React.useState({
        qValue: ""
    })

    const [qSearch, setqSearch] = React.useState({
        qSearch: "",
        qNumber: ""
    })

    function nextButton() {
        nextvidCount(vid => {
            if(vid < 3) {
                return vid + 1
            } else {
               return vid = 0
            }
        })
    }
function enterHandle(event) {
    if(event.keyCode === 13) {
        event.preventDefault()
        setqSearch(q => ({
            qSearch: qValue.qValue.split(' ').join('+')
            
    } )) }}
  

    function handleChange(event) {
        const {name, value} = event.target
        setqValue(newQ => ({
            ...newQ,
            [name] : value
        }))
    }

    function querySearch() {
        setqSearch(q => ({
            qSearch: qValue.qValue.split(' ').join('+'),

        }))
    }

    // console.log(qValue.qValue)
    console.log(qSearch.qSearch)
    console.log(vidCount)

    React.useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${qSearch.qSearch}&key=AIzaSyBG0POeEqQKn2E_otQoWZkzV8Xxy54VxM4`)
        .then((res) => res.json())
        .then((data) => setVideos(nVideos => ({
            ...nVideos,
            videos2: data.items[vidCount].id.videoId,
            sVideos: data.items[vidCount + 1].id.videoId

        })))

    },[qSearch, vidCount])

      
    
    
      //tabIndex needed to run onKeyDown on div, p, etc
    return (
    <div tabIndex={-1} onKeyDown={enterHandle}> 
        
<img class="logoCSS" src={logo}></img> <p class="randomText">Random</p> 
<br /> 
{/* <button class="searchButton" onClick={querySearch}><p class="buttonText">Search</p></button>    
    <p>{ <p>
    <div class="buttonMover"> <h1><iframe width="1400px" height="548px"
     src={`https://www.youtube.com/embed/${videos.videos2}`}>
    </iframe></h1>
    



     </div>
                </p>}</p> */}

<button class="searchButton" onClick={querySearch}><p class="buttonText">Search</p></button>    
    <p>{ <p>
    <div class="buttonMover"> <h1><iframe class="videoPlayerSize" frameborder="0"
    src={`https://www.youtube.com/embed/${videos.videos2}`}>
    </iframe></h1>
    


     </div>
                </p>}</p>

   <p class="upcomingVideoText">Upcoming video</p>
    <p>{ <p>
    <div class="videoLocationNext"> <h1><iframe class="videoSizeNext" frameborder="0"
    src={`https://www.youtube.com/embed/${videos.sVideos}`}>
    </iframe></h1>
    


     </div>
                </p>}</p>


        <form>
        <label>
            <br />
          <input class="searchBar"
            type="text"
            placeholder=" Search videos"
            name="qValue"
            value={qValue.qValue}
            onChange={handleChange}
          /> 
        </label>
        </form>
        
        {console.log(videos.videos2)}
        {console.log(videos.sVideos)}

        <button class="theButtons" onClick={nextButton}><p class="buttonText">Next</p></button>  
     
     </div>
     



    )
}
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

    // React.useEffect(() => {
    //     fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${qSearch.qSearch}&key=AIzaSyDBlnPOVcsbiK0-Em_6Sdiiuh0bkfD4Q38`)
    //     .then((res) => res.json())
    //     .then((data) => setVideos(videos => ({
    //         videos: data.items[vidCount].id.videoId
    //     })))

    // },[qSearch, vidCount])

    // React.useEffect(() => {
    //     fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${qSearch.qSearch}&key=AIzaSyDBlnPOVcsbiK0-Em_6Sdiiuh0bkfD4Q38`)
    //     .then((res) => res.json())
    //     .then((data) => setVideos(videos => ({
    //         videos: data.items[qSearch.qValue].id.videoId
    //     })))

    // },[vidCount])


    // React.useEffect(() => {
    //     fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=cars&key=AIzaSyDBlnPOVcsbiK0-Em_6Sdiiuh0bkfD4Q38')
    //     .then((res) => res.json())
    //     .then((data) => setVideos(videos => ({
    //         videos: data.items[vidCount].id.videoId
    //     })))

    // },[vidCount])

    

    //data.items[0].id.videoId
    
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=cars&key=AIzaSyDBlnPOVcsbiK0-Em_6Sdiiuh0bkfD4Q38

  

    // React.useEffect(() => {
    //     const options = {
    //       method: 'GET',
    //       headers: {
    //         'X-RapidAPI-Key': 'ace8f1d948msh9927bcfc60a790ep116039jsn71bb570216af',
    //         'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    //       }
    //     };
        
    //     fetch('https://youtube138.p.rapidapi.com/search/?q=despacito&hl=en&gl=US', options)
    //       .then(response => response.json())
    //       .then((data) => setVideos(videos => ({
    //         ...videos,
    //         videos: Object.values(data.contents[1]).map(video2 => <p>
    //              <div> <h1><iframe width="796px" height="448px"
    // src={`https://www.youtube.com/embed/${video2.videoId}`}>
    // </iframe></h1>
    



    //  </div>
    //              </p>)
    //       })))
    //       .catch(err => console.error(err));
    //   }, [2]) 
    

      
    
    
      
    return (
    <div> 
<img class="logoCSS" src={logo}></img> <p class="randomText">Random</p> 
<br /> 
<button class="theButtons" onClick={querySearch}><p class="buttonText">Search</p></button>     
    <p>{ <p>
    <div> <h1><iframe width="1400px" height="548px"
     src={`https://www.youtube.com/embed/${videos.videos}`}>
    </iframe></h1>
    



     </div>
                </p>}</p>

        <form>
        <label>
          Search:  <br />
          <input class="searchBar"
            type="text"
            placeholder="Video type"
            name="qValue"
            value={qValue.qValue}
            onChange={handleChange}
          /> 
        </label>
        </form>
    
   

        <button class="theButtons" onClick={nextButton}><p class="buttonText">Next</p></button>  
     </div>



    )
}
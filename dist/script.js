const shazamUI = document.getElementById("shazamUi")
let shazamAudio = document.getElementById("shazamAudio")
let audioSpinner = document.getElementById("audioSpinner")
let identifiedRangeTrk = document.getElementById("identifiedRangeTrk")
let identifiedAudio = document.getElementById("identifiedAudio")
let mainSearchContainer = document.getElementById("mainSearchContainer")
let automaticPlayId
let searchSongsUrl = []
let searchIcon = document.getElementById("searchIcon")
let shazamSpinner = document.getElementById("shazamSpinner")
let shazamPlayContainer = document.getElementById("shazamPlayContainer")
let IdentifiedSong = []
let shazamPlay = document.getElementById("shazamPlay")
let shazamRangeTrk = document.getElementById("shazamRangeTrk")
let manipulateRelColor 
let manipulatePlayBack
let shazamReviewResults = document.getElementById("shazamClick")
let playCntrls = document.getElementById("playCntrls")
let playAll = document.getElementById("playAll")
let relPlay = document.getElementById("relPlay")
let relSpinner = document.getElementById("relSpinner")
let musicUrls = []
let timeSpan = document.getElementById("timeSpan")
let vol = document.getElementById("vol")
let mainPic = document.getElementById("mainPic")
let songDuration = document.getElementById("songDuration")
const more = document.getElementById("more")
let specificTrackInfo = document.getElementById("specificTrackInfo")
let songBtn = document.getElementById("songBtn")
let nextSong = document.getElementById("nextSong")
let repeat = document.getElementById("repeat")
let prevSong = document.getElementById("prevSong")
let relatedBtn = document.getElementById("relatedBtn")
let mainTitle = document.getElementById("mainTitle")
let mainArtist = document.getElementById("mainArtist")
const hideShazamUI = document.getElementById("closeShazamUi")
const Shazam = document.getElementById("shazam")
const search = document.getElementById("search")
const resultsInfo = document.getElementById("resultsInfo")
const hideSearchResults = document.getElementById("hideSearchResults")
let range = document.getElementById("rangeTrk")
const related = document.getElementById("related")
const searchResults = document.getElementById("searchResults")
const like = document.getElementById("like")
const noLike = document.getElementById("noLike")
const mainEl = document.getElementById("mainEl")
const musicMain = document.getElementById("musicMain")
const menuTab = document.getElementById("menuTab")
const hideMenuTab = document.getElementById("hideMenuTab")
const menu = document.getElementById("menu")
const favorites = document.getElementById("favourites")
const favoritesBtn = document.getElementById("favouritesBtn")
const playlistBtn = document.getElementById("playlistBtn")
const playlist = document.getElementById("playlist")
const closeList = document.getElementById("closeList")
const closeFav = document.getElementById("closeFav")
const shazamResult  = document.getElementById("shazamResult")
let uiOverlay  = document.getElementById("uiOverlay")
let colorScheme
const hideShazamresult = document.getElementById("hideShazamResult")
let album  = document.getElementById("album")
let artist  = document.getElementById("artist")
let trackName  = document.getElementById("trackName")
let shazammedTime  = document.getElementById("shazammed")
let label = document.getElementById("label")
let released = document.getElementById("released")
let noSearch = document.getElementById("noShazams")
let audioArt = document.getElementById("audioArt")
let audio = document.getElementById("audio")
let volLow = document.getElementById("volLow")
let play = document.getElementById("play")
let currentSongIndex = 0
let relatedContainer = document.getElementById("relatedContainer")
let jamz = [
  {
    song: "musics/01 - Whatcha Say - (Musicfire.in) - Copy - Copy.mp3",
    title: "Whatcha Say ",
    artist: "Jason Durelo",
    image: "./images/WatchaSay.png"
  },
  {
  song: "musics/01 chandelier_sia.mp3",
  title: "Chandelier",
  artist: "Sia",
  image: "./images/sia.png"
 }, {
  song: "musics/01 Never Go Down (feat_ Limoblaze).mp3",
  title: "Never Go Down",
  artist: "Ada Ehi feat_ Limoblaze",
  image: "./images/Never Go down.png"
 }, {
  song: "musics/03 Trap (feat. Lil Baby).mp3",
  title: "Trap",
  artist: "Saint Jhn feat_ Lil Baby",
  image: "./images/Trap.png"
 }, {
  song: "musics/04 Grace.mp3",
  title: "Grace",
  artist: "Lil Baby feat_ Kodak Black",
   image: "./images/Grace.png"
 }, {
  song: "musics/05 Woah_1.mp3",
  title: "Woah",
  artist: "Lil Baby",
   image: "./images/Woah.png"
 }, {
  song:  "musics/07 I HATE EVERYBODY - (SongsLover.com).mp3",
  title: "I HATE EVERYBODY",
  artist: "Halsey",
   image: "./images/Halsey.png"
 },
{
  song:  "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/55/4c/4d/554c4d1a-14e4-a4d8-76ee-ed2bb00f08dd/mzaf_6348356541043285478.plus.aac.ep.m4a",
  title: "Move",
  artist: "Bad Boy Timz",
   image: "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png"
}]
let audioBlob

let audioChunks = []
let mediaRecordings


//shazamResult.style.top = (mainEl.clientHeight - 70) + "px"

vol.max = 100
audio.volume = (vol.value/100)
vol.addEventListener('input', () =>{
  if(volLow.classList.contains("fa-volume-mute")){
    volLow.classList.remove("fa-volume-mute")
    volLow.classList.add("fa-volume-low")
    audio.volume = (vol.value/100)
  }
    else{
      audio.volume = (vol.value/100)
    }
})

volLow.addEventListener('click', () => {
  if(volLow.classList.contains("fa-volume-low") || volLow.classList.contains("fa-volume-mute")){
      if(volLow.classList.contains("fa-volume-low")){
          audio.volume = (vol.value/100) * 0
      }
      else if(volLow.classList.contains("fa-volume-mute")){
          audio.volume = (vol.value/100)
      }
      volLow.classList.toggle("fa-volume-low")
       volLow.classList.toggle("fa-volume-mute")
  }
})

nextSong.addEventListener("click", () => {
  currentSongIndex++
  if(currentSongIndex >= jamz.length ){
      currentSongIndex = 0
  }
  if(play.classList.contains("fa-play")){
      play.classList.toggle("fa-play")
       play.classList.toggle("fa-pause")
  }
  audio.src = jamz[currentSongIndex].song
  mainArtist.textContent = jamz[currentSongIndex].artist
  mainTitle.textContent =  jamz[currentSongIndex].title
  mainPic.style.backgroundImage = `url(${jamz[currentSongIndex].image})`
  audio.play()
})

prevSong.addEventListener("click", () => {
  currentSongIndex--
  if(currentSongIndex < 0 ){
      currentSongIndex = 0
  }
  if(play.classList.contains("fa-play")){
      play.classList.toggle("fa-play")
       play.classList.toggle("fa-pause")
  }
  audio.src = jamz[currentSongIndex].song
  mainArtist.textContent = jamz[currentSongIndex].artist
  mainTitle.textContent =  jamz[currentSongIndex].title
  mainPic.style.backgroundImage = `url(${jamz[currentSongIndex].image})`
  audio.play()

})

 repeat.addEventListener("click", () => {
   repeat.classList.toggle("repeat-effect")
   })

audio.onended = function repeatSong() {
  if(repeat.classList.contains("repeat-effect")){
      currentSongIndex
      audio.src = jamz[currentSongIndex].song
      mainArtist.textContent = jamz[currentSongIndex].artist
      mainTitle.textContent =  jamz[currentSongIndex].title
       mainPic.style.backgroundImage = `url(${jamz[currentSongIndex].image})`
      audio.play()

}
else{
      currentSongIndex++
      audio.src = jamz[currentSongIndex].song
      mainArtist.textContent = jamz[currentSongIndex].artist
      mainTitle.textContent =  jamz[currentSongIndex].title
      audio.play()
}}

play.addEventListener("click", () => {
  mainArtist.textContent = jamz[currentSongIndex].artist
  mainTitle.textContent = jamz[currentSongIndex].title
  mainPic.style.backgroundImage = `url(${jamz[currentSongIndex].image})`
  play.classList.toggle("fa-play")
  play.classList.toggle("fa-pause")
  if(play.classList.contains("fa-play")){
    audio.pause()
  }
  else{
    audio.play()
  }
 
})

audio.onloadedmetadata = () => {
  range.max = audio.duration
  songDuration.textContent = formatTime(audio.duration)
}

audio.ontimeupdate = () => {
  range.value = audio.currentTime
  let max = range.max
  let percentage = (range.value/max) * 100
  range.style.background = `linear-gradient(to right, #923A72 ${percentage}%, #ffffff ${percentage}%)`
  timeSpan.textContent = formatTime(audio.currentTime) + "/"
}

audio.addEventListener("waiting", () => {
  audioSpinner.style.display = "block"
  play.style.display = "none"
 })

 audio.addEventListener("canplay", () => {
  audioSpinner.style.display = "none"
  play.style.display = "block"
 })

 audio.addEventListener("play", () => {
  audioSpinner.style.display = "none"
  play.classList.remove("fa-play")
  play.classList.add("fa-pause")
  play.style.display = "block"
 })


function formatTime(time){
 let durMin = Math.floor(time / 60) 
 let durSec = Math.floor(time % 60 )
return  `${durMin}:${durSec.toString().padStart(2, '0')}`
}

range.addEventListener("input", () => {
  let value = range.value
  audio.currentTime = value
  let max = range.max
  let percentage = (value/max) * 100
  range.style.background = `linear-gradient(to right, #923A72 ${percentage}%, #ffffff ${percentage}%)`
})

//Shazammed songs playback config 

shazamAudio.onloadedmetadata = () => {
  shazamRangeTrk.max = shazamAudio.duration
}

shazamAudio.ontimeupdate = () => {
  shazamRangeTrk.value = shazamAudio.currentTime
  let max = shazamRangeTrk.max
  let percentage = (shazamRangeTrk.value/max) * 100
  shazamRangeTrk.style.background = `linear-gradient(to right, #923A72 ${percentage}%, #ffffff ${percentage}%)`
}

shazamRangeTrk.addEventListener("input", () => {
  let value = shazamRangeTrk.value
  shazamAudio.currentTime = value
  let max = shazamRangeTrk.max
  let percentage = (value/max) * 100
  shazamRangeTrk.style.background = `linear-gradient(to right, #923A72 ${percentage}%, #ffffff ${percentage}%)`
})

identifiedAudio.onloadedmetadata = () => {
  identifiedRangeTrk.max = identifiedAudio.duration
}

identifiedAudio.ontimeupdate = () => {
  identifiedRangeTrk.value = identifiedAudio.currentTime
  let max = identifiedRangeTrk.max
  let percentage = (identifiedRangeTrk.value/max) * 100
  identifiedRangeTrk.style.background = `linear-gradient(to right, #923A72 ${percentage}%, #ffffff ${percentage}%)`
}

identifiedAudio.addEventListener("input", () => {
  let value = identifiedRangeTrk.value
  identifiedAudio.currentTime = value
  let max = identifiedRangeTrk.max
  let percentage = (value/max) * 100
  identifiedRangeTrk.style.background = `linear-gradient(to right, #923A72 ${percentage}%, #ffffff ${percentage}%)`
})


//End of Shazammed songs playback config 


like.addEventListener("click", () => {
  like.style.display = "none"
  noLike.style.display = "block"
})

noLike.addEventListener("click", () => {
  noLike.style.display = "none"
  like.style.display = "block"
})

hideSearchResults.addEventListener("click", () => {
  mainSearchContainer.style.display = "none"
})

menu.addEventListener("click", () => {
  menuTab.style.display = "block"
})

hideMenuTab.addEventListener("click", () => {
  menuTab.style.display = "none"
})

Shazam.addEventListener("click", () => {
  //mainEl.style.overflowY = 'hidden'
    shazamUI.style.display = "block"

    navigator.mediaDevices.getUserMedia({audio:true}).then(stream => {
        mediaRecordings = new MediaRecorder(stream)
        mediaRecordings.start()
    
        mediaRecordings.ondataavailable = function (e) {
            audioChunks.push(e.data)
        }
    
        mediaRecordings.onstop = function () {
            audioBlob = new Blob(audioChunks, {'type':'audio/mp4'})
            const audioUrl = URL.createObjectURL(audioBlob)
            search.value = audioUrl
            let audioFile = new File([audioBlob], 'recording.m4a', { type: 'audio/mp4' });
            console.log(audioBlob)
            identifySong(audioFile)
        }
    
        setTimeout(() => {mediaRecordings.stop()}, 5000)
    })
})

hideShazamUI.addEventListener("click", () => {
     //mainEl.style.overflowY = 'scroll'
    shazamUI.style.display = "none"
   if(mediaRecordings && mediaRecordings.state !== 'inactive'){
    mediaRecordings.stop()
   }
})

async function identifySong(song) {
  const url = 'https://shazam-song-recognition-api.p.rapidapi.com/recognize/file';
  const data = new FormData();
  data.append('upload_file', song);
  
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': 'e98c7d6e56msh9749e6ca1b50d14p1d33cdjsn0770802c8f3b',
      'x-rapidapi-host': 'shazam-song-recognition-api.p.rapidapi.com'
    },
    body: data
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    shazamUI.style.display = "none"
    colorScheme = result.track.images.joecolor
    let coolors = colorScheme.match(/b:([a-fA-F0-9]+)p:([a-fA-F0-9]+)s:([a-fA-F0-9]+)t:([a-fA-F0-9]+)q:([a-fA-F0-9]+)/)
    if(colorScheme){
      songBtn.style.backgroundColor = `#${coolors[2]}`
      songBtn.style.color = `#${coolors[4]}`
      songBtn.style.borderColor = `#${coolors[3]}`
      relatedBtn.style.backgroundColor = `#${coolors[5]}`
      relatedBtn.style.Color = `#${coolors[4]}`
       specificTrackInfo.style.Color = `#${coolors[4]}`
      // specificTrackInfo.style.backgroundColor.opacity= "0.6"
       specificTrackInfo.style.backgroundColor = `#${coolors[5]}62`
      playAll.style.Color = `#${coolors[4]}`
      playAll.style.backgroundColor = `#${coolors[2]}67`
      relatedBtn.style.borderColor = `#${coolors[3]}`
      uiOverlay.style.opacity = '0.3'
      uiOverlay.style.backgroundColor = `#${coolors[1]}`
    }
    relatedBtn.addEventListener("click", () => {
      relatedBtn.style.backgroundColor = `#${coolors[2]}`
      songBtn.style.backgroundColor = `#${coolors[5]}`
    })

    songBtn.addEventListener("click", () => {
      songBtn.style.backgroundColor = `#${coolors[2]}`
      relatedBtn.style.backgroundColor = `#${coolors[5]}`
    })
    //coolors was here
    console.log(coolors)
   uI(result)
   IdentifiedSong.push(result.track.hub.actions[1].uri)
    resultsInfo.style.display = "block"
    shazamResult.style.top = (mainEl.clientHeight - 70) + "px"
    window.addEventListener("resize", () => {
      shazamResult.style.top = (mainEl.clientHeight - 70) + "px"
    })
    shazamResult.style.display = "block"
   await relatedSongs(result.track.key)
   await searchCount(result.track.key)
  } catch (error) {
    console.error("Shavy sorry we ran intto an issue boss: " + error);
  }
  }

  async function searchCount(id) {
    const url = `https://shazam.p.rapidapi.com/songs/get-count?key=${id}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e98c7d6e56msh9749e6ca1b50d14p1d33cdjsn0770802c8f3b',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  noSearch.innerText = await result.total + " shazamms"
	console.log(result);
} catch (error) {
	console.error(error);
  }
  }
  async function relatedSongs(trackId) {
    const url = `https://shazam-api7.p.rapidapi.com/songs/list-recommendations?id=${trackId}&limit=10`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e98c7d6e56msh9749e6ca1b50d14p1d33cdjsn0770802c8f3b',
		'x-rapidapi-host': 'shazam-api7.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
   let relSongs = result.tracks
   relatedSongsUpdate(relSongs)
	console.log(result);
} catch (error) {
	console.error("Boss issue dey oo " + error);
}
  }
  
  playlistBtn.addEventListener('click', () => {
    menuTab.style.display = "none"
    musicMain.style.display = "none"
    playlist.style.display = "block"
  })
  favoritesBtn.addEventListener('click', () => {
    menuTab.style.display = "none"
    musicMain.style.display = "none"
    favorites.style.display = "block"
  })

  closeFav.addEventListener('click', () => {
    favorites.style.display = 'none'
    musicMain.style.display = "block"
  })

  closeList.addEventListener('click', () => {
    playlist.style.display = 'none'
    musicMain.style.display = "block"
  })

   audioArt.src = "./images/281186.jpg"

function uI (info) {
  trackName.textContent = info.track.title
  artist.textContent = info.track.subtitle
  let image = info.track.images.background
  if(!image){
    audioArt.src = "./images/281186.jpg"
  }else{
    audioArt.src = image
  }
  label.innerText = "Label: " + info.track.sections[0].metadata[1].text
  album.innerText = "Album: " + info.track.sections[0].metadata[0].text
  released.innerText = "Released: " + info.track.sections[0].metadata[2].text
}

let toggle = false
more.addEventListener("click", () => {
  toggle = !toggle
  if(toggle){
    more.src = "./images/icons/more album info-1.png"
     resultsInfo.style.bottom = "1.25rem"
    specificTrackInfo.style.display = "block"
  }

 else{
  more.src = "./images/icons/more album info.png"
  resultsInfo.style.bottom = "4rem"
  specificTrackInfo.style.display = "none"
 }
})

function repositionShazamReviewResults() {
  let childHeight =  window.getComputedStyle(shazamReviewResults).height 
  let plyBckCntrls = window.getComputedStyle(playCntrls).height
  let plyBckCntrlsHeight = parseFloat(plyBckCntrls) * 0.3
  let childHeightNumber = parseFloat(childHeight)
  let parentHeight = mainEl.clientHeight
  let calculatedHeight = parentHeight - childHeightNumber

  if(window.innerHeight >= 1024){
    calculatedHeight = 590
  }
 else if(calculatedHeight <= 516){
    calculatedHeight = 580
  }
   else if(calculatedHeight <= 440){
      calculatedHeight = 570 - plyBckCntrlsHeight
      }
    else{
     calculatedHeight = calculatedHeight
      }
  shazamReviewResults.style.top = calculatedHeight + "px"
  //console.log("child: " + childHeightNumber, "parent " + parentHeight, "calculatedHeight: " + calculatedHeight)
}

window.addEventListener("resize", () => {
  shazamResult.style.top = (mainEl.clientHeight -70) + "px"
  repositionShazamReviewResults()
})


shazamReviewResults.addEventListener("click", () =>{
  shazamReviewResults.style.display = "none"
  //shazamResult.style.top = (mainEl.clientHeight - 50) + "px"
  shazamResult.style.display = 'block'
})

hideShazamresult.addEventListener('click', () => {
  shazamResult.style.display = 'none'
  repositionShazamReviewResults()
  shazamReviewResults.style.display = "flex"
})

relatedBtn.addEventListener("click", () => {
  resultsInfo.style.display = "none"
  related.style.display = "flex"
})

songBtn.addEventListener("click", () => {
  related.style.display = "none"
  resultsInfo.style.display = "block"
})



function relatedSongsUpdate(songs) {

  relatedContainer.innerHTML = ' '
 let songId = 0

  songs.forEach(track => {

   musicUrls.push(track.hub.actions[1].uri)

    let songContainer = document.createElement("div")
    songContainer.className = "relsong w-full h-14 flex pl-2 text-white hover:bg-gray-400/30"
    songContainer.id = songId
    let icon = document.createElement("i")
    icon.id = "div" + songId
    icon.className = "fa-solid fa-play fa-Solid scale-100 hover:scale-8"
    let spinner = document.createElement("div")
    spinner.id = "div" + (songId + 1)
    spinner.className = "spinner w-5 h-5 rounded-full border-[2px] border-teal-200 border-t-black animate-spin"
    songId++
    let trackPic = document.createElement("div")
    trackPic.className = "reltrackpics w-16 h-[3.3rem] flex justify-center items-center rounded-sm self-end"
    trackPic.id = "pic"
    trackPic.style.backgroundImage = `url(${track.images.coverart})`
    let trackInfo = document.createElement("div")
    trackInfo.id = "info"
     trackInfo.className = "info truncate track-info ml-5 w-[10.2rem] xl:w-[12rem]  xl:ml-12 text-[.68rem] font-medium sm:max-lg:ml-5 sm:max-lg:font-[400]  sm:max-[800px]:w-[8rem] min[801px]:max-lg:w-[10rem]"
     let trackName = document.createElement("div")
      trackName.className = "trackname"
     trackName.textContent = track.title
     let trackArtist = document.createElement("div")
      trackArtist.className = "track-artist"
     trackArtist.textContent = track.subtitle
     trackPic.appendChild(icon)
     trackPic.appendChild(spinner)
     trackInfo.appendChild(trackName)
     trackInfo.appendChild(trackArtist)
     songContainer.appendChild(trackPic)
     songContainer.appendChild(trackInfo)
     relatedContainer.appendChild(songContainer)  
  })



  playAll.addEventListener("click", () => {
    shazamAudio.src = musicUrls[0]
    // let particularSong = document.getElementById("0")
    // particularSong.style.color = "#db7114"
    let songContainer = document.getElementsByClassName("relsong")
    Array.from(songContainer).forEach(div => {
      if(div.id !== "0"){
        div.style.color = "#ffffff"
      }
      else{
        div.style.color = "#db7114"
      }
    })
    shazamAudio.play()


    shazamAudio.addEventListener("waiting", () => {
      let spinnerArray = document.getElementsByClassName("spinner")
      let icon = document.getElementsByClassName("fa-Solid")
      Array.from(spinnerArray).forEach(spin => {
       spin.style.display = "none"
      })
      Array.from(icon).forEach(plyBtn => {
       if(plyBtn.id !== "div0"){
         plyBtn.classList.remove("fa-pause")
         plyBtn.classList.add("fa-play")
         plyBtn.style.display = "block"
       }
       else{
         plyBtn.style.display = "none"
         let spinner = document.querySelector("#div1.spinner")
         spinner.style.display = "block"
       }
       
      })
  
     } )
   
     shazamAudio.addEventListener("canplay", () => {
       let spinnerArray = document.getElementsByClassName("spinner")
       Array.from(spinnerArray).forEach(spin => {
         spin.style.display = "none"
        })
          let plyBtn = document.getElementsByClassName("fa-Solid")
          Array.from(plyBtn).forEach(iplay => {
            if(iplay.id === "div0"){
              iplay.classList.remove("fa-play")
              iplay.classList.add("fa-pause")
              iplay.style.display = "block"
            }
            else{
              iplay.classList.remove("fa-pause")
              iplay.classList.add("fa-play")
              iplay.style.display = "block"
            }
          })
       let play = document.querySelector("#div0.fa-Solid")
       play.classList.remove("fa-play")
       play.classList.add("fa-pause")
       play.style.display = "block"
     } )
   
     shazamAudio.addEventListener("play", () => {
       let plyBtn = document.getElementsByClassName("fa-Solid")
       Array.from(plyBtn).forEach(iplay => {
         if(iplay.id === "div0"){
           iplay.classList.remove("fa-play")
           iplay.classList.add("fa-pause")
           iplay.style.display = "block"
         }
         else{
           iplay.classList.remove("fa-pause")
           iplay.classList.add("fa-play")
           iplay.style.display = "block"
         }
       })
       let playToggle = document.querySelector("#div0.fa-Solid")
       playToggle.classList.remove("fa-play")
       playToggle.classList.add("fa-pause")
       playToggle.style.display = "block"
     })
  })

  shazamAudio.addEventListener("ended", () => {
    currentSongIndex++
    //let particularSong = document.getElementById(currentSongIndex.toString())
    let songContainer = document.getElementsByClassName("relsong")
    if(currentSongIndex >= musicUrls.length){
      currentSongIndex = 0
      Array.from(songContainer).forEach(div => {
        if(div.id !== currentSongIndex.toString()){
          div.style.color = "#ffffff"
        }
      })
      particularSong.style.color = "#db7114"
      shazamAudio.src = musicUrls[currentSongIndex]
      shazamAudio.pause()
    }
    else
    {
      Array.from(songContainer).forEach(div => {
        if(div.id !== currentSongIndex.toString()){
          div.style.color = "#ffffff"
        }
        else{
          div.style.color = "#db7114"
        }
      })
    //particularSong.style.color = "#db7114"
    shazamAudio.src = musicUrls[currentSongIndex]
    shazamAudio.play()}

    shazamAudio.addEventListener("waiting", () => {
      let spinnerArray = document.getElementsByClassName("spinner")
      let icon = document.getElementsByClassName("fa-Solid")
      Array.from(spinnerArray).forEach(spin => {
       spin.style.display = "none"
      })
      Array.from(icon).forEach(plyBtn => {
       if(plyBtn.id !== `div${currentSongIndex}`){
         plyBtn.classList.remove("fa-pause")
         plyBtn.classList.add("fa-play")
         plyBtn.style.display = "block"
       }
       else{
         plyBtn.style.display = "none"
         let idString = "div" + (currentSongIndex + 1)
         let spinner = document.querySelector(`#${idString}.spinner`)
         spinner.style.display = "block"
       }
       
      })

     } )
   
     shazamAudio.addEventListener("canplay", () => {
       let idString = "div" + (currentSongIndex + 1)
       let spinnerArray = document.getElementsByClassName("spinner")
       Array.from(spinnerArray).forEach(spin => {
         spin.style.display = "none"
        })
        let spinner = document.querySelector(`#${idString}.spinner`)
          spinner.style.display = "none"
          let plyBtn = document.getElementsByClassName("fa-Solid")
          Array.from(plyBtn).forEach(iplay => {
            if(iplay.id === `div${currentSongIndex}`){
              iplay.classList.remove("fa-play")
              iplay.classList.add("fa-pause")
              iplay.style.display = "block"
            }
            else{
              iplay.classList.remove("fa-pause")
              iplay.classList.add("fa-play")
              iplay.style.display = "block"
            }
          })
       let play = document.querySelector(`#div${currentSongIndex}.fa-Solid`)
       play.classList.remove("fa-play")
       play.classList.add("fa-pause")
       play.style.display = "block"
     } )
   
     shazamAudio.addEventListener("play", () => {
       let plyBtn = document.getElementsByClassName("fa-Solid")
       Array.from(plyBtn).forEach(iplay => {
         if(iplay.id === `div${currentSongIndex}`){
           iplay.classList.remove("fa-play")
           iplay.classList.add("fa-pause")
           iplay.style.display = "block"
         }
         else{
           iplay.classList.remove("fa-pause")
           iplay.classList.add("fa-play")
           iplay.style.display = "block"
         }
       })
       let playToggle = document.querySelector(`#div${currentSongIndex}.fa-Solid`)
       playToggle.classList.remove("fa-play")
       playToggle.classList.add("fa-pause")
       playToggle.style.display = "block"
     })
  })

  let currentSongIndex = 0

  

console.log(musicUrls)
}



relatedContainer.addEventListener("click", (e) => {

  let childArray = Array.from(relatedContainer.children)
  let childrenIndex = childArray.indexOf(e.target)
  if(childrenIndex === -1){
  let directChild = e.target.closest(".relsong")
  
  let playBtn = document.querySelector(`#div${directChild.id}.fa-Solid`)
  if(playBtn.classList.contains("fa-play")){
    playBtn.classList.remove("fa-play")
    playBtn.classList.add("fa-pause")
    playBtn.style.display = "block"
    
  
    shazamAudio.addEventListener("waiting", () => {
     let spinnerArray = document.getElementsByClassName("spinner")
     let icon = document.getElementsByClassName("fa-Solid")
     Array.from(spinnerArray).forEach(spin => {
      spin.style.display = "none"
     })
     Array.from(icon).forEach(plyBtn => {
      if(plyBtn.id !== `div${directChild.id}`){
        plyBtn.classList.remove("fa-pause")
        plyBtn.classList.add("fa-play")
        plyBtn.style.display = "block"
      }
      else{
        plyBtn.style.display = "none"
        let idString = "div" + (Number(directChild.id) + 1)
        let spinner = document.querySelector(`#${idString}.spinner`)
        spinner.style.display = "block"
      }
      
     })
      
    } )
  
    shazamAudio.addEventListener("canplay", () => {
      let idString = "div" + (Number(directChild.id) + 1)
      let spinnerArray = document.getElementsByClassName("spinner")
      Array.from(spinnerArray).forEach(spin => {
        spin.style.display = "none"
       })
       let spinner = document.querySelector(`#${idString}.spinner`)
         spinner.style.display = "none"
         let plyBtn = document.getElementsByClassName("fa-Solid")
         Array.from(plyBtn).forEach(iplay => {
           if(iplay.id === `div${directChild.id}`){
             iplay.classList.remove("fa-play")
             iplay.classList.add("fa-pause")
             iplay.style.display = "block"
           }
           else{
             iplay.classList.remove("fa-pause")
             iplay.classList.add("fa-play")
             iplay.style.display = "block"
           }
         })
      let play = document.querySelector(`#div${directChild.id}.fa-Solid`)
      play.classList.remove("fa-play")
      play.classList.add("fa-pause")
      play.style.display = "block"
    } )
  
    shazamAudio.addEventListener("play", () => {
      let plyBtn = document.getElementsByClassName("fa-Solid")
      Array.from(plyBtn).forEach(iplay => {
        if(iplay.id === `div${directChild.id}`){
          iplay.classList.remove("fa-play")
          iplay.classList.add("fa-pause")
          iplay.style.display = "block"
        }
        else{
          iplay.classList.remove("fa-pause")
          iplay.classList.add("fa-play")
          iplay.style.display = "block"
        }
      })
      let playToggle = document.querySelector(`#div${directChild.id}.fa-Solid`)
      playToggle.classList.remove("fa-play")
      playToggle.classList.add("fa-pause")
      playToggle.style.display = "block"
    })
  
    childArray.forEach((child, index) => {
      if(index.toString() === directChild.id){
        directChild.style.color = "#db7114"
      }
      else{
        child.style.color = "#ffffff"
        //console.log(index)
      }
    })
    let musicIndex = Number(directChild.id)
    shazamAudio.src = musicUrls[musicIndex]

    if(manipulatePlayBack !== 0){
      shazamAudio.currentTime = manipulatePlayBack
      shazamAudio.play()
    }
    else{
      shazamAudio.play()
    }
  }

  else{
    playBtn.classList.remove("fa-pause")
    playBtn.classList.add("fa-play")
    playBtn.style.display = "block"
    manipulatePlayBack = range.value
    shazamAudio.pause()
  }

}

  else
 {

let directChild = e.target

let playBtn = document.querySelector(`#div${directChild.id}.fa-Solid`)
if(playBtn.classList.contains("fa-play")){
  playBtn.classList.remove("fa-play")
  playBtn.classList.add("fa-pause")

  shazamAudio.addEventListener("waiting", () => {
    let spinnerArray = document.getElementsByClassName("spinner")
    let icon = document.getElementsByClassName("fa-Solid")
    Array.from(spinnerArray).forEach(spin => {
     spin.style.display = "none"
    })
    Array.from(icon).forEach(plyBtn => {
     if(plyBtn.id !== `div${directChild.id}`){
       plyBtn.classList.remove("fa-pause")
       plyBtn.classList.add("fa-play")
       plyBtn.style.display = "block"
     }
     else{
       plyBtn.style.display = "none"
       let idString = "div" + (Number(directChild.id) + 1)
       let spinner = document.querySelector(`#${idString}.spinner`)
       spinner.style.display = "block"
     }
     
    })
     
   } )
 
   shazamAudio.addEventListener("canplay", () => {
     let idString = "div" + (Number(directChild.id) + 1)
     let spinnerArray = document.getElementsByClassName("spinner")
     Array.from(spinnerArray).forEach(spin => {
       spin.style.display = "none"
      })
      let spinner = document.querySelector(`#${idString}.spinner`)
        spinner.style.display = "none"
        let plyBtn = document.getElementsByClassName("fa-Solid")
        Array.from(plyBtn).forEach(iplay => {
          if(iplay.id === `div${directChild.id}`){
            iplay.classList.remove("fa-play")
            iplay.classList.add("fa-pause")
            iplay.style.display = "block"
          }
          else{
            iplay.classList.remove("fa-pause")
            iplay.classList.add("fa-play")
            iplay.style.display = "block"
          }
        })
     let play = document.querySelector(`#div${directChild.id}.fa-Solid`)
     play.classList.remove("fa-play")
     play.classList.add("fa-pause")
     play.style.display = "block"
   } )
 
   shazamAudio.addEventListener("play", () => {
     let plyBtn = document.getElementsByClassName("fa-Solid")
     Array.from(plyBtn).forEach(iplay => {
       if(iplay.id === `div${directChild.id}`){
         iplay.classList.remove("fa-play")
         iplay.classList.add("fa-pause")
         iplay.style.display = "block"
       }
       else{
         iplay.classList.remove("fa-pause")
         iplay.classList.add("fa-play")
         iplay.style.display = "block"
       }
     })
     let playToggle = document.querySelector(`#div${directChild.id}.fa-Solid`)
     playToggle.classList.remove("fa-play")
     playToggle.classList.add("fa-pause")
     playToggle.style.display = "block"
   })


  childArray.forEach(child => {
      child.style.color = "#ffffff"
  })

  e.target.style.color = "#db7114"
  let musicIndex = Number(e.target.id)
  shazamAudio.src = musicUrls[musicIndex]

  if(manipulatePlayBack !== 0){
    shazamAudio.currentTime = manipulatePlayBack
    shazamAudio.play()
  }
  else{
    shazamAudio.play()
  }
  console.log(childrenIndex)
}

else{
  playBtn.classList.remove("fa-pause")
  playBtn.classList.add("fa-play")
  playBtn.style.display = "block"
  manipulatePlayBack = shazamRangeTrk.value
  shazamAudio.pause()
}

}
 })

 shazamPlayContainer.addEventListener("click", () => {
  if(shazamPlay.classList.contains("fa-play")){
    shazamPlay.classList.remove("fa-play")
    shazamPlay.classList.add("fa-pause")
    identifiedAudio.src = IdentifiedSong[0] //IdentifiedSong[0]
    if(manipulatePlayBack){
      identifiedAudio.currentTime = manipulatePlayBack
      identifiedAudio.play()
    }
    else{
      identifiedAudio.play()
    }
    
  }
  else{
    shazamPlay.classList.remove("fa-pause")
    shazamPlay.classList.add("fa-play")
    manipulatePlayBack = identifiedRangeTrk.value
    identifiedAudio.pause()
  }

   identifiedAudio.addEventListener("waiting", () => {
    shazamSpinner.style.display = "block"
    shazamPlay.style.display = "none"
   })
  
   identifiedAudio.addEventListener("canplay", () => {
    shazamSpinner.style.display = "none"
    shazamPlay.style.display = "block"
   })

   identifiedAudio.addEventListener("play", () => {
    shazamSpinner.style.display = "none"
    shazamPlay.classList.remove("fa-play")
    shazamPlay.classList.add("fa-pause")
    shazamPlay.style.display = "block"
   })

   identifiedAudio.addEventListener("ended", () => {
    identifiedAudio.pause()
    shazamPlay.classList.remove("fa-pause")
    shazamPlay.classList.add("fa-play")
   })
 })

 searchIcon.addEventListener("click", () => {
  let query = search.value
  search.value = " "
  shazamSearch(query)
})

 
async function shazamSearch(info) {
  let url = `https://shazam.p.rapidapi.com/search?term=${encodeURIComponent(info)}&locale=en-US&offset=0&limit=5`

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "e98c7d6e56msh9749e6ca1b50d14p1d33cdjsn0770802c8f3b",
     "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
  }

  try{
    let response = await fetch(url, options)
    let result = await response.json()
    let resultUiUpdater = result.tracks.hits
    searchUpdate(resultUiUpdater)
    mainSearchContainer.style.display = "block"
    console.log(result)
  }
  catch(error) {
    console.error("boss Shazam search Yawa ooh: " + error)
  }
}




function searchUpdate(search) {
  searchResults.innerHTML = ' '

  

  let searchNo = 0
  searchSongsUrl = []
  search.forEach(data => {

  searchSongsUrl.push(data.track.hub.actions[1].uri)
  console.log(searchSongsUrl)

    let result = document.createElement("div")
    result.className = "containing w-full h-14  flex flex-row justify-around hover:bg-slate-400/30"
    result.id = searchNo
    let specificContainer = document.createElement("div")
    specificContainer.className = "track-id flex flex-col justify-end truncate w-[10rem]"
    let trackName = document.createElement("div")
    let artistName = document.createElement("div")
    let iconContainer = document.createElement("div")
    iconContainer.className = "self-center"
    let spinner = document.createElement("div")
    spinner.className = "w-5 h-5 search-result-spinner rounded-full border-[2px] border-teal-200 border-t-black animate-spin"
    spinner.id = "spinner" + searchNo
    //spinner.style.display = "none"
    let icon = document.createElement("i")
    icon.id = "icon" + searchNo
    icon.className = "fa-solid fa-play icon"
    searchNo++
    iconContainer.appendChild(icon)
    iconContainer.appendChild(spinner)
    specificContainer.appendChild(trackName)
    specificContainer.appendChild(artistName)
    result.appendChild(specificContainer)
    result.appendChild(iconContainer)
    searchResults.appendChild(result)

    artistName.textContent = data.track.subtitle
    trackName.textContent = data.track.title
  })


}

searchResults.addEventListener("click", (e) => {
  let childArray = Array.from(searchResults.children)
  let childrenIndex = childArray.indexOf(e.target)
  if(childrenIndex === -1){
    let directChild = e.target.closest(".containing")
  let playIcon = document.querySelector(`#icon${directChild.id}.icon`)
  
  if(playIcon.classList.contains("fa-play")){
    playIcon.classList.remove("fa-play")
    playIcon.classList.add("fa-pause")

    automaticPlayId = Number(directChild.id)
   let currentSongIndex = automaticPlayId
    //start End
   audio.addEventListener("ended", () => {
    currentSongIndex++
    let icon = document.getElementsByClassName("icon")
    let spinnerArray = document.getElementsByClassName("spinner")

    Array.from(spinnerArray).forEach(spin => {
       spin.style.display = "none"
     })

    Array.from(icon).forEach(plyBtn => {
      if(plyBtn.id !== `icon${currentSongIndex}`){
        plyBtn.classList.remove("fa-pause")
        plyBtn.classList.add("fa-play")
        plyBtn.style.display = "block"
      }
      else{
        plyBtn.classList.remove("fa-play")
        plyBtn.classList.add("fa-pause")
        plyBtn.style.display = "block"
       //  let spinner = document.querySelector(`#spinner${currentSongIndex}.spinner`)
       //  spinner.style.display = "block"
      }
      
     })

    let songContainer = document.getElementsByClassName("containing")
    if(currentSongIndex >= searchSongsUrl.length){
      currentSongIndex = 0
      let icon = document.querySelector(`#icon${currentSongIndex}.icon`)
      icon.classList.remove("fa-pause")
      icon.classList.add("fa-play")
      icon.style.display = "block"
      Array.from(songContainer).forEach(div => {
        if(div.id !== currentSongIndex.toString()){
          div.style.color = "#ffffff"
        }
        else{
          div.style.color = "#de2d9d"
        }
      })
      audio.src = searchSongsUrl[currentSongIndex]
      audio.pause()
    }
    else
    {
      Array.from(songContainer).forEach(div => {
        if(div.id !== currentSongIndex.toString()){
          div.style.color = "#ffffff"
        }
        else{
          div.style.color = "#de2d9d"
        }
      })
    audio.src = searchSongsUrl[currentSongIndex]
    audio.play()}

    audio.addEventListener("waiting", () => {
      let spinnerArray = document.getElementsByClassName("spinner")
      let icon = document.getElementsByClassName("icon")
      Array.from(spinnerArray).forEach(spin => {
       if(spin.id !== `spinner${currentSongIndex}`){
        spin.style.display = "none"
        console.log("spinner none" + spin.id)
       }
       else{
        spin.style.display = "block"
       }
      })
      Array.from(icon).forEach(plyBtn => {
       if(plyBtn.id !== `icon${currentSongIndex}`){
         plyBtn.classList.remove("fa-pause")
         plyBtn.classList.add("fa-play")
         plyBtn.style.display = "block"
       }
       else{
         plyBtn.style.display = "none"
        //  let spinner = document.querySelector(`#spinner${currentSongIndex}.spinner`)
        //  spinner.style.display = "block"
       }
       
      })

     } )
   
     audio.addEventListener("canplay", () => {
       let spinnerArray = document.getElementsByClassName("spinner")
       Array.from(spinnerArray).forEach(spin => {
         spin.style.display = "none"
        })
        // let spinner = document.querySelector(`#spinner${currentSongIndex}.spinner`)
        //   spinner.style.display = "none"
          let plyBtn = document.getElementsByClassName("icon")
          Array.from(plyBtn).forEach(iplay => {
            if(iplay.id === `icon${currentSongIndex}`){
              iplay.classList.remove("fa-play")
              iplay.classList.add("fa-pause")
              iplay.style.display = "block"
            }
            else{
              iplay.classList.remove("fa-pause")
              iplay.classList.add("fa-play")
              iplay.style.display = "block"
            }
          })
     } )
   
     audio.addEventListener("play", () => {
       let plyBtn = document.getElementsByClassName("icon")
       Array.from(plyBtn).forEach(iplay => {
         if(iplay.id === `icon${currentSongIndex}`){
           iplay.classList.remove("fa-play")
           iplay.classList.add("fa-pause")
           iplay.style.display = "block"
         }
         else{
           iplay.classList.remove("fa-pause")
           iplay.classList.add("fa-play")
           iplay.style.display = "block"
         }
       })
     })
  })

    

    //audio waiting event Listener
    audio.addEventListener("waiting", () => {
      let spinnerArray = document.getElementsByClassName("search-result-spinner")
      let icon = document.getElementsByClassName("icon")
      Array.from(spinnerArray).forEach(spin => {
       spin.style.display = "none"
      })
      Array.from(icon).forEach(plyBtn => {
       if(plyBtn.id !== `icon${directChild.id}`){
         plyBtn.classList.remove("fa-pause")
         plyBtn.classList.add("fa-play")
         plyBtn.style.display = "block"
       }
       else{
         plyBtn.style.display = "none"
         let searchResults = document.getElementsByClassName("containing")
         Array.from(searchResults).forEach(div => {
          if(window.getComputedStyle(div).color !== "rgb(222, 45, 157)"){
            let spinner = document.querySelector(`#spinner${div.id}.search-result-spinner`)
            spinner.style.display = "none"
          }
          else{
            let spinner = document.querySelector(`#spinner${div.id}.search-result-spinner`)
            spinner.style.display = "block"
          }
         })
       }
       
      })
       
     } )

     // End of audio waiting Event Listener

     // canplay audio Event Listener
     audio.addEventListener("canplay", () => {
      let spinnerArray = document.getElementsByClassName("search-result-spinner")
      Array.from(spinnerArray).forEach(spin => {
        spin.style.display = "none"
       })
         let plyBtn = document.getElementsByClassName("icon")
         Array.from(plyBtn).forEach(iplay => {
           if(iplay.id === `icon${directChild.id}`){
            iplay.classList.remove("fa-play")
            iplay.classList.add("fa-pause")
            iplay.style.display = "block"
           }
           else{
             iplay.classList.remove("fa-pause")
             iplay.classList.add("fa-play")
             iplay.style.display = "block"
           }
         })
    } )

     // End of audio canplay Event Listener

     // play audio Event Listener
     audio.addEventListener("play", () => {
      let plyBtn = document.getElementsByClassName("icon")
      Array.from(plyBtn).forEach(iplay => {
        if(iplay.id === `icon${directChild.id}`){
          iplay.classList.remove("fa-play")
          iplay.classList.add("fa-pause")
          iplay.style.display = "block"
        }
        else{
          iplay.classList.remove("fa-pause")
          iplay.classList.add("fa-play")
          iplay.style.display = "block"
        }
      })
    })
      // End of audio play Event Listener
    
    let main = document.getElementsByClassName("containing")
    Array.from(main).forEach(div => {
      div.style.color = "#ffffff"
    }
  
  ) 
  directChild.style.color = "#de2d9d"
  console.log(directChild.id)
  let icon = document.getElementsByClassName("icon")
  Array.from(icon).forEach(pic => {
    if(pic.id !== `icon${directChild.id}`){
      pic.classList.remove("fa-pause")
      pic.classList.add("fa-play")
    }
    else{
      pic.classList.remove("fa-play")
      pic.classList.add("fa-pause")
    }
  }) 
  audio.src = searchSongsUrl[Number(directChild.id)]
  if(manipulatePlayBack){
    audio.currentTime = manipulatePlayBack
    audio.play()
  }
  else
 { 
  audio.play()
}
    }
    else{
      playIcon.classList.remove("fa-pause")
      playIcon.classList.add("fa-play")
      manipulatePlayBack = range.value
      audio.pause()
    }
  }
  
 
  else{
   let directChild =  e.target
   automaticPlayId = Number(directChild.id)
   let currentSongIndex = automaticPlayId
   //start
   let playIcon = document.querySelector(`#icon${directChild.id}.icon`)
   if(playIcon.classList.contains("fa-play")){
     playIcon.classList.remove("fa-play")
     playIcon.classList.add("fa-pause")

     //start End
   audio.addEventListener("ended", () => {
    currentSongIndex++
    let icon = document.getElementsByClassName("icon")
    let spinnerArray = document.getElementsByClassName("spinner")

    Array.from(spinnerArray).forEach(spin => {
       spin.style.display = "none"
     })

    Array.from(icon).forEach(plyBtn => {
      if(plyBtn.id !== `icon${currentSongIndex}`){
        plyBtn.classList.remove("fa-pause")
        plyBtn.classList.add("fa-play")
        plyBtn.style.display = "block"
      }
      else{
        plyBtn.classList.remove("fa-play")
        plyBtn.classList.add("fa-pause")
        plyBtn.style.display = "block"
      }
      
     })

    let songContainer = document.getElementsByClassName("containing")
    if(currentSongIndex >= searchSongsUrl.length){
      currentSongIndex = 0
      let icon = document.querySelector(`#icon${currentSongIndex}.icon`)
      icon.classList.remove("fa-pause")
      icon.classList.add("fa-play")
      icon.style.display = "block"
      Array.from(songContainer).forEach(div => {
        if(div.id !== currentSongIndex.toString()){
          div.style.color = "#ffffff"
        }
        else{
          div.style.color = "#de2d9d"
        }
      })
      audio.src = searchSongsUrl[currentSongIndex]
      audio.pause()
    }
    else
    {
      Array.from(songContainer).forEach(div => {
        if(div.id !== currentSongIndex.toString()){
          div.style.color = "#ffffff"
        }
        else{
          div.style.color = "#de2d9d"
        }
      })
    audio.src = searchSongsUrl[currentSongIndex]
    audio.play()}

    audio.addEventListener("waiting", () => {
      let spinnerArray = document.getElementsByClassName("spinner")
      let icon = document.getElementsByClassName("icon")
      Array.from(spinnerArray).forEach(spin => {
       if(spin.id !== `spinner${currentSongIndex}`){
        spin.style.display = "none"
       }
       else{
        spin.style.display = "block"
       }
      })
      Array.from(icon).forEach(plyBtn => {
       if(plyBtn.id !== `icon${currentSongIndex}`){
         plyBtn.classList.remove("fa-pause")
         plyBtn.classList.add("fa-play")
         plyBtn.style.display = "block"
       }
       else{
         plyBtn.style.display = "none"
       }
       
      })

     } )
   
     audio.addEventListener("canplay", () => {
       let spinnerArray = document.getElementsByClassName("spinner")
       Array.from(spinnerArray).forEach(spin => {
         spin.style.display = "none"
        })
          let plyBtn = document.getElementsByClassName("icon")
          Array.from(plyBtn).forEach(iplay => {
            if(iplay.id === `icon${currentSongIndex}`){
              iplay.classList.remove("fa-play")
                iplay.classList.add("fa-pause")
                iplay.style.display = "block"
            }
            else{
              iplay.classList.remove("fa-pause")
              iplay.classList.add("fa-play")
              iplay.style.display = "block"
            }
          })
     } )
   
     audio.addEventListener("play", () => {
       let plyBtn = document.getElementsByClassName("icon")
       Array.from(plyBtn).forEach(iplay => {
         if(iplay.id === `icon${currentSongIndex}`){
           iplay.classList.remove("fa-play")
           iplay.classList.add("fa-pause")
           iplay.style.display = "block"
         }
         else{
           iplay.classList.remove("fa-pause")
           iplay.classList.add("fa-play")
           iplay.style.display = "block"
         }
       })
     })
  })
  // end of audio end event Listener
 
     //audio waiting event Listener
     audio.addEventListener("waiting", () => {
       let spinnerArray = document.getElementsByClassName("search-result-spinner")
       let icon = document.getElementsByClassName("icon")
       Array.from(spinnerArray).forEach(spin => {
        spin.style.display = "none"
       })
       Array.from(icon).forEach(plyBtn => {
        if(plyBtn.id !== `icon${directChild.id}`){
          plyBtn.classList.remove("fa-pause")
          plyBtn.classList.add("fa-play")
          plyBtn.style.display = "block"
        }
        else{
          plyBtn.style.display = "none"
          let searchResults = document.getElementsByClassName("containing")
          Array.from(searchResults).forEach(div => {
           if(window.getComputedStyle(div).color !== "rgb(222, 45, 157)"){
             let spinner = document.querySelector(`#spinner${div.id}.search-result-spinner`)
             spinner.style.display = "none"
           }
           else{
             let spinner = document.querySelector(`#spinner${div.id}.search-result-spinner`)
             spinner.style.display = "block"
           }
          })
        }
        
       })
        
      } )
 
      // End of audio waiting Event Listener
 
      // canplay audio Event Listener
      audio.addEventListener("canplay", () => {
       let spinnerArray = document.getElementsByClassName("search-result-spinner")
       Array.from(spinnerArray).forEach(spin => {
         spin.style.display = "none"
        })
          let plyBtn = document.getElementsByClassName("icon")
          Array.from(plyBtn).forEach(iplay => {
            if(iplay.id === `icon${directChild.id}`){

                iplay.classList.remove("fa-play")
                iplay.classList.add("fa-pause")
                iplay.style.display = "block"
            }
            else{
              iplay.classList.remove("fa-pause")
              iplay.classList.add("fa-play")
              iplay.style.display = "block"
            }
          })
     } )
 
      // End of audio canplay Event Listener
 
      // play audio Event Listener
      audio.addEventListener("play", () => {
       let plyBtn = document.getElementsByClassName("icon")
       Array.from(plyBtn).forEach(iplay => {
         if(iplay.id === `icon${directChild.id}`){
           iplay.classList.remove("fa-play")
           iplay.classList.add("fa-pause")
           iplay.style.display = "block"
         }
         else{
           iplay.classList.remove("fa-pause")
           iplay.classList.add("fa-play")
           iplay.style.display = "block"
         }
       })
     })
       // End of audio play Event Listener
     
     let main = document.getElementsByClassName("containing")
     Array.from(main).forEach(div => {
       div.style.color = "#ffffff"
     }
   
   ) 
   directChild.style.color = "#de2d9d"
   console.log(directChild.id)
   let icon = document.getElementsByClassName("icon")
   Array.from(icon).forEach(pic => {
     if(pic.id !== `icon${directChild.id}`){
       pic.classList.remove("fa-pause")
       pic.classList.add("fa-play")
     }
     else{
       pic.classList.remove("fa-play")
       pic.classList.add("fa-pause")
     }
   }) 
   audio.src = searchSongsUrl[Number(directChild.id)]
   if(manipulatePlayBack){
     audio.currentTime = manipulatePlayBack
     audio.play()
   }
   else
  { 
   audio.play()
 }
     }
     else{
       playIcon.classList.remove("fa-pause")
       playIcon.classList.add("fa-play")
       manipulatePlayBack = range.value
       audio.pause()
     }
   }
   
    //end
})
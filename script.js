
// audioElement.play();

let index = 0;
let audioElement = new Audio('/songs/1.mp3');

let masterPlay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let recentsong = document.getElementById('recentsong');
let songs = [

    {songName :"qqq" , filepath:"/songs/1.mp3" , coverpath:"/covers/1.jpg"},
    {songName :"www" , filepath:"/songs/2.mp3" , coverpath:"/covers/2.jpg"},
    {songName :"eee" , filepath:"/songs/3.mp3" , coverpath:"/covers/3.jpg"},
    {songName :"rrr" , filepath:"/songs/4.mp3" , coverpath:"/covers/4.jpg"},
    {songName :"ttt" , filepath:"/songs/5.mp3" , coverpath:"/covers/5.jpg"},
    {songName :"yyy" , filepath:"/songs/6.mp3" , coverpath:"/covers/6.jpg"},
    {songName :"uuu" , filepath:"/songs/7.mp3" , coverpath:"/covers/7.jpg"},
    {songName :"iii" , filepath:"/songs/8.mp3" , coverpath:"/covers/8.jpg"},
    {songName :"ooo" , filepath:"/songs/9.mp3" , coverpath:"/covers/9.jpg"},
    {songName :"ppp" , filepath:"/songs/10.mp3" , coverpath:"/covers/10.jpg"}

]

songitem.forEach((element , i )=> {
    console.log(element , i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
  
});
//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
   { 
    audioElement.play();
    gif.style.opacity=1;
    }
    else if(audioElement.played)
   {
    audioElement.pause();
    gif.style.opacity=0
    }
})


console.log("yay");



//listen to events 
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;

});
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = (myprogressbar.value* audioElement.duration)/100;
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('i')).forEach((element)=>{
        element.innerText="▶️";
    })
}

Array.from(document.getElementsByClassName('i')).forEach((element)=>{
    element.addEventListener('click',(e)=>{


        makeallplays();
        
        e.target.innerText="⏸️";

       
        gif.style.opacity=1;
        index = parseInt(e.target.id);
        console.log("index is"+index);
        recentsong.innerText=songs[index-1].songName;
       audioElement.src=`songs/${index}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(index>=10)
    index=1;
    else
    index = index +1;
    
    audioElement.src=`songs/${index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();

    recentsong.innerText=songs[index-1].songName;
    gif.style.opacity=1;
})
document.getElementById('back').addEventListener('click',()=>{
    if(index<=1)
    index=10;
    else
    index = index -1;


    audioElement.src=`songs/${index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    recentsong.innerText=songs[index-1].songName;
    gif.style.opacity=1;
})



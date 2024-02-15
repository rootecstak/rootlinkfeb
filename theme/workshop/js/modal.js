console.log("Hello World"); 

let video_modal = document.querySelector(".video-modal"); 
let play_btn = document.querySelector(".playVideoBtn"); 
let close_modal = document.querySelector(".modal-close"); 
let all_modals = document.querySelector(".all-modals"); 

const video_iframe = document.querySelector("iframe"); 


close_modal.onclick = () => {
    video_modal.style.display = "none"; 
    all_modals.style.background = "rgba(0,0,0,0)"; 
    all_modals.style.display = "none"; 
    let iframeSrc = video_iframe.src; 
    video_iframe.src = iframeSrc;  
} 

play_btn.onclick = () => {
    video_modal.style.display = "block";
    all_modals.style.background = "rgba(0,0,0,0.5)" 
    all_modals.style.display = "block";  
}

all_modals.onclick = () => {
    video_modal.style.display = "none"; 
    all_modals.style.background = "rgba(0,0,0,0)"; 
    all_modals.style.display = "none"; 
    let iframeSrc = video_iframe.src; 
    video_iframe.src = iframeSrc;
}
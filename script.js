

document.querySelector(".menu-btn").addEventListener("click",()=>document.querySelector(".main-menu").classList.toggle("show"));

// todo_____________________________________________________________________________

let isShow = true;

const course = document.querySelector('.course-slide');
function toggleShowContent(){
    if(isShow){
        course.style.display='block';
        isShow = false;
    }else{
        course.style.display='none';
        isShow = true;
    }
    
}
const note = document.querySelector('.course-note');
function toggleShowNote(){
    if(isShow){
        note.style.display='block';
        isShow = false;
    }else{
        note.style.display='none';
        isShow = true;
    }
    
}
const old = document.querySelector('.course-old');
function toggleShowOld(){
    if(isShow){
        old.style.display='block';
        isShow = false;
    }else{
        old.style.display='none';
        isShow = true;
    }
    
}
const q = document.querySelector('.course-q');
function toggleShowQ(){
    if(isShow){
        q.style.display='block';
        isShow = false;
    }else{
        q.style.display='none';
        isShow = true;
    }
    
}
const vid = document.querySelector('.course-vid');
function toggleShowVid(){
    if(isShow){
        vid.style.display='block';
        isShow = false;
    }else{
        vid.style.display='none';
        isShow = true;
    }
    
}
const pro = document.querySelector('.course-pro');
function toggleShowPro(){
    if(isShow){
        pro.style.display='block';
        isShow = false;
    }else{
        pro.style.display='none';
        isShow = true;
    }
    
}
const hws = document.querySelector('.course-hws');
function toggleShowHws(){
    if(isShow){
        hws.style.display='block';
        isShow = false;
    }else{
        hws.style.display='none';
        isShow = true;
    }
    
}
const lab = document.querySelector('.course-lab');
function toggleShowLab(){
    if(isShow){
        lab.style.display='block';
        isShow = false;
    }else{
        lab.style.display='none';
        isShow = true;
    }
    
}
const majors = document.querySelectorAll('#majors');
function alertBtn(){
    alert('Sorry, We are still working on improving them. Go to KFUPM Rescources web');
}
Array.from(majors).forEach(major => major.addEventListener('click', alertBtn));


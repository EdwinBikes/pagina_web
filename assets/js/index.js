const about = document.getElementsByClassName('about')[0]
const portfolio = document.getElementsByClassName('portfolio')[0]
const blog = document.getElementsByClassName('blog')[0]
const resume = document.getElementsByClassName('resume')[0]
const boton = document.getElementById('elboton')
const botonAbout = document.getElementById('about')
const botonPortfolio = document.getElementById('portfolio')
const botonResume = document.getElementById('resume')
const botonBlog = document.getElementById('blog')

function openOther(open,close){
    if(close == about.classList[0]){
        about.classList.remove("active");
        botonAbout.classList.remove("active");
    }
    if(open == portfolio.classList[0]){
        portfolio.classList.add("active");
        botonPortfolio.classList.add("active");
    }
    if(open == blog.classList[0]){
        blog.classList.add("active");
        botonBlog.classList.add("active");
    }
    if(open == resume.classList[0]){
        resume.classList.add("active");
        botonResume.classList.add("active");
    }
}
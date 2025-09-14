const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile-img")
const name = document.getElementById("name")
const date = document.getElementById("date")


const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")


setTimeout(getData,2000)


function getData(){
    header.innerHTML = '<img src="https://picsum.photos/id/1075/600/400" alt="">'

    title.innerHTML = 'Lorem, ipsum dolor.'

    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eveniet!'

    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg">'

    name.innerHTML = 'John Doe'

    date.innerHTML = 'Oct 08, 2020'

    animated_bgs.forEach(bg=>bg.classList.remove("animated-bg"))

    animated_bg_texts.forEach(bg=>bg.classList.remove("animated-bg-text"))
}
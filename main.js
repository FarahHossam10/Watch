// navbar active links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");
let currentSection = "header";
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 200){
            currentSection = section.id;
        }
    })
    navLinks.forEach(link => {
        if(link.href.includes(currentSection)){
            document.querySelector(".active").classList.remove("active");  
            link.classList.add("active");
        }
    })
})
// Reviews Slider
let reviewInfo = [
    {
        imgSrc : "images/testimonial-1.jpg",
        reviewerName : "Ruby Forster",
        job : "Photographer",
        review : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        imgSrc : "images/testimonial-2.jpg",
        reviewerName : "Leo Chain",
        job : "Relationship Manager",
        review : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        imgSrc : "images/testimonial-3.jpg",
        reviewerName : "Christopher Heath",
        job : "Science Technician",
        review : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        imgSrc : "images/testimonial-4.jpg",
        reviewerName : "John White",
        job : "Youtuber",
        review : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
]
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let reviewElm = document.querySelectorAll(".review");
next.addEventListener("click", () => {
    reviewElm.forEach(rev => {
        if(rev.id++ == 3){rev.id = 0}
        rev.id = rev.id++;
        rev.querySelector(".name").textContent = reviewInfo[rev.id].reviewerName;
        rev.querySelector(".job").textContent = reviewInfo[rev.id].job;
        rev.querySelector(".reviewer_img img").src = reviewInfo[rev.id].imgSrc;
    })
})
prev.addEventListener("click", () => {
    reviewElm.forEach(rev => {
        if(rev.id-- == 0){rev.id = reviewInfo.length - 1}
        rev.id = rev.id--;
        rev.querySelector(".name").textContent = reviewInfo[rev.id].reviewerName;
        rev.querySelector(".job").textContent = reviewInfo[rev.id].job;
        rev.querySelector(".reviewer_img img").src = reviewInfo[rev.id].imgSrc;
    })
})
// FAQS Section collapsable text
let question = document.querySelectorAll(".question");
let contacts = document.querySelector(".contacts_container");
question.forEach(e => {
    let plusIcon = e.querySelector(".plus_icon");
    let answer = e.querySelector(".answer");
    let verticalLine = e.querySelector(".vertical_line");
    answer.style.visibility = "hidden";
    e.style.height = "9vh";
    plusIcon.addEventListener("click", () => {       
        if(answer.style.visibility == "hidden"){
            answer.style.visibility = "visible";
            e.style.height = "18vh";
            verticalLine.style.visibility = "hidden";
            contacts.style.paddingTop = "12%";
        }
        else{
            answer.style.visibility = "hidden";
            e.style.height = "9vh";
            verticalLine.style.visibility = "visible";
            contacts.style.paddingTop = "0";
        }
    })
});
// navbar bars icon
let nav = document.getElementById("nav");
let navList = document.getElementById("nav_list");
let barsIcon = document.querySelector(".bars_icon");
let menuOpen = false;
barsIcon.addEventListener("click", () => {
    if(!menuOpen){
        navList.style.height = "400px";
        menuOpen = true;
    }
    else{
        navList.style.height = "0";
        menuOpen = false;
    }
})

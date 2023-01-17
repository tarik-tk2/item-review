const reviewsItem = [
  {
    id: 1,
    name: "Nahida Akter",
    job: "Web Development",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque modi pariatur, tenetur quod illo nobis! Accusantium explicabo adipisci error.",
    img: "images/person1.jpg",
  },
  {
    id: 2,
    name: "Chaina Khala",
    job: "Home worker",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque modi pariatur, tenetur quod illo nobis! Accusantium explicabo adipisci error.",
    img: "images/person2.jpg",
  },
  {
    id: 3,
    name: "Tamanna Kahn",
    job: "House Toutor",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque modi pariatur, tenetur quod illo nobis! Accusantium explicabo adipisci error.",
    img: "images/person3.jpg",
  },
  {
    id: 4,
    name: "Tonni Akter",
    job: "Doctor ",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque modi pariatur, tenetur quod illo nobis! Accusantium explicabo adipisci error.",
    img: "images/person4.jpg",
  },
  {
    id: 5,
    name: "Sara Jones",
    job: "Softwer Enginner",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque modi pariatur, tenetur quod illo nobis! Accusantium explicabo adipisci error.",
    img: "images/person5.jpg",
  },
];

const img = document.getElementById("person-img");
const name = document.getElementById("person-name");
const job = document.getElementById("person-post");
const desc = document.getElementById("person-desc");
const leftBtn = document.getElementById("btn-left");
const rightBtn = document.getElementById("btn-right");
let current = 0;
window.addEventListener("DOMContentLoaded", () => {
    const item = reviewsItem[current]
    img.src = item.img
    name.textContent=item.name
    job.textContent = item.job
    desc.textContent=item.desc
})
rightBtn.addEventListener('click', () => {
    current++;
    if (current > reviewsItem.length-1) {
        current=0
    }
    currentPerson();

})
leftBtn.addEventListener('click', () => {
    current--;
    if (current < 0) {
        current = reviewsItem.length - 1;
    }
    currentPerson()
    
})
const currentPerson = () => { 
 const item = reviewsItem[current];
       img.src = item.img;
       name.textContent = item.name;
       job.textContent = item.job;
       desc.textContent = item.desc;
     
}
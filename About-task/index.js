let btn1=document.getElementById("History")
let btn2=document.getElementById("Vision")
let btn3=document.getElementById("Goals")

let para=document.getElementById("paragraph1")
let pic=document.getElementById("img_1")
let head=document.getElementById("heading")

var content=[
    {
        src:"photo1.jpeg",
        title:"Lorem ipsum dolor sit,  consectetur adipisicing elit. Numquam modi perferendis vitae magni dignissimos asperiores voluptate tempore non molestiae laborum.",
        button:"History" 
    },
    {
        src:"photo2.jpeg",
        title:"Lorem ipsum dolor sit,  consectetur adipisicing elit. Numquam modi perferendis vitae magni dignissimos asperiores voluptate tempore non molestiae laborum.",
        button:"Vision"
    },
    {
        src:"photo3.jpg",
        title:"Lorem ipsum dolor sit,  consectetur adipisicing elit. Numquam modi perferendis vitae magni dignissimos asperiores voluptate tempore non molestiae laborum.",
        button:"goals"
    }
]

var btn=document.querySelectorAll(".button")
btn[0].classList.add("backgroundColor")
btn[0].classList.add("dummy")

btn.forEach((but,index) =>{
    but.addEventListener("click",()=>
    {
        pic.src=content[index].src;
        head.innerText=content[index].button;
        para.innerText=content[index].title;
       
        but.classList.add("backgroundColor");
        but.classList.add("dummy");

        

        btn.forEach((but1,index1)=> {
            if(index != index1)
            {
                but1.classList.remove("backgroundColor");
                but1.classList.remove("dummy");
            }
        });
    });
});

import './style.scss'
import * as bootstrap from "bootstrap";
import "./node_modules/waypoints/lib/noframework.waypoints";
import 'animate.css';
import counterUp from 'counterup2';
import { offset } from '@popperjs/core';


let Loader = document.getElementById("loader");
window.addEventListener("load", function () {
    Loader.style.display = "none";
})

window.onscroll = function () { NavScrollll() };

function NavScrollll() {
    let CurrentNavscroll = document.querySelector(".NavScroll");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        CurrentNavscroll.classList.replace("navbar-dark", "bg-white");
        CurrentNavscroll.classList.remove("bg-opacity-50");
    } else {
        CurrentNavscroll.classList.replace("bg-white", "navbar-dark");
        CurrentNavscroll.classList.add("bg-opacity-50");
    }
}

let Products = document.querySelectorAll(".product");
let AllBtn = document.getElementById("all");
let BrandBtn = document.getElementById("brand");
let DigitalBtn = document.getElementById("digital");
let PackingBtn = document.getElementById("packing");
let BrandProducts = document.querySelectorAll(".Brand");
let NavLinks = document.querySelectorAll(".item-link");
NavLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        NavLinks.forEach(i => {
            i.classList.remove("Active");
        })
        e.target.classList.add("Active");
    })
})

AllBtn.addEventListener("click", function () {
    Products.forEach(i => {
        if (i.classList.contains("animate__zoomIn")) {
            i;
        } else {
            i.classList.replace("animate__zoomOut","animate__zoomIn");
        }
    })
})

BrandBtn.addEventListener("click", function () {
    Products.forEach(i => {
        if (i.classList.contains("Brand") && i.classList.contains("animate__zoomIn")) {
            i; 
        } else {
            i.classList.replace("animate__zoomIn","animate__zoomOut")
        }
    })
})

DigitalBtn.addEventListener("click", function () {
    Products.forEach(i => {
        if (i.classList.contains("Digital") && i.classList.contains("animate__zoomIn")) {
            i;
        } else if (i.classList.contains("Digital") && i.classList.contains("animate__zoomOut")) {
            i.classList.replace("animate__zoomOut","animate__zoomIn")
        } else {
            i.classList.replace("animate__zoomIn","animate__zoomOut")
        }
    })
})

PackingBtn.addEventListener("click", function () {
    Products.forEach(i => {
        if (i.classList.contains("Packing") && i.classList.contains("animate__zoomIn")) {
            i;
        } else if (i.classList.contains("Packing") && i.classList.contains("animate__zoomOut")) {
            i.classList.replace("animate__zoomOut","animate__zoomIn")
        } else {
            i.classList.replace("animate__zoomIn","animate__zoomOut")
        }
    })
})

//Blog 

let ShopRow = document.getElementById("ShopRow");
let ImageNumberArrays = [1, 2, 3, 4, 5 ,6 ];
ImageNumberArrays.map(arr => {
    let Div = document.createElement("div");
    Div.classList.add("col-lg-4");
    Div.innerHTML = `
    <div class=" Shop">
        <div class="">
          <img src="images/${arr}.jpg" alt="" class=" w-100 rounded-2">
        </div>
        <div class="shop-detail rounded-2">
          <div class=" shop-social p-3">
            <p class=" mb-1">
              <i class=" bi bi-twitter text-white"></i>
            </p>
            <p class=" mb-1">
              <i class=" bi bi-facebook text-white"></i>
            </p>
            <p class=" mb-1">
              <i class=" bi bi-instagram text-white"></i>
            </p>
          </div>
          <div class=" shop-text p-3">
            <p class=" text-white mb-1">Sara Smith</p>
            <p class=" text-white-50 small">Designer</p>
          </div>
        </div>
    </div>
  
    `
    ShopRow.append(Div);
})

// CountTemeUsersEffects

new Waypoint({
    element: document.getElementById('Portfilio'),
    handler: function () {
        const CountElements = document.querySelectorAll( '.counter' )
        CountElements.forEach(el => {
            counterUp( el, {
                duration: 2000,
                delay: 16,
            } )
        })
        this.destroy();
    },
    offset: "75%",
  })








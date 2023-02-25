"use strict";

function setAttributes(el, attrs){
    for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

// tao element rieng cho phan nhap email 
const container_email = document.createElement("form");
const container_child_email = document.createElement("div");
const title_email = document.createElement("h3");
const lable_email = document.createElement("label");
const email = document.createElement("input");
const button_submit = document.createElement("button");
const personal_info_container = document.querySelector(".personal-info-container");
const show_email = document.querySelectorAll('.info');
const enter_press = email;
title_email.innerText = "THÔNG TIN CÁ NHÂN";
lable_email.innerText = "Hãy nhập email để xác thực";
button_submit.innerText = "Submit";


setAttributes(container_child_email, {
    "class": "form-group"
});
setAttributes(lable_email, {
    "for": "email"
});
setAttributes(email, {
    "type": "email",
    "placeholder": "Enter email",
    "id": "email",
    "class": "form-control"
});
setAttributes(button_submit, {
    "type": "button",
    "class": "btn btn-primary"
});


setAttributes(personal_info_container, {
    "class": "hidden"
});



//them cac phan tu con vao trong phan tu container_email
container_child_email.appendChild(title_email);
container_child_email.appendChild(email);
container_child_email.appendChild(lable_email);

container_email.appendChild(container_child_email);
container_email.appendChild(button_submit);
const personal_info = document.getElementById("personal-info");
personal_info.appendChild(container_email);

// tao su kien cho nut submit 
button_submit.addEventListener('click', function(){
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = regex.test(email.value);
    if(result){
        container_email.classList.add("hidden");
        personal_info_container.classList.remove("hidden");
        show_email[0].childNodes[7].innerText = `Email: ${email.value}`;
    }else{
        alert("Ban nhap chua dung email. Xin moi nhap lai!");
    }
});

// tao su kien nhan phim enter 
enter_press.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        button_submit.click();
    }
});


//********************show chi tiet cua phan job-info *********************/ 
// copy cai element cu de show view less 
const view_less_element = document.getElementById("job-info");
let index_insert; // chi so vi tri de chen vao job-info

// lay phan tu muon show 
// tao su kien click cho 6 elements 
const view_more_element = document.querySelectorAll(".view-more");
for(let i = 0; i < view_more_element.length; i++){
    view_more_element[i].addEventListener('click', function(){
        index_insert = i;
        const parent = this.parentElement;
        const _this = this;
        this.parentElement.remove();

        document.body.insertBefore(this.parentElement, document.body.firstChild);

        // styling cho element 
    
        this.parentElement.style.cssText = "position: fixed; z-index: 1; width: 100%;height: 100%; display: flex;flex-direction: column;justify-content: center;align-items: center;background-color: rgba(0, 0, 0, 0.9);color: rgb(255, 255, 255);backdrop-filter: blur(15px); opacity:1; transition: all 600ms ease-in-out;"
        this.style.display = "none"; // an nut view more 
       
        // hien thi nut view less 
        const view_less_each_element = this.parentElement.children[4];
        view_less_each_element.style.cssText = "display: block"; 
        
        // tao su kien cho view less 
        view_less_each_element.addEventListener('click', function(){
            _this.parentElement.remove();
            view_less_element.insertBefore(_this.parentElement, view_less_element.children[index_insert]);
            // reset css inline
            _this.parentElement.style.cssText = "";
            // tat nut view less va show nut view more 
            view_less_each_element.style.cssText="";
            _this.style.display = "";
        });
    });
}
 







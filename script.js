let api_container = document.getElementById("api-container");
let load=document.getElementById("fidget");
let show=document.getElementById("show");
let mark_button=document.getElementsByClassName("mark");
let search_btn=document.getElementById('sbtn');
let input=document.getElementById('input');
let loading=document.getElementById('loading');
let count_span=document.getElementById('count');
let card=document.getElementById("card-container");
let card_img=document.querySelector('.card img');
// https://openapi.programming-hero.com/api/retro-forum/posts?category=categoryName
let count=0;
let data;
let data2;
const load_data = (per="")=> setTimeout(async function() {
    const url = `https://openapi.programming-hero.com/api/retro-forum/posts${per}`;
    const res = await fetch(url);
     data = await res.json();
    if(data.message=="No posts found!!!"){
        api_container.innerText="Sorry catagory not found";
        loading.style.display='none';
    }
    console.log(data);
    data.posts.forEach(item => {
        let a = document.createElement('p');

        a.classList.add('w-full', 'p-16', 'bg-green-300','mb-4','rounded-lg');
        
        a.innerHTML=`<h1 class="w-8 h-8 p-3 bg-red-500 rounded-full relative left-16 top-24"></h1>
        <h1 class="text-xl">#${item.category} </h1>
    
        <h1 class="text-xl mb-2">Author: ${item.author.name}</h1>
        <div class=" bg-grey-200 w-full ">
        <img src="${item.image}" height="4px" width="50px" alt="">
        
        <div class="flex text-2xl font-bold">${item.title}</div>
        <h1 class="text-xl">${item.description}</h1>
        <br>
        <div class="flex gap-4">
        <svg class="w-16 h-8 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"/></svg>
        <span>${item.comment_count}</span>
        <svg class="w-16 h-8 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
        <span>${item.view_count}</span>
        <svg class="w-16 h-8 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>${item.posted_time}
        </div>

        <button class=" mark btn btn-primary ">mark as read</button>
    </div>`;
    if(item.isActive){
        a.querySelector('h1').classList.add('bg-green-500');
        a.querySelector('h1').classList.remove('bg-red-500');

    }
    
    
     
        api_container.appendChild(a);
        loading.style.display='none';
        
    });
    read();
}, 2000);

async function carddata(){
    const url = ` https://openapi.programming-hero.com/api/retro-forum/latest-posts`;
    const res = await fetch(url);
     data2 = await res.json();
     console.log(data2);
     for(let data of data2){
     //console.log("fjfjf",data.author.name);
    let box=document.createElement('div');
    box.innerHTML=`
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="${data.cover_image}" alt="img" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
       <h1 class="text-xs font-bold">${data.author.posted_date}
      <h2 class="card-title">${data.title}</h2>
      <p>${data.description}</p>
      <div class="flex w-16 h-8 rounded-full">
      <img src="${data.profile_image}" height="40px" width="40px" class="rounded-full"></img>
      <h1 class="text-xs font-bold">${data.author.name}</h1>
      </div>
      <h1 class="text-xs font-bold">${data.author.designation}<h1>
    </div>
  </div>
    `;
    card.appendChild(box);

     }
}

load_data();
carddata();
load.classList.remove('hidden')

search_btn.addEventListener("click",function(event){
    api_container.innerHTML='';

   loading.style.display='block';
    load_data(`?category=${input.value}`);
   

});

     function read(){
     
     for(let button of mark_button)
    {
        button.addEventListener("click",function (event){
            count++;
            count_span.innerText=`${count}`;
            title=event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
             comment=event.target.previousElementSibling.children[3];
            console.log(comment);
            title=`${title.textContent}. Views->${comment.textContent}`;
            showtitle(title);
            event.target.classList.remove('btn','btn-primary')
            event.target.disabled=true;
            event.target.classList.add('text-green-600','font-extrabold','text-2xl')
            event.target.innerText="Marked";
            
           
        });
    }
}

function showtitle(title){
    
    li=document.createElement('li');
    li.textContent=title
    li.style.listStyleType ='none';
    li.style.marginBottom="20px";
    li.style.border="2px solid black";
    
    show.appendChild(li);
    
    
}
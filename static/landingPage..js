const tabActive=(event)=>{
    var tabs=document.getElementsByClassName("LegendTabs__item");
    var i;
    for(i=0;i<tabs.length;i++)
    {
        if(tabs[i].classList.contains("active"))
        {
            tabs[i].classList.remove("active")
        }
    }
    event.target.classList.add("active");
}


//cardSwiper
{/* <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
 var swiper1=new Swiper("#swiper1 .swiper",{
   
    slidesPerView:4,
    navigation:{
        nextEl:"#swiper1 .swiper-button-next",
        prevEl:"#swiper1 .swiper-button-prev",
    }
   }) */}
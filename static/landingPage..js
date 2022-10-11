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
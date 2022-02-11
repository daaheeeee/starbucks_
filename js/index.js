// var depth1Li = document.querySelectorAll('.company-info .depth1 > li')
// for (let i in depth1Li){
//     depth1Li[i].firstElementChild.addEventListener('click', function(e){
//         e.preventDefault()
//         //this.nextElementSibling.style.display = "block"

//     //     var disp = this.nextElementSibling.style.display
//     //     if (disp !== "block"){
//     //         this.nextElementSibling.style.display = "block"
//     //     }else {
//     //         this.nextElementSibling.style.display = "none"
//     //     }

//     //depth1Li[i].className = "on"
//     var licname = depth1Li[i].className
//     if(licname !== "on"){
//         depth1Li[i].className ="on"
//     }else {
//         depth1Li[i].className = ""
//     }

//     }) 
//     //main 마지막 부분에 depth2 보이게하고, css에 on 꽂고 클릭하면 화살표 위로가게 만들어주기
// }

// var lia = $('.company-info .depth1 > li > a')
// // $('.company-info .depth1 > li > a').on('click',function(e){
// lia.on('click',function(e){
//     e.preventDefault()
//     $(this).parent().toggleClass('on')
//     $(this).parent().siblings().removeClass('on')
//     css에 #container .company-info .depth1 > li.on .depth2{
//    display:block; 살려야 함
// })
var lia = $('.company-info .depth1 > li > a')
// $('.company-info .depth1 > li > a').on('click',function(e){
lia.on('click',function(e){
    e.preventDefault()
    $(this).next().stop().slideToggle(300)
    $(this).parent().siblings().find('.depth2').slideUp(300)
})
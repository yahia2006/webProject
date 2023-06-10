function load(){
    document.getElementById('imhome').style.transform='translateY(0%)'
    document.getElementById('texthome').style.scale='1'
    document.getElementById('header').style.transform='translateY(0%)'
}
load()




let playnav=document.getElementById('navopen')
playnav.addEventListener('click',function(){
    document.getElementById('nv').style.left='0%'
    document.getElementById('navclose').style.display='block'
    document.getElementById('navopen').style.display='none'
    
})
let closenav=document.getElementById('navclose')
closenav.addEventListener('click',()=>{
    document.getElementById('nv').style.left='-50%'
    document.getElementById('navclose').style.display='none'
    document.getElementById('navopen').style.display='block'


})
const login=document.getElementById('login')
login.addEventListener('click',function(){
    swal({
        title: " تسجيل الدخول",
        text: "اضغط تاكيد للمتابعة الي صفحة التسجيل",
        icon: "info",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          var ss=swal("سيتم توجيهك للصفحة الان", {
            icon: "success",
            
          });
        
        } else {
          return
        }
      });

})
const yes=document.getElementById('yes')
yes.addEventListener('click',()=>{
  swal({
    title: "نعم",
    text: "نحن سعيدون جدا برأيك",
    icon: "success",
   
  })
  document.getElementById('cardqes').style.display='none'

})
const no=document.getElementById('no')
no.addEventListener('click',()=>{
  swal({
    title: "لا",
    text: " نحن سعيدون جدا برأيك ساعدنا علي تحسين الموقع",
    icon: "success",
   
  })
  document.getElementById('cardqes').style.display='none'

})






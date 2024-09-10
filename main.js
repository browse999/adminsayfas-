let adminData = {
    kAdi :'Browser',
    sifre : 123
}



let admin = document.getElementById('adminpanel')


admin.addEventListener('click',function(){

    event.preventDefault()

let kAdi = document.getElementById('kAdi').value ,
sifre = parseInt(document.getElementById('sifre').value)



if(kAdi==adminData.kAdi && sifre==adminData.sifre ) {

    document.write(`<h1> Giriş Başarılı ! Hoşgeldiniz. </h1>`)
}

else{

    alert('Tekrar deneyiniz.')
}





})
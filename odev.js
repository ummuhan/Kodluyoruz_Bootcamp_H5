var ad = "Ümmühan" ;
var resitYas = 18;
var evlenecegiYas = parseInt(prompt("Evlendiğiniz yaşı girebilir misiniz? :"));
var a;
evlenecegiYas = prompt("Kaç yaşında evleneceksin "+ad+"?");
for(i=0; i<=35; i++)
{
if(i==0)
{
   console.log(ad+" doğdu");
}

else if (i==resitYas)
{
   console.log(ad+" reşit oldu. ");
   

}
else if (evlenecegiYas==i)
{
   console.log(ad+" "+i+" yaşında evlendi.");
}
else{
   console.log(ad+" "+i+" yaşında");
}
}
var o1=0;
var o2=1;
var o3=2;

var l=76.5;

datime();
obr();
lef();

function datime(){
    var date=new Date();
    var day=date.getDate();
    var m=date.getMonth();
    var mie=["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"];
    var year=date.getFullYear();
    var hou=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();

    if(day>0 && day<10) day="0"+day;
    if(hou>=0 && hou<10) hou="0"+hou;
    if(min>=0 && min<10) min="0"+min;
    if(sec>=0 && sec<10) sec="0"+sec;

    document.getElementById("date").innerHTML="Data: "+day+" "+mie[m]+" "+year;
    document.getElementById("time").innerHTML="Czas: "+hou+":"+min+":"+sec;
    setTimeout("datime()", 1000);
}

function obr(){
    var sci=["obrazki/Algiz.png", "obrazki/Ansuz.png", "obrazki/Fehu.png", "obrazki/Gebo.png", "obrazki/Iwaz.png", "obrazki/Kunan.png", "obrazki/Perdo.png", "obrazki/Raido.png", "obrazki/Uruz.png", "obrazki/Wunjo.png"];
    document.getElementById("o1").src=sci[o1];
    document.getElementById("o2").src=sci[o2];
    document.getElementById("o3").src=sci[o3];
    o1++;
    o2++;
    o3++;
    if(o1>9) o1=0;
    if(o2>9) o2=0;
    if(o3>9) o3=0;

    setTimeout("obr()",10000);
}

function lef(){
    l-=0.5;
    if(l==0){
        setTimeout("rgt()", 35);
        return true;
    }
    document.getElementById("baner").style.marginLeft=l+"%";
    setTimeout("lef()", 35);
}

function rgt(){
    l+=0.5;
    if(l==76.5){
        setTimeout("lef()", 35);
        return true;
    }
    document.getElementById("baner").style.marginLeft=l+"%";
    setTimeout("rgt()", 35);
}

function zmi(x){
    var sc="";

    if(x=="m1") sc="men1";
    if(x=="m2") sc="cke1";
    if(x=="m3") sc="helion1";

    document.getElementById(x).src="obrazki/menu/"+sc+".png";
}

function zmi1(x){
    var sc="";

    if(x=="m1") sc="men";
    if(x=="m2") sc="cke";
    if(x=="m3") sc="helion";

    document.getElementById(x).src="obrazki/menu/"+sc+".png";
}

function big(x){
    document.getElementById(x).style.height="7cm";
}

function sml(x){
    document.getElementById(x).style.height="5cm";
}
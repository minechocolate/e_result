function ini(){
    let name= document.getElementById("name").value;
    let class1= document.getElementById("class1").value;
    document.getElementById("resultfullname").value=name;
    document.getElementById("resultclass").value=class1;

}
// let pre=setInterval(mytimer, 1000);
// function mytimer(){
//     let d=new date();
//     document.getElementById("demo").innerHTML=d.toLocaleTimeString();
        
// }
    
function ini1(){
    let test1a= document.getElementById("test1a").value;
    let test2a= document.getElementById("test2a").value;
    let exam1= document.getElementById("exam1").value;
    let total1= Number(test1a)+ Number(test2a)+ Number(exam1);
    document.getElementById("total1").value=total1;
    document.getElementById("mark1").value=total1;
    
    if(total1 >= 70 && total1 <= 100){
        document.getElementById("grade1").value="A";
        document.getElementById("remark1").value="Excellent";
    }
    else if(total1 >=60 && total1 <= 69){
        document.getElementById("grade1").value="B";
        document.getElementById("remark1").value="Very Good";
    }
    else if(total1 >=50 && total1 <= 59){
        document.getElementById("grade1").value="C";
        document.getElementById("remark1").value="Good";
    }
    else if(total1 >=45 && total1 <= 49){
        document.getElementById("grade1").value="D";
        document.getElementById("remark1").value="Pass";
    }
    else if(total1 >=40 && total1 <= 44){
        document.getElementById("grade1").value="E";
        document.getElementById("remark1").value="Fair";
    }
    else{
        document.getElementById("grade1").value="F";
        document.getElementById("remark1").value="Fail";
    }
} 

function ini2(){
    let test1b= document.getElementById("test1b").value;
    let test2b= document.getElementById("test2b").value;
    let exam2= document.getElementById("exam2").value;
    let total2= Number(test1b)+ Number(test2b)+ Number(exam2);
    document.getElementById("total2").value=total2;
    document.getElementById("mark2").value=total2;

    if(total2 >= 70 && total2 <= 100){
        document.getElementById("grade2").value="A";
        document.getElementById("remark2").value="Excellent";
    }
    else if(total2 >=60 && total2 <= 69){
        document.getElementById("grade2").value="B";
        document.getElementById("remark2").value="Very Good";
    }
    else if(total2 >=50 && total2 <= 59){
        document.getElementById("grade2").value="C";
        document.getElementById("remark2").value="Good";
    }
    else if(total2 >=45 && total2 <= 49){
        document.getElementById("grade2").value="D";
        document.getElementById("remark2").value="Pass";
    }
    else if(total2 >=40 && total2 <= 44){
        document.getElementById("grade2").value="E";
        document.getElementById("remark2").value="Fair";
    }
    else{
        document.getElementById("grade2").value="F";
        document.getElementById("remark2").value="Fail";
    }
}
function ini3(){
    let subject3= document.getElementById("subject3").value;
    let test1c= document.getElementById("test1c").value;
    let test2c= document.getElementById("test2c").value;
    let exam3= document.getElementById("exam3").value;
    let total3= Number(test1c)+ Number(test2c)+ Number(exam3);
    document.getElementById("total3").value=total3;
    document.getElementById("mark3").value=total3;
    document.getElementById("subject3c").value=subject3;

    if(total3 >= 70 && total3 <= 100){
        document.getElementById("grade3").value="A";
        document.getElementById("remark3").value="Excellent";
    }
    else if(total3 >=60 && total3 <= 69){
        document.getElementById("grade3").value="B";
        document.getElementById("remark3").value="Very Good";
    }
    else if(total3 >=50 && total3 <= 59){
        document.getElementById("grade3").value="C";
        document.getElementById("remark3").value="Good";
    }
    else if(total3 >=45 && total3 <= 49){
        document.getElementById("grade3").value="D";
        document.getElementById("remark3").value="Pass";
    }
    else if(total3 >=40 && total3 <= 44){
        document.getElementById("grade3").value="E";
        document.getElementById("remark3").value="Fair";
    }
    else{
        document.getElementById("grade3").value="F";
        document.getElementById("remark3").value="Fail";
    }
}
function ini4(){
    let subject4= document.getElementById("subject4").value;
    let test1d= document.getElementById("test1d").value;
    let test2d= document.getElementById("test2d").value;
    let exam4= document.getElementById("exam4").value;
    let total4= Number(test1d)+ Number(test2d)+ Number(exam4);
    document.getElementById("total4").value=total4;
    document.getElementById("mark4").value=total4;
    document.getElementById("subject4d").value=subject4;

    if(total4 >= 70 && total4 <= 100){
        document.getElementById("grade4").value="A";
        document.getElementById("remark4").value="Excellent";
    }
    else if(total4 >=60 && total4 <= 69){
        document.getElementById("grade4").value="B";
        document.getElementById("remark4").value="Very Good";
    }
    else if(total4 >=50 && total4 <= 59){
        document.getElementById("grade4").value="C";
        document.getElementById("remark4").value="Good";
    }
    else if(total4 >=45 && total4 <= 49){
        document.getElementById("grade4").value="D";
        document.getElementById("remark4").value="Pass";
    }
    else if(total4 >=40 && total4 <= 44){
        document.getElementById("grade4").value="E";
        document.getElementById("remark4").value="Fair";
    }
    else{
        document.getElementById("grade4").value="F";
        document.getElementById("remark4").value="Fail";
    }
}
function ini5(){
    let subject5= document.getElementById("subject5").value;
    let test1e= document.getElementById("test1e").value;
    let test2e= document.getElementById("test2e").value;
    let exam5= document.getElementById("exam5").value;
    let total5= Number(test1e)+ Number(test2e)+ Number(exam5);
    document.getElementById("total5").value=total5;
    document.getElementById("subject5e").value=subject5;
    document.getElementById("mark5").value=total5;

    if(total5 >= 70 && total5 <= 100){
        document.getElementById("grade5").value="A";
        document.getElementById("remark5").value="Excellent";
    }
    else if(total5 >=60 && total5 <= 69){
        document.getElementById("grade5").value="B";
        document.getElementById("remark5").value="Very Good";
    }
    else if(total5 >=50 && total5 <= 59){
        document.getElementById("grade5").value="C";
        document.getElementById("remark5").value="Good";
    }
    else if(total5 >=45 && total5 <= 49){
        document.getElementById("grade5").value="D";
        document.getElementById("remark5").value="Pass";
    }
    else if(total5 >=40 && total5 <= 44){
        document.getElementById("grade5").value="E";
        document.getElementById("remark5").value="Fair";
    }
    else{
        document.getElementById("grade5").value="F";
        document.getElementById("remark5").value="Fail";
    }
}
function ini6(){
    let subject6= document.getElementById("subject6").value;
    let test1f= document.getElementById("test1f").value;
    let test2f= document.getElementById("test2f").value;
    let exam6= document.getElementById("exam6").value;
    let total6= Number(test1f)+ Number(test2f)+ Number(exam6);
    document.getElementById("total6").value=total6;
    document.getElementById("subject6f").value=subject6;
    document.getElementById("mark6").value=total6;

    if(total6 >= 70 && total6 <= 100){
        document.getElementById("grade6").value="A";
        document.getElementById("remark6").value="Excellent";
    }
    else if(total6 >=60 && total6 <= 69){
        document.getElementById("grade6").value="B";
        document.getElementById("remark6").value="Very Good";
    }
    else if(total6 >=50 && total6 <= 59){
        document.getElementById("grade6").value="C";
        document.getElementById("remark6").value="Good";
    }
    else if(total6 >=45 && total6 <= 49){
        document.getElementById("grade6").value="D";
        document.getElementById("remark6").value="Pass";
    }
    else if(total6 >=40 && total6 <= 44){
        document.getElementById("grade6").value="E";
        document.getElementById("remark6").value="Fair";
    }
    else{
        document.getElementById("grade6").value="F";
        document.getElementById("remark6").value="Fail";
    }
}
function ini7(){
    let subject7= document.getElementById("subject7").value;
    let test1g= document.getElementById("test1g").value;
    let test2g= document.getElementById("test2g").value;
    let exam7= document.getElementById("exam7").value;
    let total7= Number(test1g)+ Number(test2g)+ Number(exam7);
    document.getElementById("total7").value=total7;
    document.getElementById("subject7g").value=subject7;
    document.getElementById("mark7").value=total7;

    if(total7 >= 70 && total7 <= 100){
        document.getElementById("grade7").value="A";
        document.getElementById("remark7").value="Excellent";
    }
    else if(total7 >=60 && total7 <= 69){
        document.getElementById("grade7").value="B";
        document.getElementById("remark7").value="Very Good";
    }
    else if(total7 >=50 && total7 <= 59){
        document.getElementById("grade7").value="C";
        document.getElementById("remark7").value="Good";
    }
    else if(total7 >=45 && total7 <= 49){
        document.getElementById("grade7").value="D";
        document.getElementById("remark7").value="Pass";
    }
    else if(total7 >=40 && total7 <= 44){
        document.getElementById("grade7").value="E";
        document.getElementById("remark7").value="Fair";
    }
    else{
        document.getElementById("grade7").value="F";
        document.getElementById("remark7").value="Fail";
    }
}
function ini8(){
    let subject8= document.getElementById("subject8").value;
    let test1h= document.getElementById("test1h").value;
    let test2h= document.getElementById("test2h").value;
    let exam8= document.getElementById("exam8").value;
    let total8= Number(test1h)+ Number(test2h)+ Number(exam8);
    document.getElementById("total8").value=total8;
    document.getElementById("mark8").value=total8;
    document.getElementById("subject8h").value=subject8;

    if(total8 >= 70 && total8 <= 100){
        document.getElementById("grade8").value="A";
        document.getElementById("remark8").value="Excellent";
    }
    else if(total8 >=60 && total8 <= 69){
        document.getElementById("grade8").value="B";
        document.getElementById("remark8").value="Very Good";
    }
    else if(total8 >=50 && total8 <= 59){
        document.getElementById("grade8").value="C";
        document.getElementById("remark8").value="Good";
    }
    else if(total8 >=45 && total8 <= 49){
        document.getElementById("grade8").value="D";
        document.getElementById("remark8").value="Pass";
    }
    else if(total8 >=40 && total8 <= 44){
        document.getElementById("grade8").value="E";
        document.getElementById("remark8").value="Fair";
    }
    else{
        document.getElementById("grade8").value="F";
        document.getElementById("remark8").value="Fail";
    }
}
function ini9(){
    let subject9= document.getElementById("subject9").value;
    let test1i= document.getElementById("test1i").value;
    let test2i= document.getElementById("test2i").value;
    let exam9= document.getElementById("exam9").value;
    let total9= Number(test1i)+ Number(test2i)+ Number(exam9);
    document.getElementById("total9").value=total9;
    document.getElementById("mark9").value=total9;
    document.getElementById("subject9i").value=subject9;

    if(total9 >= 70 && total9 <= 100){
        document.getElementById("grade9").value="A";
        document.getElementById("remark9").value="Excellent";
    }
    else if(total9 >=60 && total9 <= 69){
        document.getElementById("grade9").value="B";
        document.getElementById("remark9").value="Very Good";
    }
    else if(total9 >=50 && total9 <= 59){
        document.getElementById("grade9").value="C";
        document.getElementById("remark9").value="Good";
    }
    else if(total9 >=45 && total9 <= 49){
        document.getElementById("grade9").value="D";
        document.getElementById("remark9").value="Pass";
    }
    else if(total9 >=40 && total9 <= 44){
        document.getElementById("grade9").value="E";
        document.getElementById("remark9").value="Fair";
    }
    else{
        document.getElementById("grade9").value="F";
        document.getElementById("remark9").value="Fail";
    }
}


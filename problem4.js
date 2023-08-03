//how to decide triangle type- Equilateral,Isosceles,Scalene
let a=5,b=6,c=7;
if(a==b && b==c && c==a){
    console.log("Equilateral");
}else if(a!=b && b!=c && c!=a){
    console.log("Scalene");
}else{
    console.log("Isosceles");
}
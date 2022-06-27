//--Variable (Var)
var x = `Hellow`;       //--Declear
var x = `Great`;        //--ReDeclear
x = `Nice`;             //--Reassign
console.log(x);         //--Result View
document.write(x);


//--Variable (Let)
let x = `Hellow`;
//let x = `This is not good`;
x = `This is good way`;
console.log(x);


//--Variable (const)
const x = `Okay`;
const x = `Bye`;
x = `Thing`
console.log(x);


//--Scopeing Related Issue of Var,Let & Const
//--Var
if(1==1){
    var x = `Nice`;
    //console.log(x);
}console.log(x);   //--Right Way


// //--Let
if(1==1){
    let y = `Important`;
    console.log(y);  //--Right Way
}console.log(y);  //--Wrong Way


//--const
if (1==1){
   const z = `This is R8 way`; 
   console.log(z);      //--Right Way
}console.log(z);        //--Wrong Way


//---Example with for Loop
for(var a=1;
        a<=5;
        a++
    ){
        document.write(a + "<br>");
    }console.log(a)

for (let i=25; i<=30; i++){
    document.write(i + `<br>`);
}console.log('This is Last Value:',i);


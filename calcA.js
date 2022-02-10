const { Module } = require("module");
/*fileName:calcA 
created by:Asjad khan
This file has calculator function add,sub,mod*/

  /*This Function will add the Given parameters*/
add=function(f1,f2){
return f1+f2;
}
// console.log(add(20,30));
/*This function will subtract the Given Parameters*/
sub=function(v1,v2){
    return v1-v2;
    }
    // console.log(sub(40,30));
    /*This Function will find the modulus of the Given parameters*/
    Mod=function(x1,x2){
        return x1%x2;
        }
    //   console.log( Mod(40,30)) ;

      CalcA={
      add:add,
      sub:sub,
      Mod:Mod,
      };
      module.exports=CalcA;
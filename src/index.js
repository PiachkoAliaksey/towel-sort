
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
 
 if(matrix!==undefined){
    let arr1=matrix.map((val,i)=>{
        if(i%2!==0){
            return val.reverse();
        }else{
            return val;
        }
    })
  
   return arr1.flat();

 }else{
     return [];
 }
    

 
   
}

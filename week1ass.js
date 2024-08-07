
// ṭo convert an string in to an array u first need to convert split each of the letter than sort them than join 
// both split and join requieres you to know how to join the spacing basically between it

function check(st1,st2){
   
    if(st1.split('').sort().join('')==st2.split('').sort().join('')){return true}
   else {return false;}
}
console.log(check("skf","fskk"))
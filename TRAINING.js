// const letters = ["a","b","c"];
//
// for (const x of letters) {
//     console.log(x)
// }


for (const x of [1,2,3,4,5]){
    console.log(x)
}


let sss = '===+380982710615==='

console.log(sss.substring(3,sss.length-3))
console.log(sss.substring(sss.indexOf('=') + 3, sss.indexOf('=', 3)))
console.log(sss.substring(sss.indexOf('=') + 3, sss.lastIndexOf('===')))
console.log(sss.replaceAll('=', ''))

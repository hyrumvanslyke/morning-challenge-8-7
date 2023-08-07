// Write your solution below:

function tShirtSorter(s){
    let sml= ''
    let mid = ''
    let large = ''
    for(let i = 0; i < s.length; i++){
        if(s[i] === 's'){
            sml += 's'
        }else if(s[i] === 'm'){
            mid += 'm'
        }else{
            large += 'l'
        }
    }
    return sml + mid + large
}

//****************************** */
const tShirtSorter2 = shirts => shirts.split('').sort().reverse().join('')
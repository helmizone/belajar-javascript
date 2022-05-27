// palindrome adalah kata yang bisa dibalik dan akan menjadi kata tersebut lagi
// contoh "racecar" dibalki "racecar"

// soal: buat function yang menentukan kata tersebut adalah palindrome atau bukan


function isPalindrome(palin) {
    // code here
    palindromee = '';

    for(i = palin.length-1; i >= 0; i--){
        palindromee += palin[i] 
    }

    if(palindromee === palin){
        return true
    } else{
        return false
    }

};

console.log(isPalindrome('racecar')); // return true

console.log(isPalindrome('laptop')) // return false

console.log(isPalindrome('radar')) // return true

console.log(isPalindrome('rotator')) // return true

console.log(isPalindrome('dinda')) // return false
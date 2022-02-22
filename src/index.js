module.exports = function reverse (n) {
  let str = String(n);
  let strNew = '';
  if ((str[0] == '-') || (str[0] == '+')) {
        for (let i = 1; i < str.length; i++) {
            strNew = str[i] + strNew;
         } 
    return +strNew;
    }
    else {
        for (let i = 0; i < str.length; i++) {
            strNew = str[i] + strNew;
         } 
    return +strNew;  
    }  
}

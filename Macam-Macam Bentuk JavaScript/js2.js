let i = "";


for (let a = 1; a <= 15; a++){
    for (let b = a; b <= 15; b++){
        i += ' ';
    }
    for (let b = 1; b <= a + (a - 1); b++){
        i += '*';
    }
    
    i += '\n';
}
for (let a = 14; a > 0; a--){
    for (let b = 14; b + 1 >= a; b--){
        i += ' ';
    }
    for (let b = 0; b < a + (a-1); b++){
        i += '*';
    }
    
    i += '\n';
}
console.log(i);
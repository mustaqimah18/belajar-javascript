

let s = '';

for(let a = 5; a > 0; a--){
    for (let c = a; c <= 5 ; c++){
        s += ' ';
    }
    for (let b = 1; b <= a + (a - 1); b++){
        s += '*'
    }
    s += '\n';
}
for(let a = 2; a <= 5; a++){
    for (let c = 5; c >= a; c--){
        s += ' ';
    }
    for (let b = 1; b <= a + (a - 1); b++){
        s += '*'
    }
    s += '\n';
}
console.log(s);
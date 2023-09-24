let s = '';

for(let a = 1; a <= 5; a++) {
    for (let b = 1; b <= a; b++){
        s += '*';
    }
   s += '\n';
}
for (let a = 1; a <= 4; a++){
    for (let c = a; c <= 4; c++){
        s += '*';
    }
    s += '\n';
}
console.log(s); 

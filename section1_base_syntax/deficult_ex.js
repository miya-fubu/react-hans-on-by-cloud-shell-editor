const foo = 'f'
let bar = 'a'
let bbr = 'b'
let bcr = 'c'
let bdr = 'd'
let ber = 'e'

bbr = bar
bar = bdr
bdr = 'c'
ber = 'a'
bcr = ber
bbr = bar
bar = bdr
bdr = 'd'
ber = 'b'
bcr = ber
bbr = bar
bar = bdr
bdr = 'z'
ber = 'a'
bcr = ber
bbr = bar
bar = bdr
bdr = 'f'
ber = 'e'
bcr = ber

console.log(foo)
console.log(bar)

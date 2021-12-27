const foo = ["f", "o", "o"];
const foo2 = [...foo];
// 逆順操作
foo.sort((first, second) => {
  if (first > second) return -1;
  else if (first < second) return 1;
  return 0;
});
console.log(foo);
console.log(foo2)


const bar = {
  text: "bar",
  number: 2,
  description: "this is second meta syntactic text"
}
const print = ({text, ...args}) => {
  console.log(text)
  console.log(args)
}
print(bar)
// bar
// { number: 2, description: 'this is second meta syntactic text' }

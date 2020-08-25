// Objects allow you to map keys to values (key as a strings)
// Maps ES6
// Allow you to map arbitrary values  to other values (you can use objects as keys)

// Map, like a JS Object, stores key-value pairs, but also remembers the insertion order of the key-value pairs (which makes it iterable)
const x = {}

//  key
const a = {}
// value
x[a]='a'
console.log(x)
// => {[object Object]: 'a'}
// another key
const b = {num: 1}
x[b] ='b'

// it only remembers the last entry into that object
console.log(x)
// => {[object Object]: 'b'}

const map = new Map()
// list all available methods of Map
// also comes with iterator (sincee JS Object doesn't iterate)
// set method too
console.dir(map)

// set object a as key and string a as value
// map.set(a, 'a'), map.set(b, 'b)
map.set(a, 'a')
map.set(b, 'b')
// prints out contents of map as well as the methods listed
console.dir(map)

// set the same key, but with a different value
// it only allows to set unique values for the same key
// a key will be overwritten with 'c'
map.set(a, 'c')

// delete b
map.delete(b)

// another thing available only for maps is
for(let [key,value] of map.entries()){
  console.log(key, value)
}

// convert map into array
// it converts it into a 2 dimensional array
const arr = [...map]

// WEAKMAPS ????????????????????????????????????
// once you define a map's key, it doesen't ever get removed or garbage collected
{
  let x = {
    a: [1,2]
  }

  var map = new Map()
  map.set(x, 'something')
}
// x gets garbage collected???????????

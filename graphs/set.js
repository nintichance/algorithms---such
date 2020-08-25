// A set is a data structure where you store unique values
// An element cannot be repeated more than once
//Javascript comes with a set data structure already!

class SetDS extends Set{
  //Set class methods, which are extended
  // t = new Set()
  // t.values()
  // t.add
  // t.delete
  // t.has
  // t.forEach
  // t.clear
  // t.keys
  // t.size  

  constructor(...elems) { //user may pass in any number of elements
    //all arguments will be passed as an array
    super(elems)//
  }

  //to unify two sets, which will remove repeating values
  union(set2) {
    const newSet = new SetDS(
      ...[...set2.values, this,values()]//our array is destructured so that we pass in the parameters, as they will be changed into an array when passed to the constructor
    )

    return newSet
  }

  // If you have two sets, A & B
  // A - B means that all elements that are common in A & B, all the elements are removed from A
  // ex. { 1, 2, 3 } - { 2, 3, 4, 5 } => { 1 }
  difference(set2){
    const newSet = new SetDS()
    //this refers to our current set
    this.forEach(value => {
      if(!set2.has(value)) {
        newSet.add(value)
      }
    })
  }
  // { 1,2 } / { 1,2,3,4,5}
  //determine if a set is a subset of another set
  subset(set2){
    let isSubset = true
    //Interesting iteration I have seen before
    //iterator is the values in the set
    //the second condition in the for loop
    //val = null; val = it.next().value
    //will be evaluate on each iteration
    //if the iterator is exhausted, our value will become undefined
    for(let it = this.values(), val = null; val = it.next().value;){
      //check whether this set is a subset of set 2
      if(!set2.has(val)) {
        isSubset = false 
        break
      }
    }

    return isSubset
  }
}

const set = new SetDS(1,2,3,4) // ---> new Set([1,2,3,4])
const set2 = new SetDS(3,4,5,6)
console.log(set.union(set2))




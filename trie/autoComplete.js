/**
 * Search Auto Complete System for Search Engine
 * Users may input a sentence
 * At least one word and end with a special character '#'
 * For *each character* exempt '#', return *top 3* historical sentences
 * With Same Prefix as typed input
 * The hot degree for a sentence is defined as the number of times a user typed the exact same sentence before
 * The returned 3 hot sentences should have the same degree of hot, you need to use ASCII-code order (smaller one appears first)
 * If less than 3 hot sentences exist, then just return as many as you can
 * When the input is a special character, it means the sentence eends, and in this casee, you neeed to return an empty list
 */

/** 
* AutocompleteSystem(String[] sentences, int[] times)
* This is the constructor
* The input is historical data
* Sentences is a string array consists of previously typed sentence strings
* Time is the corresponding times a sentence has been typed
* Your system should record these historical data
* Now the user wants to input a new sentence
* The following function will provide the next character the user types
*/

/**
 * List <String> input(char c):
 * The input c is the next character typed by the user
 * The character will only be lower-case letters ('a' - 'z'), blank space (' ') or special character
 * Also, the previously typed sentence should be recorded in your system
 * The output will be the top 3 historical hot sentences that have prefiz the same as the part of the sentence already typed
 */

/**
* Example:
* Operation: AutocompleteSystem(["i love you", "island","ironman", "i love leetcode"], [5,3,2,2])
* The system have already tracked down the following sentences and their corresponding times:
* "i love you" : 5 times\
* "island" : 3 times
* "ironman" : 2 times
* "i love leetcode" : 2 times
*/

class AutocompleteSystem {
  constructor(sentences, times) {
    this.children = {}
  }

  // 
  insert(){

  }
}
const lengthOfLongestSubString = (s) => {
  let left = 0 //windowStart
  let currentLongestSubString = 0
  const seen = {}

  for(let i=0;i<s.length;i++){
    const right = i //windowEnd
    //i = the index of the current character I'm looking at is the windowEnd
    const character = s[i] 
    if seen[character] + 1 > right
      left = seen[char] + 1
    end 

    // if (right - left + 1)
  }
}

//MENTAL MODEL
//think of it literally as a window
//window has a max width that you can open it
//there's a point where it won't go any farther, which is the length of your string
//like a drive through window
//at any given time, as much as the window is open, the window end if shifting (which is why the window end is always the current element)
//the window start, also, gets updated dynamically 
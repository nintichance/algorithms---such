const reverseString = (s) => {
  const helper = (start, end, s) => {
    [s[start], s[end]] = [s[end], s[start]]
    return helper(start+1, end-1, s)
  }
  return helper(0, s.length-1)
}
import isPalindrome, { isAnyPermutationPalindrome } from '../src/palindrome'

export const palindromeTest = () => {
  describe('Palindrome', () => {
    it('"radar" should be palindromes', () =>
      expect(isPalindrome('radar')).toBeTruthy())
  
    it('"madam" should be palindromes', () =>
      expect(isPalindrome('madam')).toBeTruthy())
  
    it('"civic" should be a palindrome', () =>
      expect(isPalindrome('civic')).toBeTruthy())
  
    it('"civic" should be a permutation palindrome', () =>
      expect(isAnyPermutationPalindrome('civic')).toBeTruthy())
  
    it('"civil" should not be a palindrome', () =>
      expect(isPalindrome('civil')).toBeFalsy())
    it('', async () =>{
      await new Promise( resolve => setTimeout(resolve, 2000) );
      console.log("tested Palindrome!");
    })
  })
  
}
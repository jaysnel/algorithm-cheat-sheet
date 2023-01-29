import areAnagrams from '../src/anagram'

export const anagramTest = () => {
  describe('Anagram', () => {
    it('"earth" and "heart" should be anagrams', () =>
      expect(areAnagrams('earth', 'heart')).toBeTruthy())
  
    it('"silent" and "listen" should be anagrams', () =>
      expect(areAnagrams('silent', 'listen')).toBeTruthy())
  
    it('"foo" and "bar" are not anagrams', () =>
      expect(areAnagrams('foo', 'bar')).toBeFalsy())
    it('', async () =>{
      await new Promise( resolve => setTimeout(resolve, 1000) );
      console.log("tested Anagram!");
    })
  })
}
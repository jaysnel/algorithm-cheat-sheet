import { toDecimal, toRoman } from '../src/roman'

export const romanTest = () => {
  describe('Roman Numerals', () => {
    test('should convert from roman to decimal', () => {
      expect(toDecimal('XXVI')).toBe(26)
      expect(toDecimal('MCMXIV')).toBe(1914)
      expect(toDecimal('MMXVII')).toBe(2017)
    })
  
    test('should convert from decimal to roman', () => {
      expect(toRoman(26)).toBe('XXVI')
      expect(toRoman(1914)).toBe('MCMXIV')
      expect(toRoman(2017)).toBe('MMXVII')
    })
    test('', async () =>{
      await new Promise( resolve => setTimeout(resolve, 2000) );
      console.log("tested Roman Numerals!");
    })
  })
  
}
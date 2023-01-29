import fizzbuzz, { isFizz, isBuzz } from '../src/fizzbuzz'

export const fizzbuzzTest = () => {
  describe('FizzBuzz', () => {
    const aux = fizzbuzz()
  
    it('isFizz() should check correcty multiples of 3', () =>
      expect([3, 6, 9, 12, 15].every(isFizz)).toBeTruthy())
  
    it('isBuzz() should check correcty multiples of 5', () =>
      expect([5, 10, 15, 20, 25].every(isBuzz)).toBeTruthy())
  
    test('should return "Fizz" for multiples of 3', () =>
      aux.forEach(
        (x, i) => isFizz(i + 1) && !isBuzz(i + 1) && expect(x).toBe('Fizz')
      ))
  
    test('should return "Buzz" for multiples of 5', () =>
      aux.forEach(
        (x, i) => isBuzz(i + 1) && !isFizz(i + 1) && expect(x).toBe('Buzz')
      ))
  
    test('should return "FizzBuzz" for multiples of 3 and 5', () =>
      aux.forEach(
        (x, i) => isFizz(i + 1) && isBuzz(i + 1) && expect(x).toBe('FizzBuzz')
      ))
    test('', async () =>{
      await new Promise( resolve => setTimeout(resolve, 2000) );
      console.log("tested fizzbuzz!");
    })
  })
  
}
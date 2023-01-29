import Stack from '../src/stack'

export const stackTest = () => {
  describe('Stack', () => {
    const aux = new Stack()
  
    test('should add an element at the end', () => {
      expect(aux.size()).toBe(0)
      aux.push(1)
      expect(aux.size()).toBe(1)
    })
  
    test('should remove the last element of the stack', () => {
      expect(aux.pop()).toBe(1)
      expect(aux.pop()).toBeUndefined()
    })
  
    test('should return the size of the stack', () => expect(aux.size()).toBe(0))
    test('', async () =>{
      await new Promise( resolve => setTimeout(resolve, 2000) );
      console.log("tested Stack!");
    })
  })
  
}
import Heap from '../src/heap'

export const heapTest = () => {
  describe('Heap', () => {
    const heap = new Heap<number>((x, y) => x - y)
  
    test('should add items to the Heap', () => {
      heap.add(1)
      heap.add(2)
      heap.add(3)
      expect(heap.size()).toBe(3)
    })
  
    test('should remove items from the Heap', () => {
      expect(heap.extractRoot()).toBe(1)
      expect(heap.extractRoot()).toBe(2)
      expect(heap.extractRoot()).toBe(3)
      expect(heap.extractRoot()).toBeUndefined()
    })
    test('', async () =>{
      await new Promise( resolve => setTimeout(resolve, 2000) );
      console.log("tested heap!");
    })
  })
  
}
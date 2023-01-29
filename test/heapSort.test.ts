import heapSort from '../src/heapSort'

export const heapSortTest = () => {
  describe('Heap Sort', () => {
    test('should sort an array of numbers', () =>
      expect(heapSort([4, 3, 2, 1], (x, y) => x - y)).toEqual([1, 2, 3, 4]))
  
    test('should sort an array of strings', () =>
      expect(
        heapSort(
          ['cherries', 'kiwi', 'grapes', 'avocado', 'pineapple', 'peach'],
          (a, b) => a.localeCompare(b)
        )
      ).toEqual(['avocado', 'cherries', 'grapes', 'kiwi', 'peach', 'pineapple']))
    test('', async () =>{
      await new Promise( resolve => setTimeout(resolve, 2000) );
      console.log("tested heapSort!");
    })
  })
  
}
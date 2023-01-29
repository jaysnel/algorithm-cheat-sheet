import mergeSort from '../src/mergeSort'

export const mergeSortTest = () => {
  describe('Merge Sort', () => {
    test('should sort an array of numbers', () =>
      expect(mergeSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]))
  
    test('should sort an array of strings', () =>
      expect(
        mergeSort(['cherries', 'kiwi', 'grapes', 'avocado', 'pineapple', 'peach'])
      ).toEqual(['avocado', 'cherries', 'grapes', 'kiwi', 'peach', 'pineapple']))
    test('', async () =>{
      await new Promise( resolve => setTimeout(resolve, 2000) );
      console.log("tested Merge Sort!");
    })
  })
  
}
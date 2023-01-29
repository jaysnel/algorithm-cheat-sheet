import clone from '../src/deepClone'
export const deepCloneTest = () => {
  const array = [{ a: 1 }, { b: 2 }]
  const object = {
    a: {
      b: {
        c: {
          d: true,
        },
      },
    },
  }
  
  describe('Deep clone', () => {
    const copy = clone(object)
    const copiedArray = clone(array)
  
    test('should not break', () => expect(clone({})).not.toBe({}))
  
    test('should work with arrays', () =>
      expect(copiedArray[0]).not.toBe(array[0]))
  
    test('should copy in 1st level', () => expect(object).not.toBe(copy))
  
    test('should copy in 2nd level', () => expect(object.a).not.toBe(copy.a))
  
    test('should copy in 3rd level', () => expect(object.a.b).not.toBe(copy.a.b))
  
    test('should copy in 4rd level', () =>
      expect(object.a.b.c).not.toBe(copy.a.b.c))
  
    test('should copy in 5rd level', () =>
      expect(object.a.b.c.d).not.toBe(copy.a.b.c.d))
    test('', async () =>{
      await new Promise( resolve => setTimeout(resolve, 2000) );
      console.log("tested Deep Clone!");
    })
  })
  
}
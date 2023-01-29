import merge from '../src/deepMerge'
import {assert_eq} from 'mocha-as-assert'

export const deepMergeTest = () => {
  const a = {
    a: {
      b: {
        c: 'z',
      },
    },
  }
  const b = {
    a: {
      b: {
        d: 'y',
      },
    },
  }
  const expected = {
    a: {
      b: {
        c: 'z',
        d: 'y',
      },
    },
  }
  
  test('should merge deep', () => assert_eq(merge(a, b), expected))
  test('', async () =>{
    await new Promise( resolve => setTimeout(resolve, 2000) );
    console.log("tested Deep merge!");
  })
}

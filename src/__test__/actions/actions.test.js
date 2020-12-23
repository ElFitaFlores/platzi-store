import { TestScheduler } from 'jest'
import actions from '../../actions/'
import ProductMock from '../../__mocks__/ProductMock'

describe('Actions', () => {
    test('addtoCart Action', () => {
        const payload = ProductMock
        const expected = {
            type: 'ADD_TO_CART',
            payload
        }
        expect(actions.addToCart(payload)).toEqual(expected)
    })
})
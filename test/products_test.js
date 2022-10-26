const products = require('../products');
const expect = require('chai').expect;

describe('Testing Promotion Logic', () => {
    it('1. Test Data: [1,2,1,2,2,1,1] - It Should calculate for [1, 1, 1, 2, 2]', async () => {
        let data = await products.getProductsTotal([1,2,1,2,2,1,1]);
        console.log(data);
        expect(data).to.equal("374.45");
    });

    it('1. Test Data: [1, 1, 1, 2, 2, 2] - It Should calculate for [1, 1, 2, 2]', async () => {
        let data = await products.getProductsTotal([1, 1, 1, 2, 2, 2]);
        console.log(data);
        expect(data).to.equal("264.50");
    });
});
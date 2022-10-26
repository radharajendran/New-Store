const storeProductAPI = "https://fakestoreapi.com/products"
const axios = require('axios');

 /**
 * Method used to get details of product
 * @param {*} productId 
 * @returns 
 */
const getProductData = async (productId) => {
    console.log('API Call--')
    try {
        let result = await axios(`${storeProductAPI}/${productId}`);
        return result && result.data || {};
    }
    catch(e){
        console.log('Error occured while get product data')
    }
}

const productUtility = {
    /**
     * Method used to get total price for list of given product Ids
     */

    getProductsTotal: async (productIds) => {
        
        if(typeof productIds == 'string')
            productIds = JSON.parse(productIds);

        let productIdMap = new Map();

        //[1,2,1,2,2,1,1] - input buy 3 pay 2

        //[1,1,1, 2, 2] 
        let promotionCnt = 3;
        let promotionVal = 2;

        //Handling unique values in array
        let uniqArr = [...new Set(productIds)];

        let totalPrice = 0;
        for(let i=0; i < uniqArr.length; i++) {
            let currentProd = uniqArr[i];
            let price = 0;

            //Finding same product count in product list
            const result = productIds.filter(prod => prod == currentProd);

            //Formula to apply promotion (Applying promotion value, promotion count with product count)
            let formula = Math.ceil(result.length / promotionCnt * promotionVal);
            let productData = await getProductData(currentProd);
            price =  productData && productData.price || 0;
            
            console.log('Price', price, 'formula', formula)
            totalPrice += price * formula;
            
        }
        return totalPrice.toFixed(2);
    }, 
}

module.exports = productUtility;


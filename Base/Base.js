class Base {

    async returnProductsAPI (expectedListOfProductsAndServices) {
    
        let respAPI = [];
        let producServices= expectedListOfProductsAndServices;
            for(let ps in producServices){
                respAPI.push(producServices[ps]);
            }
        return respAPI.sort();
    }
}
export default new Base()
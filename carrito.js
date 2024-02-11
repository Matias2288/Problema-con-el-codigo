class Cart {
    constructor( list = [] ){
        this.cart = list;
    }

    addToCart( {id, name, img, price} ){
        const index = this.cart.findIndex(  product => product.id == id );
        if( index == -1){
            this.cart.push( {id, name, price, units: 1} );
        } else {
            this.cart[index].units += 1;
        }

        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    getProducts(){
        return this.cart;
    }

    getCount(){
        const count = this.cart.reduce(  (cant, product) => {  return cant + product.units   }, 0  )
        return count;
    }

    getSum(){
        return this.cart.reduce(  (acum, product) => {  return acum + (product.units * product.price)  }, 0  )
    }
    
        // Método para eliminar un producto del carrito
        removeProduct(productId) {
            const index = this.cart.findIndex(product => product.id == productId);
            if (index !== -1) {
                this.cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(this.cart));
            }
        }
}
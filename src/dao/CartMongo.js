import mongoose from 'mongoose';
import Cart from './models/Cart.js';
import Product from './models/Product.js';

class CartMongo {
    
    async createCart(){
        try {
            const newCart = new Cart({
              _id: new mongoose.Types.ObjectId(),  
              products: []
            });
            await newCart.save();
            return newCart;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getProductsCart(cid){
        try {
            const cart = await Cart.findById(cid).populate("products.product").lean();
            if (!cart) {
              throw new Error('Cart Not found');
            }
            return cart.products;
        } catch (error) {
            throw new Error(error);
        }    
    }

    async addProductCart(cid, pid){
        try {
            const cart = await Cart.findById(cid);
            if (!cart) {
              throw new Error('Cart Not found');
            }
        
            const product = await Product.findOne({ _id: pid });
            if (!product) {
              throw new Error('Product Not found');
            }
        
            const productIndex = cart.products.findIndex(item => item.product.equals(pid));
        
            if (productIndex !== -1) {
                cart.products[productIndex].quantity += 1;
            } else {
                cart.products.push({
                    product: pid,
                    quantity: 1
              });
            }
            await cart.save();
            return cart;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteProductCart(cid, pid){
        try {
            const cart = await Cart.findById(cid);
            if (!cart) {
              throw new Error('Cart Not found');
            }
        
            const product = await Product.findOne({ _id: pid });
            if (!product) {
              throw new Error('Product Not found');
            }
        
            const productIndex = cart.products.findIndex(item => item.product.equals(pid));
            
            cart.products.splice(productIndex, 1);
            await cart.save();
            return cart;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateProductsCart(cid, arrProducts){
        try {
            const cart = await Cart.findById(cid);
            if (!cart) {
              throw new Error('Cart Not found');
            }
        
            arrProducts.forEach(product => {
                const productIndex = cart.products.findIndex(item => item.product.equals(product._id));
                if (productIndex !== -1) {
                    cart.products[productIndex].quantity = product.quantity;
                }
            });
     
            await cart.save();
            
            return cart;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateQuantityCart(cid, pid, quantity){
        try {
            const cart = await Cart.findById(cid);
            if (!cart) {
              throw new Error('Cart Not found');
            }
        
            const product = await Product.findOne({ _id: pid });
            if (!product) {
              throw new Error('Product Not found');
            }
        
            const productIndex = cart.products.findIndex(item => item.product.equals(pid));
            if (productIndex !== -1) {
                cart.products[productIndex].quantity = quantity;
            } 
            await cart.save();
            return cart;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteAllProducts(cid){
        try {
            const cart = await Cart.findById(cid);
            if (!cart) {
              throw new Error('Cart Not found');
            }
        
            cart.products = [];
            
            await cart.save();
            
            return cart;
        } catch (error) {
            throw new Error(error);
        }
    }
}   

export default CartMongo;
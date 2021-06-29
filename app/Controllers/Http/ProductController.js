'use strict'

const Product = use('App/Models/Product')

class ProductController {

    async store({ request }) {
        const dataToCreate = request.only(['name', 'description', 'price']);
        return await Product.create(dataToCreate);
    }

    async getAllProducts() {
        return await Product.all();
    }

    async getOneProduct({ params }) {
        return await Product.find(params.id);
    }

    async updateOneProduct( { request, params } ) {
        const product = await Product.findOrFail(params.id)
        const dataToUpdate = await request.only(['name', 'description', 'price'])

        product.merge(dataToUpdate);
        await product.save(dataToUpdate);
        return product;
    }

    async deleteOneProduct({ params }) {
        const product = await Product.findOrFail(params.id)

        await product.delete();
        return { message: "Produto Deletado!" }
    }

}

module.exports = ProductController

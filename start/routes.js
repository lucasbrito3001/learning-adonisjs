'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world to products API!' }
})

Route.get('/products', 'ProductController.getAllProducts')

Route.post('/products', 'ProductController.store')

Route.get('/products/:id', 'ProductController.getOneProduct')

Route.put('/products/:id', 'ProductController.updateOneProduct')

Route.delete('/products/:id', 'ProductController.deleteOneProduct')
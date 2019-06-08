import React from 'react'
import ProductList from '../components/ProductList'
import ProductStore from '../stores/ProductStore'
import { Provider } from 'mobx-react'

    const Root = () => (
        <Provider productStore={ProductStore}>
            <ProductList />
        </Provider>
)
            
export default Root;
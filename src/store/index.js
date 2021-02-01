import Vue from 'vue'

import Vuex from 'vuex'

import cart from '@/store/modules/cart'
import service from '@/store/modules/sevice'
import orders from '@/store/modules/orders'
import stores from '@/store/modules/stores'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        service,
        orders,
        stores
    },
})
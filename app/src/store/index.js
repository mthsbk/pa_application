import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import documents from './documents'
import features from './features'
import flows from './flows'
import glossary from './glossary'
import statistics from './statistics'
import document_type from './document_type'


Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      documents,
      features,
      glossary,
      flows,
      statistics,
      document_type
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}

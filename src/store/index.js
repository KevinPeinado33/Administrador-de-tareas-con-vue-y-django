import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [
      {titulo:'Limpiando A',descripcion: 'Limpiar la casa'},
      {titulo:'Limpiando B',descripcion: 'Jugar maincra con pedro'},
      {titulo:'Limpiando C',descripcion: 'Descargar cursos de edteam amikos'}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

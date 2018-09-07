import {action} from 'mobx'

export default class Todos {

  constructor(request, state) {
    this.request = request
    this.state = state
  }

  // @action async add(text) {
  //   const result = await this.request.post(`api/todos/add`, { text })
  //   this.state.todos.push(result)
  // }

  // @action async remove(item) {
  //   try {
  //     await this.request.post(`api/todos/remove`, { id: item.id })
  //     this.state.todos.remove(item)
  //   } catch(err) {
  //     console.error(err)
  //   }
  // }

  // @action async browse() {
  //   this.state.todos = await this.request.get(`api/todos`)
  // }
}

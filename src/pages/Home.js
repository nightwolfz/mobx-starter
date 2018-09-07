import React from 'react'
import { observer, inject } from 'mobx-react'
import AddTodo from '../components/home/AddTodo'
import Todo from '../components/home/Todo'

@inject('state')
@observer
class Home extends React.Component {

  // When route is loaded (isomorphic)
  static onEnter({ state, store }, params) {
    state.common.title = 'Home'
    // await store.todos.browse()
  }

  render() {
    const { state } = this.props
    return (
      <main>
        <h1>todos</h1>
        <div className="home">
          <AddTodo/>
          <section className="main">
            <ul className="todo-list">
              {state.todos.map((item, index) => {
                return <Todo key={index} item={item}/>
              })}
            </ul>
          </section>
        </div>
      </main>
    )
  }
}


export default Home

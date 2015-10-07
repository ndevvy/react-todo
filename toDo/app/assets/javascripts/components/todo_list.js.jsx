(function(root) {
  'use strict';

  var TodoList = root.TodoList = React.createClass({
    getInitialState: function () {
      return {todos: TodoStore.all()};
    },
    _todosChanged: function () {
      this.setState({todos: TodoStore.all()});
    },
    componentDidMount: function () {
      TodoStore.addChangeHandler(this._todosChanged);
      TodoStore.fetch();
    },
    componentWillMount: function () {
      TodoStore.removeChangeHandler(this._todosChanged);
    },
    render: function () {
      return (
        <div className="todo-master">
          <TodoForm/>
          <div className="todo-list">
            {
              this.state.todos.map(function (todo) {
                  return (<TodoListItem
                    todo={todo}
                    key={todo.id}
                  />);
              })
            }
          </div>
        </div>
      );
    }
  });


}(this));

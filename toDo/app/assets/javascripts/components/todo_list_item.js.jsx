(function(root) {
  'use strict';

  var TodoListItem = root.TodoListItem = React.createClass({
    handleDestroy: function() {
      TodoStore.destroy(this.props.todo.id);
    },

    render: function () {
      return (
        <div className="todo-list-item">
          <div className="todo-list-item-title">
            {this.props.todo.title}
          </div>
          <div className="todo-list-item-body">
            {this.props.todo.body}
          </div>
          <div className="todo-list-item-delete">
            <button onClick={this.handleDestroy}>Delete</button>
            <DoneButton todo={this.props.todo}/>
          </div>
        </div>
      );
    }

  });

}(this));

(function(root) {
  'use strict';

  var TodoForm = root.TodoForm = React.createClass({
    getInitialState: function () {
      return {title: "", body: ""};
    },
    _updateTitle: function (e) {
      this.setState({title: e.target.value});
    },
    _updateBody: function (e) {
      this.setState({body: e.target.value});
    },
    _handleSubmit: function (e) {
      e.preventDefault();
      TodoStore.create({title: this.state.title, body: this.state.body});
    },
    render: function () {
      return (
        <form className="todo-form">
          <input type="text"
                 onChange={this._updateTitle}
                 value={this.state.title}>
          </input><br></br>
          <textarea onChange={this._updateBody} value={this.state.body}></textarea><br></br>
          <button onClick={this._handleSubmit}>submit todo</button>
        </form>
      );
    }

  });

}(this));

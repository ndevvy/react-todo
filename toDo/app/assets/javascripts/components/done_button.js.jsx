(function(root) {
  'use strict';

  var DoneButton = root.DoneButton = React.createClass({
    handleDone: function() {
      TodoStore.toggleDone(this.props.todo.id);
    },

    render: function () {
      var buttonText = this.props.todo.done ? "Undo" : "Done";
      return (
          <button onClick={this.handleDone}>{buttonText}</button>
      );
    }

  });

}(this));

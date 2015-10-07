(function(root) {
  'use strict';
  if (typeof root.TodoStore === 'undefined') {
    var TodoStore = root.TodoStore = {};
  }

  var _todos = [],
      _callbacks = [];

  TodoStore.changed = function () {
    _callbacks.forEach(function (callback) {
      callback();
    })
  };

  TodoStore.addChangeHandler = function (handler) {
    _callbacks.push(handler);
  };

  TodoStore.removeChangeHandler = function (handler) {
    var idx = _callbacks.indexOf(handler);
    if (idx !== -1) {
      _callbacks.splice(idx, 1);
    }
  };

  TodoStore.all = function () {
    return _todos;
  };

  TodoStore.fetch = function() {
    $.getJSON("/api/todos", function(todos) {
      _todos = todos;
      TodoStore.changed();
    })
  };

  TodoStore.create = function(todo) {
    $.post("/api/todos", {todo: todo}, function(response) {
      if (typeof response === 'object') {
        _todos.push(todo);
        TodoStore.changed();
      }
    }, "json");
  };

  TodoStore.findById = function (id) {
    return _.findIndex(_todos, function (todo) {
      return todo.id === id;
    });
  };

  TodoStore.destroy = function (id) {
    var todoIdx = TodoStore.findById(id);
    if (todoIdx !== -1) {
      $.ajax({
        url: "/api/todos/" + id,
        type: 'DELETE',
        success: function (resp) {
          _todos.splice(todoIdx, 1);
          TodoStore.changed();
        }
      });
    }
  };

  TodoStore.toggleDone = function (id) {
    var todoIdx = TodoStore.findById(id);
    var todo = _todos[todoIdx];
    if (todo.done === true) {
      todo.done = false;
    } else {todo.done = true;}


    if (todoIdx !== -1) {
      $.ajax({
        url: "/api/todos/" + id,
        type: 'PATCH',
        data: {todo: todo},
        success: function (resp) {
          TodoStore.changed();
        },
      });
    }
  };




}(this));

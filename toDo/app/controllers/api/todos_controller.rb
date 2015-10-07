class Api::TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  # def show
  #   @todo = Todo.find(params[:id])
  # end
  #
  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo.delete
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: :unprocessable_entity
    end
  end
  #
  # def update
  #   @todo = Todo.find(params[:id])
  #   if @todo.update(todo_params)
  #     render json: @todo
  #   else
  #     render json: @todo.errors.full_messages, status: :unprocessable_entity
  #   end
  # end

private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end

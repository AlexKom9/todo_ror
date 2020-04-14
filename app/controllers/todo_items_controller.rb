class TodoItemsController < ApplicationController
  before_action :set_todo_list
  before_action :set_todo_item, except: [:create]

  def create
    @todo_item = @todo_list.todo_items.create(todo_item_params)
    redirect_to @todo_list
  end

  def update
    @todo_item.update_attribute(:content, params[:content])
    redirect_to @todo_list, notice: "Todo item was updated."
  end

  def destroy
    @todo_item = @todo_list.todo_items.find(params[:id])
    if @todo_item.destroy
      redirect_to @todo_list, notice: "Todo item was deleted."
    else
      redirect_to @todo_list, notice: "Todo item could not be deleted."
    end
  end

  def complete
    @todo_item.update_attribute(:completed_at, Time.now)
    redirect_to @todo_list, notice: "Todo item was marked as completed."
  end

  def reopen
    @todo_item.update_attribute(:completed_at, nil)
    redirect_to @todo_list, notice: "Todo item was reopened."
  end

  private
  def set_todo_list
    @todo_list = TodoList.find(params[:todo_list_id])
  end

  def todo_item_params
    params[:todo_item].permit(:content)
  end

  def set_todo_item
    @todo_item = @todo_list.todo_items.find(params[:id])
  end
end

function todItemToggleEditListener() {
  $('.js-todo-item-edit-btn').on('click', function () {
    var itemId = $(this).data('todo-item-id');
    var content = $(".js-item-content[data-todo-item-id=" + itemId + "]")
    $(this).data('is-active', !$(this).data('is-active'))
    var isActive = $(this).data('is-active')
    if (isActive) {
      $(this).html($(this).data('active-text'))
      content.hide()
    } else {
      $(this).html($(this).data('unactive-text'))
      content.show()
    }
    var editForm = $(".js-todo-item-edit[data-todo-item-id=" + itemId + "]")
    editForm.toggle()
  })
}

$(document).on("turbolinks:load", todItemToggleEditListener)

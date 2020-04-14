function todItemToggleEditListener() {
  $('.js-todo-item-edit-btn').on('click', function () {
    var itemId = $(this).data('todo-item-id');
    var content = $(".js-item-content[data-todo-item-id=" + itemId + "]")
    var editForm = $(".js-todo-item-edit[data-todo-item-id=" + itemId + "]")
    $(this).data('is-active', !$(this).data('is-active'))
    var isActive = $(this).data('is-active')
    if (isActive) {
      $(this).html($(this).data('active-text'))
      editForm.find('input[name=content]').val(content.find('.js-item-content-text').html())
      content.hide()
    } else {
      $(this).html($(this).data('unactive-text'))
      content.show()
    }
    editForm.toggle()
    editForm.find('input[name=content]').focus()
  })
}

$(document).on("turbolinks:load", todItemToggleEditListener)

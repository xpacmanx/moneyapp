$(document).ready(function() {

  $('a[href="#"]').click(function(event){
    event.preventDefault();
  })

  $('.js-form').on('click',function(){
    $('.modal').before('<div class="modal-bg"></div>');
    $('.modal').fadeIn();
  });

  $('.modal .btn-close').on('click',function(){
    $('.modal-bg').remove();
    $('.modal').fadeOut();
  });

  $(".modal-bg").on('click', function(){
    $(this).remove();
    $('.modal').fadeOut();
  });

  $('#send').validate({
    'messages' : {
      'fio': 'Заполните ФИО',
      'email': 'Email введен неверно',
      'tel': 'Заполните телефон'
    }
  });

  $('#send').submit(function(event){
    event.preventDefault();
    var $form = $(this);

    if ($(this).valid()) {
      $.ajax({
        url: 'send.php',
        method:'POST',
        data: $form.serialize(),
        success: function(data){
          $('.modal-body').html(data);
        }
      });
    }

  });

});

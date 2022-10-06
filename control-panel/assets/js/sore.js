$('#login-form').submit(function(e){
    e.preventDefault()
    $('#login-form button[type="button"]').attr('disabled',true).html('Logging in...');
    if($(this).find('.alert-danger').length > 0 )
        $(this).find('.alert-danger').remove();
    $.ajax({
        url:'api/ajax?action=login',
        method:'POST',
        data:$(this).serialize(),
        error:err=>{
            console.log(err)
    $('#login-form button[type="button"]').removeAttr('disabled').html('Login');

        },
        success:function(resp){
            if(resp == 1){
                location.href ='dashboard';
            }else if(resp == 2){
                location.href ='voting';
            }else{
                $('#login-form').prepend('<div class="alert alert-danger">Username or password is incorrect.</div>')
                $('#login-form button[type="button"]').removeAttr('disabled').html('Login');
            }
        }
    })
})
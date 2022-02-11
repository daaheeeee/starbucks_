$('form').on('submit', function(){
    var idval = $('#id').val()
    if(!idval){
        alert('아이디를 입력하세요.')
        $('#id').focus()
        return false
    }

    var passval = $('#password').val()
    if(!passval){
        alert('비밀번호를 입력하세요.')
        $('#password').focus()
        return false
    }
})

// $('#id').on('click', function(e){
//     e.preventDefault()
//     $(this).css({borderColor:" green"})
//     $(this).siblings().removeClass('on')
// })

// $('#password').on('click', function(){
//     $(this).css({borderColor:" green"})
// })
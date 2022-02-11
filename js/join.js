$('form').on('submit', function(){

    var firstval = $('#first').val()
    var lastval = $('#last').val()
    if(!firstval){
        alert('Firstname을 입력하세요.')
        $('#first').focus()
        return false
    }else{ 
        if(!lastval){
        alert('Lastname을 입력하세요.')
        $('#last').focus()
        return false
        }
    }
    var idval = $('#idbox').val()
    var idcheck = /^[a-zA-Z0-9]+$/
    if(!idcheck.test(idval)){
        alert('아이디는 영문자, 숫자만 입력해 주세요.')
        $('#idbox').focus()
        return false
    }
    var pwval = $('#pwbox').val()
    var pwokval = $('#pwok').val()
    var pwvalcheck = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/ 
    if (!pwvalcheck.test(pwval)){
        alert('비밀번호는 영문, 숫자, 특수문자 중 3가지 이상으로 입력해 주세요.')
        $('#pwbox').focus()
        return false
    }else{
        if (pwokval) {
            if (pwval!==pwokval) {
                alert('비밀번호와 비밀번호 확인이 맞지 않습니다.')
                $('#pwbox').focus()
                return false
            }
        } else {
            alert('비밀번호확인을 입력해주세요.')
            $('#pwok').focus()
            return false
        }
    }
    var emailval = $('#emaildomain').val()
    var emailvalcheck = /^[a-zA-Z]+[\.][a-z]+([\.][a-z]+)*$/
    if (!emailvalcheck.test(emailval)) {
        alert('이메일 형식이 맞지 않습니다.')
        $('#emaildomain').focus()
        return false
    }
})
$('#domainlist').on('change',function(){
    var value = $(this).find('option:selected').val()
    if(value!== 'noselect' && value!== 'self'){  
        $('#emaildomain').val(value).attr({disabled:true})  
    }else if (value==='self') {
        $('#emaildomain').attr({disabled:false}).val("") 
    }else {
        $('#emaildomain').attr({disabled:true}).val("")
    }
})


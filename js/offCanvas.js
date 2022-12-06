function openCanvas(){
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');    
}
function addEvListenersForForms() {
$('.submitBtn').on('click', function (e) {
    var subject = $('#subject').val()
    var msg = $('#msg').val()
    contactMe(subject, msg)

    $('#email').val('')
    $('#subject').val('')
    $('#textMsg').val('')
})
}


function contactMe(subject,msg) {
    var emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ofeka18@gmail.com&su=${subject}&body=${msg}`
  window.open(emailLink, "_blank")
}
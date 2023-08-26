var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var message = document.getElementById('message').value;
    var body = 'This details and message from domain name.com<div style="margin-bottom:20px;"></div><b>First name:</b> <br>'+fName + '<div style="margin-bottom:20px;"></div> <b>Last name:</b> <br>' +lName + '<div style="margin-bottom:20px;"></div> <b>Email:</b> <br>' +email + '<div style="margin-bottom:20px;"></div> <b>Number:</b> <br>' +number + '<div style="margin-bottom:20px;"></div> <b>Message:</b> <br>' +message;

    Email.send({
        SecureToken : "0503cb3e-4408-4ae7-bdf5-cffffa34f5dc",
        To : "contac.content@gmail.com",
        From : "aruna.contac@gmail.com",
        Subject : "contact message",
        Body : body
    }).then(
    message => alert(message)
    );
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbyMe_8e6kRU7GwY4f2jncj0vggtxt0ovSkPiEkLKEXKYCAtddPVHmfs0T9uystdiw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
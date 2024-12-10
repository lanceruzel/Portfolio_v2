var form_id = 'email_form';

var data = {
  access_token: "eyzcfbubwlqgngu8oqrkle8h",
};

var sendButton = $("#" + form_id + " [name='send']");

var user_name = $("#" + form_id + " [name='name']");
var email = $("#" + form_id + " [name='email']");
var message = $("#" + form_id + " [name='message']");
var phoneNumber = $("#" + form_id + " [name='phone_number']");
var email_invalid = $('#email_invalid');

function onSuccess() {
  alert('Message Successfully sent!');

  sendButton.val("Send Message");
  sendButton.removeClass("disabled");

  user_name.val('');
  email.val('');
  message.val('');
  phoneNumber.val('');
}

function onError(error) {
  alert('Message cannot be send.');

  sendButton.val("Send Message");
  sendButton.removeClass("disabled");
}

function send() {
  if(user_name.val() === ''
      || email.val() === ''
      || message.val() === ''
      || phoneNumber.val() === ''){
      return;
  }

  sendButton.val("Sending…");
  sendButton.addClass("disabled");

  var subject = `${user_name.val()} Email:${email.val()} Contact#:${phoneNumber.val()}`;

  data["subject"] = subject;
  data["text"] = message.val();

  $.post("https://postmail.invotes.com/send", data, onSuccess).fail(onError);

  return false;
}

sendButton.on("click", send);

var form = $("#" + form_id);

form.submit(function (event) {
  alert('dfdsfds')
  event.preventDefault();
});
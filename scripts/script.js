$(function() {
  $('[data-toggle="popover"]').popover();
});

$('[data-toggle=popover]').popover({ html: true });

function copyPhoneNumber() {
  var text = '+61432586316';

  text.select();
  text.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand('copy');

  /* Alert the copied text */
  alert('Copied the text: ' + text.value);
}

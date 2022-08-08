function whatsapp() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var url =
    "https://wa.me/6285162745705?text=" +
    "*Kritik atau Saran pada Website Resmi Kampung SENGKEMANG*%0a%0a" +
    "*Name:* " +
    name +
    "%0a" +
    "*Phone:* " +
    phone +
    "%0a" +
    "*Message:* " +
    message;

  window.open(url, "_blank").focus();
}
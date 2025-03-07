var userAgent = window.navigator.userAgent;
var is_ios = /iP(ad|od|hone)/i.test(window.navigator.userAgent), is_safari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
console.log(is_ios, is_safari);
if ( is_ios || is_safari ) {
  $('.parallax1').css("background-attachment", "scroll");

}
else {
  $('.parallax1').css("background-attachment", "fixed");
}
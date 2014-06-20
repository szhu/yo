(function() {

  function speechSupported() {
    return window.SpeechSynthesisUtterance && window.speechSynthesis;
  }

  function indicateYoing() {
    $('html').addClass('yoing');
    setTimeout(function() {
      $('html').removeClass('yoing');
    }, 1000);
  }

  function sayYo() {
    indicateYoing();
    var speech = new SpeechSynthesisUtterance("yo");
    if (localStorage.yovoice) speech.voice = localStorage.yovoice;
    speechSynthesis.speak(speech);
  }

  function indicateError() {
    console.error("Your browser doesn't support speech synthesis.")
    $('html').addClass('error');
  }

  $('html').click(function(){
    if (speechSupported()) sayYo();
    else indicateError();
  });

})()

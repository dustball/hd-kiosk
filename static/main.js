function letsDance() {
    $(".jiggle").each(function(i) {
        this.style.position = "relative";
        this.style.top = jiggly()+"px";
        this.style.left = Math.floor(Math.round(Math.random() * 20))+"px";
    });
}

function jiggly() {
    return 10-Math.floor(Math.round(Math.random() * 20));
}

function refreshPage() {
  $.ajax({
    url: '/',
    success: function(data) {
      if (window.oldint) {
        clearTimeout(window.oldint);
      }      
      $('#body').html(data);
    }
  });
}

$(document).ready(function(){
    window.oldint = setInterval(refreshPage,3 * 60 * 1000);
    letsDance();
});

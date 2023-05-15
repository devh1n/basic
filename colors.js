var Links = {
  setColor: function (color) {
    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  },
};
var Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};
function darkbrightHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "dark") {
    Body.setBackgroundColor("black");
    Body.setColor("yellowgreen");
    self.value = "bright";
    Links.setColor("yellowgreen");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");

    Links.setColor("black");
  }
}

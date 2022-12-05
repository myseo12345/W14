var Links = {
  setColor : function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while ( i < alist.length){
      alist[i].style.color = color;
      i = i + 1
    }
  }
};

var Body = {
  setColor : function (color) {
    document.querySelector('body').style.color = color;
  },
  setBGColor : function (color){
    document.querySelector('body').style.backgroundColor = color
  }
};

function nightDayHandler(self){
  if(self.value == 'night'){
    Body.setBGColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue');

  } else {
    Body.setBGColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');

  }
}

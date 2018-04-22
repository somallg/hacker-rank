function Yurt(ribs) {
  this.ribs = ribs;
}

Yurt.prototype.countRibs = function() {
  if (this.ribs > 10) {
    console.log('YUM!');
  }
};

var myHouse = new Yurt(50);
myHouse.countRibs();

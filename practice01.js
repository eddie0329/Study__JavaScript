function a(ID) {
  let _ID = ID;
  return {
    getID: function() {
      console.log(_ID);
      return _ID;
    },
    setID: function(newID) {
      _ID = newID;
    }
  };
}

const p1 = new a(1234);

p1.getID();
p1.setID(492932);
p1.getID();

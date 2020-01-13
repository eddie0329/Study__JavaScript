function a(input) {
  let ID = input;
  return {
    getID: function() {
      console.log(ID);
      return ID;
    },
    setID: function(newID) {
      ID = newID;
    }
  };
}

const myID = a(1234);
myID.getID();
myID.setID(9999999);
myID.getID();
const result = (a(1234).ID = 9999);

result.getID();

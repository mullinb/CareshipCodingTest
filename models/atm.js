const bigInt = require('big-integer');

const notes = [100, 50, 20, 10];

const atm = function(totalStr) {
  let numberOfNotes = new Array(notes.length).fill(0);
  let listOfNotes = new Array(notes.length).fill([]);

  if (totalStr == null) {
    return [];
  }

  try {
    var totalInt = bigInt(totalStr);
  } catch (e) {
    throw new Error("InvalidArgumentException")
  }

  if (totalInt.isNegative()) {
    throw new Error("InvalidArgumentException");
  }

  recurseThroughNotes(0, totalInt);

  function recurseThroughNotes(index, remainder) {
    var note = notes[index];
    while (remainder >= 0 && remainder >= note) {
        numberOfNotes[index] = bigInt(remainder).divide(note);
        remainder = bigInt(remainder).mod(note);
    }
    if (index === notes.length-1) {
      if (remainder !== 0 && remainder % note !== 0) {
        throw new Error("NoteUnavailableException")
      }
      else return;
    }
    recurseThroughNotes(index + 1, remainder);
  }

  for (var i = 0; i<numberOfNotes.length; i++) {
    if (numberOfNotes[i] != 0 && numberOfNotes[i].compare(Math.pow(2, 28)) > 0) {
      listOfNotes[i] = {
        [notes[i].toFixed(2)]: numberOfNotes[i].toString()
      }
    } else {
      listOfNotes[i] = new Array(numberOfNotes[i].valueOf()).fill(notes[i].toFixed(2));
    }
  }

  return listOfNotes.reduce((acc, val) => acc.concat(val), []);
}

module.exports = atm;

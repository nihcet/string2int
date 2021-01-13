const numberObject = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
};

const string2int = (dirtyString = '') => {
  let somethingNew = 0;
  let radix = 1;

  for (let i = (dirtyString || '').length - 1; i >= 0; i -= 1) {
    const numericValue = numberObject[dirtyString[i]];
    if (numericValue !== undefined) {
      somethingNew += numericValue * radix;
      radix *= 10;
    }
  }

  return radix === 1 ? NaN : somethingNew;
};

// const testcases = [
//   // provided testcases
//   'abc573',
//   'a5b7c3',

//   // addition testcases
//   '000',
//   '1000',
//   '02010',
//   '17492',
//   'lorem ipsum',
//   '1e3',
//   '',
//   null,
//   undefined,
//   NaN,
// ];

// for (let i = 0; i < testcases.length; i += 1) {
//   console.log(testcases[i], '\t->', string2int(testcases[i]));
// }
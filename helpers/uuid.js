// this exports a function that generates a unique id (string of random nums and letters)
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

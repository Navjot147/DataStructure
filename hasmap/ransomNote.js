function checkMagazine(magazine, note) {
  const MagMap = {};
  for (let i = 0; i < magazine.length; i++) {
    if (MagMap[magazine[i]]) MagMap[magazine[i]] = MagMap[magazine[i]] + 1;
    else MagMap[magazine[i]] = 1;
  }

  for (let i = 0; i < note.length; i++) {
    const value = note[i];
    if (!MagMap[value]) return 'No';
    if (MagMap[value]) MagMap[value] = MagMap[value] - 1;
  }
  return 'Yes';
}

// const magazine = 'two times three is not four';
// const note = 'two times two is four';

// const magazine = 'give me one grand today night'
// const note = 'give one grand today'

// const magazine = 'ive got a lovely bunch of coconuts';
// const note = 'ive got some coconuts';


console.log(checkMagazine(magazine.split(' '), note.split(' ')));
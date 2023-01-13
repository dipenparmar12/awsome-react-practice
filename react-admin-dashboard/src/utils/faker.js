/* eslint-disable indent */
/* eslint-disable no-bitwise */

// [...Array(100)].map(e => e)

const Fake = {
  bool: () => Math.random() >= 0.5,

  // eslint-disable-next-line default-param-last
  int: (min = 0, max = 5) => Math.floor(Math.random() * (max - min + 1)) + min,

  str: (int) =>
    Array(int)
      .fill('')
      .map((v) => Math.random().toString(36).charAt(2))
      .join(''),

  arr: (len) => Array.from({ length: len }, Math.random),

  arrRandom: (min = 0, max = 10) =>
    new Array(Fake.int(min || 0, max)).fill(null),

  // item: (arr) => arr[Math.random() * arr.length || 0],
  item: (arr) => arr.at(Math.random() * arr.length || 0),

  strFromChars: (length, chars) =>
    Array(length)
      .fill('')
      .map((v) => chars[Math.floor(Math.random() * chars.length)])
      .join(''),

  arrRange: (min, max, len) =>
    Array.from(
      { length: len },
      () => Math.floor(Math.random() * (max - min + 1)) + min,
    ),

  /// // @src https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
  range: (start, end) => {
    const length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
  },

  itemsFromArr: (arr, count) =>
    arr
      .concat()
      .reduce(
        (p, _, __, _arr) =>
          p[0] < count
            ? [
                p[0] + 1,
                p[1].concat(_arr.splice(Math.random() * _arr.length || 0, 1)),
              ]
            : p,
        [0, []],
      )[1],

  uuid: (a) =>
    a
      ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
      : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a),

  date: (start, end) => {
    const diff = end.getTime() - start.getTime()
    const newDiff = diff * Math.random()
    const date = new Date(start.getTime() + newDiff)
    return date
  },
}

export default Fake

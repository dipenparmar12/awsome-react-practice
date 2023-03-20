// function(object, keys, ...args) {
//   Array.isArray(keys) || (keys = [keys])
//   if (args) keys.splice(keys.length, 0, ...args)
// }

var testObj = {
  id: 'id1',
  name: 'name2',
  one: 1,
  two: 22,
  three: 333,
  fourFive: 456,
  number: 1234567890,
  str: 'str hello',
  date: '2021-12-20',
  unde: undefined,
  empty: '',
  null: null,
  nil: null,
  fal: false,
  tr: true,
}

var testObjType = {
  num: 1,
  falseBool: false,
  trueBool: true,
  empty: '',
  und: undefined,
  nullable: null,
  date: new Date(),
  reg: /^.+$/,
  name: 'str',
  another_object: {
    name: 'my_name',
    value: 'whatever',
  },
  array: [
    {
      key1: {
        name: 'key1',
      },
    },
  ],
}

var testCollection = [
  {
    id: 1,
    name: '1 1ONt',
  },
  {
    id: 2,
    name: '2 2 TWO',
  },
  {
    id: 3,
    name: '3 4 1THREE',
  },
  {
    id: 4,
    name: 45678,
  },
  {
    id: '-',
    name: 'Number 1234567890',
  },
  {
    id: '#',
    name: 'ZZZZZZZ',
  },
]

var testInventory = [
  { name: 'apples', qty: 2, dry: true },
  { name: 'bananas', qty: 0, dry: false },
  { name: 'cherries', qty: 5, dry: false },
  { name: 'cherries', qty: 2, dry: true },
  { name: 'apple', qty: 3, dry: true },
  { name: 'kivi', qty: 10, dry: true },
]

const groupBy = (arr, key) =>
  arr.reduce(
    (acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc),
    {},
  )

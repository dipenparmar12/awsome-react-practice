/**
 * Wait for specified time and then execute the callback.
 * @param {Number} milliseconds
 * @param {Function} callback
 * @return {Function}
 * @example
 ```
console.log('waiting started...', new Date())
await wait(2500);
console.log('waiting finished...', new Date())
 ```
 * @example
 ```
 var wait = require('utils/function/wait');
  wait(1000).then(() => {
   console.log('done');
 });
 // => done
```
 */
async function wait(milliseconds, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
      if (callback) callback()
    }, milliseconds)
  })
}

export default wait

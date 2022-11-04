import { toast } from 'react-toastify'
import Type from '../utils/Type'

const isString = Type.isString

/**
 * @src https://fkhadra.github.io/react-toastify/introduction/
 * @param obj
 */
let Notify = (obj = { message: '', type: 'success' }) => {
  console.log('notificationService.js::9 Notify:::', obj)
  let notifyOptions = {
    type: 'success', // info, success, warning, error, default, dark
    position: 'bottom-center',
    delay: 7,
    message: '',
    autoClose: 7000,
  }

  // is object
  if ((typeof obj === 'object' || typeof obj === 'function') && obj !== null) {
    // console.log('notificationService.js::18 object ', obj)
    notifyOptions = Object.assign(notifyOptions, obj)
  }

  // is String
  if (isString(obj)) {
    notifyOptions.message = obj
  }

  // msg not str then do it
  if (!isString(notifyOptions.message)) {
    // console.log('notificationService.js::24 not str', obj)
    notifyOptions.message = JSON.stringify(notifyOptions.message)
  }

  toast(notifyOptions.message, notifyOptions)

  // if (typeof window !== 'undefined') {
  //   window.alert(notifyOptions.message)
  // }
}

export default Notify

export const NotifyTypes = {
  SUCCESS: 'success',
  INFO: 'info',
  ERROR: 'error',
}

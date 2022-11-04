/* eslint-disable prettier/prettier */
import { toast } from 'react-toastify'

/**
 * @src https://fkhadra.github.io/react-toastify/introduction/
 * @param options
 */
const NotifyManager = (options) => {
  console.info('notificationService.js::9 Notify:::', options)
  const notifyOptions = {
    type: 'info', // info, success, warning, error, default, dark
    position: 'bottom-center',
    delay: 7,
    message: 'Solis',
    autoClose: 7000,
    theme: document.querySelector("[class='dark']") ? 'dark' : 'light',
    ...options,
  }
  toast(notifyOptions.message, notifyOptions)
}

const Notify = {
  ...toast,
  success: (message, args) =>
    NotifyManager({ type: 'success', message, ...args }),
  error: (message, args) => NotifyManager({ type: 'error', message, ...args }),
  info: (message, args) => NotifyManager({ type: 'info', message, ...args }),
  warn: (message, args) => NotifyManager({ type: 'warning', message, ...args }),
}

export default Notify
export const appToast = toast

/**
 * Example
 * 
appToast('Default Notification', 'success')

Notify.success(<div className="text-2xl">success notify</div>, {
  toastId: 'customId',
})
  
/// const notifyRef = React.useRef()
notifyRef.current = Notify.loading(
  <button onClick={() => appToast.dismiss(notifyRef.current)}>
    Click for Close...
  </button>,
  { toastId: 'load' },
)
 */

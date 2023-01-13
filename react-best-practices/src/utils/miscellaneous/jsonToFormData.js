/**
 *
 * @param {*} formData
 * @param {*} data
 * @param {*} parentKey
 * @src https://stackoverflow.com/a/42483509/8592918
 */
function buildFormData(formData, data, parentKey) {
  if (
    data &&
    typeof data === 'object' &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key,
      )
    })
  } else {
    const value = data == null ? '' : data

    formData.append(parentKey, value)
  }
}

function jsonToFormData(data) {
  const formData = new FormData()
  buildFormData(formData, data)
  return formData
}

export default jsonToFormData
export { buildFormData }

function objToFormData(obj = {}) {
  const formdata = new FormData()
  for (let key in obj) {
    formdata.set(key, obj[key])
  }
  return formdata
}

export default objToFormData

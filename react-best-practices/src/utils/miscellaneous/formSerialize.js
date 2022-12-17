/*!
 * Serialize all form data into object
 * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 */
function formSerialize(form) {
  return Array.apply(0, form.elements)
    .map((x) =>
      ((obj) =>
        x.type === 'radio' || x.type === 'checkbox'
          ? x.checked
            ? obj
            : null
          : obj)({
        [x.name]: x.value,
      }),
    )
    .filter((x) => x && x)
}

export default formSerialize

// https://vanillajstoolkit.com/helpers/serialize/

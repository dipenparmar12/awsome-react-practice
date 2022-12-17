import React from 'react'
import { Gluejar } from '@charliewilco/gluejar'
import styles from './style.module.css'

//  ImagePaste
export default function ImagePaste() {
  const [deg, setDeg] = React.useState(0)

  const handleChange = (e) => {
    const deg = e.target.value * 1
    deg <= 360 ? setDeg(deg) : setDeg(0)
  }

  return (
    <div className='row'>
      <div>
        <div className={styles.column}>
          <input type='number' min={1} max={360} value={deg} onChange={handleChange} />
          <input type='range' min={0} max={360} value={deg} onChange={handleChange} />
          <h1>Value: {deg}</h1>
        </div>

        {/* /// two */}
        <div className={styles.column}>
          <div className={styles.imageContainer}>
            <Gluejar
              onPaste={(files) => console.log(files)}
              onError={(err) => console.error(err)}
            >
              {({ images }) =>
                images.length > 0 &&
                images.map((image) => (
                  <img
                    style={{ transform: `rotate(${deg}deg)` }}
                    className={styles.image}
                    src={image}
                    key={image}
                    alt={`Pasted: ${image}`}
                  />
                ))
              }
            </Gluejar>
          </div>
        </div>
      </div>
    </div>
  )
}

// const pasteEvent = (event) => {
//   let items = (event.clipboardData || event.originalEvent.clipboardData).items
//   console.log(JSON.stringify(items)) // will give you the mime types
//   for (index in items) {
//     let item = items[index]
//     if (item.kind === 'file') {
//       let blob = item.getAsFile()
//       let reader = new FileReader()
//       reader.onload = function (event) {
//         console.log(event.target.result)
//       } // data url!
//       reader.readAsDataURL(blob)
//     }
//   }
// }
// src: https://stackoverflow.com/questions/6333814/how-does-the-paste-image-from-clipboard-functionality-work-in-gmail-and-google-c

// <p>Paste your image here..</p>
// <img id="container"/>
// document.onpaste = function(pasteEvent) {
//   // consider the first item (can be easily extended for multiple items)
//   var item = pasteEvent.clipboardData.items[0];

//   if (item.type.indexOf("image") === 0) {
//     var blob = item.getAsFile();

//     var reader = new FileReader();
//     reader.onload = function(event) {
//       document.getElementById("container").src = event.target.result;
//     };

//     reader.readAsDataURL(blob);
//   }
// }

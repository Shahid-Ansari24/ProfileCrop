import React, { useRef } from 'react';
import ReactCropper from 'react-cropper';
import { debounce } from 'lodash';

const CropComponent = ({imageData, setOriginalCroppedImageData}) => {

    const hello = useRef(null);

    const onCrop = () => {
      if (hello.current) {
        const { cropper } = hello.current;
        const croppedCanvas = cropper?.getCroppedCanvas();
        console.log("hello", hello)
        console.log("croppedCanvas---", croppedCanvas)
        setOriginalCroppedImageData(croppedCanvas);
      }
    };
  
  return (
    <div>
      <ReactCropper
        src={imageData}
        initialAspectRatio={1}
        aspectRatio={1}
        style={{ height: 300, width: '100%', border: '2px solid black' }}
        guides={false}
        ref={hello}
        viewMode={1}
        crop={debounce(onCrop, 300)}
      />
    </div>
  )
}

export default CropComponent

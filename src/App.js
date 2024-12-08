import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CropComponent from './components/CropComponent';

function App() {
  const [imageData, setImageData] = useState(null);
  const [originalCroppedImageData, setOriginalCroppedImageData] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageData(reader.result); // Convert file to base64 string
      };
      reader.readAsDataURL(file); // Read the file as a Data URL
    }
  }

  return (
    <div className="App">
      <div>
        <input type="file" onChange={handleFileChange}/>
      </div>
      <div>
        {
          imageData && (
            <div style={{padding: '0px 5px', border: '2px solid red'}}>
              <CropComponent 
                imageData={imageData} 
                setOriginalCroppedImageData={setOriginalCroppedImageData}
              />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;

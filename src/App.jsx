import { useState } from "react"
import axios from "axios";
const URL = 'https://upload-site-backend.onrender.com/upload';


function App() {
  const [file, setFile] = useState('')
  const [msg, setMsg] = useState('')

  const upload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const result = await axios.post(URL, formData)
      if (result.status === 200) {
        setMsg('File successfully uploaded')
        setFile('')
      } else{
        setMsg('Error')
        alert('File was not uploaded')
      }
    } catch(err){
      console.log(err.stack)
    }

  }

  return (
    <section className="bg-white w-full min-h-screen px-10 pt-10">
        <div className="">
              <div className="block">
                <label id="file" className="text-xs">Upload File</label>
                <input id="file" type="file" className="w-full hover:border-2 rounded-lg shadow-lg my-2 ease-in-out duration-75 py-2"
                onChange={(e) => setFile(e.target.files[0])}
                />
              </div> 

              <button type="button" className="bg-blue-500 font-semibold px-4 py-2 text-base mt-2 text-white rounded-lg cursor-pointer"
              onClick={upload}
              >Upload</button> 
                  
              <div><h1 className="text-center mt-4 text-sm">{msg}</h1></div>  
        </div>
    </section>
   
  )
}

export default App

import QRCode  from "qrcode"
import React from "react"
import { useState } from "react"

function App() {

  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      margin: 2,
      width: 1000
    }, (err, url) => {
      if (err) return console.error(err)

      console.log(url)
      setQrcode(url)
    })
  }

  return (
    <div className="App">
        <h1>QR Code Generator</h1>
        <p className="how-to">พิมพ์ Link เช่น https://google.com ลงไปในช่องสีขาว และ คลิก สร้าง QR Code</p>
        <input type="text" placeholder="ใส่ลิ้งเช่น https://google.com" value={url} onChange={(evt) => setUrl(evt.target.value)}/>
        <button onClick={GenerateQRCode}>สร้าง QR Code</button>
        {qrcode && <>
          <img src={qrcode} />
          <a href={qrcode} className="button-download" download="qrcode.png">ดาวน์โหลด QR Code</a>
        </>}
        
    </div>
  )
}

export default App

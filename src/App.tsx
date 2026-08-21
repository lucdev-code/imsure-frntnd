import './App.css'
import { useState } from 'react';

function App() {


  const [text, setText] = useState("")
  const maxLength = 500


  const handleChange = (e:any) => {
    const value = e.target.value
    if(value.length <= maxLength) {
      setText(value)
    }
    if(value.length == maxLength) {
      
    }
  }

  


  return (
    <>
    <main className='h-auto flex flex-col '>
      {/* Container 1 */}
      <div>
        <h1 className='ml-2.5 text-6xl shrink-0 font-bold text-blue-500'>I´mSafe!</h1>
        <p className='ml-2.5 font-'>¿Te gustaría saber si estás en una ubicación segura?</p>
      </div>

      {/* Container 2 */}
      <div className='flex justify-center'>
        <section className='mt-32 flex flex-col w-full max-w-3xl align-middle'>
          <p
            className='text-center mb-5'>
            Cuentanos o compartenos el enlace de tu noticia:
          </p>
          <textarea
            value={text}
            onChange={handleChange}
            placeholder='¿Qué paso?'
            maxLength={maxLength}
            rows={3}
            className='text-center w-full resize-none p-2 overflow-hidden border rounded-[5px] h-auto focus:border-blue-400  focus:outline focus:outline-blue-400 focus:shadow-md'
            onInput={(e) => {
              e.currentTarget.style.height = "auto";
              e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
            }} />
          <p className='text-end text-[10px]'>{text.length}/{maxLength}</p>
          {/* Container 3 */}
          <div className='text-center mt-3'>
            <a href="" className='text-[12px] text-blue-400 hover:underline hover:cursor-pointer'>Aviso de privacidad</a>
          </div>
          <div className='flex flex-row gap-1 justify-center'>
            <input type="checkbox" name="" id="" className='hover:cursor-pointer accent-cyan-300'/>
            <p className='text-[15px]'>He leido y acepto los terminos</p>
          </div>
          <div className='flex flex-row justify-end'>
            <button type="submit" className='mt-2 bg-blue-400 w-20 text-center align-middle rounded-[7px] text-white hover:bg-blue-500 hover:cursor-pointer'>Enviar</button>
          </div>
        </section>
      </div>
    </main>
    </>
  )
}

export default App

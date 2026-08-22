import './App.css'
import { useState } from 'react';

// UI Material
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { Modal, Box } from '@mui/material';


function App() {

  // manejar texto de textarea
  const [text, setText] = useState("")
  const maxLength = 500

  const handleChange = (e: any) => {
    let value = e.target.value

    // evitamos los espacios dobles
    value = value.replace(/ {2,}/g, ' ')

    if (value.length <= maxLength) {
      setText(value)
    }
  }

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  if(text === '' || text.length <= 0) {

  }

  return (
    <>
      <main className='h-auto flex flex-col '>
        {/* Container 1 */}
        <div>
          <h1 className='ml-2.5 text-6xl shrink-0 font-bold text-blue-500'>I'mSure!</h1>
          <p className='ml-2.5 font-'>¿Te gustaría saber si estás en una ubicación segura?</p>
        </div>

        {/* Container 2 */}
        <div className='flex justify-center'>
          <section className='mt-32 flex flex-col w-full max-w-3xl align-middle'>
            <p
              className='text-center mb-5'>
              Cuentanos sobre tu noticia:
            </p>
            <TextareaAutosize
              value={text}
              onChange={handleChange}
              placeholder='¿Qué paso? ¿Dónde sucedio?'
              maxLength={maxLength}
              minRows={3}
              maxRows={6}
              className='text-center w-full resize-none p-2 overflow-hidden border rounded-[5px] h-auto focus:border-blue-400  focus:outline focus:outline-blue-400 focus:shadow-md'
            />
            <p className='text-end text-[10px]'>{text.length}/{maxLength}</p>
            {/* Container 3 */}
            <div className='text-center mt-3'>
              <button
                onClick={handleOpen}
                className='text-[12px] text-blue-400 hover:underline hover:cursor-pointer'
              >Aviso de privacidad</button>
              <Modal
                open={open}
                onClose={handleClose}
              >
                <Box
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f0f9ff] p-6 rounded-lg w-100 shadow-xl">
                  <h2 className="text-2xl font-bold text-blue-500">
                    Aviso de privacidad
                  </h2>

                  <p className="mt-4 text-[14px] text-center">
                    En I'mSure! nos comprometemos a proteger la privacidad y seguridad de la información que compartas mediante nuestra plataforma.
                    La información que proporciones será utilizada únicamente para analizar el contenido de la noticia o situación que nos compartas y determinar si la ubicación relacionada puede representar algún riesgo o si es considerada una zona segura.
                    Los datos proporcionados no serán utilizados para fines distintos a los establecidos ni serán compartidos con terceros sin tu consentimiento, salvo cuando exista una obligación legal que así lo requiera.
                    Te recomendamos no proporcionar información personal sensible, documentos oficiales, domicilios particulares u otros datos que permitan identificarte directamente.
                    Al utilizar I'mSure! y proporcionar información mediante nuestros formularios, manifiestas haber leído y comprendido este aviso de privacidad.

                    {/* Última actualización: 22 de agosto de 2026. */}
                  </p>
                  <p className='text-[15px] text-center pt-1 pb-1 font-bold text-blue-500'>Atte: I'mSure!</p>
                  <div className="flex justify-end mt-5">
                    <button
                      onClick={handleClose}
                      className="bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-500 cursor-pointer"
                    >
                      Cerrar
                    </button>
                  </div>
                </Box>
              </Modal>
            </div>
            <div className='flex flex-row gap-1 justify-center'>
              {/* Checkbox de terminos */}
              <input type="checkbox" name="" id="" className='hover:cursor-pointer accent-sky-200 disabled:cursor-auto' disabled={text.trim() === ''} />
              <p className='text-[13.5px]'>He leido y acepto los terminos</p>
            </div>
            <div className='flex flex-row justify-end'>
              <button type="submit" className='mt-2 bg-blue-400 w-20 text-center align-middle rounded py-1 text-white hover:bg-blue-500 hover:cursor-pointer' disabled={text.trim() === ''}>Enviar</button>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App

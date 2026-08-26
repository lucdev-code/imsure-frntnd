import './App.css'

import { useState } from 'react'

// UI Material
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { Modal, Box } from '@mui/material'

function App() {

  // Texto del textarea
  const [text, setText] = useState("")

  // Checkbox de términos
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  // Estados del modal
  const [open, setOpen] = useState(false)

  // Estado de envío
  const [loading, setLoading] = useState(false)

  // Estado de éxito
  const [success, setSuccess] = useState(false)

  const maxLength = 500

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let value = e.target.value

    // Evitar espacios dobles
    value = value.replace(/ {2,}/g, ' ')

    if (value.length <= maxLength) {
      setText(value)

      // Si se borra todo el texto,
      // desmarcamos automáticamente los términos
      if (value.trim() === '') {
        setAcceptedTerms(false)
      }
    }
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const send_request = async () => {

    // Validaciones
    if (text.trim() === '') {
      return
    }

    if (!acceptedTerms) {
      return
    }

    setLoading(true)
    setSuccess(false)

    try {

      const response = await fetch(
        'http://192.168.1.9:3000/information/add-new',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            description: text,
          }),
        }
      )

      console.log(response.status)

      // const data = await response.json()

      // // if (response.status === 201) {

      // console.log('Noticia creada:', data)

      setSuccess(true)

      // Limpiar formulario
      setText('')
      setAcceptedTerms(false)

      // } else {

      // console.error('Error:', data)

      // }

    } catch (error) {

      console.error(
        'Error al enviar la petición:',
        error
      )

    } finally {

      setLoading(false)

    }
  }

  // Determinar si se puede enviar
  const canSubmit =
    text.trim() !== '' &&
    acceptedTerms &&
    !loading

  return (
    <main className="min-h-screen flex flex-col px-4 sm:px-6 md:px-8">

      {/* Header */}

      <div className="pt-4 sm:pt-6">

        <h1
          className="
            ml-0 sm:ml-2.5
            text-4xl sm:text-5xl md:text-6xl
            font-bold
            text-blue-500
            transition-all
            duration-300
          "
        >
          I'mSure!
        </h1>

        <p
          className="
            ml-0 sm:ml-2.5
            text-sm sm:text-base
            text-gray-600
          "
        >
          ¿Te gustaría saber si estás en una ubicación segura?
        </p>

      </div>


      {/* Contenedor principal */}

      <div className="flex justify-center">

        <section
          className="
            mt-16 sm:mt-24 md:mt-32
            flex flex-col
            w-full
            max-w-3xl
          "
        >

          <p className="text-center mb-5 text-gray-700">
            Cuéntanos sobre tu noticia:
          </p>


          {/* Textarea */}

          <TextareaAutosize
            value={text}
            onChange={handleChange}
            placeholder="¿Qué pasó? ¿Dónde sucedió?"
            maxLength={maxLength}
            minRows={3}
            maxRows={6}
            className="
              text-center
              w-full
              resize-none
              p-3
              overflow-hidden
              border
              rounded-lg
              h-auto
              text-sm sm:text-base
              transition-all
              duration-200

              focus:border-blue-400
              focus:outline
              focus:outline-blue-400
              focus:shadow-md
            "
          />


          {/* Contador */}

          <p
            className={`
              text-end
              text-[10px]
              transition-colors
              duration-200
              ${text.length >= maxLength
                ? 'text-red-400'
                : 'text-gray-400'
              }
            `}
          >
            {text.length}/{maxLength}
          </p>


          {/* Aviso de privacidad */}

          <div className="text-center mt-3">

            <button
              type="button"
              onClick={handleOpen}
              className="
                text-[12px]
                text-blue-400
                transition-all
                duration-200
                hover:text-blue-600
                hover:underline
                hover:cursor-pointer
              "
            >
              Aviso de privacidad
            </button>


            <Modal
              open={open}
              onClose={handleClose}
            >

              <Box
                className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2

                  bg-[#f0f9ff]

                  p-4 sm:p-6

                  rounded-xl

                  w-[90%]
                  sm:w-[500px]

                  max-h-[90vh]

                  overflow-y-auto

                  shadow-2xl

                  outline-none

                  animate-[fadeIn_0.2s_ease-out]
                "
              >

                <h2
                  className="
                    text-xl sm:text-2xl
                    font-bold
                    text-blue-500
                  "
                >
                  Aviso de privacidad
                </h2>

                <p
                  className="
                    mt-4
                    text-[13px] sm:text-[14px]
                    text-center
                    leading-relaxed
                    text-gray-700
                  "
                >
                  En I'mSure! nos comprometemos a proteger la privacidad
                  y seguridad de la información que compartas mediante
                  nuestra plataforma.

                  La información que proporciones será utilizada
                  únicamente para analizar el contenido de la noticia
                  o situación que nos compartas y determinar si la
                  ubicación relacionada puede representar algún riesgo
                  o si es considerada una zona segura.

                  Los datos proporcionados no serán utilizados para
                  fines distintos a los establecidos ni serán compartidos
                  con terceros sin tu consentimiento, salvo cuando exista
                  una obligación legal que así lo requiera.

                  Te recomendamos no proporcionar información personal
                  sensible, documentos oficiales, domicilios particulares
                  u otros datos que permitan identificarte directamente.

                  Al utilizar I'mSure! y proporcionar información mediante
                  nuestros formularios, manifiestas haber leído y
                  comprendido este aviso de privacidad.
                </p>

                <p
                  className="
                    text-[15px]
                    text-center
                    pt-3
                    font-bold
                    text-blue-500
                  "
                >
                  Atte: I'mSure!
                </p>

                <div className="flex justify-end mt-5">

                  <button
                    type="button"
                    onClick={handleClose}
                    className="
                      bg-blue-400
                      text-white
                      px-5
                      py-2
                      rounded-lg

                      transition-all
                      duration-200

                      hover:bg-blue-500
                      hover:shadow-md
                      hover:-translate-y-0.5

                      active:translate-y-0

                      cursor-pointer
                    "
                  >
                    Cerrar
                  </button>

                </div>

              </Box>

            </Modal>

          </div>


          {/* Checkbox */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              mt-4
              px-2
            "
          >

            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) =>
                setAcceptedTerms(e.target.checked)
              }
              disabled={text.trim() === ''}
              className="
                w-4
                h-4

                accent-blue-400

                hover:cursor-pointer

                disabled:cursor-not-allowed
                disabled:opacity-50

                transition-all
                duration-200
              "
            />

            <p
              className="
                text-[12px]
                sm:text-[13.5px]
                text-gray-600
              "
            >
              He leído y acepto los términos
            </p>

          </div>


          {/* Mensaje de advertencia */}

          {text.trim() !== '' && !acceptedTerms && (

            <p
              className="
                text-center
                text-[11px]
                text-gray-400
                mt-2

                animate-pulse
              "
            >
              Debes aceptar los términos para enviar la noticia.
            </p>

          )}


          {/* Botón enviar */}

          <div className="flex justify-end mt-3">

            <button
              type="button"
              disabled={!canSubmit}
              onClick={send_request}
              className={`
                relative

                w-24
                sm:w-20

                py-2
                sm:py-1

                text-sm
                sm:text-[12px]

                rounded-lg

                text-white

                transition-all
                duration-200

                ${canSubmit
                  ? `
                      bg-blue-400
                      hover:bg-blue-500
                      hover:shadow-md
                      hover:-translate-y-0.5
                      active:translate-y-0
                      cursor-pointer
                    `
                  : `
                      bg-gray-300
                      cursor-not-allowed
                    `
                }
              `}
            >

              {loading ? (

                <span className="flex items-center justify-center gap-2">

                  <span
                    className="
                      w-3
                      h-3
                      border-2
                      border-white
                      border-t-transparent
                      rounded-full
                      animate-spin
                    "
                  />

                  Enviando

                </span>

              ) : (
                'Enviar'
              )}

            </button>

          </div>


          {/* Mensaje de éxito */}

          {success && (

            <p
              className="
                text-center
                text-sm
                text-green-500
                mt-4
                animate-pulse
              "
            >
              ✓ ¡Noticia enviada correctamente!
            </p>

          )}

        </section>

      </div>

    </main>
  )
}

export default App
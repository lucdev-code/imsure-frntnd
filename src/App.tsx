import './App.css';

import { useState } from 'react';

import { Header } from './components/Header/header';
import { NewsTextarea } from './components/NewsForm/newTextarea';
import { TermsCheckbox } from './components/NewsForm/termsCheckbox';
import { SubmitButton } from './components/NewsForm/submitButton';
import { PrivacyModal } from './components/PrivacyModel/privacyModel';
import { FeedbackMessage } from './components/FeedBack/feedbMessage';

import { useNewsForm } from './hooks/userNewForm';

function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const {
    text,
    acceptedTerms,
    loading,
    success,
    error,
    canSubmit,
    maxLength,
    handleChange,
    setAcceptedTerms,
    clearing,
    submit
  } = useNewsForm();

  return (
    <main className="flex flex-col px-4 sm:px-6 md:px-8 overflow-hidden">

      <Header />

      <div className="flex justify-center">
        <section className="mt-16 sm:mt-24 md:mt-32 flex flex-col w-full max-w-3xl">

          <p className="text-center mb-5 text-gray-700">
            Cuéntanos sobre tu noticia:
          </p>

          <NewsTextarea
            value={text}
            maxLength={maxLength}
            onChange={handleChange}
            clearing={clearing}
          />

          <div className="text-center mt-3">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="
                text-[12px]
                text-blue-400
                hover:text-blue-600
                hover:underline
                cursor-pointer
              "
            >
              Aviso de privacidad
            </button>
          </div>

          <TermsCheckbox
            checked={acceptedTerms}
            disabled={text.trim() === ''}
            onChange={setAcceptedTerms}
          />

          {text.trim() !== '' && !acceptedTerms && (
            <p className="text-center text-[11px] mt-2 text-gray-400 animate-pulse">
              Debes aceptar los términos para enviar la noticia.
            </p>
          )}

          <div className="flex justify-end mt-3">
            <SubmitButton
              loading={loading}
              disabled={!canSubmit}
              onClick={submit}
            />
          </div>

          {success && (
            <FeedbackMessage type="success">
              ¡Gracias por compartirnos tu noticia!
            </FeedbackMessage>
          )}

          {error && (
            <FeedbackMessage type="error">
              ¡Error al enviar la noticia!
            </FeedbackMessage>
          )}

        </section>
      </div>

      <PrivacyModal
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />

    </main>
  );
}

export default App;
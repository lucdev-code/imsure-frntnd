import { useState } from 'react';

import { addNew } from '../services/news';
import { delay } from '../utils/delay';

const MAX_LENGTH = 500;
const SUBMIT_DELAY = 3000;

export const useNewsForm = () => {
  const [text, setText] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [clearing, setClearing] = useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let value = event.target.value;

    value = value.trimStart();
    value = value.replace(/\n{2,}/g, '\n');

    if (value.length > MAX_LENGTH) {
      return;
    }

    setText(value);

    if (value.trim() === '') {
      setAcceptedTerms(false);
    }
  };

  const canSubmit =
    text.trim() !== '' &&
    acceptedTerms &&
    !loading;

  const submit = async () => {
    if (!canSubmit) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const [response] = await Promise.all([
        addNew({
          description: text.trim(),
        }),

        delay(SUBMIT_DELAY),
      ]);

      if (response.status !== 201) {
        throw new Error('Error creating information');
      }
      
      setSuccess(true);
      setClearing(true);

      setTimeout(() => {
        setText('');
        setAcceptedTerms(false);
        setClearing(false)
      }, 300);
      
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Error al enviar la noticia:', error);

      setError(true);

      setTimeout(() => {
        setError(false);
      }, 5000);

    } finally {
      setLoading(false);
    }
  };

  return {
    text,
    acceptedTerms,
    loading,
    success,
    error,
    canSubmit,
    maxLength: MAX_LENGTH,
    handleChange,
    setAcceptedTerms,
    clearing,
    submit,
  };
};
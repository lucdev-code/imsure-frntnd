import { Modal, Box } from '@mui/material';

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

export const PrivacyModal = ({
  open,
  onClose,
}: PrivacyModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          bg-[#f0f9ff]
          p-4 sm:p-6
          rounded-xl
          w-[90%] sm:w-[500px]
          max-h-[90vh]
          overflow-y-auto
          shadow-2xl
          outline-none
        "
      >
        <h2 className="text-xl sm:text-2xl font-bold text-blue-500">
          Aviso de privacidad
        </h2>

        <p className="mt-4 text-[13px] sm:text-[14px] text-center leading-relaxed text-gray-700">
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
        </p>

        <p className="text-[15px] text-center pt-3 font-bold text-blue-500">
          Atte: I'mSure!
        </p>

        <div className="flex justify-end mt-5">
          <button
            type="button"
            onClick={onClose}
            className="
              bg-blue-400
              text-white
              px-5 py-2
              rounded-lg
              transition-all
              hover:bg-blue-500
              hover:shadow-md
              hover:-translate-y-0.5
            "
          >
            Cerrar
          </button>
        </div>
      </Box>
    </Modal>
  );
};
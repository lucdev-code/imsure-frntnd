interface SubmitButtonProps {
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}

export const SubmitButton = ({
  loading,
  disabled,
  onClick,
}: SubmitButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        w-24 sm:w-20
        py-2 sm:py-1
        text-sm sm:text-[12px]
        rounded-lg
        text-white
        transition-all
        duration-200

        ${
          !disabled
            ? `
              bg-blue-400
              hover:bg-blue-500
              hover:shadow-md
              hover:-translate-y-0.5
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
              w-3 h-3
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
  );
};
import TextareaAutosize from '@mui/material/TextareaAutosize';

interface NewsTextareaProps {
  value: string;
  maxLength: number;
  clearing: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export const NewsTextarea = ({
  value,
  maxLength,
  clearing,
  onChange,
}: NewsTextareaProps) => {
  return (
    <>
      <TextareaAutosize
        value={value}
        onChange={onChange}
        placeholder="¿Qué pasó? ¿Dónde sucedió?"
        maxLength={maxLength}
        minRows={3}
        maxRows={6}
        className={`
          text-center
          w-full
          resize-none
          p-3
          overflow-hidden
          border
          rounded-lg
          h-auto
          text-sm
          sm:text-base
          transition-all
          duration-300
          ease-out
          focus:border-blue-400
          focus:outline-none
          focus:shadow-md

          ${
            clearing
              ? 'opacity-0 scale-[0.98] blur-[2px]'
              : 'opacity-100 scale-100 blur-0'
          }
        `}
      />

      <p
        className={`
          text-end
          text-[10px]
          transition-colors
          duration-200
          ${
            value.length >= maxLength
              ? 'text-red-400'
              : 'text-blue-400'
          }
        `}
      >
        {value.length}/{maxLength}
      </p>
    </>
  );
};


interface TermsCheckboxProps {
  checked: boolean;
  disabled: boolean;
  onChange: (checked: boolean) => void;
}

export const TermsCheckbox = ({
  checked,
  disabled,
  onChange,
}: TermsCheckboxProps) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-4 px-2">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="
          w-4
          accent-blue-400
          cursor-pointer
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      />

      <p className="text-[12px] sm:text-[13.5px] text-gray-600">
        He leído y acepto los términos
      </p>
    </div>
  );
};
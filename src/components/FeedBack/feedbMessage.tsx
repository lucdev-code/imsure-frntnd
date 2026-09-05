interface FeedbackMessageProps {
  type: 'success' | 'error';
  children: React.ReactNode;
}

export const FeedbackMessage = ({
  type,
  children,
}: FeedbackMessageProps) => {
  return (
    <p
      className={`
        text-center
        text-sm
        mt-6
        animate-pulse
        ${
          type === 'success'
            ? 'text-blue-500'
            : 'text-red-500'
        }
      `}
    >
      {children}
    </p>
  );
};
interface TextAreaSubmitHooksProps {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>,
  ) => void;
}

export function useTextAreaSubmit({ handleSubmit }: TextAreaSubmitHooksProps) {
  const handlePressEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return { handlePressEnter };
}

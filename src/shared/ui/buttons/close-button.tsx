type CloseButtonProps = {
  onClick: () => void;
};

export const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <>
      <button onClick={onClick} className={`p-2 fixed top-2 right-5`}>
        x
      </button>
    </>
  );
};

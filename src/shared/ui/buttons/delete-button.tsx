type DeleteButtonProps = {
  onClick: () => void;
};

export const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        'flex justify-start text-[14px] text-gray-dark p-[10px] pt-0 h-fit'
      }>
      x
    </button>
  );
};

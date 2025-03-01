type CardInOrderProps = {
  name: string;
  price: number;
};

export const CardInOrder = ({ name, price }: CardInOrderProps) => {
  return (
    <div className={'flex justify-between'}>
      <span>{name.split(' ').slice(0, 3).join(' ')}</span>
      <span>{price}</span>
    </div>
  );
};

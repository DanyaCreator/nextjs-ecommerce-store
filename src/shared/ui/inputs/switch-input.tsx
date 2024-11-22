export const SwitchInput = () => {
  return (
    <>
      <label
        htmlFor='check'
        className={
          'bg-gray w-[33.33px] h-[20px] relative rounded-[30px] cursor-pointer'
        }>
        <input type='checkbox' id='check' className={'sr-only peer'} />
        <span
          className={
            'w-[13.33px] h-[13.33px] bg-white rounded-full shadow-inner-xl absolute top-[3.33px] left-[3.33px] peer-checked:left-[16px] peer-checked:bg-gray-dark transition-all duration-200'
          }
        />
      </label>
    </>
  );
};

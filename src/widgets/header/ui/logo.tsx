import { allertaStencil } from '@/shared/assets/fonts';

export const Logo = () => {
  return (
    <div className='flex w-[158px]'>
      <span className={`${allertaStencil.className} text-logo text-accent`}>
        S
      </span>
      <span className={`${allertaStencil.className} text-logo`}>
        HOPPE
      </span>
    </div>
  );
};

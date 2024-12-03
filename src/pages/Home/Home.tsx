import { MainSwiper } from '@/widgets/main-swiper';
import { Card } from '@/entities/card';
import { dmSans } from '@/shared/assets/fonts';
import { linkTexts, tempCards, titles } from '@/shared/assets/texts';

export const Home = () => {
  return (
    <main className='container'>
      <MainSwiper />
      <section className='w-full mt-16 flex flex-col gap-[39px]'>
        <div className='flex justify-between items-center'>
          <h1 className={dmSans.className}>{titles.shopTheLatest}</h1>
          <h4
            className={`${dmSans.className} text-accent hover:text-black cursor-pointer transition`}>
            {linkTexts.viewAll}
          </h4>
        </div>
        <div className='w-full grid grid-cols-3 grid-rows-2 gap-x-[54px] gap-y-[84px]'>
          {tempCards.map((c, i) => (
            <Card
              key={i}
              title={c.name}
              price={c.price}
              sale={c.sale}
              onSale={c.onSale}
              inStock={c.inStock}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

import Image from 'next/image';

export const Story = () => {
  return (
    <main className={'flex mt-[96px] justify-center'}>
      <div className={'w-[650px] flex flex-col gap-[40px] items-center'}>
        <h1>About</h1>
        <h3>Who we are and why we do what we do!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          eaque eligendi est itaque iusto nobis porro quisquam soluta!
          Asperiores debitis esse, facere magni perferendis quae rem soluta? Ab,
          aliquid animi asperiores consequatur consequuntur corporis cupiditate
          debitis doloremque ea ex excepturi fuga harum in ipsa ipsam ipsum
          iusto minus neque nobis numquam pariatur quaerat quasi quia quis quos
          recusandae reiciendis repellendus sapiente similique, voluptates.
          Accusamus atque culpa illo incidunt recusandae vero. Accusantium
          corporis dolorem facere in laborum magni necessitatibus, nulla officia
          repellendus voluptas? Amet aut, dolor ducimus ea iure libero maiores
          placeat reprehenderit vero. Aut consequuntur est, nulla reprehenderit
          velit voluptas!
        </p>
        <div className={'flex flex-col gap-[40px]'}>
          <h2>Top trends</h2>
          <div className={'w-[670px] h-[300px] relative'}>
            <Image
              src='/story-img-1.jpg'
              alt='story-image'
              layout='fill'
              objectFit='cover'
              objectPosition='50% 20%'
              style={{ borderRadius: '8px' }}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            cupiditate deserunt eius facere fuga officiis omnis quas totam
            voluptatibus! Aperiam asperiores autem consequatur distinctio
            doloremque error explicabo fugit hic illo in iste iure, placeat
            quibusdam quis quo quod reiciendis suscipit ullam vero vitae!
            Aperiam ducimus est illo iste quibusdam voluptatum?
          </p>
          <ul className={'flex flex-col gap-[10px] list-disc list-inside pl-7'}>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
          </ul>
        </div>
        <div className={'flex flex-col gap-[40px]'}>
          <h2>Produced with care</h2>
          <div className={'w-[670px] h-[300px] relative'}>
            <Image
              src='/story-img-2.jpg'
              alt='story-image'
              layout='fill'
              objectFit='cover'
              objectPosition='50% 20%'
              style={{ borderRadius: '8px' }}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
            corporis eius nam nisi numquam odit quaerat quo rerum voluptate?
            Alias at cupiditate delectus dicta distinctio dolorem doloremque
            doloribus dolorum earum eos error est ex facere facilis harum hic,
            illum in ipsam iure minus molestiae nostrum nulla numquam odit
            perspiciatis placeat provident quaerat qui quidem quod recusandae
            repellendus repudiandae soluta tenetur velit voluptate voluptatem!
            Alias dicta doloremque libero perspiciatis quasi. Corporis
            cupiditate, dignissimos dolorem, earum est et facere ipsa iusto
            labore maiores necessitatibus optio quia quisquam saepe sed soluta
            voluptatem? Aliquid autem minima qui sunt veritatis, vero.
            Reprehenderit rerum saepe voluptatibus?
          </p>
        </div>
      </div>
    </main>
  );
};

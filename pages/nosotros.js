import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/nosotros.module.css';

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, GuitarLA, tienda de música"
    >
      <main className="contenedor">
          <h1 className="heading">Nosotros</h1>

          <div className={styles.contenido}>
              <Image src="/img/nosotros.jpg" width={990} height={700} alt="imagen sobre nosotros"/>
            <div>

              <p>Aliquam justo erat, posuere non pretium sit amet, faucibus at tortor. Fusce eu neque et nibh laoreet rutrum et non urna. 
                Donec mattis mauris ac vestibulum commodo. Vivamus mi turpis, rutrum quis elit nec, malesuada sollicitudin libero. 
                Vivamus hendrerit augue id ante venenatis viverra.Donec sit amet porta lacus, quis suscipit tellus.</p>
              <p>
              Nunc et dolor tincidunt, euismod ex vitae, semper dui. 
              Ut egestas libero vitae leo fringilla sagittis. 
              Pellentesque vehicula egestas velit eu pulvinar. Curabitur vel nunc lectus.
               Maecenas convallis laoreet ligula in pharetra. Quisque sit amet urna ultrices, dapibus purus ut, ornare diam. Donec non dictum tortor. 
              Mauris auctor in diam ut auctor.
              </p>

            </div>
          </div>
      </main>
    </Layout>
  )
}

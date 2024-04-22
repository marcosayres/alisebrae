// pages/index.tsx

import Head from "next/head";
import Image from "next/image";
import styles from "../public/css/styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-books Agentes Locais de Inovação - Sebrae 2023/2024</title>
        <meta
          name="description"
          content="E-books para Agentes Locais de Inovação do Sebrae"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.banner}>
        {/* Utilize a tag Image para renderizar a imagem */}
        <Image
          src="/assets/images/banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          {/* Utilize a tag Image para renderizar a imagem */}
          <Image
            src="/assets/images/educacao.png"
            alt="Capa do E-book 1"
            width={200}
            height={200}
          />
          <div className={styles.cardContent}></div>
          <div className={styles.downloadLink}>
            <a href="/pdfs/Caderno_de_Inovacao_Educacao_Empreendedora.pdf">
              Visualizar e Baixar PDF
            </a>
          </div>
        </div>

        <div className={styles.card}>
          {/* Utilize a tag Image para renderizar a imagem */}
          <Image
            src="/assets/images/digital.png"
            alt="Capa do E-book 2"
            width={200}
            height={200}
          />
          <div className={styles.cardContent}></div>
          <div className={styles.downloadLink}>
            <a href="/pdfs/Caderno_de_Inovacao_Transformacao_Digital.pdf">
              Visualizar e Baixar PDF
            </a>
          </div>
        </div>

        <div className={styles.card}>
          {/* Utilize a tag Image para renderizar a imagem */}
          <Image
            src="/assets/images/geografica.png"
            alt="Capa do E-book 3"
            width={200}
            height={200}
          />
          <div className={styles.cardContent}></div>
          <div className={styles.downloadLink}>
            <a href="/pdfs/Caderno_de_Inovacao_Geografica.pdf">
              Visualizar e Baixar PDF
            </a>
          </div>
        </div>

        <div className={styles.card}>
          {/* Utilize a tag Image para renderizar a imagem */}
          <Image
            src="/assets/images/produtividade.png"
            alt="Capa do E-book 4"
            width={200}
            height={200}
          />
          <div className={styles.cardContent}></div>
          <div className={styles.downloadLink}>
            <a href="/pdfs/Caderno_de_Inovacao_Produtividade.pdf">
              Visualizar e Baixar PDF
            </a>
          </div>
        </div>

        <div className={styles.card}>
          {/* Utilize a tag Image para renderizar a imagem */}
          <Image
            src="/assets/images/rural.png"
            alt="Capa do E-book 5"
            width={200}
            height={200}
          />
          <div className={styles.cardContent}></div>
          <div className={styles.downloadLink}>
            <a href="/pdfs/Caderno_de_Inovacao_Rural.pdf">
              Visualizar e Baixar PDF
            </a>
          </div>
        </div>

        {/* Outros cards aqui */}
      </div>
    </div>
  );
}

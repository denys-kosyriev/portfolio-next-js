import { FC } from 'react';
import Head from "next/head";

//libs
import cn from "classnames";

// components
import { Sidebar } from "@/components/common/Sidebar/Sidebar";

// assets
import styles from './Home.module.scss';
import { dataPortfolio } from "@/utils/data";

export const Home: FC = () => {

  return (
    <>
      <Head>
        <title>{dataPortfolio.name}</title>
      </Head>
      <Sidebar />
      <main className={styles.home}>
        <section className={styles.description}>

        </section>
      </main>
    </>
  )
}

export default Home;
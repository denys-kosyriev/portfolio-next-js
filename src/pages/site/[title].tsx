import React, { NextPage } from 'next';
import { useRouter } from "next/router";

// assets
import styles from './Site.module.scss';
import { dataSites } from "@/utils/data-sites";

type SiteData = {
  title: string;
  url: string;
  link: string;
  technology: string;
  description: string[];
  externalScreenshot: string;
  screenshotsIn: string[];
  // Add other properties as needed
};

const Site: NextPage = () => {

  const { query } = useRouter()

  let arrSites = Object.values(dataSites);

  let objSite: SiteData | undefined;

  objSite = arrSites.find(site => site.url === query.title);

  return (
    <main className={styles.site}>
      <section className={styles.descriptionSite}>
        <div className='container'>
          <a href='/' className={styles.backButton}>
            <div></div>
          </a>
          {objSite?.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className={styles.imagesSite}>
        <div className='container'>
          {objSite?.screenshotsIn.map((img, index) => (
            <img src={img} alt='' key={index} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Site;


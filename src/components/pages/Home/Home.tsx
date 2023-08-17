import React, { FC, useEffect, useState } from 'react';
import Head from "next/head";

// libs
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// components
import { BlockDropDownWindow } from "@/components/common/BlockDropDownWindow/BlockDropDownWindow";

// assets
import styles from './Home.module.scss';
import { dataAboutMe } from "@/utils/data-about-me";
import { dataSites } from "@/utils/data-sites";

interface HomeProps {
  delayShowWindowF: (
    activeButton: boolean,
    setActiveButton: React.Dispatch<React.SetStateAction<boolean>>,
    setShowWindow: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

export const Home: FC<HomeProps> = ({ delayShowWindowF }) => {

  let arrSites = Object.values(dataSites);
  let newArrSites = [...arrSites];

  const [selectValue, setSelectValue] = useState('all');
  const [changeArrSites, setChangeArrSites] = useState(newArrSites);
  const [activeButtonAboutMe, setActiveButtonAboutMe] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [activeButtonDescriptionSite, setActiveButtonDescriptionSite] = useState(false);
  const [showDescriptionSite, setShowDescriptionSite] = useState(false);

  useEffect(() => {
    newArrSites.length = 0;
    arrSites.map(site => {
      if (selectValue === site.technology || selectValue === 'all') {
        newArrSites.push(site)
        setChangeArrSites(newArrSites)
      }
    })
  }, [selectValue])

  const arrTech: string[] = [];

  arrSites.map(site => {
    arrTech.push(site.technology);
  });

  const setTech: Set<string> = new Set(arrTech);
  const arrTechUnique: string[] = Array.from(setTech);

  return (
    <>
      <Head>
        <title>Kosyriev Denys</title>
      </Head>
      <main className={styles.home}>
        <section className={styles.aboutMe}>
          <div className='container'>
            <BlockDropDownWindow
              titleButton='Про мене'
              componentClass='aboutMe'
              activeButton={activeButtonAboutMe}
              setActiveButton={setActiveButtonAboutMe}
              showWindow={showAboutMe}
              setShowWindow={setShowAboutMe}
              delayShowWindowF={delayShowWindowF}
            >
              <p>{dataAboutMe.aboutMe}</p>
            </BlockDropDownWindow>
          </div>
        </section>
        <section className={styles.sites}>
          <div className='container'>
            <h2>Мої роботи</h2>
            <h3>Вибрати технологію</h3>
            <select
              name='sites'
              id='sites'
              onChange={(e) => setSelectValue(e.target.value)}
              value={selectValue}
            >
              <option value='all'>Все разом</option>
              {arrTechUnique.map((tech, index) => (
                <option
                  value={tech}
                  key={index}
                >
                  {tech}
                </option>
              ))}
            </select>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              className='slider-sites'
            >
              {changeArrSites.map((site, index) => (
                <SwiperSlide key={index}>
                  <h2>{site.title}</h2>
                  <div className='technology'>
                    <p>Технологія:</p>
                    <p>{site.technology}</p>
                  </div>
                  <a href={site.link}>Посилання на сайт</a>
                  <BlockDropDownWindow
                    titleButton='Опис'
                    componentClass='aboutMe'
                    activeButton={activeButtonDescriptionSite}
                    setActiveButton={setActiveButtonDescriptionSite}
                    showWindow={showDescriptionSite}
                    setShowWindow={setShowDescriptionSite}
                    delayShowWindowF={delayShowWindowF}
                  >
                    {[site.description].map((paragraph, index) => (
                      <p key={index}>
                        {paragraph}
                      </p>
                    ))}
                  </BlockDropDownWindow>
                  <div className='screenshots'>
                    <div className='left'>
                      <div className='screenshot'>
                        <img src={site.screenshot1} alt='' />
                      </div>
                      <div className='screenshot'>
                        <img src={site.screenshot2} alt='' />
                      </div>
                    </div>
                    <div className='screenshot'>
                      <img src={site.screenshot3} alt='' />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>
    </>
  )
}


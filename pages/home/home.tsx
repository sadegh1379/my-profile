import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Fade } from "react-awesome-reveal"
import {
  VFooter,
  VMainHeader,
  VMenuBar,
  VToolsTech
} from '../../utils'
import {
  chevronDown,
  sadeghLogo_2
} from '../../assets'
import styles from './home.module.scss'
import dynamic from 'next/dynamic'

const CrispWithNoSSR = dynamic(
  () => import('../../utils/crisp'),
  { ssr: false }
)

export default function VHome() {

  // useEffect( () => {
  //   window.$crisp = [];
  //   window.CRISP_WEBSITE_ID = '3983abc1-02e8-4693-88a2-56310ea775a0';
  //   (function () {
  //     const d = document;
  //     const s = d.createElement('script');
  //     s.src = 'https://client.crisp.chat/l.js';
  //     s.async = true;
  //     d.getElementsByTagName('head')[0].appendChild(s);
  //   })();
  // },[])
  return (
    <div className={styles.homeContainer}>
      <CrispWithNoSSR />
      <Head>
        <title>Sadegh Akbari</title>
        <meta name="description" content="This is my portfolio page. The purpose of this page is to introduce my person, my coding style, and show off a little bit of my web development skills." />
        <meta name="author" content="Sadegh Akbari"/>
        <meta name="keywords" content="Sadegh, Akbari, Portfolio, Frontend"/>
        <meta property="og:image" content="https://www.khudziec.com/portfolioPage.png" key="ogimage"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="Home"/>
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introduction}>
            <VMainHeader/>
            <div className={styles.profilePicture}>
              <Image
                alt="Profile picture of Karolina Hudziec."
                src={sadeghLogo_2}/>
            </div>
          </div>
          <div className={styles.swipeDownIcon}>
            <Image
              alt="Chevron down icon."
              src={chevronDown}
              width="40px"
              height="15px"/>
          </div>
        </div>
        <div className={styles.workHistory}>
          <div className={styles.linkBox}>
            <Fade>
              <h1 className={styles.linkBoxTitle}>Work<br/>History</h1>
              <h2 className={styles.linkBoxTextContent}>Here you can find out more about the companies I've collaborated with, projects I've been part of and the technologies I use every day.</h2>
              <Link href={`/work/work`}>
                <a className={styles.linkBoxButton}>
                  Check out my work history
                </a>
              </Link>
            </Fade>
          </div>
          <div className={styles.workHistoryBackground}/>
        </div>
        <div className={styles.technologiesAndTools}>
          <Fade>
            <h1>Technologies & Tools I work with</h1>
            <VToolsTech/>
          </Fade>
        </div>
        <div className={styles.personalProjects}>
            <div className={styles.linkBox}>
              <Fade>
                <h1 className={styles.linkBoxTitle}>About me</h1>
                <h2 className={styles.linkBoxTextContent}>Here you can find out more about me, my hobbies and personal project I'm currently working on.</h2>
                {/* <Link href={`/about/about`}> */}
                  <a className={styles.linkBoxButton}>
                    Get to know more about me
                  </a>
                {/* </Link> */}
              </Fade>
            </div>
          <div className={styles.personalProjectsBackground}/>
        </div>
      </div>
      <VFooter/>
    </div>
  )
}

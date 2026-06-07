import { FaPlay } from 'react-icons/fa'
import ReservationForm from '../../components/ReservationForm/ReservationForm'
import styles from './About.module.css'

import processTopIcon from '@assets/images/process-top-icon.png'
import processBottomIcon from '@assets/images/process-bottom-icon.png'

import ourStory from '@assets/images/our-story.jpg'
import carsonHugn from '@assets/images/carson-hugn.jpg'
import janeCooper from '@assets/images/jane-cooper.jpg'
import sliceImg from '@assets/images/slice.jpg'
import bakeImg from '@assets/images/bake.jpg'
import pickledImg from '@assets/images/pickled.jpg'

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="section-wrapper">
          <div className={styles.heroContent}>
            <h1>Who We Are</h1>
            <p>The most important thing for us is to give you the comfortable dining experience</p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className={styles.story}>
        <div className="section-wrapper">
          <div className={styles.twoCol}>
            <div className={styles.content}>
              <h2>Our Story</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus
                imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.
              </p>
            </div>
            <div className={styles.imgCol}>
              <img src={ourStory} alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className={styles.team}>
        <div className="section-wrapper">
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.intro}>
                <h4>Restaurant Manager</h4>
                <p>Carson Hugn</p>
                <img src={carsonHugn} alt="Carson Hugn" />
              </div>
              <div className={`${styles.bodyTxt} ${styles.rightSide}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque
                  ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.
                </p>
              </div>
            </div>
            <div className={styles.teamMember}>
              <div className={`${styles.bodyTxt} ${styles.rightSide}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque
                  ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.
                </p>
              </div>
              <div className={styles.intro}>
                <h4>Executive Chef</h4>
                <p>Jane Cooper</p>
                <img src={janeCooper} alt="Jane Cooper" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELICIOUS SECTION */}
      <section className={styles.delicious}>
        <div className={styles.deliciousContent}>
          <h2>It looks delicious</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className={styles.playBtn} aria-label="Play video">
            <FaPlay />
          </button>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <img src={processTopIcon} alt="" className={styles.processTopIcon} aria-hidden="true" />
        <img src={processBottomIcon} alt="" className={styles.processBottomIcon} aria-hidden="true" />
        <div className="section-wrapper">
          <div className={styles.processHeader}>
            <h2>Sophisticated Process</h2>
          </div>
          <div className={styles.twoCol}>
            <div className={styles.imgCol}>
              <img src={sliceImg} alt="Slice" />
            </div>
            <div className={`${styles.content} ${styles.processPad}`}>
              <h3>01. Slice</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus
                imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis
                pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam
                etiam.
              </p>
            </div>
          </div>
          <div className={styles.processInline}>
            <div className={styles.processLeft}>
              <div className={`${styles.content} ${styles.processPad}`}>
                <h3>03. Bake</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.</p>
              </div>
              <div className={styles.imgCol}>
                <img src={bakeImg} alt="Bake" />
              </div>
            </div>
            <div className={styles.processRight}>
              <div className={styles.imgCol}>
                <img src={pickledImg} alt="Pickled" />
              </div>
              <div className={`${styles.content} ${styles.processPad}`}>
                <h3>02. Pickled</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReservationForm />
    </>
  )
}

export default About

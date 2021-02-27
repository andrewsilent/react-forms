import React from 'react';
import styles from './Styleguide.module.scss';

const Styleguide = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.item7}>
        <div className={styles.margins}>
          <h4 className={styles.blockSubtitle}>Titles & Headings</h4>
        </div>
        <div className={styles.margins}>
          <h1>Heading h1 - 600 3rem</h1>
          <h2>Heading h2 - 500 2.5rem</h2>
          <h3>Heading h3 - 500 2rem</h3>
          <h4>Heading h4 - 500 1.5rem</h4>
          <h5>Heading h5 - 500 1.25rem</h5>
          <h6>Heading h6 - 500 1rem</h6>
        </div>
      </div>
      <div className={styles.item5}>
        <div className={styles.margins}>
          <h4 className={styles.blockSubtitle}>Body text</h4>
        </div>
        <div className={styles.margins}>
          <p className={styles.margins}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            ratione quae quis maxime dolor, aliquid alias adipisci aspernatur,
            autem corporis nam dolore nesciunt eveniet eligendi magnam aperiam
            minima! Velit omnis eveniet ipsa eligendi, provident ducimus veniam
            unde fugit nemo in cupiditate pariatur voluptatum deleniti
            consectetur.
          </p>
        </div>
        <div className={styles.margins}>
          <p className={styles.margins}>
            <b>Bold</b> <i>Italic</i> <a href='#'>Hyperlink</a>
          </p>
        </div>
        <div className={styles.margins}>
          <ul className={styles.ol}>
            <li>Unordered list</li>
            <li>Unordered list</li>
          </ul>
        </div>
        <div className={styles.margins}>
          <ol className={styles.ol}>
            <li>Ordered list</li>
            <li>Ordered list</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Styleguide;

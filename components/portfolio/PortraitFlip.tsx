'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './PortraitFlip.module.css';

export function PortraitFlip() {
  const [revealed, setRevealed] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  return <button className={styles.tile} type="button" aria-label={revealed ? 'Show SHY monogram' : 'Reveal photo of Shing Him Yip'} aria-pressed={revealed} onClick={() => setRevealed(value => !value)}>
    <span className={styles.inner} data-revealed={revealed}>
      <span className={styles.front} aria-hidden={revealed}>
        <span className={styles.monogram}>SH<br />Y.</span>
        <span className={styles.caption}>IDEAS → REALITY</span>
        <span className={styles.hint}>CLICK TO MEET ME <span aria-hidden="true">↗</span></span>
      </span>
      <span className={styles.back} aria-hidden={!revealed}>
        {imageFailed ? <span className={styles.fallback}>Photo unavailable</span> : <Image
          className={styles.photo} src="/him-removebg.png" alt="Shing Him Yip"
          width={666} height={750} sizes="280px" onError={() => setImageFailed(true)}
        />}
        <span className={styles.backCaption}>SHING HIM YIP · FLIP BACK <span aria-hidden="true">↗</span></span>
      </span>
    </span>
  </button>;
}

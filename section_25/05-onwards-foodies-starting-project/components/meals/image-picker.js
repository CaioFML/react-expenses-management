'use client';

import { useRef } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
  const imageInput = useRef()

  const handlePickImage = () => {
    imageInput.current.click();
  };

  return (
    <div className={classes.picker}>
      <lablel htmlFor={name}>{label}</lablel>
      <div className={classes.controls}>
        <input className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={name} ref={imageInput} />
        <button className={classes.button} type="button" onClick={handlePickImage}>Pick an image</button>
      </div>
    </div>
  );
}
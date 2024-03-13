'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState()
  const imageInput = useRef()

  const handlePickImage = () => {
    imageInput.current.click();
    handleImageChange();
  };

  const handleImageChange = () => {
    const file = imageInput.current.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPickedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPickedImage(null);
    }
  }

  return (
    <div className={classes.picker}>
      <lablel htmlFor={name}>{label}</lablel>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="Picked image by user" fill />}
        </div>
        <input className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={name} ref={imageInput} onChange={handleImageChange} required />
        <button className={classes.button} type="button" onClick={handlePickImage}>Pick an image</button>
      </div>
    </div>
  );
}
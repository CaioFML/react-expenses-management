'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(formData) {
  const mealData = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  };

  if (
    isInvalidText(mealData.title) ||
    isInvalidText(mealData.summary) ||
    isInvalidText(mealData.instructions) ||
    isInvalidText(mealData.image) ||
    isInvalidText(mealData.creator) ||
    isInvalidText(mealData.creator_email) ||
    !mealData.creator_email.includes('@') ||
    !mealData.image ||
    !mealData.image.size === 0
  ) {
    throw new Error('Invalid input');
  }

  await saveMeal(mealData);
  redirect('/meals');
}
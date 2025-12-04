export interface Photo {
  id: number;
  src: string;
  caption: string;
  chapter: 1 | 2 | 3;
  location?: string;
  date?: string;
}

export const photos: Photo[] = [
  // Chapter 1: The Beginning (20 photos)
  { id: 1, src: '/assets/images/photo-01.jpg', caption: 'Where it all began', chapter: 1, location: 'First Meeting', date: '2024' },
  { id: 2, src: '/assets/images/photo-02.jpg', caption: 'First glances', chapter: 1 },
  { id: 3, src: '/assets/images/photo-03.jpg', caption: 'Stolen moments', chapter: 1 },
  { id: 4, src: '/assets/images/photo-04.jpg', caption: 'Early days', chapter: 1 },
  { id: 5, src: '/assets/images/photo-05.jpg', caption: 'Getting to know you', chapter: 1 },
  { id: 6, src: '/assets/images/photo-06.jpg', caption: 'New adventures', chapter: 1 },
  { id: 7, src: '/assets/images/photo-07.jpg', caption: 'Learning together', chapter: 1 },
  { id: 8, src: '/assets/images/photo-08.jpg', caption: 'First trip', chapter: 1 },
  { id: 9, src: '/assets/images/photo-09.jpg', caption: 'Morning coffee', chapter: 1 },
  { id: 10, src: '/assets/images/photo-10.jpg', caption: 'Sunset walks', chapter: 1 },
  { id: 11, src: '/assets/images/photo-11.jpg', caption: 'Laughter', chapter: 1 },
  { id: 12, src: '/assets/images/photo-12.jpg', caption: 'Quiet moments', chapter: 1 },
  { id: 13, src: '/assets/images/photo-13.jpg', caption: 'City lights', chapter: 1 },
  { id: 14, src: '/assets/images/photo-14.jpg', caption: 'Weekend vibes', chapter: 1 },
  { id: 15, src: '/assets/images/photo-15.jpg', caption: 'Discovering us', chapter: 1 },
  { id: 16, src: '/assets/images/photo-16.jpg', caption: 'Hand in hand', chapter: 1 },
  { id: 17, src: '/assets/images/photo-17.jpg', caption: 'Sweet beginnings', chapter: 1 },
  { id: 18, src: '/assets/images/photo-18.jpg', caption: 'Finding home', chapter: 1 },
  { id: 19, src: '/assets/images/photo-19.jpg', caption: 'First kiss', chapter: 1 },
  { id: 20, src: '/assets/images/photo-20.jpg', caption: 'Falling deeper', chapter: 1 },
  
  // Chapter 2: Moments In Between (20 photos)
  { id: 21, src: '/assets/images/photo-21.jpg', caption: 'Everyday magic', chapter: 2 },
  { id: 22, src: '/assets/images/photo-22.jpg', caption: 'Rainy days', chapter: 2 },
  { id: 23, src: '/assets/images/photo-23.jpg', caption: 'Cozy nights', chapter: 2 },
  { id: 24, src: '/assets/images/photo-24.jpg', caption: 'Dancing together', chapter: 2 },
  { id: 25, src: '/assets/images/photo-25.jpg', caption: 'Simple joys', chapter: 2 },
  { id: 26, src: '/assets/images/photo-26.jpg', caption: 'Summer days', chapter: 2 },
  { id: 27, src: '/assets/images/photo-27.jpg', caption: 'Beach memories', chapter: 2 },
  { id: 28, src: '/assets/images/photo-28.jpg', caption: 'Mountain views', chapter: 2 },
  { id: 29, src: '/assets/images/photo-29.jpg', caption: 'Road trips', chapter: 2 },
  { id: 30, src: '/assets/images/photo-30.jpg', caption: 'Late night talks', chapter: 2 },
  { id: 31, src: '/assets/images/photo-31.jpg', caption: 'Morning cuddles', chapter: 2 },
  { id: 32, src: '/assets/images/photo-32.jpg', caption: 'Cooking together', chapter: 2 },
  { id: 33, src: '/assets/images/photo-33.jpg', caption: 'Silly moments', chapter: 2 },
  { id: 34, src: '/assets/images/photo-34.jpg', caption: 'Shared dreams', chapter: 2 },
  { id: 35, src: '/assets/images/photo-35.jpg', caption: 'Quiet happiness', chapter: 2 },
  { id: 36, src: '/assets/images/photo-36.jpg', caption: 'Weekend escapes', chapter: 2 },
  { id: 37, src: '/assets/images/photo-37.jpg', caption: 'Golden hour', chapter: 2 },
  { id: 38, src: '/assets/images/photo-38.jpg', caption: 'Celebrations', chapter: 2 },
  { id: 39, src: '/assets/images/photo-39.jpg', caption: 'Making memories', chapter: 2 },
  { id: 40, src: '/assets/images/photo-40.jpg', caption: 'Growing together', chapter: 2 },
  
  // Chapter 3: You & Me, Now (21 photos)
  { id: 41, src: '/assets/images/photo-41.jpg', caption: 'Our present', chapter: 3 },
  { id: 42, src: '/assets/images/photo-42.jpg', caption: 'Today and always', chapter: 3 },
  { id: 43, src: '/assets/images/photo-43.jpg', caption: 'This moment', chapter: 3 },
  { id: 44, src: '/assets/images/photo-44.jpg', caption: 'Right now', chapter: 3 },
  { id: 45, src: '/assets/images/photo-45.jpg', caption: 'Recent adventures', chapter: 3 },
  { id: 46, src: '/assets/images/photo-46.jpg', caption: 'New traditions', chapter: 3 },
  { id: 47, src: '/assets/images/photo-47.jpg', caption: 'Current favorites', chapter: 3 },
  { id: 48, src: '/assets/images/photo-48.jpg', caption: 'Latest smiles', chapter: 3 },
  { id: 49, src: '/assets/images/photo-49.jpg', caption: 'Fresh memories', chapter: 3 },
  { id: 50, src: '/assets/images/photo-50.jpg', caption: 'Modern love', chapter: 3 },
  { id: 51, src: '/assets/images/photo-51.jpg', caption: 'Us today', chapter: 3 },
  { id: 52, src: '/assets/images/photo-52.jpg', caption: 'Building dreams', chapter: 3 },
  { id: 53, src: '/assets/images/photo-53.jpg', caption: 'Our journey', chapter: 3 },
  { id: 54, src: '/assets/images/photo-54.jpg', caption: 'Together always', chapter: 3 },
  { id: 55, src: '/assets/images/photo-55.jpg', caption: 'Forever us', chapter: 3 },
  { id: 56, src: '/assets/images/photo-56.jpg', caption: 'Endless love', chapter: 3 },
  { id: 57, src: '/assets/images/photo-57.jpg', caption: 'Perfect moments', chapter: 3 },
  { id: 58, src: '/assets/images/photo-58.jpg', caption: 'Beautiful now', chapter: 3 },
  { id: 59, src: '/assets/images/photo-59.jpg', caption: 'Present joy', chapter: 3 },
  { id: 60, src: '/assets/images/photo-60.jpg', caption: 'This life', chapter: 3 },
  { id: 61, src: '/assets/images/photo-61.jpg', caption: 'You and me', chapter: 3 }
];

export interface GoldenMoment {
  photoId: number;
  message: string;
  title: string;
}

export const goldenMoments: GoldenMoment[] = [
  { 
    photoId: 7, 
    title: 'The Realization',
    message: 'This was the day I realized I never wanted to let you go.' 
  },
  { 
    photoId: 19, 
    title: 'Your Smile',
    message: 'On this day, you smiled and the whole world softened.' 
  },
  { 
    photoId: 28, 
    title: 'Forever Feels',
    message: 'This moment taught me what forever feels like.' 
  },
  { 
    photoId: 45, 
    title: 'Our Future',
    message: 'Here, I saw our future in your eyes.' 
  },
  { 
    photoId: 56, 
    title: 'My Always',
    message: 'This is when I knew—you are my always.' 
  }
];

export const getPhotosByChapter = (chapter: 1 | 2 | 3): Photo[] => {
  return photos.filter(photo => photo.chapter === chapter);
};

export const getPhotoById = (id: number): Photo | undefined => {
  return photos.find(photo => photo.id === id);
};

export const isGoldenMoment = (photoId: number): boolean => {
  return goldenMoments.some(gm => gm.photoId === photoId);
};

export const getGoldenMomentByPhotoId = (photoId: number): GoldenMoment | undefined => {
  return goldenMoments.find(gm => gm.photoId === photoId);
};


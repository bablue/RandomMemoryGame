/* eslint-disable  global-require */
export const IMAGE_SET: any[] = [
  require('../assets/imageSet1/adrianna-geo-1rBg5YSi00c-unsplash.jpg'),
  require('../assets/imageSet1/europeana-5TK1F5VfdIk-unsplash.jpg'),
  require('../assets/imageSet1/europeana-LpCq6mjbMPo-unsplash.jpg'),
  require('../assets/imageSet1/europeana-Wiad3DQxUho-unsplash.jpg'),
  require('../assets/imageSet1/joel-filipe-QwoNAhbmLLo-unsplash.jpg'),
  require('../assets/imageSet1/luke-braswell-oYFv-_JKsVk-unsplash.jpg'),
  // require('../assets/imageSet1/birmingham-museums-trust-lhsfeT9WZ9M-unsplash.jpg'),
];

export const NO_OF_TRIALS_PER_LEVEL = 10;
export const QUESTION_SUFFIX_MAPPER = new Map<number,string>([
  [1, "previous"],
  [2, "2nd last"],
  [3, "3rd last"],
  [4, "4th last"],
  [5, "5th last"],
])

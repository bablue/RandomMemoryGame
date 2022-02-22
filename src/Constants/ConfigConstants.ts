import { faAngry, faBarChart, faRegistered, faSnowflake } from "@fortawesome/free-regular-svg-icons";

import { faAirFreshener, faAmbulance, faAppleWhole } from "@fortawesome/free-solid-svg-icons";

/* eslint-disable  global-require */
export const IMAGE_SET: any[] = [
  // require('./../assets/imageSet1/newimages/image(1).png'),
  // require('./../assets/imageSet1/newimages/image(2).png'),
  // // require('./../assets/imageSet1/newimages/image(3).png'),
  // require('./../assets/imageSet1/newimages/image(4).png'),
  // require('./../assets/imageSet1/newimages/image(5).png'),
  // require('./../assets/imageSet1/newimages/image(6).png'),
  // require('./../assets/imageSet1/newimages/image(7).png'),
  faAppleWhole,
  faAirFreshener,
  faAmbulance,
  faAngry,
  faRegistered,
  faBarChart
];

export const ICON_SET: any[] = [
  faSnowflake,
  faAirFreshener,
  faAmbulance,
  faAngry,
  faRegistered,
  faBarChart
]


export const NO_OF_TRIALS_PER_LEVEL = 15;
export const QUESTION_SUFFIX_MAPPER = new Map<number, string>([
  [1, "previous"],
  [2, "2nd last"],
  [3, "3rd last"],
  [4, "4th last"],
  [5, "5th last"],
])

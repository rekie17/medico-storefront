/**
 * Product image URLs from medico.com.sg
 * Maps product handles to Wix static image URLs
 */

const WIX_BASE = "https://static.wixstatic.com/media";

// Image size suffix for high quality
const IMG_SIZE = "/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto";

export const productImages: Record<string, string> = {
  // CPAP/BiPAP Machines
  "yuwell-yh-550-auto-cpap": `${WIX_BASE}/3126dc_8819b5b929034b1f838f41f894fb1ec1~mv2.png${IMG_SIZE}/3126dc_8819b5b929034b1f838f41f894fb1ec1~mv2.png`,
  "yuwell-yh-730-bipap": `${WIX_BASE}/3126dc_f95652f53e52466e8b6280ce3326932c~mv2.png${IMG_SIZE}/3126dc_f95652f53e52466e8b6280ce3326932c~mv2.png`,
  "yuwell-yh-450-auto-cpap": `${WIX_BASE}/3126dc_8819b5b929034b1f838f41f894fb1ec1~mv2.png${IMG_SIZE}/3126dc_8819b5b929034b1f838f41f894fb1ec1~mv2.png`,
  "yuwell-yh-830-bipap": `${WIX_BASE}/3126dc_f95652f53e52466e8b6280ce3326932c~mv2.png${IMG_SIZE}/3126dc_f95652f53e52466e8b6280ce3326932c~mv2.png`,
  "yuwell-yh-825-bipap": `${WIX_BASE}/3126dc_f95652f53e52466e8b6280ce3326932c~mv2.png${IMG_SIZE}/3126dc_f95652f53e52466e8b6280ce3326932c~mv2.png`,
  
  // Oxygen Concentrators
  "yuwell-7f-10-oxygen-concentrator": `${WIX_BASE}/7f8cb3_ba747c903349494286be42e42f549219~mv2.png${IMG_SIZE}/7f8cb3_ba747c903349494286be42e42f549219~mv2.png`,
  "yuwell-7f-5-oxygen-concentrator": `${WIX_BASE}/7f8cb3_ba747c903349494286be42e42f549219~mv2.png${IMG_SIZE}/7f8cb3_ba747c903349494286be42e42f549219~mv2.png`,
  "yuwell-8f-5a-oxygen-concentrator": `${WIX_BASE}/7f8cb3_ba747c903349494286be42e42f549219~mv2.png${IMG_SIZE}/7f8cb3_ba747c903349494286be42e42f549219~mv2.png`,
  "yuwell-9f-5aw-oxygen-concentrator": `${WIX_BASE}/7f8cb3_ba747c903349494286be42e42f549219~mv2.png${IMG_SIZE}/7f8cb3_ba747c903349494286be42e42f549219~mv2.png`,
  
  // Nebulizers
  "yuwell-407a-nebulizer": `${WIX_BASE}/3126dc_8e06713cdfda43fcb3c93ac22b2b81d6~mv2.png${IMG_SIZE}/3126dc_8e06713cdfda43fcb3c93ac22b2b81d6~mv2.png`,
  "yuwell-405a-nebulizer-portable": `${WIX_BASE}/3126dc_0b9a33d245e847fd92bb2e3f2f4cdfd6~mv2.png${IMG_SIZE}/3126dc_0b9a33d245e847fd92bb2e3f2f4cdfd6~mv2.png`,
  "yuwell-m102-mesh-nebulizer": `${WIX_BASE}/3126dc_7cad174281a24258931a5b15f6eef703~mv2.png${IMG_SIZE}/3126dc_7cad174281a24258931a5b15f6eef703~mv2.png`,
  
  // Blood Pressure Monitors
  "yuwell-ye650ar-bp-monitor": `${WIX_BASE}/3126dc_ee2c81fc413e42dd89380c1aec564e3b~mv2.png${IMG_SIZE}/3126dc_ee2c81fc413e42dd89380c1aec564e3b~mv2.png`,
  "yuwell-ye8800ar-wrist-bp-monitor": `${WIX_BASE}/3126dc_76deb0da06424a0f8eea09451a992b57~mv2.png${IMG_SIZE}/3126dc_76deb0da06424a0f8eea09451a992b57~mv2.png`,
  "yuwell-ye630cr-bp-monitor": `${WIX_BASE}/3126dc_447efeff894f44b79cb4b269fb164ea6~mv2.png${IMG_SIZE}/3126dc_447efeff894f44b79cb4b269fb164ea6~mv2.png`,
  "yuwell-ye670a-bp-monitor": `${WIX_BASE}/3126dc_68437388554b4ed8afed62d91ab6c801~mv2.png${IMG_SIZE}/3126dc_68437388554b4ed8afed62d91ab6c801~mv2.png`,
  "yuwell-ye680b-bp-monitor": `${WIX_BASE}/3126dc_4d4e821947684488bccce4685f258e65~mv2.png${IMG_SIZE}/3126dc_4d4e821947684488bccce4685f258e65~mv2.png`,
  "yuwell-ye620b-bp-monitor": `${WIX_BASE}/3126dc_964ceff573a740a392ebf5a75cdb0cec~mv2.png${IMG_SIZE}/3126dc_964ceff573a740a392ebf5a75cdb0cec~mv2.png`,
  "yuwell-ye660d-bp-monitor": `${WIX_BASE}/3126dc_68437388554b4ed8afed62d91ab6c801~mv2.png${IMG_SIZE}/3126dc_68437388554b4ed8afed62d91ab6c801~mv2.png`,
  
  // Thermometers
  "yuwell-yht100-ear-thermometer": `${WIX_BASE}/3126dc_d2cc2022cc9843fda6ea49ab23b861be~mv2.png${IMG_SIZE}/3126dc_d2cc2022cc9843fda6ea49ab23b861be~mv2.png`,
  "yuwell-yht101-ear-thermometer": `${WIX_BASE}/3126dc_d2cc2022cc9843fda6ea49ab23b861be~mv2.png${IMG_SIZE}/3126dc_d2cc2022cc9843fda6ea49ab23b861be~mv2.png`,
  "yuwell-yt-3-infrared-thermometer": `${WIX_BASE}/3126dc_7ca1409c82384caab89686099ec5a424~mv2.jpeg${IMG_SIZE}/3126dc_7ca1409c82384caab89686099ec5a424~mv2.jpeg`,
  "yuwell-yhw-5-infrared-thermometer": `${WIX_BASE}/3126dc_7ca1409c82384caab89686099ec5a424~mv2.jpeg${IMG_SIZE}/3126dc_7ca1409c82384caab89686099ec5a424~mv2.jpeg`,
  "yuwell-yt-1-infrared-thermometer": `${WIX_BASE}/3126dc_7ca1409c82384caab89686099ec5a424~mv2.jpeg${IMG_SIZE}/3126dc_7ca1409c82384caab89686099ec5a424~mv2.jpeg`,
  
  // Pulse Oximeters
  "yuwell-yx102-pulse-oximeter": `${WIX_BASE}/3126dc_db581e6483344e12b3212a61936a51b9~mv2.jpg${IMG_SIZE}/3126dc_db581e6483344e12b3212a61936a51b9~mv2.jpg`,
  "yuwell-yx306-pulse-oximeter": `${WIX_BASE}/3126dc_db581e6483344e12b3212a61936a51b9~mv2.jpg${IMG_SIZE}/3126dc_db581e6483344e12b3212a61936a51b9~mv2.jpg`,
  "yuwell-yx301-pulse-oximeter": `${WIX_BASE}/3126dc_db581e6483344e12b3212a61936a51b9~mv2.jpg${IMG_SIZE}/3126dc_db581e6483344e12b3212a61936a51b9~mv2.jpg`,
  
  // Masks & Accessories
  "yuwell-yf-02-full-face-mask": `${WIX_BASE}/3126dc_b3404ad98e2f4a719a21864b53ebafda~mv2.jpg${IMG_SIZE}/3126dc_b3404ad98e2f4a719a21864b53ebafda~mv2.jpg`,
  "yuwell-yn-02-nasal-mask": `${WIX_BASE}/3126dc_b3404ad98e2f4a719a21864b53ebafda~mv2.jpg${IMG_SIZE}/3126dc_b3404ad98e2f4a719a21864b53ebafda~mv2.jpg`,
  "yuwell-yn-03-nasal-mask": `${WIX_BASE}/3126dc_b3404ad98e2f4a719a21864b53ebafda~mv2.jpg${IMG_SIZE}/3126dc_b3404ad98e2f4a719a21864b53ebafda~mv2.jpg`,
  "yuwell-yp-01-nasal-pillow-mask": `${WIX_BASE}/3126dc_b3404ad98e2f4a719a21864b53ebafda~mv2.jpg${IMG_SIZE}/3126dc_b3404ad98e2f4a719a21864b53ebafda~mv2.jpg`,
  
  // Consumables & Parts
  "yuwell-405a-nebulizer-consumable-set": `${WIX_BASE}/3126dc_0b9a33d245e847fd92bb2e3f2f4cdfd6~mv2.png${IMG_SIZE}/3126dc_0b9a33d245e847fd92bb2e3f2f4cdfd6~mv2.png`,
  "yuwell-bp-arm-cuff": `${WIX_BASE}/7f8cb3_5697d7a806f04ff39cf120880bc82b7e~mv2.jpg${IMG_SIZE}/7f8cb3_5697d7a806f04ff39cf120880bc82b7e~mv2.jpg`,
  "yuwell-cpap-filter-paper": `${WIX_BASE}/3126dc_8819b5b929034b1f838f41f894fb1ec1~mv2.png${IMG_SIZE}/3126dc_8819b5b929034b1f838f41f894fb1ec1~mv2.png`,
  "yuwell-oxygen-concentrator-consumable": `${WIX_BASE}/7f8cb3_ba747c903349494286be42e42f549219~mv2.png${IMG_SIZE}/7f8cb3_ba747c903349494286be42e42f549219~mv2.png`,
  
  // Rentals
  "yuwell-oxygen-concentrator-rental-5l": `${WIX_BASE}/7f8cb3_ba747c903349494286be42e42f549219~mv2.png${IMG_SIZE}/7f8cb3_ba747c903349494286be42e42f549219~mv2.png`,
  "yuwell-bipap-cpap-rental": `${WIX_BASE}/3126dc_f95652f53e52466e8b6280ce3326932c~mv2.png${IMG_SIZE}/3126dc_f95652f53e52466e8b6280ce3326932c~mv2.png`,
};

export function getProductImage(handle: string): string | undefined {
  return productImages[handle];
}

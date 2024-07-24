// ------------ IMAGES ------------ //
import xx59Headphones from "../../public/img/image-category-xx59-headphones.jpg";
import xx99MarkOneHeadphones from "../../public/img/image-category-page-preview-markone.jpg";
import xx99MarkTwoHeadphones from "../../public/img/image-category-xx99-marktwo-headphones.jpg";
import yx1Earphones from "../../public/img/image-category-page-preview-yx1.jpg";
import zx7Speaker from "../../public/img/image-category-zx7-speaker.jpg";
import zx9Speaker from "../../public/img/image-category-zx9-speaker.jpg";
import zx9SpeakerCard from "../../public/img/image-speaker-zx9.png";

// ------------ THUMBNAIL ------------ //
import zx9SpeakerThumbnail from "../../public/img/image-category-thumbnail-speakers.png";
import xx99MarkOneHeadphonesThumbnail from "../../public/img/image-category-thumbnail-headphones.png";
import yx1EarphonesThumbnail from "../../public/img/image-category-thumbnail-earphones.png";

// ------------ GALERY & PICS ------------ //
import MobileZx7SpeakerCard from "../../public/img/mobile-image-speaker-zx7.jpg";
import TabletZx7SpeakerCard from "../../public/img/tablet-image-speaker-zx7.jpg";

import TabletYx1EarphonesGalery from "../../public/img/tablet-earphones-yx1.jpg";


import xx59galery1 from "../../public/img/xx-59-image-gallery-1.jpg";
import xx59galery2 from "../../public/img/xx-59-image-gallery-2.jpg";
import xx59galery3 from "../../public/img/xx-59-image-gallery-3.jpg";
import TabletXx59 from "../../public/img/tablet-xx59.jpg";

import xxMarkOneGalery1 from "../../public/img/xx99markone-image-gallery-1.jpg";
import xxMarkOneGalery2 from "../../public/img/xx99markone-image-gallery-2.jpg";
import xxMarkOneGalery3 from "../../public/img/xx99markone-image-gallery-3.jpg";

import xxMarkTwoGalery1 from "../../public/img/xx99marktwo-image-gallery-1.jpg";
import xxMarkTwoGalery2 from "../../public/img/xx99marktwo-image-gallery-2.jpg";
import xxMarkTwoGalery3 from "../../public/img/xx99marktwo-image-gallery-3.jpg";

import yx1Galery1 from "../../public/img/yx1-image-gallery-1.jpg";
import yx1Galery2 from "../../public/img/yx1-image-gallery-2.jpg";
import yx1Galery3 from "../../public/img/yx1-image-gallery-3.jpg";

import zx7Galery1 from "../../public/img/zx7-image-gallery-1.jpg";
import zx7Galery2 from "../../public/img/zx7-image-gallery-2.jpg";
import zx7Galery3 from "../../public/img/zx7-image-gallery-3.jpg";

import zx9Galery1 from "../../public/img/zx9-image-gallery-1.jpg";
import zx9Galery2 from "../../public/img/zx9-image-gallery-2.jpg";
import zx9Galery3 from "../../public/img/zx9-image-gallery-3.jpg";

import { ReactElement, createContext } from "react";
import { v4 as uuidv4 } from "uuid";



interface Props {
  children: ReactElement | ReactElement[];
}

const bbdd = {
  items: [
    {
      id: 1,
      quantity: 1,
      path: "/headphones/xx59",
      category: "Headphones",
      name: "XX59 Headphones",
      src: xx59Headphones,
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      feature:
        "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
      secondFeature:
        "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
      price: 899,
      box: [
        { stock: "1x", element: "Headphone Unit" },
        { stock: "2x", element: "Replacement Earcups" },
        { stock: "1x", element: "User Manual" },
        { stock: "1x", element: "3.5mm 5m Audio Cable" },
      ],
      galery: [
        { id: uuidv4(), src: xx59galery1 },
        { id: uuidv4(), src: xx59galery2 },
        { id: uuidv4(), src: xx59galery3 },
        { id: uuidv4(), src: TabletXx59 },
      ]
    },
    {
      id: 2,
      quantity: 1,
      path: "/headphones/xx99mark-one",
      category: "Headphones",
      name: "XX99 Mark I Headphones",
      src: xx99MarkOneHeadphones,
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      feature:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
      secondFeature:
        "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
      price: 1750,
      box: [
        { stock: "1x", element: "Headphone Unit" },
        { stock: "2x", element: "Replacement Earcups" },
        { stock: "1x", element: "User Manual" },
        { stock: "1x", element: "3.5mm 5m Audio Cable" },
      ],
      galery: [
        { id: uuidv4(), src: xxMarkOneGalery1 },
        { id: uuidv4(), src: xxMarkOneGalery2 },
        { id: uuidv4(), src: xxMarkOneGalery3 },
      ]
    },
    {
      id: 3,
      quantity: 1,
      path: "/headphones/xx99mark-two",
      category: "Headphones",
      name: "XX99 Mark II Headphones",
      src: xx99MarkTwoHeadphones,
      claim:
        "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound",
      feature:
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
      secondFeature:
        "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
      price: 2999,
      box: [
        { stock: "1x", element: "Headphone Unit" },
        { stock: "2x", element: "Replacement Earcups" },
        { stock: "1x", element: "User Manual" },
        { stock: "1x", element: "3.5mm 5m Audio Cable" },
        { stock: "1x", element: "Travel Bag" },
      ],
      galery: [
        { id: uuidv4(), src: xxMarkTwoGalery1 },
        { id: uuidv4(), src: xxMarkTwoGalery2 },
        { id: uuidv4(), src: xxMarkTwoGalery3 },
      ]
    },
    {
      id: 4,
      quantity: 1,
      path: "/earphones/yx1",
      category: "Earphones",
      name: "YX1 Earphones",
      src: yx1Earphones,
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      feature:
        "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noisolation and truly immersive sound.",
      secondFeature:
        "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design available in an all new white and grey color scheme as well as the popular classic black.",
      price: 599,
      box: [
        { stock: "2x", element: "Earphone Unit" },
        { stock: "6x", element: "Multi-size Earplugs" },
        { stock: "1x", element: "User Manual" },
        { stock: "1x", element: "USB-C Charging Cable" },
        { stock: "1x", element: "Travel Pouch" },
      ],
      galery: [
        { id: uuidv4(), src: yx1Galery1 },
        { id: uuidv4(), src: yx1Galery2 },
        { id: uuidv4(), src: yx1Galery3 },
        { id: uuidv4(), src: TabletYx1EarphonesGalery },
      ]
    },
    {
      id: 5,
      quantity: 1,
      path: "/speakers/zx7",
      category: "Speakers",
      name: "ZX7 Speaker",
      src: zx7Speaker,
      description:
        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      feature:
        " Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers amade from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mifor more advanced usage.",
      secondFeature:
        "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing throbluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger twith the included wireless remote. This versatile speaker is equipped to deliver an authenlistening experience.",
      price: 3500,
      box: [
        { stock: "2x", element: "Speaker Unit" },
        { stock: "2x", element: "Speaker Cloth Panel" },
        { stock: "1x", element: "User Manual" },
        { stock: "1x", element: "3.5mm 7.5m Audio Cable" },
        { stock: "1x", element: "7.5m Optical Cable" },
      ],
      galery: [
        { id: uuidv4(), src: zx7Galery1 },
        { id: uuidv4(), src: zx7Galery2 },
        { id: uuidv4(), src: zx7Galery3 },
        { id: uuidv4(), src: MobileZx7SpeakerCard },
        { id: uuidv4(), src: TabletZx7SpeakerCard },
      ]
    },
    {
      id: 6,
      quantity: 1,
      path: "/speakers/zx9",
      category: "Speakers",
      name: "ZX9 Speaker",
      src: zx9Speaker,
      cardImage: zx9SpeakerCard,
      claim:
        "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      feature:
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired sodevices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
      secondFeature:
        "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum albass unit. You’ll be able to enjoy equal sound quality whether in a large room or small dFurthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
      price: 4500,
      box: [
        { stock: "2x", element: "Speaker Unit" },
        { stock: "2x", element: "Speaker Cloth Panel" },
        { stock: "1x", element: "User Manual" },
        { stock: "1x", element: "3.5mm 10m Audio Cable" },
        { stock: "1x", element: "10m Optical Cable" },
      ],
      galery: [
        { src: zx9Galery1 },
        { src: zx9Galery2 },
        { src: zx9Galery3 },
      ]
    },
  ],


  //TODO: Manejar esta data dentro de su objeto en items
  thumbnail: [
    { id: uuidv4(), src: xx99MarkOneHeadphonesThumbnail },
    { id: uuidv4(), src: zx9SpeakerThumbnail },
    { id: uuidv4(), src: yx1EarphonesThumbnail },
  ],
};



export const GlobalContext = createContext(bbdd);

export const Provider = ({ children }: Props) => {
  return (
    <GlobalContext.Provider value={bbdd}> {children}</GlobalContext.Provider>
  );
};

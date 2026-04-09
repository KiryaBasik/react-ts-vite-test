import selectionBannerCarImage from '../../assets/images/product-page/banner/selection-banner-car.png'
import productGalleryMainImage from '../../assets/images/product-page/gallery/product-gallery-main.png'
import productGalleryThumbFrontImage from '../../assets/images/product-page/gallery/product-gallery-thumb-front.png'
import productGalleryThumbSideImage from '../../assets/images/product-page/gallery/product-gallery-thumb-side.png'
import productGalleryThumbTailLightImage from '../../assets/images/product-page/gallery/product-gallery-thumb-tail-light.png'
import similarCarBlackSuvImage from '../../assets/images/product-page/similar-cars/similar-car-black-suv.png'
import similarCarBlueSedanImage from '../../assets/images/product-page/similar-cars/similar-car-blue-sedan.png'
import similarCarBlueSuvImage from '../../assets/images/product-page/similar-cars/similar-car-blue-suv.png'
import similarCarRedCoupeImage from '../../assets/images/product-page/similar-cars/similar-car-red-coupe.png'
import type { ProductPageData } from './product-page.types'

export const productPageData: ProductPageData = {
  catalogLabel: 'Каталог',
  equipmentButtonLabel: 'Все параметры',
  fixedActions: {
    primary: 'Оставить заявку',
    secondary: 'Написать в Telegram',
  },
  galleryImages: [
    {
      id: 1,
      alt: 'Haval H9 вид спереди',
      src: productGalleryMainImage,
      thumbnailSrc: productGalleryThumbFrontImage,
    },
    {
      id: 2,
      alt: 'Haval H9 задняя оптика',
      src: productGalleryThumbTailLightImage,
      thumbnailSrc: productGalleryThumbTailLightImage,
    },
    {
      id: 3,
      alt: 'Haval H9 вид сбоку',
      src: productGalleryThumbSideImage,
      thumbnailSrc: productGalleryThumbSideImage,
    },
  ],
  product: {
    badge: 'Новый',
    price: '3 670 000 ₽',
    title: 'Haval H9 I, 2024',
  },
  characteristics: [
    { id: 'color', label: 'Цвет', value: 'Чёрный', column: 'left' },
    {
      id: 'engine',
      label: 'Двигатель',
      value: '2.0 л / 218 л.с. / бензин',
      column: 'left',
    },
    { id: 'vin', label: 'VIN', value: 'LGM*************', column: 'left' },
    { id: 'tax', label: 'Налог', value: '16350₽/год', column: 'left' },
    {
      id: 'gearbox',
      label: 'Коробка',
      value: 'Автоматическая',
      column: 'left',
    },
    {
      id: 'body',
      label: 'Кузов',
      value: 'Внедорожник 5 дв.',
      column: 'right',
    },
    { id: 'drive', label: 'Привод', value: 'Полный', column: 'right' },
  ],
  equipmentGroups: [
    {
      id: 'overview',
      label: 'Обзор',
      items: [
        'Противотуманные фары',
        'Датчик дождя',
        'Электрообогрев лобового стекла',
        'Электрообогрев боковых зеркал',
      ],
    },
    {
      id: 'safety',
      label: 'Безопасность',
      items: [
        'Антипробуксовочная система (ASR)',
        'Система помощи при старте в гору (HSA)',
        'Крепление детского кресла (задний ряд) ISOFIX',
      ],
    },
  ],
  selectionBanner: {
    buttonLabel: 'Подобрать',
    description: 'Предложим лучшие варианты, по вашим параметрам',
    imageSrc: selectionBannerCarImage,
    title: 'Бесплатно подберём автомобиль',
  },
  similarCars: [
    {
      id: 1,
      imageAlt: 'Похожий автомобиль Haval H9, 2022',
      imageSrc: similarCarBlueSuvImage,
      price: '3 399 000 ₽',
      title: 'Haval H9, 2022',
    },
    {
      id: 2,
      imageAlt: 'Похожий автомобиль Haval H9, 2022',
      imageSrc: similarCarBlueSedanImage,
      price: '3 399 000 ₽',
      title: 'Haval H9, 2022',
    },
    {
      id: 3,
      imageAlt: 'Похожий автомобиль Haval H9, 2022',
      imageSrc: similarCarRedCoupeImage,
      price: '3 399 000 ₽',
      title: 'Haval H9, 2022',
    },
    {
      id: 4,
      imageAlt: 'Похожий автомобиль Haval H9, 2022',
      imageSrc: similarCarBlackSuvImage,
      price: '3 399 000 ₽',
      title: 'Haval H9, 2022',
    },
    {
      id: 5,
      imageAlt: 'Похожий автомобиль Haval H9, 2022',
      imageSrc: productGalleryMainImage,
      price: '3 399 000 ₽',
      title: 'Haval H9, 2022',
    },
    {
      id: 6,
      imageAlt: 'Похожий автомобиль Haval H9, 2022',
      imageSrc: productGalleryMainImage,
      price: '3 399 000 ₽',
      title: 'Haval H9, 2022',
    },
  ],
  similarCarsTitle: 'Похожие автомобили',
}

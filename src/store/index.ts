// import { reactive } from 'vue'
export const data = [
  {
    img: null,
    onSold: false,
    id: 1232,
    rating: 4.5,
    views: 321,
    sold: 139,
    productCount: 50,
    refund: 3,
    drawback: 0,
    name: 'Galaxy S24',
    price: '6 000 000'
  },
  {
    img: null,
    onSold: true,
    id: 1232,
    rating: 4.5,
    views: 321,
    sold: 139,
    productCount: 50,
    refund: 3,
    drawback: 0,
    name: 'Asus Gaming Keyboard',
    price: '500 000'
  },
  {
    img: null,
    onSold: false,
    id: 1232,
    rating: 4.5,
    views: 321,
    sold: 139,
    productCount: 50,
    refund: 3,
    drawback: 0,
    name: 'Laptop Cooler Pad',
    price: '1 000 000'
  },
  {
    img: null,
    onSold: true,
    id: 1232,
    rating: 4.5,
    views: 321,
    sold: 139,
    productCount: 50,
    refund: 3,
    drawback: 0,
    name: 'Galaxy S24',
    price: '6 000 000'
  },
  {
    img: null,
    onSold: true,
    id: 1232,
    rating: 4.5,
    views: 321,
    sold: 139,
    productCount: 50,
    refund: 3,
    drawback: 0,
    name: 'Galaxy S24',
    price: '6 000 000'
  },
  {
    img: null,
    onSold: true,
    id: 1232,
    rating: 4.5,
    views: 321,
    sold: 139,
    productCount: 50,
    refund: 3,
    drawback: 0,
    name: 'Galaxy S24',
    price: '6 000 000'
  }
]

import img_01 from '@/assets/categories/image_01.png'
import img_02 from '@/assets/categories/image_02.png'
import img_03 from '@/assets/categories/image_03.png'
import img_04 from '@/assets/categories/image_04.png'
import img_05 from '@/assets/categories/image_05.png'
import img_06 from '@/assets/categories/image_06.png'
import img_07 from '@/assets/categories/image_07.png'
import img_08 from '@/assets/categories/image_08.png'
import img_09 from '@/assets/categories/image_09.png'
import img_10 from '@/assets/categories/image_10.png'
import img_11 from '@/assets/categories/image_11.png'
import img_12 from '@/assets/categories/image_12.png'
import img_13 from '@/assets/categories/image_13.png'
import img_14 from '@/assets/categories/image_14.png'

export const options = [
  {
    name: 'Avtomobillar',
    image: img_01
  },
  {
    name: 'Elektronika',
    image: img_02
  },
  {
    name: 'Ish bor',
    image: img_03
  },
  {
    name: 'Uy jihozlari',
    image: img_04
  },
  {
    name: 'Uy joy',
    image: img_05
  },
  {
    name: "Mo'da va stil",
    image: img_06
  },
  {
    name: 'Kitoblar olami',
    image: img_07
  },
  {
    name: 'Sport va hobbi',
    image: img_08
  },
  {
    name: "Ko'ngil ochar o'yinlar",
    image: img_09
  },
  {
    name: 'Maishiy texnika',
    image: img_10
  },
  {
    name: 'Bolalar buyumlari',
    image: img_11
  },
  {
    name: 'Ish qurollari',
    image: img_12
  },
  {
    name: "Bog'dorchilik",
    image: img_13
  },
  {
    name: 'Gullar',
    image: img_14
  }
]


import { ref } from "vue";
import type { ISiteConf } from "@/types";

export const showAnnouncementModal = ref(false);

let api_host = "localhost:8000",
  api_protocol = "http:";

export const SITE_CONF: ISiteConf = {
  API_HOST: api_host,
  API_PROTOCOL: api_protocol,
  API_ORIGIN: `${api_protocol}//${api_host}`,
};

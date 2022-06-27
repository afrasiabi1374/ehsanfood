import { createStore } from 'vuex'
import { useCookies } from "vue3-cookies";

export const store =   createStore({
  state: {
    foods: [
      {
        category: 'چلوها',
        categoryId: 'chelo',
        categoryImage: 'assets/img/cat-icons/چلوها.png',
        id:1,
      },

      {
        category: 'خوراک ها',
        categoryId: 'khorak',
        categoryImage: ('assets/img/cat-icons/خوراک.png'),
        id:2,
      },
      {
        category: 'خورشت ها',
        categoryId: 'khoresht',
        categoryImage: ('assets/img/cat-icons/خورشت ها.png'),
        id:3
      },
      {
        category: 'دسرها و سالادها',
        categoryId: 'salad',
        categoryImage: ('assets/img/cat-icons/دسرها و سالادها.png'),
        id:4,

      },
      {
        category: 'نوشیدنی',
        categoryId: 'drink',
        categoryImage: ('assets/img/cat-icons/نوشیدنی.png'),
        id:5,
      }
    ],
    users: [
      {
        id: 1,
        fullName: 'mohammad ali',
        phoneNumber: "09198017872",
        birthDate: '1374/11/17',
        gender: 'مرد',
        email:'mohammad.aligiga@gmailcom',
        address: [
          {
            id: 1,
            name: 'مغازه',
            addressText: 'هاشمی نبش رودکی بغل پاساژ لوازم آرایشی بهداشتی گل مریم'
          }
        ],
        password: 12345678
      }
    ],
    activeUser: {},
    ghaza: [
      {
        id:1,
        name: 'چلوکباب لقمه 2سیخ',
        describe: 'دو سیخ کباب لقمه گوسفندی 250 گرمی، 350 گرم برنج ایرانی، گوجه کبابی، ریحان یا پیاز',
        price: 385000,
        count: 14,
        img: 'assets/img/foods/chelo/چلوکباب لقمه 2سیخ.jpg',
        catId:1
      },
      {
        id:2, 
        name: 'چلو کباب سلطانی ویژه محسن',
        describe: 'یک سیخ کباب لقمه 250 گرمی، یک سیخ کباب برگ ممتاز 300 گرمی، 350 گرم برنج ایرانی',
        price: 385000,
        count: 14,
        img: 'assets/img/foods/chelo/چلو کباب سلطانی ویژه محسن.jpg',
        catId:1
      },
      {
        id:3,
        name: 'چلو کباب لقمه',
        describe: 'یک سیخ کباب لقمه گوسفندی 250 گرمی، 350 گرم برنج ایرانی، گوجه کبابی، ریحان یا پیاز',
        price: 128250,
        count: 14,
        img: 'assets/img/foods/chelo/چلو کباب لقمه.jpg',
        catId:1
      },
      {
        id:4,
        name: 'چلو کباب برگ ممتاز محسن',
        describe: 'یک سیخ کباب برگ راسته گوسفندی، 350 گرم برنج ایرانی، گوجه کبابی، ریحان یا پیاز',
        price: 261250,
        count: 14,
        img: 'assets/img/foods/chelo/چلو کباب برگ ممتاز محسن.jpg',
        catId:1
      },
      {
        id:5,
        name: 'چلو کباب برگ مخصوص',
        describe: 'یک سیخ کباب برگ راسته گوسفندی، 350 گرم برنج ایرانی، گوجه کبابی، ریحان یا پیاز',
        price: 190000,
        count: 14,
        img: 'assets/img/foods/chelo/چلو کباب برگ مخصوص.jpg',
        catId:1
      },
      {
        id:6,
        name: 'جوجه کباب با برنج',
        describe: 'یک سیخ جوجه کباب فیله و سینه مرغ زعفرانی 330 گرمی، 350 گرم برنج ایرانی، گوجه کبابی',
        price: 128250,
        count: 14,
        img: 'assets/img/foods/chelo/جوجه کباب با برنج.jpg',
        catId:1
      },
      {
        id:7,
        name: 'چلو کباب فیله گوسفندی',
        describe: 'یک سیخ کباب فیله گوسفندی 300 گرمی، 350 گرم برنج ایرانی، گوجه کبابی، ریحان یا پیاز',
        price: 128250,
        count: 14,
        img: 'assets/img/foods/chelo/چلو کباب فیله گوسفندی.jpg',
        catId:1
      },
      {
        id:8,
        name: 'چلو کباب سلطانی',
        describe: 'یک سیخ کباب کوبیده 150 گرمی، یک سیخ کباب برگ مخصوص 200 گرمی، 350 گرم برنج ایرانی، گوجه کبابی، ریحان یا پیاز',
        price: 128250,
        count: 14,
        img: 'assets/img/foods/chelo/چلو کباب سلطانی.jpg',
        catId:1
      },
      {
        id:9,
        name: 'زرشک پلو با مرغ',
        describe: '400-450 گرم مرغ، 350 گرم زرشک پلو با برنج ایرانی، روغن حیوانی',
        price: 108250,
        count: 14,
        img: 'assets/img/foods/chelo/زرشک پلو با مرغ.jpg',
        catId:1
      },
      {
        id:10,
        name: 'چلو کباب لقمه',
        describe: 'یک سیخ کباب لقمه گوسفندی 250 گرمی، 350 گرم برنج ایرانی، گوجه کبابی، ریحان یا پیاز',
        price: 128250,
        count: 14,
        img: 'assets/img/foods/chelo/چلو کباب لقمه.jpg',
        catId:1
      },
      {
        id:11,
        name: 'باقالی پلو با مرغ',
        describe: '400-450 گرم مرغ، 350 گرم شوید باقالی با برنج ایرانی',
        price: 128250,
        count: 14,
        img: 'assets/img/foods/chelo/باقالی پلو با مرغ.jpg',
        catId:1
      },
      {
        id:12,
        name: 'شیرین پلو با مرغ',
        describe: '400-450 گرم مرغ، مربا نارنج، 350 گرم برنج ایرانی، روغن حیوانی',
        price: 109250,
        count: 14,
        img: 'assets/img/foods/chelo/شیرین پلو با مرغ.jpg',
        catId:1
      },
      {
        id:13,
        name: 'آلبالو پلو با مرغ',
        describe: '400-450 گرم مرغ، مربا آلبالو، 350 گرم برنج ایرانی',
        price: 114000,
        count: 14,
        img: 'assets/img/foods/chelo/آلبالو پلو با مرغ.jpg',
        catId:1
      },
      {
        id:14,
        name: 'شیرین پلو',
        describe: '350 گرم برنج ایرانی، مربای نارنج، روغن حیوانی',
        price: 128250,
        count: 14,
        img: 'assets/img/foods/chelo/شیرین پلو.jpg',
        catId:1
      },
      {
        id:15,
        name: 'ته چین مرغ',
        describe: '100 گرم سینه مرغ اسلایس شده، 350 گرم ته چین با برنج ایرانی، زرشک',
        price: 118250,
        count: 14,
        img: 'assets/img/foods/chelo/ته چین مرغ.jpg',
        catId:1
      },
      {
        id:16,
        name: 'آلبالو پلو',
        describe: '350 گرم برنج ایرانی، مربای آلبالو',
        price: 78250,
        count: 14,
        img: 'assets/img/foods/chelo/آلبالو پلو.jpg',
        catId:1
      },
      {
        id:17,
        name: 'چلو کره',
        describe: '350 گرم برنج ایرانی، مربای نارنج، روغن حیوانی',
        price: 50250,
        count: 14,
        img: 'assets/img/foods/chelo/چلو کره.jpg',
        catId:1
      },
      {
        id:18,
        name: 'چلو ماهیچه ویژه',
        describe: 'حدود 650 گرم ماهیچه گوسفندی، 350 گرم برنج ایرانی',
        price: 278250,
        count: 14,
        img: 'assets/img/foods/chelo/چلو ماهیچه ویژه.jpg',
        catId:1
      },
      {
        id:19,
        name: 'باقالی پلو با جوجه',
        describe: 'یک سیخ کباب لقمه گوسفندی 250 گرمی،یک سیخ جوجه کباب فیله و سینه مرغ زعفرانی 330 گرمی، 350 گرم برنج ایرانی، گوجه کبابی',
        price: 123250,
        count: 14,
        img: 'assets/img/foods/chelo/چلوکباب وزیری.jpg',
        catId:1
      },
      {
        id:20,
        name: 'باقالی پلو',
        describe: '350 گرم برنج ایرانی، شوید، باقالی',
        price: 68250,
        count: 14,
        img: 'assets/img/foods/chelo/باقالی پلو.jpg',
        catId:1
      },
      {
        id:21,
        name: 'باقالی پلو با ماهیچه ویژه',
        describe: 'حدود 650 گرم ماهیچه گوسفندی، 350 گرم باقالی پلو',
        price: 268250,
        count: 14,
        img: 'assets/img/foods/chelo/باقالی پلو با ماهیچه ویژه.jpg',
        catId:1
      },
      {
        id:22,
        name: 'آلبالوپلو با جوجه',
        describe: '350 گرم برنج ایرانی، شوید، باقالی',
        price: 168250,
        count: 14,
        img: 'assets/img/foods/chelo/باقالی پلو.jpg',
        catId:1
      },
      {
        id:23,
        name: 'باقالی پلو با گوشت مخصوص سرخ شده',
        describe: '350 گرم برنج ایرانی، شوید، باقالی',
        price: 268250,
        count: 14,
        img: 'assets/img/foods/chelo/باقالی پلو با گوشت مخصوص سرخ شده.jpg',
        catId:1
      },
      {
        id:24,
        name: 'آلبالو پلو با ماهیچه ویژه',
        describe: 'حدود 650 گرم ماهیچه گوسفندی، 400 گرم آلبالو پلو',
        price: 298250,
        count: 14,
        img: 'assets/img/foods/chelo/آلبالو پلو با ماهیچه ویژه.jpg',
        catId:1
      },
      {
        id:25,
        name: 'آلبالو پلو با گوشت مخصوص سرخ شده',
        describe: '350 گوشت ناب ایرانی گرم برنج ایرانی، شوید، ',
        price: 288250,
        count: 14,
        img: 'assets/img/foods/chelo/آلبالو پلو با گوشت مخصوص سرخ شده.jpg',
        catId:1
      },
      {
        id:26,
        name: 'خوراک برگ مخصوص',
        describe: 'یک سیخ کباب برگ راسته گوسفندی، دورچین روز، یک اسکوپ برنج سفید',
        price: 156250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک برگ مخصوص.jpg',
        catId:2
      },
      {
        id:27,
        name: 'جوجه کباب با استخوان',
        describe: 'یک سیخ مرغ ارگانیک کامل 800 گرمی، دورچین روز',
        price: 118750,
        count: 14,
        img: 'assets/img/foods/khorak/جوجه کباب با استخوان.jpg',
        catId:2
      },
      {
        id:28,
        name: 'خوراک لقمه 2 سیخ',
        describe: 'یک سیخ کباب برگ راسته گوسفندی، دورچین روز، یک اسکوپ برنج سفید',
        price: 204250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک لقمه 2 سیخ.jpg',
        catId:2
      },
      {
        id:29,
        name: 'خوراک وزیری',
        describe: 'یک سیخ کباب لقمه گوسفندی 250 گرمی،یک سیخ جوجه کباب فیله و سینه مرغ زعفرانی 330 گرمی، گوجه کبابی',
        price: 190000,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک وزیری.jpg',
        catId:2
      },
      {
        id:30,
        name: 'خوراک فیله گوسفندی',
        describe: 'یک سیخ کباب فیله گوسفندی 300 گرمی، دورچین روز، یک اسکوپ برنج سفید',
        price: 247250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک فیله گوسفندی.jpg',
        catId:2
      },
      {
        id:31,
        name: 'خوراک گوشت مخصوص سرخ شده',
        describe: '500 گرم خوراک گوشت مخصوص سرخ شده، دورچین روز، سیب زمینی سرخ شده',
        price: 242250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک گوشت مخصوص سرخ شده.jpg',
        catId:2
      },
      {
        id:32,
        name: 'خوراک میگو سوخاری',
        describe: '4 عدد میگو سوخاری، دورچین روز، سیب زمینی سرخ شده، یک اسکوپ برنج مکزیکی',
        price: 199250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک میگو سوخاری.jpg',
        catId:2
      },
      {
        id:33,
        name: 'خوراک جوجه کباب',
        describe: 'یک سیخ جوجه کباب فیله و سینه مرغ زعفرانی 330 گرمی، دورچین روز',
        price: 106250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک جوجه کباب.jpg',
        catId:2
      },
      {
        id:34,
        name: 'خوراک ماهیچه ویژه',
        describe: 'یک سیخ کباب برگ راسته گوسفندی، دورچین روز، یک اسکوپ برنج سفید',
        price: 276250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک ماهیچه ویژه.jpg',
        catId:2
      },
      {
        id:35,
        name: 'خوراک لقمه',
        describe: 'یک سیخ کباب لقمه گوسفندی 250 گرمی، دورچین روز، یک اسکوپ برنج سفید',
        price: 109250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک لقمه.jpg',
        catId:2
      },
      {
        id:36,
        name: 'خوراک فیله مرغ کبابی',
        describe: '250 گرم فیله مرغ کبابی، دورچین روز، یک اسکوپ برنج مکزیکی',
        price: 114250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک فیله مرغ کبابی.jpg',
        catId:2
      },
      {
        id:37,
        name: 'خوراک شنیتسل مرغ',
        describe: '250 گرم سینه مرغ زعفرانی شنیسل شده، دورچین روز، سیب زمینی سرخ شده، یک اسکوپ برنج مکزیکی',
        price: 99250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک شنیتسل مرغ.jpg',
        catId:2
      },
      {
        id:38,
        name: 'خوراک مرغ',
        describe: '400 الی 450 گرم ران یا سینه مرغ، دورچین روز، یک اسکوپ برنج مکزیکی',
        price: 89250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک مرغ.jpg',
        catId:2
      },
      {
        id:39,
        name: 'خوراک سلطانی',
        describe: 'یک سیخ کباب لقمه 150 گرمی، یک سیخ کباب برگ ممتاز 200 گرمی، دورچین روز',
        price: 213250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک سلطانی.jpg',
        catId:2
      },
      {
        id:40,
        name: 'خوراک برگ ممتاز',
        describe: 'یک سیخ کباب برگ راسته گوسفندی، دورچین روز، یک اسکوپ برنج سفید',
        price: 209250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک برگ ممتاز.jpg',
        catId:2
      },
      {
        id:41,
        name: 'شیشلیک با استخوان',
        describe: '6 تکه شیشلیک مخصوص شاندیز مشهد ،گوجه کبابی',
        price: 256250,
        count: 14,
        img: 'assets/img/foods/khorak/شیشلیک با استخوان.jpg',
        catId:2
      },
      {
        id:42,
        name: 'خوراک سلطانی ویژه',
        describe: 'یک سیخ کباب لقمه 250 گرمی، یک سیخ کباب برگ ممتاز 300 گرمی، دورچین روز، یک اسکوپ برنج سفید، نان لواش یک بسته',
        price: 339250,
        count: 14,
        img: 'assets/img/foods/khorak/خوراک سلطانی ویژه.jpg',
        catId:2
      },
      {
        id:43,
        name: 'خورشت فسنجان خالی',
        describe: '300 گرم خورشت، گردو، 90 گرم فیله مرغ',
        price: 88250,
        count: 14,
        img: 'assets/img/foods/khoresht/خورشت فسنجان خالی.jpg',
        catId:3
      },
      {
        id:44,
        name: 'خورشت فسنجان خالی',
        describe: '300 گرم خورشت، گردو، 90 گرم فیله مرغ',
        price: 88250,
        count: 14,
        img: 'assets/img/foods/khoresht/خورشت فسنجان خالی.jpg',
        catId:3
      },
      {
        id:45,
        name: 'چلو خورشت فسنجان',
        describe: '300 گرم خورشت، گردو، 90 گرم فیله مرغ، 350 گرم برنج ایرانی',
        price: 99250,
        count: 14,
        img: 'assets/img/foods/khoresht/چلو خورشت فسنجان.jpg',
        catId:3
      },
      {
        id:46,
        name: 'چلو خورشت قیمه بادمجان گوسفندی',
        describe: 'چلو خورشت قیمه بادمجان گوسفندی',
        price: 99250,
        count: 14,
        img: 'assets/img/foods/khoresht/چلو خورشت قیمه بادمجان گوسفندی.jpg',
        catId:3
      },
      {
        id:47,
        name: 'چلو خورشت قرمه سبزی گوسفندی',
        describe: 'چلو خورشت قرمه سبزی گوسفندی',
        price: 92250,
        count: 14,
        img: 'assets/img/foods/khoresht/خورشت فسنجان خالی.jpg',
        catId:3
      },
      {
        id:48,
        name: 'سالاد سزار',
        describe: 'کاهو، 200 گرم فیله مرغ، گوجه، پنیر پارمزان، زیتون سیاه، سس سزاز',
        price: 88250,
        count: 14,
        img: 'assets/img/foods/deser-salad/سالاد سزار.jpg',
        catId:4
      },
      {
        id:49,
        name: 'سبزی خوردن',
        describe: 'کاهو، 200 گرم فیله مرغ، گوجه، پنیر پارمزان، زیتون سیاه، سس سزاز',
        price: 15250,
        count: 14,
        img: 'assets/img/foods/deser-salad/سبزی خوردن.jpg',
        catId:4
      },
      {
        id:50,
        name: 'سالاد شیرازی',
        describe: '150 گرم سالاد شیرازی',
        price: 13250,
        count: 14,
        img: 'assets/img/foods/deser-salad/سالاد شیرازی.jpg',
        catId:4
      },
      {
        id:51,
        name: 'سوپ روز',
        describe: '400 گرم، جو، مرغ، شیر، خامه',
        price: 25250,
        count: 14,
        img: 'assets/img/foods/deser-salad/سوپ روز.jpg',
        catId:4
      },
      {
        id:52,
        name: 'سالاد فصل',
        describe: 'کاهو، گوجه، خیار، هویج، سس فرانسوی',
        price: 60250,
        count: 14,
        img: 'assets/img/foods/deser-salad/سالاد فصل.jpg',
        catId:4
      },
      {
        id:53,
        name: 'ماست موسیر',
        describe: '150 گرم ماست موسیر',
        price: 12250,
        count: 14,
        img: 'assets/img/foods/deser-salad/ماست موسیر.jpg',
        catId:4
      },
      {
        id:54,
        name: 'زیتون پرورده',
        describe: 'زیتون سیاه، سس سزاک',
        price: 35250,
        count: 14,
        img: 'assets/img/foods/deser-salad/زیتون پرورده.jpg',
        catId:4
      },
      {
        id:55,
        name: 'سیب زمینی سرخ شده',
        describe: '200-250 گرم سیب زمینی سرخ کرده',
        price: 30250,
        count: 14,
        img: 'assets/img/foods/deser-salad/سیب زمینی سرخ شده.jpg',
        catId:4
      },
      {
        id:56,
        name: 'ماست وخیار با گردو',
        describe: '150 گرم ماست و خیار، گردو',
        price: 20250,
        count: 14,
        img: 'assets/img/foods/deser-salad/ماست وخیار با گردو.jpg',
        catId:4
      },
      {
        id:57,
        name: 'دوغ نیم لیتری',
        describe: '350 گوشت ناب ایرانی گرم برنج ایرانی، شوید، ',
        price: 13820,
        count: 14,
        img: 'assets/img/foods/driks/دوغ نیم لیتری.jpg',
        catId:5
      },
      {
        id:58,
        name: 'دوغ نیم لیتری',
        describe: '350 گوشت ناب ایرانی گرم برنج ایرانی، شوید، ',
        price: 13820,
        count: 14,
        img: 'assets/img/foods/driks/دوغ نیم لیتری.jpg',
        catId:5
      },
      {id:59,
        name: 'شربت خاکشیر',
        describe: 'شربت خاکشیر',
        price: 18820,
        count: 14,
        img: 'assets/img/foods/driks/شربت خاکشیر.jpg',
        catId:5
      },
      {
        id:60,
        name: 'نوشابه قوطی',
        describe: 'گوکا - اسپرایت - فانتا',
        price: 9820,
        count: 14,
        img: 'assets/img/foods/driks/نوشابه قوطی.jpg',
        catId:5
      },
      {
        id:61,
        name: 'نوشابه خانواده',
        describe: '350 گوشت ناب ایرانی گرم برنج ایرانی، شوید، ',
        price: 14820,
        count: 14,
        img: 'assets/img/foods/driks/نوشابه خانواده.jpg',
        catId:5
      },
      {
        id:62,
        name: 'دلستر هی دی',
        describe: 'دلستر هی دی',
        price: 13820,
        count: 14,
        img: 'assets/img/foods/driks/دلستر هی دی.jpg',
        catId:5
      },
      {
        id:63,
        name: 'آب معدنی',
        describe: 'آب معدنی خانواده',
        price: 5820,
        count: 14,
        img: 'assets/img/foods/driks/آب معدنی.jpg',
        catId:5
      },
    ],
    shoppingCart: [
      {
        userId:1,
        userFoods: [
          {
            foodId: 1,
            foodCount: 3
          }
        ]
      }
    ],
    tempCart: [

    ]
  },
  getters: {
    allFoods: (state) => {
      return state.foods
    },
    allUsers: (state) => {
      return state.users
    },
    targetUser: (state) => {
      return state.activeUser
    },
    addressForShow: (state) => {
      return state.activeUser.address
    },
    ghaza: (state) => {
      return state.ghaza
    },

    tempCartShow: (state) =>  {
      return state.tempCart
    },
    tempCartItem: (state) => (id) => {
      const userCart = state.shoppingCart.find(userCart => userCart?.userId == state.activeUser?.id)?.userFoods
      let data = undefined 
      state.activeUser.id ? 
      data = userCart.find(item => item.foodId == id)?.foodCount
      :
      data = state.tempCart.find(item=> item.foodId == id)?.foodCount
      return data
    },
    userCart: (state) => {
      console.log('user cart',state.shoppingCart.find(userCart => userCart.userId == state.activeUser.id).userFoods)
      return state.shoppingCart.find(userCart => userCart.userId == state.activeUser.id).userFoods
    },
    showCartItem: (state) => (id) => {

      let data = ''
      data = state.ghaza.find( item => item.id == id)
      // console.log(data);
      return data
    },
    getTotal:(state)=> {
      const userCart = state.shoppingCart.find(userCart => userCart?.userId == state.activeUser?.id)?.userFoods
      const tempCart = state.tempCart
      let total = 0
      let computedTotal = undefined
      state.activeUser.id ?
      computedTotal = userCart.reduce(
        (prevVal, nextVal) => {
          return prevVal + nextVal.foodCount*(state.ghaza.find(item => item.id == nextVal.foodId).price)
        }, total
      )
      :
      computedTotal = tempCart.reduce(
        (prevVal, nextVal) => {
          return prevVal +  (nextVal.foodCount*(state.ghaza.find(item => item.id == nextVal.foodId).price))
        },total
        )
        console.log('total ===>',computedTotal)
        return computedTotal
    },
    
  },
  mutations: {
    saveUser(state, personInfo){
      state.users.push({ id: 1 + state.users.length, ...personInfo })
      const signedUpPersson = state.users.find(item => item.phoneNumber == personInfo.phoneNumber)
      state.shoppingCart.push({userId: signedUpPersson.id, userFoods: []})
      if (state.tempCart.length >= 1) {
        const perssonCart = state.shoppingCart.find(item => item.userId == signedUpPersson.id)
        perssonCart.userFoods.push(...state.tempCart)
        state.tempCart = []
      }
    },
    setActiveUser(state, phoneNumber){
      state.activeUser = state.users.find(user => user.phoneNumber == phoneNumber)
      // console.log('this is active user =========>>>', state.activeUser);
    },
    changePass(state,password){
      state.users.find(user => user.password == state.activeUser.password).password = password
      
    },
    saveAddress(state, address) {
      const targetUser = state.users.find( user => user.id == state.activeUser.id)
      address.id != ''
      ?

      targetUser.address.splice(targetUser.address.findIndex(add => add.id == address.id), 1, {...address})

      :
      targetUser.address.push({id: 1 + targetUser.address.length + 1, ...address})
      // console.log(targetUser.address);
    },
    deleteAddress(state,id){
      const targetUser = state.users.find( user => user.id == state.activeUser.id)
      targetUser.address.splice(targetUser.address.findIndex(add => add.id == id), 1)

    },
    goOut(state){
      const {cookies} = useCookies()
      // console.log(cookies.remove('userCookie'));
      state.activeUser = {}
      
    },
    saveInfo(state, persson){
      const targetPersson = state.users.find(user => user.id == persson.id) 
      targetPersson.fullName = persson.fullName
      targetPersson.phoneNumber = persson.phoneNumber
      targetPersson.email = persson.email
      targetPersson.birthDate = persson.birthDate
      targetPersson.gender = persson.gender
    },
    addCart(state, food) {
      if ( state.shoppingCart.find(targetCart => targetCart.userId == state.activeUser.id) == undefined) {
        state.shoppingCart.push({ userId:  state.activeUser.id, userFoods: []})
      }
      let targetCart =  state.shoppingCart.find(targetCart => targetCart.userId == state.activeUser.id)
      const isAvalable =   targetCart.userFoods.find(targetFood => targetFood.foodId == food.id)?.foodId
      console.log(isAvalable)
      isAvalable ?
      targetCart.userFoods.find(targetFood => targetFood.foodId == food.id).foodCount+=1
      :
      targetCart.userFoods.push({foodCount: 1, foodId: food.id})
      console.log(targetCart);
    },
    deleteFromCart(state, id) {
      const targetCart = state.shoppingCart.find(targetCart => targetCart.userId == state.activeUser.id)
      const moreThanOne = targetCart.userFoods.find(targetFood => targetFood.foodId == id)?.foodCount > 1
      // console.log(moreThanOne, id);
      moreThanOne ?
      targetCart.userFoods.find(targetFood => targetFood.foodId == id).foodCount-=1
      :
      targetCart.userFoods.splice(targetCart.userFoods.findIndex(item => item.foodId == id),1)
      console.log(targetCart);
    },
    addToTempCart(state, food){
      const isAvailable = state.tempCart.find(item => item.foodId == food.id)
      isAvailable ?
      isAvailable.foodCount++
      :
      state.tempCart.push(JSON.parse(JSON.stringify({foodId: food.id, foodCount: 1})))
      // console.log(state.tempCart);
    },
    addFromTempToUserCart(state){
      const perssonCart = state.shoppingCart.find(item => item.userId == state.activeUser.id)
      perssonCart.userFoods.push(...state.tempCart)
      // console.log('after temp uodate',perssonCart.userFoods)
      state.tempCart = []
    },
    deleteFromTempCart(state, id){
      const isAvailable = state.tempCart.find(item => item.foodId == id)
      isAvailable.foodCount > 1 ?
      isAvailable.foodCount-=1
      :
      state.tempCart.splice(state.tempCart.findIndex(item=>item.foodId == id), 1)
    },
    emptyCart(state){
      state.activeUser.id ?
      state.shoppingCart.find(item => item.userId == state.activeUser.id).userFoods = []
      :
      state.tempCart = []
    }
  },
  actions: {

  }
})

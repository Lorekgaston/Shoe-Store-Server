const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('Unheandled Exeption shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: '.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err.message));

const port = process.env.PORT || 5000;
const intialState = [
  {
    id: 1,
    name: 'Nike SB Adversary',
    image:
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291184/Shoes/sb-adversary-skate-shoe-3_ilxohq.jpg',
    images: [
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291184/Shoes/sb-adversary-skate-shoe-3_ilxohq.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291185/Shoes/sb-adversary-skate-shoe-1_t6kelx.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291185/Shoes/sb-adversary-skate-shoe-2_qaiv5p.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291185/Shoes/sb-adversary-skate-shoe-4_g4oefa.jpg',
    ],
    description:
      'The Nike SB Adversary takes you back to the basics. Suede and textile create a classic look that s inspired by the 1982 Nike Adversary, while a combination of traditional lacing and ghillie loops let you dial in the perfect fit.',
    price: 50,
    category: 'shoes',
    brand: 'nike',
  },
  {
    id: 2,
    name: 'Nike SB Zoom Blazer Mid',
    image:
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291184/Shoes/sb-zoom-blazer-mid-skate-shoe-3_dczpvy.jpg',
    images: [
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291184/Shoes/sb-zoom-blazer-mid-skate-shoe-3_dczpvy.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291184/Shoes/sb-zoom-blazer-mid-skate-shoe-1_e6187c.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291184/Shoes/sb-zoom-blazer-mid-skate-shoe-2_ejy6iq.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291184/Shoes/sb-zoom-blazer-mid-skate-shoe-4_sbjmzi.jpg',
    ],
    description:
      'The Nike SB Zoom Blazer Mid takes a heritage design and tailors it to the needs of the modern skateboarder. Soft cushioning and a flexible sole work together to provide great boardfeel and traction.',
    price: 85,
    category: 'shoes',
    brand: 'nike',
  },
  {
    id: 3,
    name: 'Nike SB Shane Premium',
    image:
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612293341/Shoes/sb-shane-premium-skate-shoe-01_oqrky7.jpg',
    images: [
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612293341/Shoes/sb-shane-premium-skate-shoe-01_oqrky7.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612293341/Shoes/sb-shane-premium-skate-shoe-02_b58ank.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612293341/Shoes/sb-shane-premium-skate-shoe-04_c4xwtz.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612293342/Shoes/sb-shane-premium-skate-shoe-03_qqwvne.jpg',
    ],
    description:
      'The Nike SB Shane Premium is built to perform. Its unique design lets you choose between lacing your shoes the traditional way or by running them through durable ghillie loops.',
    price: 85,
    category: 'shoes',
    brand: 'nike',
  },
  {
    id: 4,
    name: 'Nike SB Charge Canvas',
    image:
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291185/Shoes/sb-charge-canvas-mens-skate-shoe-3_yhokqv.jpg',
    images: [
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291185/Shoes/sb-charge-canvas-mens-skate-shoe-3_yhokqv.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291185/Shoes/sb-charge-canvas-mens-skate-shoe-1_ajzjcm.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291185/Shoes/sb-charge-canvas-mens-skate-shoe-2_uk4xhp.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291185/Shoes/sb-charge-canvas-mens-skate-shoe-4_svklwg.jpg',
    ],
    description:
      'The Nike SB Charge Canvas pairs a low-top silhouette with flexible canvas for premium performance. A dual-density insole supports your feet while you skate and cushions you through big drops and tricks.',
    price: 65,
    category: 'shoes',
  },
  {
    id: 5,
    name: '3MC',
    image:
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291364/Shoes/3MC_Shoes_Blue_standard_04_cwpdg2.jpg',
    images: [
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291364/Shoes/3MC_Shoes_Blue_standard_04_cwpdg2.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291310/Shoes/3MC_Shoes_Blue_standard_01_bvqwx0.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291364/Shoes/3MC_Shoes_Blue_standard_03_vi63em.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291367/Shoes/3MC_Shoes_Blue_standard_02_rgtt6v.jpg',
    ],
    description:
      'No Skateboarding sign? No problem. These board-inspired adidas 3MC Shoes walk just as well as they roll. The textile upper sports clean, laid-back lines. An extra-bendy outsole keeps you comfy. The reinforced toe lets you skate (or stride) with confidence.',
    price: 52,
    category: 'shoes',
    brand: 'adidas',
  },
  {
    id: 6,
    name: 'BUSENITZ VULC II',
    image:
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291462/Shoes/Busenitz_Vulc_II_Shoes_Black_standard_04_kqgyph.jpg',
    images: [
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291462/Shoes/Busenitz_Vulc_II_Shoes_Black_standard_04_kqgyph.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291462/Shoes/Busenitz_Vulc_II_Shoes_Black_standard_02_aevyb6.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291463/Shoes/Busenitz_Vulc_II_Shoes_Black_standard_03_oc0yra.jpg',
    ],
    description:
      'The best just got better. This redesign of legendary skater Dennis Busenitzs signature shoes one-ups the original with even more cushioning and durability. Should you need to suddenly pump the foot brakes, an abrasion-resistant toe box has your back.',
    price: 70,
    category: 'shoes',
    brand: 'adidas',
  },
  {
    id: 7,
    name: 'TYSHAWN SIGNATURE',
    image:
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291619/Shoes/Tyshawn_Signature_Shoes_Black_04_standard_mz5k1x.jpg',
    images: [
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291619/Shoes/Tyshawn_Signature_Shoes_Black_04_standard_mz5k1x.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291619/Shoes/Tyshawn_Signature_Shoes_Black_03_standard_vgie2c.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291618/Shoes/Tyshawn_Signature_Shoes_Black_02_standard_sfqyow.jpg',
    ],
    description:
      'Inspired by basketball trainers but rooted in skateboarding, these skate shoes reflect the signature style of Tyshawn Jones, one of the hottest young riders in the game. The shoes are built with comfort in mind, featuring a moulded sockliner for outstanding board feel, and an EVA midsole that cushions against impact. An abrasion-resistant toe holds up to hard riding.',
    price: 72,
    category: 'shoes',
    brand: 'adidas',
  },
  {
    id: 8,
    name: 'MATCHBREAK SUPER',
    image:
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291713/Shoes/Matchbreak_Super_Shoes_White_01_standard_gb3oly.jpg',
    images: [
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291713/Shoes/Matchbreak_Super_Shoes_White_01_standard_gb3oly.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291713/Shoes/Matchbreak_Super_Shoes_White03_standard_jhwmlj.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612291713/Shoes/Matchbreak_Super_Shoes_White_02_standard_rsvcna.jpg',
    ],
    description:
      'These shoes have earned their bragging rights. After all, they are the highest-quality Vulcanized footwear ever produced by adidas Skateboarding. Offering pinnacle comfort and performance, they are ready to help you earn bragging rights of your own.',
    price: 75,
    category: 'shoes',
    brand: 'adidas',
  },
  {
    id: 9,
    name: 'COPA NATIONALE SHOES',
    image:
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612290979/Shoes/Copa_Nationale_Shoes_Blue__standard_02_uie3xl.jpg',
    images: [
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612290979/Shoes/Copa_Nationale_Shoes_Blue__standard_02_uie3xl.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612290956/Shoes/Copa_Nationale_Shoes_Blue_standard_04_uxqvgz.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612290973/Shoes/Copa_Nationale_Shoes_Blue_standard_03_afed5v.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612290984/Shoes/Copa_Nationale_Shoes_Blue__standard_01_ogra0q.jpg',
    ],
    description:
      'These skate shoes redefine performance and style. Drawing inspiration from indoor soccer shoes, these sneakers feature Cloudfoam in the heel, a super thin outsole and a snug fit for elevated flexibility and support. The premium suede upper and a molded Adiprene sockliner provide outstanding durability and comfort.',
    price: 90,
    category: 'shoes',
    brand: 'adidas',
  },
  {
    id: 10,
    name: 'Nike SB Nyjah Free',
    image:
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612292211/Shoes/sb-nyjah-free-skate-shoe-oKwn7N_01_rnlumi.jpg',
    images: [
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612292211/Shoes/sb-nyjah-free-skate-shoe-oKwn7N_01_rnlumi.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612292211/Shoes/sb-nyjah-free-skate-shoe-oKwn7N_02_u3vvjj.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612292211/Shoes/sb-nyjah-free-skate-shoe-oKwn7N_03_takbbf.jpg',
      'https://res.cloudinary.com/dxk8kglks/image/upload/v1612292211/Shoes/sb-nyjah-free-skate-shoe-oKwn7N_04_gd7n5c.jpg',
    ],
    description:
      'The first signature shoe from skater Nyjah Huston, the Nike SB Nyjah Free delivers the optimal grip of a rubber upper and the snug feel of an internal sleeve. Designed with flexibility in mind, its minimized break-in time means more skate days.',
    price: 95,
    category: 'shoes',
    brand: 'nike',
  },
];
app.get('/', (req, res) => res.send(JSON.parse(intialState)));

app.listen(port, () => {
  console.log(`app runing on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('Unheandled Rejection shutting down...');
  server.close(() => {
    process.exit(1);
  });
});

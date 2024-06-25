import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
    favorites: [],
    products: [
      {
        id: 71,
        name: 'Набор для ухода за волосами',
        price: '1000',
        description: 'При покупке кондиционера и шампуня для волос в подарок маска для ухода за волосами на выбор',
        image: '/promo/1.png',
        category: 1,
        sku: '12345',
          stock: 10,
          reviews: [
{ id: 1, name: 'Ирина', rating: 5, text: 'Отличный набор.' },
{ id: 2, name: 'Инна', rating: 5, text: 'Очень выгодно.' },
{ id: 3, name: 'Валентина', rating: 5, text: 'Суперский набор!' }
]
      },
      {
        id: 72,
        name: 'Косметический набор',
        price: '1000',
        description: 'При покупке туши и теней для век в подарок помада на выбор',
        image: '/promo/2.png',
        category: 1,
        sku: '12345',
          stock: 10,
          reviews: [
{ id: 1, name: 'Валерия', rating: 5, text: 'Отличная акционный набор.' },
{ id: 2, name: 'Ольга', rating: 4, text: 'Все хорошо, но выбор помад небольшой.' },
{ id: 3, name: 'Олег', rating: 5, text: 'Жене очень понравился набор.' }
]
      },
      {
        id: 73,
        name: 'Парфюмерный набор',
        price: '1000',
        description: 'При покупке женских и мужских духов любая нишевая парфюмерия в подарок',
        image: '/promo/3.png',
        category: 1,
        sku: '12345',
          stock: 10,
          reviews: [
{ id: 1, name: 'Ирина', rating: 5, text: 'Отличный набор.' },
{ id: 2, name: 'Анастасия', rating: 4, text: 'Все хорошо.' },
{ id: 3, name: 'Владимир', rating: 5, text: 'Все отлично, спасибо.' }
]
      },{
      id: 1,
      name: 'MIXIT RE:START KERATIN BOMB SHAMPOO',
      price: '1000',
      description: 'Восстанавливающий шампунь',
      image: '/hair/1.jpg',
      sku: '12345',
      stock: 10,
      reviews: [
        { id: 1, name: 'Алексей', rating: 5, text: 'Отличный шампунь!' },
        { id: 2, name: 'Мария', rating: 4, text: 'Хороший шампунь, но дорого.' },
        { id: 3, name: 'Ольга', rating: 5, text: 'Очень довольна покупкой!' }
      ]
    },
    {
      id: 51,
      name: 'ПОДАРОЧНАЯ КАРТА НА 5000₽',
      price: '5000',
      description: 'Подарочная карта',
      image: '/card/1.png',
      category: 1,
      sku: '12345',
        stock: 10,
        reviews: [
        { id: 1, name: 'Григорий', rating: 5, text: 'Отличная карта, удобно. Когда не знаешь что подарить то это отличное решение.' },
        { id: 2, name: 'Ольга', rating: 4, text: 'Удобно, хороший подарок на все случаи жизни.' },
        { id: 3, name: 'Елена', rating: 5, text: 'Все хорошо.' }
      ]
    },
    {
      id: 52,
      name: 'ПОДАРОЧНАЯ КАРТА НА 4000₽',
      price: '4000',
      description: 'Подарочная карта',
      image: '/card/2.png',
      category: 1,
      sku: '12345',
        stock: 10,
        reviews: [
        { id: 1, name: 'Алина', rating: 5, text: 'Приятный дизайн.' },
        { id: 2, name: 'Мария', rating: 4, text: 'Хороший подарок.' },
        { id: 3, name: 'Оксана', rating: 5, text: 'Отличный подарок.' }
      ]
    },
    {
      id: 53,
      name: 'ПОДАРОЧНАЯ КАРТА НА 3000₽',
      price: '3000',
      description: 'Подарочная карта',
      image: '/card/3.png',
      category: 1,
      sku: '12345',
        stock: 10,
        reviews: [
        { id: 1, name: 'Владимир', rating: 5, text: 'Отличное решение для подарка.' },
        { id: 2, name: 'Анастасия', rating: 4, text: 'Все хорошо.' },
        { id: 3, name: 'Светлана', rating: 5, text: 'Очень довольна картой!' }
      ]
    },
    {
      id: 2,
      name: 'CONCEPT METAL DETOX SHAMPOO',
      price: '1000',
      description: 'Хелатный шампунь для волос',
      image: '/hair/2.jpg',
      sku: '12346',
      stock: 5,
      reviews: [
        { id: 1, name: 'Иван', rating: 4, text: 'Хороший шампунь.' },
        { id: 2, name: 'Наталья', rating: 3, text: 'Не понравился запах.' },
        { id: 3, name: 'Светлана', rating: 5, text: 'Рекомендую всем!' }
      ]
    },
    {
id: 3,
name: 'PHYTO PURPLE NO YELLOW SHAMPOO',
price: '1000',
description: 'Шампунь против желтизны',
image: '/hair/3.jpg',
category: 1,
sku: '12346',
stock: 5,
reviews: [
{ id: 1, name: 'Елена', rating: 5, text: 'Отлично справляется с желтизной волос. Рекомендую!' },
{ id: 2, name: 'Андрей', rating: 4, text: 'Неплохой результат после нескольких применений.' },
{ id: 3, name: 'Олег', rating: 5, text: 'Этот шампунь стал моим спасением! Спасибо производителям!' }
]
},
{
id: 4,
name: 'OLLIN PROFESSIONAL MEGAPOLIS BLACK RICE CONDITIONER',
price: '4000',
description: 'Кондиционер для волос',
image: '/hair/4.jpg',
category: 2,
sku: '12346',
stock: 5,
reviews: [
{ id: 1, name: 'Наталья', rating: 5, text: 'Этот кондиционер делает волосы мягкими и блестящими!' },
{ id: 2, name: 'Александр', rating: 4, text: 'Приятный запах и хороший результат.' },
{ id: 3, name: 'Марина', rating: 4, text: 'Мои волосы стали менее ломкими после применения этого кондиционера.' }
]
},
{
id: 5,
name: 'ESTEL ME ЭТО ЦВЕТ + ЛАМИНИРОВАНИЕ КОНДИЦИОНЕР',
price: '1000',
description: 'Кондиционер для окрашенных волос',
image: '/hair/5.jpg',
category: 2,
sku: '12346',
stock: 5,
reviews: [
{ id: 1, name: 'Ирина', rating: 5, text: 'Мой цвет волос стал более ярким и насыщенным благодаря этому кондиционеру!' },
{ id: 2, name: 'Дмитрий', rating: 4, text: 'Хороший результат после нескольких применений.' },
{ id: 3, name: 'Анастасия', rating: 5, text: 'Очень довольна этим кондиционером! Рекомендую всем!' }
]
},
{
id: 6,
name: 'LAVANT LABORATORY WE ARE VEGAN! AVOCADO HAIR BALM',
price: '2000',
description: 'Питательный бальзам с авокадо',
image: '/hair/6.jpg',
category: 2,
sku: '12346',
stock: 5,
reviews: [
{ id: 1, name: 'Екатерина', rating: 5, text: 'Отличный бальзам, сделал мои волосы мягкими и блестящими!' },
{ id: 2, name: 'Артем', rating: 4, text: 'Приятный аромат и хороший эффект после применения.' },
{ id: 3, name: 'София', rating: 5, text: 'Мои волосы стали более послушными и ухоженными. Спасибо производителю!' }
]
},
{
id: 7,
name: 'CONCEPT SALON TOTAL COLOR SAVER MASK',
price: '3000',
description: 'Маска для окрашенных волос',
image: '/hair/7.jpg',
category: 3,
sku: '12346',
stock: 5,
reviews: [
{ id: 1, name: 'Максим', rating: 5, text: 'Эта маска помогла сохранить яркость моего цвета волос. Очень доволен результатом!' },
{ id: 2, name: 'Алина', rating: 4, text: 'Хороший увлажняющий эффект и приятный аромат.' },
{ id: 3, name: 'Елена', rating: 5, text: 'Отличная маска, мои волосы стали более гладкими и мягкими!' }
]
},
{
id: 8,
name: 'GARNIER FRUCTIS SOS ВОССТАНОВЛЕНИЕ КЕРАТИН ФИЛЛЕР',
price: '4000',
description: 'Смываемая сыворотка для волос',
image: '/hair/8.jpg',
category: 3,
sku: '12346',
stock: 5,
reviews: [
{ id: 1, name: 'Павел', rating: 4, text: 'Приятная текстура и быстрый эффект от использования.' },
{ id: 2, name: 'Виктория', rating: 3, text: 'Не заметила значительных изменений после применения.' },
{ id: 3, name: 'Антон', rating: 5, text: 'Моя волосы стали более гладкими и блестящими. Очень доволен!' }
]
},
{
id: 9,
name: 'CONCEPT MOSCOW FUSION DETOX BALANCE MASK',
price: '4000',
description: 'Восстанавливающая маска',
image: '/hair/9.jpg',
category: 3,
sku: '12346',
stock: 5,
reviews: [
{ id: 1, name: 'Олег', rating: 5, text: 'Отличная маска для восстановления волос. Рекомендую!' },
{ id: 2, name: 'Анна', rating: 4, text: 'Помогла сделать волосы более послушными и мягкими.' },
{ id: 3, name: 'Денис', rating: 5, text: 'Мои волосы стали более здоровыми и сильными после применения этой маски!' }
]
},
{
id: 10,
name: 'CAFE MIMI PROFESSIONAL КЕРАТИН МАСКА',
price: '4000',
description: 'Маска для поврежденных волос',
image: '/hair/10.jpg',
category: 3,
sku: '12346',
stock: 5,
reviews: [
{ id: 1, name: 'Елена', rating: 5, text: 'Эта маска сделала мои волосы невероятно мягкими и послушными!' },
{ id: 2, name: 'Андрей', rating: 4, text: 'Приятный запах и отличный результат после применения.' },
{ id: 3, name: 'Ксения', rating: 5, text: 'Мои волосы стали заметно здоровее и блестящие. Спасибо производителю за отличный продукт!' }
]
},
{
id: 21,
name: 'JUSBOX NIGHT FLOW EAU DE PARFUM',
price: '1000',
description: 'Парфюмерная вода',
image: '/parf/1.jfif',
category: 1,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Дмитрий', rating: 5, text: 'Отличный аромат, держится на коже долго!' },
{ id: 2, name: 'Маргарита', rating: 4, text: 'Приятный и насыщенный запах.' },
{ id: 3, name: 'Ирина', rating: 5, text: 'Мой новый любимый аромат! Очень довольна покупкой.' }
]
},
{
id: 22,
name: 'OBVIOUS UNE PISTACHE EAU DE PARFUM',
price: '1000',
description: 'Парфюмерная вода',
image: '/parf/2.jpg',
category: 1,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Валентина', rating: 4, text: 'Хороший аромат, немного сладковатый.' },
{ id: 2, name: 'Евгений', rating: 3, text: 'Не совсем мой тип аромата, но качество хорошее.' },
{ id: 3, name: 'Татьяна', rating: 5, text: 'Прекрасный аромат, он меня моментально завораживает!' }
]
},
{
id: 23,
name: 'FUGAZZI CASH FLOWER EXTRAIT DE PARFUM',
price: '1000',
description: 'Духи',
image: '/parf/3.jpg',
category: 1,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Михаил', rating: 5, text: 'Отличные духи, приятный аромат.' },
{ id: 2, name: 'Анна', rating: 4, text: 'Долго держится на коже, нравится!' },
{ id: 3, name: 'Елена', rating: 5, text: 'Эти духи стали моим любимым ароматом, носится идеально!' }
]
},
{
id: 24,
name: 'ANTONIO BANDERAS THE ICON ELIXIR EAU DE PARFUM',
price: '4000',
description: 'Парфюмерная вода',
image: '/parf/4.jfif',
category: 2,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Дарья', rating: 5, text: 'Отличный выбор для вечера, аромат держится долго.' },
{ id: 2, name: 'Артем', rating: 4, text: 'Приятный аромат, прекрасно подходит для особых случаев.' },
{ id: 3, name: 'Кристина', rating: 5, text: 'Любимый аромат, всегда покупаю снова и снова.' }
]
},
{
id: 25,
name: 'GIVENCHY GENTLEMAN BOISEE EAU DE PARFUM',
price: '1000',
description: 'Парфюмерная вода',
image: '/parf/5.jfif',
category: 2,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Ирина', rating: 5, text: 'Превосходный аромат, очень мужественный.' },
{ id: 2, name: 'Александр', rating: 4, text: 'Отличное сочетание нот, нравится!' },
{ id: 3, name: 'Екатерина', rating: 5, text: 'Мой муж просто обожает этот аромат!' }
]
},
{
id: 26,
name: 'PACO RABANNE 1 MILLION EAU DE TOILETTE ',
price: '2000',
description: 'Туалетная вода',
image: '/parf/6.jfif',
category: 2,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Максим', rating: 5, text: 'Отличный аромат, всегда получаю комплименты.' },
{ id: 2, name: 'Надежда', rating: 4, text: 'Мой муж обожает этот запах, покупаю его постоянно.' },
{ id: 3, name: 'Игорь', rating: 5, text: 'Очень стойкий аромат, нравится его насыщенность.' }
]
},
{
id: 27,
name: 'TIZIANA TERENZI ANDROMEDA EXTRAIT DE PARFUM ',
price: '3000',
description: 'Духи',
image: '/parf/7.jpg',
category: 3,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Олеся', rating: 5, text: 'Эти духи просто великолепны, совершенно особенные.' },
{ id: 2, name: 'Дмитрий', rating: 4, text: 'Покупал как подарок, получил очень положительные отзывы.' },
{ id: 3, name: 'Анастасия', rating: 5, text: 'Идеальный аромат для особых моментов, я влюблена в него.' }
]
},
{
id: 28,
name: 'V CANTO LEON EXTRAIT DE PARFUM ',
price: '4000',
description: 'Духи',
image: '/parf/8.jfif',
category: 3,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Александра', rating: 5, text: 'Лучшие духи из всех, что я пробовала, просто прекрасны!' },
{ id: 2, name: 'Артемий', rating: 4, text: 'Очень интересный аромат, оставляет впечатление.' },
{ id: 3, name: 'Виктория', rating: 5, text: 'Сложный и утонченный аромат, нравится каждый раз.' }
]
},
{
id: 29,
name: 'PLACE DES LICES VANILE EAU DE PARFUM',
price: '4000',
description: 'Парфюмерная вода',
image: '/parf/9.jfif',
category: 3,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Екатерина', rating: 5, text: 'Аромат просто чудесный, очень нежный и теплый.' },
{ id: 2, name: 'Алексей', rating: 4, text: 'Отличный выбор для романтических вечеров, моя девушка в восторге.' },
{ id: 3, name: 'Марина', rating: 5, text: 'Этот аромат стал моим любимым, я всегда чувствую себя особенно.' }
]
},
{
id: 30,
name: 'MOLINARD THE BASILIC EAU DE PARFUM',
price: '4000',
description: 'Парфюмерная вода',
image: '/parf/10.jfif',
category: 3,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Сергей', rating: 5, text: 'Очень необычный аромат, пряный и свежий одновременно.' },
{ id: 2, name: 'Юлия', rating: 4, text: 'Мне нравится, что этот аромат выделяет меня из толпы, он уникален.' },
{ id: 3, name: 'Денис', rating: 5, text: 'Запах базилика такой яркий и приятный, что я влюбился в него с первого раза.' }
]
},
{
id: 31,
name: 'ERBORIAN CENTELLA CARE ',
price: '1000',
description: 'Флюид против несовершенств для кожи',
image: '/care/1.jpg',
category: 1,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Елена', rating: 5, text: 'Этот флюид помог мне избавиться от прыщей, кожа стала гладкой и чистой.' },
{ id: 2, name: 'Артем', rating: 4, text: 'Использую его регулярно, он действительно улучшает состояние кожи.' },
{ id: 3, name: 'Наталья', rating: 5, text: 'Очень легкий и приятный продукт, хорошо увлажняет и смягчает кожу.' }
]
},
{
id: 32,
name: 'MIXIT YOUR SKIN DEEP CLEANSING OIL ',
price: '1000',
description: 'Гидрофильное масло',
image: '/care/2.jpg',
category: 1,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Анна', rating: 5, text: 'Это масло очищает кожу отлично, а после не остается ощущения сухости.' },
{ id: 2, name: 'Максим', rating: 4, text: 'Хорошее средство для снятия макияжа, кожа после него гладкая и мягкая.' },
{ id: 3, name: 'Евгения', rating: 5, text: 'Мне нравится, что оно не вызывает раздражения и не оставляет жирной пленки.' }
]
},
{
id: 33,
name: 'PAYOT №2 BAUME AROMATIQUE APASANT ',
price: '1000',
description: 'Успокаивающий крем-бальзам для лица',
image: '/care/3.jpg',
category: 1,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Дарья', rating: 5, text: 'Отличный крем для чувствительной кожи, успокаивает раздражения и покраснения.' },
{ id: 2, name: 'Александра', rating: 4, text: 'Мне нравится его текстура и нежный аромат, кожа после него становится мягкой.' },
{ id: 3, name: 'Павел', rating: 5, text: 'Пользуюсь им после бритья, отлично увлажняет и снимает раздражение.' }
]
},
{
id: 34,
name: 'JO MALONE VELVET ROSE & OUD BODY & HAND WASH ',
price: '4000',
description: 'Парфюмированный гель для душа',
image: '/care/4.jpg',
category: 2,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Алина', rating: 5, text: 'Этот гель обладает прекрасным ароматом, кожа после него нежная и приятно пахнет.' },
{ id: 2, name: 'Денис', rating: 4, text: 'Я в восторге от этого геля, аромат настолько насыщенный и долго держится.' },
{ id: 3, name: 'Оксана', rating: 5, text: 'Использую его как гель для душа и средство для рук, отлично увлажняет и питает.' }
]
},
{
id: 35,
name: 'PAYOT SUPREME CRÈME JEUNESSE MAINS ',
price: '1000',
description: 'Крем для рук с антивозрастным комплексом',
image: '/care/5.jpg',
category: 2,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Елена', rating: 5, text: 'Отличный крем для рук, быстро впитывается и долго увлажняет.' },
{ id: 2, name: 'Артем', rating: 4, text: 'Мне нравится его легкая текстура и нежный аромат.' },
{ id: 3, name: 'Наталья', rating: 5, text: 'Использую его каждый день, руки становятся мягкими и гладкими.' }
]
},
{
id: 36,
name: 'GARNIER AMBRE SOLAIRE ИДЕАЛЬНЫЙ ЗАГАР СОЛНЦЕЗАЩИТНОЕ МАСЛО SPF 50 ',
price: '2000',
description: 'Солнцезащитное масло для ровного загара',
image: '/care/6.jpg',
category: 2,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Андрей', rating: 5, text: 'Это масло обеспечивает хорошую защиту от солнца и приятное загарание.' },
{ id: 2, name: 'София', rating: 4, text: 'Мне нравится его текстура, оно не оставляет жирной пленки на коже.' },
{ id: 3, name: 'Игорь', rating: 5, text: 'Отличный выбор для загара, кожа после него мягкая и увлажненная.' }
]
},
{
id: 37,
name: 'BIODERMA SEBIUM GLOBAL',
price: '3000',
description: 'Дерматологический крем',
image: '/care/7.jfif',
category: 3,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Мария', rating: 5, text: 'Отличный крем для проблемной кожи, помогает справиться с высыпаниями.' },
{ id: 2, name: 'Виктор', rating: 4, text: 'Мне нравится его легкая текстура, он быстро впитывается.' },
{ id: 3, name: 'Елена', rating: 5, text: 'Пользуюсь им уже несколько месяцев, результаты заметны, кожа стала чище.' }
]
},
{
id: 38,
name: 'BIODERMA SENSIBIO H2O REVERSED PUMP ',
price: '4000',
description: 'Мицеллярная вода',
image: '/care/8.jfif',
category: 3,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Анастасия', rating: 5, text: 'Отличная мицеллярная вода, снимает макияж даже с водостойкой туши.' },
{ id: 2, name: 'Денис', rating: 4, text: 'Мне нравится, как она освежает кожу, не оставляя ощущения сухости.' },
{ id: 3, name: 'Екатерина', rating: 5, text: 'Любимый продукт для снятия макияжа, не раздражает даже чувствительную кожу.' }
]
},
{
id: 39,
name: 'URIAGE EAU THERMALE WATER EYE CONTOUR CREAM ',
price: '4000',
description: 'Увлажняющий крем контура глаз',
image: '/care/9.jfif',
category: 3,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Александра', rating: 5, text: 'Этот крем прекрасно увлажняет кожу вокруг глаз, уменьшает отечность и темные круги.' },
{ id: 2, name: 'Артем', rating: 4, text: 'Мне нравится его легкая текстура и то, как быстро он впитывается.' },
{ id: 3, name: 'Валентина', rating: 5, text: 'Пользуюсь им уже несколько месяцев, результаты заметны, кожа стала более упругой.' }
]
},
{
id: 40,
name: 'URIAGE HYSEAC PURIFYING TONER ',
price: '4000',
description: 'Очищающий тоник',
image: '/care/10.jfif',
category: 3,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Ирина', rating: 5, text: 'Отличный тоник для жирной кожи, помогает справиться с блеском и уменьшить поры.' },
{ id: 2, name: 'Кристина', rating: 4, text: 'Мне нравится, как он освежает кожу, удаляя остатки макияжа и загрязнения.' },
{ id: 3, name: 'Марина', rating: 5, text: 'Использую его вместе с другими средствами из серии, результаты заметны через несколько дней.' }
]
},
{
id: 11,
name: 'CLINIQUE LASH POWER MASCARA',
price: '1000',
description: 'Влагостойкая тушь для ресниц',
image: '/dec/1.jpg',
category: 1,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Елена', rating: 5, text: 'Отличная тушь, не осыпается, создает объемные ресницы.' },
{ id: 2, name: 'Виктория', rating: 4, text: 'Мне нравится, как она делает ресницы длинными и черными.' },
{ id: 3, name: 'Татьяна', rating: 5, text: 'Пользуюсь этой тушью уже долгое время, она идеально подходит для повседневного макияжа.' }
]
},
{
id: 12,
name: 'TOM FORD EYE COLOR QUAD CRÈME ',
price: '1000',
description: 'Кремовые тени для век',
image: '/dec/2.jpg',
category: 1,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Алина', rating: 5, text: 'Прекрасные оттенки, легко наносятся и держатся весь день.' },
{ id: 2, name: 'София', rating: 4, text: 'Мне нравится, как они смотрятся на моих веках, хорошо сочетаются друг с другом.' },
{ id: 3, name: 'Маргарита', rating: 5, text: 'Отличное качество, удобные оттенки, использую их как для повседневного макияжа, так и для вечернего.' }
]
},
{
id: 13,
name: 'BEAUTY BOMB BELLATRIS EYESHADOW PALETTE ',
price: '1000',
description: 'Палетка теней',
image: '/dec/3.jpg',
category: 1,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Екатерина', rating: 5, text: 'Отличная палетка, много разных оттенков, легко сочетаются между собой.' },
{ id: 2, name: 'Оксана', rating: 4, text: 'Мне нравится, как долго остается на веках, не скатывается и не осыпается.' },
{ id: 3, name: 'Наталья', rating: 5, text: 'Пользуюсь ей уже несколько месяцев, удобная упаковка, хорошее качество.' }
]
},
{
id: 14,
name: 'MAC LUSTREGLASS SHEER-SHINE LIPSTICK ',
price: '4000',
description: 'Легкая губная помада',
image: '/dec/4.jpg',
category: 2,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Анастасия', rating: 5, text: 'Отличная помада, приятный оттенок, не сушит губы.' },
{ id: 2, name: 'Ольга', rating: 4, text: 'Мне нравится, как она выглядит на губах, легкая текстура.' },
{ id: 3, name: 'Евгения', rating: 5, text: 'Пользуюсь только этой помадой, отличное качество.' }
]
},
{
id: 15,
name: 'CLARINS WATER LIP STAIN ',
price: '1000',
description: 'Пигмент для губ',
image: '/dec/5.jfif',
category: 2,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Александра', rating: 5, text: 'Отличный стойкий пигмент, не оставляет следов на чашечке чашки.' },
{ id: 2, name: 'Ирина', rating: 4, text: 'Мне нравится, как он выглядит на губах, приятное ощущение.' },
{ id: 3, name: 'Валентина', rating: 5, text: 'Пользуюсь уже несколько месяцев, отличное качество, не вызывает аллергии.' }
]
},
{
id: 16,
name: 'ESTEE LAUDER PURE COLOR EXPLICIT SLICK SHINE LIPSTICK ',
price: '2000',
description: 'Губная помада с сиюящим финишем',
image: '/dec/6.jpg',
category: 2,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Алина', rating: 5, text: 'Отличная помада, приятный блеск, хорошо держится на губах.' },
{ id: 2, name: 'Алена', rating: 4, text: 'Мне нравится, как она увлажняет губы и придает им объем.' },
{ id: 3, name: 'Маргарита', rating: 5, text: 'Пользуюсь уже долгое время, отличное качество.' }
]
},
{
id: 17,
name: 'LEI КЛИППЕР МАНИКЮРНЫЙ СРЕДНИЙ ЧЕРНЫЙ ',
price: '3000',
description: 'Клиппер для ногтей',
image: '/dec/7.jpg',
category: 3,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Елена', rating: 5, text: 'Отличный клиппер, острые лезвия, удобно держать в руке.' },
{ id: 2, name: 'Владимир', rating: 4, text: 'Нормальный клиппер за свои деньги, качество соответствует цене.' },
{ id: 3, name: 'Татьяна', rating: 5, text: 'Пользуюсь уже много лет, всегда довольна результатом.' }
]
},
{
id: 18,
name: 'EVA MOSAIC TOP AND BASE ОСНОВА ПОД ЛАК "СИЛА АЛМАЗА" ',
price: '4000',
description: 'Основа под лак',
image: '/dec/8.jpg',
category: 3,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Оксана', rating: 5, text: 'Отличная основа под лак, ускоряет сушку, улучшает стойкость.' },
{ id: 2, name: 'Ольга', rating: 4, text: 'Хорошая основа, но цена немного высоковата.' },
{ id: 3, name: 'Ирина', rating: 5, text: 'Люблю эту основу, всегда использую перед нанесением лака.' }
]
},
{
id: 19,
name: 'STELLARY NAIL STUDIO NAIL POLISH',
price: '4000',
description: 'Лак для ногтей',
image: '/dec/9.jpg',
category: 3,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Мария', rating: 5, text: 'Отличный лак, насыщенные оттенки, долго держится.' },
{ id: 2, name: 'Виктория', rating: 4, text: 'Хорошее качество, но немного дорого.' },
{ id: 3, name: 'Елена', rating: 5, text: 'Люблю этот лак, у меня уже несколько оттенков.' }
]
},
{
id: 20,
name: 'SOLOMEYA CUTICLE AWAY GEL ',
price: '4000',
description: 'Гель для удаления кутикулы',
image: '/dec/10.jfif',
category: 3,
sku: '12345',
stock: 10,
reviews: [
{ id: 1, name: 'Анна', rating: 5, text: 'Отличный гель, мягко удаляет кутикулу без травмирования кожи.' },
{ id: 2, name: 'Александра', rating: 4, text: 'Хороший эффект, но не нравится запах.' },
{ id: 3, name: 'София', rating: 5, text: 'Пользуюсь уже долгое время, отличный результат.' }
]
},] 
  },
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, product) {
      const index = state.cart.findIndex(item => item.id === product.id);
      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--;
        } else {
          state.cart.splice(index, 1);
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
    addToFavorites(state, product) {
      if (!state.favorites.find(item => item.id === product.id)) {
        state.favorites.push(product);
      }
    },
    removeFromFavorites(state, product) {
      state.favorites = state.favorites.filter(item => item.id !== product.id);
    },
    increaseQuantity(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    decreaseQuantity(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
      }
    },
    setProducts(state, products) {
      state.products = products; 
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, product) {
      commit('removeFromCart', product);
    },
    clearCart({ commit }) {
      commit('clearCart');
    },
    addToFavorites({ commit }, product) {
      commit('addToFavorites', product);
    },
    removeFromFavorites({ commit }, product) {
      commit('removeFromFavorites', product);
    },
    increaseQuantity({ commit }, product) {
      commit('increaseQuantity', product);
    },
    decreaseQuantity({ commit }, product) {
      commit('decreaseQuantity', product);
    },
    fetchProducts({ commit }) {
        const products = [
          {
            id: 1,
            name: 'MIXIT RE:START KERATIN BOMB SHAMPOO',
            price: '1000',
            description: 'Восстанавливающий шампунь',
            image: '/hair/1.jpg',
            sku: '12345',
            stock: 10,
            reviews: [
              { id: 1, name: 'Алексей', rating: 5, text: 'Отличный шампунь!' },
              { id: 2, name: 'Мария', rating: 4, text: 'Хороший шампунь, но дорого.' },
              { id: 3, name: 'Ольга', rating: 5, text: 'Очень довольна покупкой!' }
            ]
          },
          {
            id: 51,
            name: 'ПОДАРОЧНАЯ КАРТА НА 5000₽',
            price: '5000',
            description: 'Подарочная карта',
            image: '/card/1.png',
            category: 1,
            sku: '12345',
              stock: 10,
              reviews: [
              { id: 1, name: 'Григорий', rating: 5, text: 'Отличная карта, удобно. Когда не знаешь что подарить то это отличное решение.' },
              { id: 2, name: 'Ольга', rating: 4, text: 'Удобно, хороший подарок на все случаи жизни.' },
              { id: 3, name: 'Елена', rating: 5, text: 'Все хорошо.' }
            ]
          },
          {
            id: 52,
            name: 'ПОДАРОЧНАЯ КАРТА НА 4000₽',
            price: '4000',
            description: 'Подарочная карта',
            image: '/card/2.png',
            category: 1,
            sku: '12345',
              stock: 10,
              reviews: [
              { id: 1, name: 'Алина', rating: 5, text: 'Приятный дизайн.' },
              { id: 2, name: 'Мария', rating: 4, text: 'Хороший подарок.' },
              { id: 3, name: 'Оксана', rating: 5, text: 'Отличный подарок.' }
            ]
          },
          {
            id: 53,
            name: 'ПОДАРОЧНАЯ КАРТА НА 3000₽',
            price: '3000',
            description: 'Подарочная карта',
            image: '/card/3.png',
            category: 1,
            sku: '12345',
              stock: 10,
              reviews: [
              { id: 1, name: 'Владимир', rating: 5, text: 'Отличное решение для подарка.' },
              { id: 2, name: 'Анастасия', rating: 4, text: 'Все хорошо.' },
              { id: 3, name: 'Светлана', rating: 5, text: 'Очень довольна картой!' }
            ]
          },
          {
            id: 2,
            name: 'CONCEPT METAL DETOX SHAMPOO',
            price: '1000',
            description: 'Хелатный шампунь для волос',
            image: '/hair/2.jpg',
            sku: '12346',
            stock: 5,
            reviews: [
              { id: 1, name: 'Иван', rating: 4, text: 'Хороший шампунь.' },
              { id: 2, name: 'Наталья', rating: 3, text: 'Не понравился запах.' },
              { id: 3, name: 'Светлана', rating: 5, text: 'Рекомендую всем!' }
            ]
          },
          {
    id: 3,
    name: 'PHYTO PURPLE NO YELLOW SHAMPOO',
    price: '1000',
    description: 'Шампунь против желтизны',
    image: '/hair/3.jpg',
    category: 1,
    sku: '12346',
    stock: 5,
    reviews: [
      { id: 1, name: 'Елена', rating: 5, text: 'Отлично справляется с желтизной волос. Рекомендую!' },
      { id: 2, name: 'Андрей', rating: 4, text: 'Неплохой результат после нескольких применений.' },
      { id: 3, name: 'Олег', rating: 5, text: 'Этот шампунь стал моим спасением! Спасибо производителям!' }
    ]
  },
  {
    id: 4,
    name: 'OLLIN PROFESSIONAL MEGAPOLIS BLACK RICE CONDITIONER',
    price: '4000',
    description: 'Кондиционер для волос',
    image: '/hair/4.jpg',
    category: 2,
    sku: '12346',
    stock: 5,
    reviews: [
      { id: 1, name: 'Наталья', rating: 5, text: 'Этот кондиционер делает волосы мягкими и блестящими!' },
      { id: 2, name: 'Александр', rating: 4, text: 'Приятный запах и хороший результат.' },
      { id: 3, name: 'Марина', rating: 4, text: 'Мои волосы стали менее ломкими после применения этого кондиционера.' }
    ]
  },
  {
    id: 5,
    name: 'ESTEL ME ЭТО ЦВЕТ + ЛАМИНИРОВАНИЕ КОНДИЦИОНЕР',
    price: '1000',
    description: 'Кондиционер для окрашенных волос',
    image: '/hair/5.jpg',
    category: 2,
    sku: '12346',
    stock: 5,
    reviews: [
      { id: 1, name: 'Ирина', rating: 5, text: 'Мой цвет волос стал более ярким и насыщенным благодаря этому кондиционеру!' },
      { id: 2, name: 'Дмитрий', rating: 4, text: 'Хороший результат после нескольких применений.' },
      { id: 3, name: 'Анастасия', rating: 5, text: 'Очень довольна этим кондиционером! Рекомендую всем!' }
    ]
  },
  {
    id: 6,
    name: 'LAVANT LABORATORY WE ARE VEGAN! AVOCADO HAIR BALM',
    price: '2000',
    description: 'Питательный бальзам с авокадо',
    image: '/hair/6.jpg',
    category: 2,
    sku: '12346',
    stock: 5,
    reviews: [
      { id: 1, name: 'Екатерина', rating: 5, text: 'Отличный бальзам, сделал мои волосы мягкими и блестящими!' },
      { id: 2, name: 'Артем', rating: 4, text: 'Приятный аромат и хороший эффект после применения.' },
      { id: 3, name: 'София', rating: 5, text: 'Мои волосы стали более послушными и ухоженными. Спасибо производителю!' }
    ]
  },
  {
    id: 7,
    name: 'CONCEPT SALON TOTAL COLOR SAVER MASK',
    price: '3000',
    description: 'Маска для окрашенных волос',
    image: '/hair/7.jpg',
    category: 3,
    sku: '12346',
    stock: 5,
    reviews: [
      { id: 1, name: 'Максим', rating: 5, text: 'Эта маска помогла сохранить яркость моего цвета волос. Очень доволен результатом!' },
      { id: 2, name: 'Алина', rating: 4, text: 'Хороший увлажняющий эффект и приятный аромат.' },
      { id: 3, name: 'Елена', rating: 5, text: 'Отличная маска, мои волосы стали более гладкими и мягкими!' }
    ]
  },
  {
    id: 8,
    name: 'GARNIER FRUCTIS SOS ВОССТАНОВЛЕНИЕ КЕРАТИН ФИЛЛЕР',
    price: '4000',
    description: 'Смываемая сыворотка для волос',
    image: '/hair/8.jpg',
    category: 3,
    sku: '12346',
    stock: 5,
    reviews: [
      { id: 1, name: 'Павел', rating: 4, text: 'Приятная текстура и быстрый эффект от использования.' },
      { id: 2, name: 'Виктория', rating: 3, text: 'Не заметила значительных изменений после применения.' },
      { id: 3, name: 'Антон', rating: 5, text: 'Моя волосы стали более гладкими и блестящими. Очень доволен!' }
    ]
  },
  {
    id: 9,
    name: 'CONCEPT MOSCOW FUSION DETOX BALANCE MASK',
    price: '4000',
    description: 'Восстанавливающая маска',
    image: '/hair/9.jpg',
    category: 3,
    sku: '12346',
    stock: 5,
    reviews: [
      { id: 1, name: 'Олег', rating: 5, text: 'Отличная маска для восстановления волос. Рекомендую!' },
      { id: 2, name: 'Анна', rating: 4, text: 'Помогла сделать волосы более послушными и мягкими.' },
      { id: 3, name: 'Денис', rating: 5, text: 'Мои волосы стали более здоровыми и сильными после применения этой маски!' }
    ]
  },
  {
    id: 10,
    name: 'CAFE MIMI PROFESSIONAL КЕРАТИН МАСКА',
    price: '4000',
    description: 'Маска для поврежденных волос',
    image: '/hair/10.jpg',
    category: 3,
    sku: '12346',
    stock: 5,
    reviews: [
      { id: 1, name: 'Елена', rating: 5, text: 'Эта маска сделала мои волосы невероятно мягкими и послушными!' },
      { id: 2, name: 'Андрей', rating: 4, text: 'Приятный запах и отличный результат после применения.' },
      { id: 3, name: 'Ксения', rating: 5, text: 'Мои волосы стали заметно здоровее и блестящие. Спасибо производителю за отличный продукт!' }
    ]
  },
  {
    id: 21,
    name: 'JUSBOX NIGHT FLOW EAU DE PARFUM',
    price: '1000',
    description: 'Парфюмерная вода',
    image: '/parf/1.jfif',
    category: 1,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Дмитрий', rating: 5, text: 'Отличный аромат, держится на коже долго!' },
      { id: 2, name: 'Маргарита', rating: 4, text: 'Приятный и насыщенный запах.' },
      { id: 3, name: 'Ирина', rating: 5, text: 'Мой новый любимый аромат! Очень довольна покупкой.' }
    ]
  },
  {
    id: 22,
    name: 'OBVIOUS UNE PISTACHE EAU DE PARFUM',
    price: '1000',
    description: 'Парфюмерная вода',
    image: '/parf/2.jpg',
    category: 1,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Валентина', rating: 4, text: 'Хороший аромат, немного сладковатый.' },
      { id: 2, name: 'Евгений', rating: 3, text: 'Не совсем мой тип аромата, но качество хорошее.' },
      { id: 3, name: 'Татьяна', rating: 5, text: 'Прекрасный аромат, он меня моментально завораживает!' }
    ]
  },
  {
    id: 23,
    name: 'FUGAZZI CASH FLOWER EXTRAIT DE PARFUM',
    price: '1000',
    description: 'Духи',
    image: '/parf/3.jpg',
    category: 1,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Михаил', rating: 5, text: 'Отличные духи, приятный аромат.' },
      { id: 2, name: 'Анна', rating: 4, text: 'Долго держится на коже, нравится!' },
      { id: 3, name: 'Елена', rating: 5, text: 'Эти духи стали моим любимым ароматом, носится идеально!' }
    ]
  },
  {
    id: 24,
    name: 'ANTONIO BANDERAS THE ICON ELIXIR EAU DE PARFUM',
    price: '4000',
    description: 'Парфюмерная вода',
    image: '/parf/4.jfif',
    category: 2,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Дарья', rating: 5, text: 'Отличный выбор для вечера, аромат держится долго.' },
      { id: 2, name: 'Артем', rating: 4, text: 'Приятный аромат, прекрасно подходит для особых случаев.' },
      { id: 3, name: 'Кристина', rating: 5, text: 'Любимый аромат, всегда покупаю снова и снова.' }
    ]
  },
  {
    id: 25,
    name: 'GIVENCHY GENTLEMAN BOISEE EAU DE PARFUM',
    price: '1000',
    description: 'Парфюмерная вода',
    image: '/parf/5.jfif',
    category: 2,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Ирина', rating: 5, text: 'Превосходный аромат, очень мужественный.' },
      { id: 2, name: 'Александр', rating: 4, text: 'Отличное сочетание нот, нравится!' },
      { id: 3, name: 'Екатерина', rating: 5, text: 'Мой муж просто обожает этот аромат!' }
    ]
  },
  {
    id: 26,
    name: 'PACO RABANNE 1 MILLION EAU DE TOILETTE ',
    price: '2000',
    description: 'Туалетная вода',
    image: '/parf/6.jfif',
    category: 2,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Максим', rating: 5, text: 'Отличный аромат, всегда получаю комплименты.' },
      { id: 2, name: 'Надежда', rating: 4, text: 'Мой муж обожает этот запах, покупаю его постоянно.' },
      { id: 3, name: 'Игорь', rating: 5, text: 'Очень стойкий аромат, нравится его насыщенность.' }
    ]
  },
  {
    id: 27,
    name: 'TIZIANA TERENZI ANDROMEDA EXTRAIT DE PARFUM ',
    price: '3000',
    description: 'Духи',
    image: '/parf/7.jpg',
    category: 3,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Олеся', rating: 5, text: 'Эти духи просто великолепны, совершенно особенные.' },
      { id: 2, name: 'Дмитрий', rating: 4, text: 'Покупал как подарок, получил очень положительные отзывы.' },
      { id: 3, name: 'Анастасия', rating: 5, text: 'Идеальный аромат для особых моментов, я влюблена в него.' }
    ]
  },
  {
    id: 28,
    name: 'V CANTO LEON EXTRAIT DE PARFUM ',
    price: '4000',
    description: 'Духи',
    image: '/parf/8.jfif',
    category: 3,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Александра', rating: 5, text: 'Лучшие духи из всех, что я пробовала, просто прекрасны!' },
      { id: 2, name: 'Артемий', rating: 4, text: 'Очень интересный аромат, оставляет впечатление.' },
      { id: 3, name: 'Виктория', rating: 5, text: 'Сложный и утонченный аромат, нравится каждый раз.' }
    ]
  },
  {
    id: 29,
    name: 'PLACE DES LICES VANILE EAU DE PARFUM',
    price: '4000',
    description: 'Парфюмерная вода',
    image: '/parf/9.jfif',
    category: 3,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Екатерина', rating: 5, text: 'Аромат просто чудесный, очень нежный и теплый.' },
      { id: 2, name: 'Алексей', rating: 4, text: 'Отличный выбор для романтических вечеров, моя девушка в восторге.' },
      { id: 3, name: 'Марина', rating: 5, text: 'Этот аромат стал моим любимым, я всегда чувствую себя особенно.' }
    ]
  },
  {
    id: 30,
    name: 'MOLINARD THE BASILIC EAU DE PARFUM',
    price: '4000',
    description: 'Парфюмерная вода',
    image: '/parf/10.jfif',
    category: 3,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Сергей', rating: 5, text: 'Очень необычный аромат, пряный и свежий одновременно.' },
      { id: 2, name: 'Юлия', rating: 4, text: 'Мне нравится, что этот аромат выделяет меня из толпы, он уникален.' },
      { id: 3, name: 'Денис', rating: 5, text: 'Запах базилика такой яркий и приятный, что я влюбился в него с первого раза.' }
    ]
  },
  {
    id: 31,
    name: 'ERBORIAN CENTELLA CARE ',
    price: '1000',
    description: 'Флюид против несовершенств для кожи',
    image: '/care/1.jpg',
    category: 1,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Елена', rating: 5, text: 'Этот флюид помог мне избавиться от прыщей, кожа стала гладкой и чистой.' },
      { id: 2, name: 'Артем', rating: 4, text: 'Использую его регулярно, он действительно улучшает состояние кожи.' },
      { id: 3, name: 'Наталья', rating: 5, text: 'Очень легкий и приятный продукт, хорошо увлажняет и смягчает кожу.' }
    ]
  },
  {
    id: 32,
    name: 'MIXIT YOUR SKIN DEEP CLEANSING OIL ',
    price: '1000',
    description: 'Гидрофильное масло',
    image: '/care/2.jpg',
    category: 1,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Анна', rating: 5, text: 'Это масло очищает кожу отлично, а после не остается ощущения сухости.' },
      { id: 2, name: 'Максим', rating: 4, text: 'Хорошее средство для снятия макияжа, кожа после него гладкая и мягкая.' },
      { id: 3, name: 'Евгения', rating: 5, text: 'Мне нравится, что оно не вызывает раздражения и не оставляет жирной пленки.' }
    ]
  },
  {
    id: 33,
    name: 'PAYOT №2 BAUME AROMATIQUE APASANT ',
    price: '1000',
    description: 'Успокаивающий крем-бальзам для лица',
    image: '/care/3.jpg',
    category: 1,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Дарья', rating: 5, text: 'Отличный крем для чувствительной кожи, успокаивает раздражения и покраснения.' },
      { id: 2, name: 'Александра', rating: 4, text: 'Мне нравится его текстура и нежный аромат, кожа после него становится мягкой.' },
      { id: 3, name: 'Павел', rating: 5, text: 'Пользуюсь им после бритья, отлично увлажняет и снимает раздражение.' }
    ]
  },
  {
    id: 34,
    name: 'JO MALONE VELVET ROSE & OUD BODY & HAND WASH ',
    price: '4000',
    description: 'Парфюмированный гель для душа',
    image: '/care/4.jpg',
    category: 2,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Алина', rating: 5, text: 'Этот гель обладает прекрасным ароматом, кожа после него нежная и приятно пахнет.' },
      { id: 2, name: 'Денис', rating: 4, text: 'Я в восторге от этого геля, аромат настолько насыщенный и долго держится.' },
      { id: 3, name: 'Оксана', rating: 5, text: 'Использую его как гель для душа и средство для рук, отлично увлажняет и питает.' }
    ]
  },
  {
    id: 35,
    name: 'PAYOT SUPREME CRÈME JEUNESSE MAINS ',
    price: '1000',
    description: 'Крем для рук с антивозрастным комплексом',
    image: '/care/5.jpg',
    category: 2,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Елена', rating: 5, text: 'Отличный крем для рук, быстро впитывается и долго увлажняет.' },
      { id: 2, name: 'Артем', rating: 4, text: 'Мне нравится его легкая текстура и нежный аромат.' },
      { id: 3, name: 'Наталья', rating: 5, text: 'Использую его каждый день, руки становятся мягкими и гладкими.' }
    ]
  },
  {
    id: 36,
    name: 'GARNIER AMBRE SOLAIRE ИДЕАЛЬНЫЙ ЗАГАР СОЛНЦЕЗАЩИТНОЕ МАСЛО SPF 50 ',
    price: '2000',
    description: 'Солнцезащитное масло для ровного загара',
    image: '/care/6.jpg',
    category: 2,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Андрей', rating: 5, text: 'Это масло обеспечивает хорошую защиту от солнца и приятное загарание.' },
      { id: 2, name: 'София', rating: 4, text: 'Мне нравится его текстура, оно не оставляет жирной пленки на коже.' },
      { id: 3, name: 'Игорь', rating: 5, text: 'Отличный выбор для загара, кожа после него мягкая и увлажненная.' }
    ]
  },
  {
    id: 37,
    name: 'BIODERMA SEBIUM GLOBAL',
    price: '3000',
    description: 'Дерматологический крем',
    image: '/care/7.jfif',
    category: 3,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Мария', rating: 5, text: 'Отличный крем для проблемной кожи, помогает справиться с высыпаниями.' },
      { id: 2, name: 'Виктор', rating: 4, text: 'Мне нравится его легкая текстура, он быстро впитывается.' },
      { id: 3, name: 'Елена', rating: 5, text: 'Пользуюсь им уже несколько месяцев, результаты заметны, кожа стала чище.' }
    ]
  },
  {
    id: 38,
    name: 'BIODERMA SENSIBIO H2O REVERSED PUMP ',
    price: '4000',
    description: 'Мицеллярная вода',
    image: '/care/8.jfif',
    category: 3,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Анастасия', rating: 5, text: 'Отличная мицеллярная вода, снимает макияж даже с водостойкой туши.' },
      { id: 2, name: 'Денис', rating: 4, text: 'Мне нравится, как она освежает кожу, не оставляя ощущения сухости.' },
      { id: 3, name: 'Екатерина', rating: 5, text: 'Любимый продукт для снятия макияжа, не раздражает даже чувствительную кожу.' }
    ]
  },
  {
    id: 39,
    name: 'URIAGE EAU THERMALE WATER EYE CONTOUR CREAM ',
    price: '4000',
    description: 'Увлажняющий крем контура глаз',
    image: '/care/9.jfif',
    category: 3,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Александра', rating: 5, text: 'Этот крем прекрасно увлажняет кожу вокруг глаз, уменьшает отечность и темные круги.' },
      { id: 2, name: 'Артем', rating: 4, text: 'Мне нравится его легкая текстура и то, как быстро он впитывается.' },
      { id: 3, name: 'Валентина', rating: 5, text: 'Пользуюсь им уже несколько месяцев, результаты заметны, кожа стала более упругой.' }
    ]
  },
  {
    id: 40,
    name: 'URIAGE HYSEAC PURIFYING TONER ',
    price: '4000',
    description: 'Очищающий тоник',
    image: '/care/10.jfif',
    category: 3,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Ирина', rating: 5, text: 'Отличный тоник для жирной кожи, помогает справиться с блеском и уменьшить поры.' },
      { id: 2, name: 'Кристина', rating: 4, text: 'Мне нравится, как он освежает кожу, удаляя остатки макияжа и загрязнения.' },
      { id: 3, name: 'Марина', rating: 5, text: 'Использую его вместе с другими средствами из серии, результаты заметны через несколько дней.' }
    ]
  },
  {
    id: 11,
    name: 'CLINIQUE LASH POWER MASCARA',
    price: '1000',
    description: 'Влагостойкая тушь для ресниц',
    image: '/dec/1.jpg',
    category: 1,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Елена', rating: 5, text: 'Отличная тушь, не осыпается, создает объемные ресницы.' },
      { id: 2, name: 'Виктория', rating: 4, text: 'Мне нравится, как она делает ресницы длинными и черными.' },
      { id: 3, name: 'Татьяна', rating: 5, text: 'Пользуюсь этой тушью уже долгое время, она идеально подходит для повседневного макияжа.' }
    ]
  },
  {
    id: 12,
    name: 'TOM FORD EYE COLOR QUAD CRÈME ',
    price: '1000',
    description: 'Кремовые тени для век',
    image: '/dec/2.jpg',
    category: 1,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Алина', rating: 5, text: 'Прекрасные оттенки, легко наносятся и держатся весь день.' },
      { id: 2, name: 'София', rating: 4, text: 'Мне нравится, как они смотрятся на моих веках, хорошо сочетаются друг с другом.' },
      { id: 3, name: 'Маргарита', rating: 5, text: 'Отличное качество, удобные оттенки, использую их как для повседневного макияжа, так и для вечернего.' }
    ]
  },
  {
    id: 13,
    name: 'BEAUTY BOMB BELLATRIS EYESHADOW PALETTE ',
    price: '1000',
    description: 'Палетка теней',
    image: '/dec/3.jpg',
    category: 1,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Екатерина', rating: 5, text: 'Отличная палетка, много разных оттенков, легко сочетаются между собой.' },
      { id: 2, name: 'Оксана', rating: 4, text: 'Мне нравится, как долго остается на веках, не скатывается и не осыпается.' },
      { id: 3, name: 'Наталья', rating: 5, text: 'Пользуюсь ей уже несколько месяцев, удобная упаковка, хорошее качество.' }
    ]
  },
  {
    id: 14,
    name: 'MAC LUSTREGLASS SHEER-SHINE LIPSTICK ',
    price: '4000',
    description: 'Легкая губная помада',
    image: '/dec/4.jpg',
    category: 2,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Анастасия', rating: 5, text: 'Отличная помада, приятный оттенок, не сушит губы.' },
      { id: 2, name: 'Ольга', rating: 4, text: 'Мне нравится, как она выглядит на губах, легкая текстура.' },
      { id: 3, name: 'Евгения', rating: 5, text: 'Пользуюсь только этой помадой, отличное качество.' }
    ]
  },
  {
    id: 15,
    name: 'CLARINS WATER LIP STAIN ',
    price: '1000',
    description: 'Пигмент для губ',
    image: '/dec/5.jfif',
    category: 2,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Александра', rating: 5, text: 'Отличный стойкий пигмент, не оставляет следов на чашечке чашки.' },
      { id: 2, name: 'Ирина', rating: 4, text: 'Мне нравится, как он выглядит на губах, приятное ощущение.' },
      { id: 3, name: 'Валентина', rating: 5, text: 'Пользуюсь уже несколько месяцев, отличное качество, не вызывает аллергии.' }
    ]
  },
  {
    id: 16,
    name: 'ESTEE LAUDER PURE COLOR EXPLICIT SLICK SHINE LIPSTICK ',
    price: '2000',
    description: 'Губная помада с сиюящим финишем',
    image: '/dec/6.jpg',
    category: 2,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Алина', rating: 5, text: 'Отличная помада, приятный блеск, хорошо держится на губах.' },
      { id: 2, name: 'Алена', rating: 4, text: 'Мне нравится, как она увлажняет губы и придает им объем.' },
      { id: 3, name: 'Маргарита', rating: 5, text: 'Пользуюсь уже долгое время, отличное качество.' }
    ]
  },
  {
    id: 17,
    name: 'LEI КЛИППЕР МАНИКЮРНЫЙ СРЕДНИЙ ЧЕРНЫЙ ',
    price: '3000',
    description: 'Клиппер для ногтей',
    image: '/dec/7.jpg',
    category: 3,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Елена', rating: 5, text: 'Отличный клиппер, острые лезвия, удобно держать в руке.' },
      { id: 2, name: 'Владимир', rating: 4, text: 'Нормальный клиппер за свои деньги, качество соответствует цене.' },
      { id: 3, name: 'Татьяна', rating: 5, text: 'Пользуюсь уже много лет, всегда довольна результатом.' }
    ]
  },
  {
    id: 18,
    name: 'EVA MOSAIC TOP AND BASE ОСНОВА ПОД ЛАК "СИЛА АЛМАЗА" ',
    price: '4000',
    description: 'Основа под лак',
    image: '/dec/8.jpg',
    category: 3,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Оксана', rating: 5, text: 'Отличная основа под лак, ускоряет сушку, улучшает стойкость.' },
      { id: 2, name: 'Ольга', rating: 4, text: 'Хорошая основа, но цена немного высоковата.' },
      { id: 3, name: 'Ирина', rating: 5, text: 'Люблю эту основу, всегда использую перед нанесением лака.' }
    ]
  },
  {
    id: 19,
    name: 'STELLARY NAIL STUDIO NAIL POLISH',
    price: '4000',
    description: 'Лак для ногтей',
    image: '/dec/9.jpg',
    category: 3,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Мария', rating: 5, text: 'Отличный лак, насыщенные оттенки, долго держится.' },
      { id: 2, name: 'Виктория', rating: 4, text: 'Хорошее качество, но немного дорого.' },
      { id: 3, name: 'Елена', rating: 5, text: 'Люблю этот лак, у меня уже несколько оттенков.' }
    ]
  },
  {
    id: 20,
    name: 'SOLOMEYA CUTICLE AWAY GEL ',
    price: '4000',
    description: 'Гель для удаления кутикулы',
    image: '/dec/10.jfif',
    category: 3,
    sku: '12345',
    stock: 10,
    reviews: [
      { id: 1, name: 'Анна', rating: 5, text: 'Отличный гель, мягко удаляет кутикулу без травмирования кожи.' },
      { id: 2, name: 'Александра', rating: 4, text: 'Хороший эффект, но не нравится запах.' },
      { id: 3, name: 'София', rating: 5, text: 'Пользуюсь уже долгое время, отличный результат.' }
    ]
  },
      ];
      console.log('Fetched products:', products); 
  commit('setProducts', products);
}
  },
  getters: {
    cartItems: state => state.cart,
    cartTotal: state => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    calculateItemTotal: () => item => item.price * item.quantity,
    favoriteItems: state => state.favorites,
    searchProducts: state => query => {
      return state.products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  }
});

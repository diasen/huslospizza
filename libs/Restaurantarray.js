const restaurantJson = [
  {
    id: '1',
    name: 'Manstad',
    url: '/restaurants/manstad',
    adress: 'Lervikveien 28, 1626 Manstad',
    phone: '900 00 00',
    src: './images/manstad.jpg',
    about:
      'Vår resturant i Sarpsborg ble nylig åpent og for en velkomst det har vært. Bakgrunnen for at vi valgte å åpne her er på grunn av relasjoner og ikke minst troen på et marked som mangler god italiensk pizza.',
    hours: [
      { onsdag: '12-16' },
      { torsdag: '12-16' },
      { fredag: '12-16' },
      { lørdag: '12-16' },
      { søndag: '12-16' },
    ],
  },
  {
    id: '2',
    name: 'Vikane',
    url: '/restaurants/vikane',
    adress: 'Vikaneveien 325, 1621 Gressvik',
    phone: '900 00 01',
    src: './images/vikane.jpg',
    about:
      'Vår resturant i Sarpsborg ble nylig åpent og for en velkomst det har vært. Bakgrunnen for at vi valgte å åpne her er på grunn av relasjoner og ikke minst troen på et marked som mangler god italiensk pizza.',
    hours: [
      { torsdag: '12-16' },
      { fredag: '12-16' },
      { lørdag: '12-16' },
      { søndag: '12-16' },
    ],
  },
  {
    id: '3',
    name: 'Sarpsborg',
    url: '/restaurants/sarpsborg',
    adress: 'St. Marie gate, 1706 Sarpsborg',
    phone: '900 00 02',
    src: './images/sarpsborg.jpg',
    about:
      'Vår resturant i Sarpsborg ble nylig åpent og for en velkomst det har vært. Bakgrunnen for at vi valgte å åpne her er på grunn av relasjoner og ikke minst troen på et marked som mangler god italiensk pizza.',
    hours: [
      { onsdag: '12-16' },
      { torsdag: '12-16' },
      { fredag: '12-16' },
      { lørdag: '12-16' },
      ,
    ],
  },
];

export default restaurantJson;

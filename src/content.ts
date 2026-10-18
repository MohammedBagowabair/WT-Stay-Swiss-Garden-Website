export const BIZ = {
  name: 'WT Stay – Swiss Garden Residences KL',
  phone: '+60 11-3968 1628', tel: '+601139681628', wa: '601139681628',
  address: '2A, Jalan Galloway, Bukit Bintang, 50150 Kuala Lumpur',
  maps: 'https://www.google.com/maps/place/WT+Stay+%E2%80%93+Swiss+Garden+Residences+KL/@3.1437373,101.7053034,17z',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=3.1437373,101.7053034',
  osm: 'https://www.openstreetmap.org/?mlat=3.1437373&mlon=101.7053034#map=17/3.1437373/101.7053034',
  google: '4.9', trip: '9.4', tripCount: 124,
  tripUrl: 'https://www.trip.com/hotels/kuala-lumpur-hotel-detail-13857551/wt-stay-swiss-garden-residences-kl/',
  heroCredit: 'https://commons.wikimedia.org/wiki/File:Swiss_Garden_Hotel_and_Residence_(Kuala_Lumpur).jpg',
  alorCredit: 'https://commons.wikimedia.org/wiki/File:Jalan_Alor_Kuala_Lumpur.jpg',
}

const en = {
  meta: { title: 'WT Stay – Swiss Garden Residences KL | Apartments in Bukit Bintang, Kuala Lumpur', desc: 'Short-stay apartments at Swiss Garden Residences, 2A Jalan Galloway, Bukit Bintang: a 4-minute walk to Jalan Alor. Pool, gym, sauna, free parking. Rated 4.9 on Google. WhatsApp +60 11-3968 1628.' },
  langLabel: 'BM', langAria: 'BM · Tukar ke Bahasa Melayu',
  a11y: { skip: 'Skip to content', main: 'Main', mobile: 'Menu', menuOpen: 'Open menu', menuClose: 'Close menu', bar: 'Quick contact', pin: 'WT Stay location' },
  nav: [['apartments', 'Apartments'], ['area', 'Area'], ['reviews', 'Reviews'], ['book', 'Book']] as [string, string][],
  cta: 'WhatsApp', call: 'Call', directions: 'Directions',
  hero: {
    kicker: 'Bukit Bintang · Kuala Lumpur',
    h1a: 'Apartments at Swiss Garden Residences,', h1b: '4 minutes from Jalan Alor.',
    sub: 'WT Stay hosts serviced apartments at 2A Jalan Galloway, with the building’s pool, gym and sauna, free parking and luggage storage. Check-in from 3 pm.',
    cta: 'Check availability', cta2: 'WhatsApp the host',
    google: 'on Google', trip: 'on Trip.com', tripReviews: 'reviews',
    photo: 'Swiss Garden Hotel & Residences, Jalan Galloway', credit: 'Photo: Chongkian / Wikimedia Commons, CC BY-SA 4.0',
  },
  apts: {
    kicker: 'Apartments', title: 'Two ways to stay',
    sub: 'Every apartment has air-conditioning, free Wi-Fi, a kitchenette with fridge and stovetop, a private bathroom with bathtub and daily housekeeping.',
    items: [
      { name: 'Deluxe Apartment', beds: '2 king beds + 1 sofa bed', fit: 'For families and groups', img: 'il-living' },
      { name: 'Deluxe Studio Suite', beds: '1 king bed · city view', fit: 'For couples and solo trips', img: 'il-bed' },
    ],
    illus: 'Illustrative photo (Unsplash), not the actual apartment',
    ask: 'Ask for photos of the unit',
    amenTitle: 'In the building',
    amen: ['Outdoor pool & children’s pool', 'Gym', 'Sauna', 'Free on-site parking', 'Luggage storage', 'Lift'],
  },
  area: {
    kicker: 'The area', title: 'Walk to dinner, ride to everything else',
    sub: 'Jalan Galloway is a short walk from the Jalan Alor food street and the Bukit Bintang malls.',
    list: [['Jalan Alor food street', '4 min walk'], ['Berjaya Times Square', '10 min walk'], ['Petaling Street', '1 km'], ['Pavilion Kuala Lumpur', '1.2 km'], ['KLCC Park', '2.6 km']] as [string, string][],
    photo: 'Jalan Alor', credit: 'Photo: Alexander Synaptic / Wikimedia Commons, CC BY-SA 4.0',
  },
  reviews: {
    kicker: 'Guest reviews', title: 'What guests say',
    items: [
      ['Apartment was spotless and clean… Great views of the KL Tower.', 'Mario, Tripadvisor, Jul 2023'],
      ['Emma has her own staff at the building who will provide anything needed, like extra toiletries, water etc. They even have luggage storage which we used.', 'Mario, Tripadvisor, Jul 2023'],
      ['The property was huge enough to accommodate all six of us.', 'Guest review via KAYAK'],
      ['I’ve stayed with WT Stay @ Swiss Garden before and it was a pleasant experience.', 'Guest review via KAYAK'],
    ] as [string, string][],
    more: 'Read reviews on Trip.com',
  },
  rules: {
    title: 'Good to know',
    items: [['Check-in', '3 pm – midnight'], ['Check-out', 'Before 12 noon'], ['Main guest', '18 years or older'], ['Children', 'Welcome'], ['Extra beds & cots', 'Not available'], ['Pets', 'Not allowed']] as [string, string][],
  },
  book: {
    kicker: 'Book direct', title: 'Send your dates on WhatsApp',
    sub: 'Pick your dates and guests and we’ll write the WhatsApp message for you. The host replies with availability and the rate.',
    address: 'Address', phone: 'WhatsApp & phone', maps: 'Open in Google Maps',
    mapAlt: 'Street map of Bukit Bintang with Swiss Garden Residences marked', mapCredit: 'Map © OpenStreetMap contributors',
  },
  enquiry: {
    title: 'Check availability', checkin: 'Check-in', checkout: 'Check-out', guests: 'Guests', unit: 'Apartment', anyUnit: 'Any apartment', send: 'Send on WhatsApp', hint: 'This only opens WhatsApp with your message. Nothing is booked until the host confirms.', preview: 'Message', minus: 'Fewer guests', plus: 'More guests', fmt: 'en-GB',
    nights: (n: number) => `${n} night${n > 1 ? 's' : ''}`,
    msg: (o: { ci: string; co: string; g: number; u: string; n: number }) => `Hi WT Stay, is there an apartment available at Swiss Garden Residences?\nCheck-in: ${o.ci || 'flexible'}\nCheck-out: ${o.co || 'flexible'}${o.n ? ` (${o.n} night${o.n > 1 ? 's' : ''})` : ''}\nGuests: ${o.g}\nApartment: ${o.u}\nThank you!`,
  },
  faq: {
    title: 'Questions',
    items: [
      ['How does check-in work?', 'The host sends check-in instructions before you arrive. One guest arriving at 2 am described them as very easy to follow.'],
      ['Is there parking?', 'Yes, free on-site parking is listed for the property.'],
      ['Can I leave my luggage before check-in or after check-out?', 'Luggage storage is available. Message the host with your times.'],
      ['Can I check in early?', 'Standard check-in is from 3 pm. Ask the host on WhatsApp before you travel; early check-in depends on the unit being ready.'],
    ] as [string, string][],
  },
  footer: { explore: 'Explore', reach: 'Contact', photos: 'Building and street photos via Wikimedia Commons (CC BY-SA 4.0). Apartment photos are illustrative stock images (Unsplash), not the actual units.', pitch: 'Website concept prepared for this business. Not an official site yet — open to making it yours.', pitchLink: 'Contact the designer', rights: 'All rights reserved.', toTop: 'Back to top' },
}
export type Content = typeof en

const ms: Content = {
  meta: { title: 'WT Stay – Swiss Garden Residences KL | Apartmen di Bukit Bintang, Kuala Lumpur', desc: 'Apartmen penginapan jangka pendek di Swiss Garden Residences, 2A Jalan Galloway, Bukit Bintang: 4 minit berjalan kaki ke Jalan Alor. Kolam renang, gim, sauna, parkir percuma. Penarafan 4.9 di Google. WhatsApp +60 11-3968 1628.' },
  langLabel: 'EN', langAria: 'EN · Switch to English',
  a11y: { skip: 'Langkau ke kandungan', main: 'Utama', mobile: 'Menu', menuOpen: 'Buka menu', menuClose: 'Tutup menu', bar: 'Hubungi pantas', pin: 'Lokasi WT Stay' },
  nav: [['apartments', 'Apartmen'], ['area', 'Kawasan'], ['reviews', 'Ulasan'], ['book', 'Tempah']],
  cta: 'WhatsApp', call: 'Telefon', directions: 'Arah',
  hero: {
    kicker: 'Bukit Bintang · Kuala Lumpur',
    h1a: 'Apartmen di Swiss Garden Residences,', h1b: '4 minit dari Jalan Alor.',
    sub: 'WT Stay menyediakan apartmen servis di 2A Jalan Galloway, lengkap dengan kolam renang, gim dan sauna bangunan, parkir percuma dan simpanan bagasi. Daftar masuk dari 3 petang.',
    cta: 'Semak kekosongan', cta2: 'WhatsApp tuan rumah',
    google: 'di Google', trip: 'di Trip.com', tripReviews: 'ulasan',
    photo: 'Swiss Garden Hotel & Residences, Jalan Galloway', credit: 'Foto: Chongkian / Wikimedia Commons, CC BY-SA 4.0',
  },
  apts: {
    kicker: 'Apartmen', title: 'Dua pilihan penginapan',
    sub: 'Setiap apartmen ada penyaman udara, Wi-Fi percuma, dapur kecil dengan peti sejuk dan dapur masak, bilik air sendiri dengan tab mandi serta pengemasan harian.',
    items: [
      { name: 'Deluxe Apartment', beds: '2 katil king + 1 sofa katil', fit: 'Sesuai untuk keluarga dan kumpulan', img: 'il-living' },
      { name: 'Deluxe Studio Suite', beds: '1 katil king · pemandangan bandar', fit: 'Sesuai untuk pasangan dan pelancong solo', img: 'il-bed' },
    ],
    illus: 'Foto ilustrasi (Unsplash), bukan apartmen sebenar',
    ask: 'Minta gambar unit',
    amenTitle: 'Di dalam bangunan',
    amen: ['Kolam renang & kolam kanak-kanak', 'Gim', 'Sauna', 'Parkir percuma', 'Simpanan bagasi', 'Lif'],
  },
  area: {
    kicker: 'Kawasan', title: 'Jalan kaki untuk makan, naik kenderaan ke tempat lain',
    sub: 'Jalan Galloway hanya berjalan kaki sebentar ke Jalan Alor dan pusat beli-belah Bukit Bintang.',
    list: [['Jalan Alor', '4 minit berjalan'], ['Berjaya Times Square', '10 minit berjalan'], ['Petaling Street', '1 km'], ['Pavilion Kuala Lumpur', '1.2 km'], ['Taman KLCC', '2.6 km']],
    photo: 'Jalan Alor', credit: 'Foto: Alexander Synaptic / Wikimedia Commons, CC BY-SA 4.0',
  },
  reviews: {
    kicker: 'Ulasan tetamu', title: 'Kata tetamu',
    items: [
      ['Apartment was spotless and clean… Great views of the KL Tower.', 'Mario, Tripadvisor, Jul 2023'],
      ['Emma has her own staff at the building who will provide anything needed, like extra toiletries, water etc. They even have luggage storage which we used.', 'Mario, Tripadvisor, Jul 2023'],
      ['The property was huge enough to accommodate all six of us.', 'Ulasan tetamu melalui KAYAK'],
      ['I’ve stayed with WT Stay @ Swiss Garden before and it was a pleasant experience.', 'Ulasan tetamu melalui KAYAK'],
    ],
    more: 'Baca ulasan di Trip.com',
  },
  rules: {
    title: 'Perlu tahu',
    items: [['Daftar masuk', '3 petang – 12 malam'], ['Daftar keluar', 'Sebelum 12 tengah hari'], ['Tetamu utama', '18 tahun ke atas'], ['Kanak-kanak', 'Dialu-alukan'], ['Katil tambahan & katil bayi', 'Tiada'], ['Haiwan peliharaan', 'Tidak dibenarkan']],
  },
  book: {
    kicker: 'Tempah terus', title: 'Hantar tarikh anda melalui WhatsApp',
    sub: 'Pilih tarikh dan bilangan tetamu, kami sediakan mesej WhatsApp untuk anda. Tuan rumah akan membalas dengan kekosongan dan harga.',
    address: 'Alamat', phone: 'WhatsApp & telefon', maps: 'Buka di Google Maps',
    mapAlt: 'Peta jalan Bukit Bintang dengan Swiss Garden Residences ditanda', mapCredit: 'Peta © penyumbang OpenStreetMap',
  },
  enquiry: {
    title: 'Semak kekosongan', checkin: 'Daftar masuk', checkout: 'Daftar keluar', guests: 'Tetamu', unit: 'Apartmen', anyUnit: 'Mana-mana apartmen', send: 'Hantar melalui WhatsApp', hint: 'Ini hanya membuka WhatsApp dengan mesej anda. Tiada tempahan dibuat sehingga tuan rumah mengesahkan.', preview: 'Mesej', minus: 'Kurangkan tetamu', plus: 'Tambah tetamu', fmt: 'ms-MY',
    nights: (n: number) => `${n} malam`,
    msg: (o: { ci: string; co: string; g: number; u: string; n: number }) => `Hai WT Stay, ada apartmen kosong di Swiss Garden Residences?\nDaftar masuk: ${o.ci || 'fleksibel'}\nDaftar keluar: ${o.co || 'fleksibel'}${o.n ? ` (${o.n} malam)` : ''}\nTetamu: ${o.g}\nApartmen: ${o.u}\nTerima kasih!`,
  },
  faq: {
    title: 'Soalan',
    items: [
      ['Bagaimana cara daftar masuk?', 'Tuan rumah akan menghantar arahan daftar masuk sebelum anda tiba. Seorang tetamu yang tiba pukul 2 pagi menyifatkannya sangat mudah diikuti.'],
      ['Ada parkir?', 'Ya, parkir percuma di premis disenaraikan untuk hartanah ini.'],
      ['Boleh tinggalkan bagasi sebelum daftar masuk atau selepas daftar keluar?', 'Simpanan bagasi disediakan. Mesej tuan rumah dengan masa anda.'],
      ['Boleh daftar masuk awal?', 'Daftar masuk biasa bermula 3 petang. Tanya tuan rumah melalui WhatsApp sebelum bertolak; daftar masuk awal bergantung pada kesediaan unit.'],
    ],
  },
  footer: { explore: 'Laman', reach: 'Hubungi', photos: 'Foto bangunan dan jalan melalui Wikimedia Commons (CC BY-SA 4.0). Foto apartmen ialah imej stok ilustrasi (Unsplash), bukan unit sebenar.', pitch: 'Konsep laman web disediakan untuk perniagaan ini. Bukan laman rasmi lagi — sedia dijadikan milik anda.', pitchLink: 'Hubungi pereka', rights: 'Hak cipta terpelihara.', toTop: 'Kembali ke atas' },
}
export const content = { en, ms }

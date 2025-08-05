export type CardItem = {
  id: number;
  img: string;
  h1: string;
  para: string;
};

// Array of CardItem
export const cardData: CardItem[] = [
  {
    id: 1,
    img: "https://via.placeholder.com/250x200?text=Card+1",
    h1: "Coach Geyaa",
    para: "Ini adalah deskripsi untuk kartu pertama.",
  },
  {
    id: 2,
    img: "https://via.placeholder.com/250x200?text=Card+2",
    h1: "Kartu Kedua",
    para: "Ini adalah deskripsi untuk kartu kedua.",
  },
  {
    id: 3,
    img: "https://via.placeholder.com/250x200?text=Card+3",
    h1: "Kartu Ketiga",
    para: "Ini adalah deskripsi untuk kartu ketiga.",
  },
];

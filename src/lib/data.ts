export interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const photos: Photo[] = [
  {
    id: 1,
    src: "/images/photo-1.png",
    alt: "Фотограф за работой",
    caption: "Работа на матче",
    category: "process",
  },
  {
    id: 2,
    src: "/images/photo-2.png",
    alt: "Видеосъемка на стадионе",
    caption: "Прямая трансляция",
    category: "process",
  },
  {
    id: 3,
    src: "/images/photo-3.png",
    alt: "Футбольный матч",
    caption: "Момент игры",
    category: "match",
  },
  {
    id: 4,
    src: "/images/photo-4.png",
    alt: "Игрок бьет по воротам",
    caption: "Удар",
    category: "match",
  },
  {
    id: 5,
    src: "/images/photo-5.png",
    alt: "Бильярд",
    caption: "Турнир",
    category: "event",
  },
  {
    id: 6,
    src: "/images/photo-6.png",
    alt: "Ночной матч",
    caption: "Ночная игра",
    category: "match",
  },
  {
    id: 7,
    src: "/images/photo-7.png",
    alt: "Игрок в прыжке",
    caption: "Борьба в воздухе",
    category: "match",
  },
  {
    id: 8,
    src: "/images/photo-8.png",
    alt: "Вратарь",
    caption: "Последний рубеж",
    category: "match",
  },
  {
    id: 9,
    src: "/images/photo-9.png",
    alt: "Угловой удар",
    caption: "Угловой",
    category: "match",
  },
  {
    id: 10,
    src: "/images/photo-10.png",
    alt: "Болельщик",
    caption: "Эмоции трибун",
    category: "emotion",
  },
  {
    id: 11,
    src: "/images/photo-11.png",
    alt: "Эмоции игрока",
    caption: "Момент",
    category: "emotion",
  },
  {
    id: 12,
    src: "/images/photo-12.png",
    alt: "Единоборство",
    caption: "Борьба за мяч",
    category: "match",
  },
];

export const services: Service[] = [
  {
    icon: "📸",
    title: "Фотосъемка матчей",
    description: "Профессиональная съемка футбольных матчей любого уровня. От локальных турниров до стадионов премьер-лиги.",
  },
  {
    icon: "🎥",
    title: "Видеосъемка",
    description: "Полный цикл видеосъемки: от планирования до готового материала. Многокамерная съемка, репортаж, интервью.",
  },
  {
    icon: "📡",
    title: "Прямые трансляции",
    description: "Организация и проведение прямых трансляций спортивных событий в высоком качестве.",
  },
  {
    icon: "✂️",
    title: "Монтаж и постобработка",
    description: "Профессиональный монтаж видео, цветокоррекция, создание highlight-роликов и обзоров.",
  },
];

export const stats: Stat[] = [
  { value: "500+", label: "Проведенных съемок" },
  { value: "50+", label: "Стадионов" },
  { value: "5 лет", label: "Опыта" },
  { value: "100%", label: "Отдачи" },
];

export const profile = {
  name: "Нерсес Казанджиан",
  title: "Фотограф & Видеооператор",
  subtitle: "PULSE STREAM",
  bio: "Меня зовут Нерсес Казанджиан, я фотограф, который с радостью делится своими работами и опытом в мире визуального искусства. Также я веду прямые трансляции на заказ. На этом канале вы найдете уникальные фотографии, захватывающие видео и прямые трансляции.",
  avatar: "/images/avatar.png",
};

export const contacts = [
  { name: "Почта", url: "mailto:Нерсес Казанджиан@gmail.com", icon: "📧" },
  { name: "ВКонтакте", url: "https://vk.com/Нерсес Казанджиан", icon: "💬" },
];

export const socialButtons = [
  { name: "Telegram канал", url: "https://t.me/Нерсес Казанджиан", icon: "📢" },
  { name: "ВКонтакте", url: "https://vk.com/Нерсес Казанджиан", icon: "💬" },
];

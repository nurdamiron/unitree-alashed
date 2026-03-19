export type ProductVariant = {
  name: string
  price: string
  note?: string
}

export type ProductSpec = {
  label: string
  value: string
}

export type ProductImage = {
  src: string
  alt: string
}

export type Product = {
  id: string
  name: string
  category: string
  tagline: string
  description: string
  price: string
  priceNote: string
  badge: string
  badgeColor: string
  forRent: boolean
  videoId: string
  videoTitle: string
  images: ProductImage[]
  specs: ProductSpec[]
  specsExtended: ProductSpec[]
  features: string[]
  useCases: string[]
  variants: ProductVariant[]
  faqs: { q: string; a: string }[]
}

export const products: Product[] = [
  {
    id: "go2",
    name: "Unitree Go2",
    category: "Квадрупод / Образование",
    tagline: "Новое существо воплощённого ИИ",
    description:
      "Unitree Go2 — самый доступный и популярный квадрупод Unitree. Идеален для образования, исследований, демонстраций и разработки. Оснащён 4D LiDAR, поддерживает ROS 2, Python API и голосовое управление. 4 версии: Air, Pro, X и EDU.",
    price: "от $1 600",
    priceNote: "Air — начальная версия",
    badge: "Хит продаж",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    forRent: true,
    videoId: "6zPvT0ig1VM",
    videoTitle: "Unitree Go2 — официальный запуск",
    images: [
      { src: "https://www.unitree.com/images/b5fffd3e4fc04e6f9fcafedb9516b341_3840x2146.jpg", alt: "Go2 в действии" },
      { src: "https://www.unitree.com/images/f722fd416eae4543b09ef1566baad910_3840x2742.jpg", alt: "Go2 детальное фото" },
      { src: "https://www.unitree.com/images/1c36f0b03cfd445fbcad12b4b1eb3a29_3840x3266.jpg", alt: "Go2 компоненты" },
      { src: "https://oss-global-cdn.unitree.com/static/f3afd2338d574621b84d4b5f23aa345b_1620x816.png", alt: "Go2 на Азиатских играх 2023" },
    ],
    specs: [
      { label: "Скорость", value: "~5 м/с" },
      { label: "Сенсор", value: "4D LiDAR L1" },
      { label: "Вес", value: "15 кг" },
      { label: "Батарея", value: "1–4 ч" },
      { label: "Payload", value: "7 кг" },
      { label: "Связь", value: "WiFi 6 + 4G" },
    ],
    specsExtended: [
      { label: "Суставы", value: "12 (3 на ногу)" },
      { label: "Макс. уклон", value: "45°" },
      { label: "Прыжок", value: "~10 см" },
      { label: "Камеры", value: "Depth + RGB" },
      { label: "Вычисления", value: "Jetson Orin (EDU)" },
      { label: "Крутящий момент", value: "45 Н·м" },
      { label: "IP рейтинг", value: "IP44" },
      { label: "Операционная система", value: "Ubuntu 20.04" },
    ],
    features: [
      "AI-навигация и голосовое управление (GPT интеграция)",
      "4 варианта: Air / Pro / X / EDU для разных задач",
      "Открытое API, поддержка ROS 2, Python SDK",
      "4D LiDAR L1 — точное картирование в реальном времени",
      "Самостоятельный обход препятствий, патрулирование",
      "Выступал на Азиатских играх 2023 в Ханчжоу",
    ],
    useCases: [
      "Университеты и учебные лаборатории",
      "Выставки и корпоративные мероприятия",
      "Разработка алгоритмов управления и ИИ",
      "Патрулирование небольших объектов",
      "Медиа-съёмки и демонстрации",
    ],
    variants: [
      { name: "Go2 AIR", price: "$1 600", note: "Базовая версия для начинающих" },
      { name: "Go2 PRO", price: "$2 800", note: "Улучшенные сенсоры, 4G" },
      { name: "Go2 X", price: "$4 500", note: "Максимальная комплектация" },
      { name: "Go2 EDU", price: "По запросу", note: "Для вузов, Jetson Orin, полный API" },
    ],
    faqs: [
      { q: "Нужно ли специальное образование для управления Go2?", a: "Нет. Базовое управление через мобильное приложение доступно с первого дня. Мы проводим обучение операторов при покупке." },
      { q: "Можно ли программировать Go2 самостоятельно?", a: "Да. Go2 EDU поддерживает ROS 2, Python SDK, REST API. Для Go2 X и Pro доступен базовый SDK." },
      { q: "Как долго работает батарея?", a: "Go2 Air/Pro — около 1–2 часов активной работы. Go2 X/EDU — до 4 часов в зависимости от режима." },
    ],
  },
  {
    id: "b2",
    name: "Unitree B2",
    category: "Квадрупод / Промышленный",
    tagline: "Выйди за пределы возможностей",
    description:
      "Unitree B2 — флагманский промышленный квадрупод для инспекции объектов нефтегаза, горнодобывающей отрасли и энергетики. Работает при -20°C, IP67, несёт 120 кг. Существует в двух версиях: B2 (стандарт) и B2-W (колёсно-шагающий гибрид).",
    price: "от $76 900",
    priceNote: "Свяжитесь с менеджером",
    badge: "Промышленный",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    forRent: true,
    videoId: "-0n_MFLKD3M",
    videoTitle: "Unitree B2 — официальный запуск",
    images: [
      { src: "https://www.unitree.com/images/0f744c68717d4b21a874f0983f0e40db_1708x866.png", alt: "B2 промышленный квадрупод" },
      { src: "https://www.unitree.com/images/dd1fc7c2cc4d45518a38a04b84a46e8d_1529x883.png", alt: "B2 характеристики" },
      { src: "https://oss-global-cdn.unitree.com/static/b19dd04b323f492285c4d56fbfe7c4a7_941x498.jpg", alt: "B2 инспекция ЛЭП" },
      { src: "https://oss-global-cdn.unitree.com/static/2436d184fdf04161a78b49ee1b4650e6_941x498.jpg", alt: "B2 в экстремальных условиях" },
    ],
    specs: [
      { label: "Скорость", value: ">6 м/с" },
      { label: "Защита", value: "IP67" },
      { label: "Вес", value: "60 кг" },
      { label: "Батарея", value: "4–6 ч" },
      { label: "Payload", value: "120 кг" },
      { label: "Темп.", value: "-20°C / +55°C" },
    ],
    specsExtended: [
      { label: "Крутящий момент", value: "360 Н·м" },
      { label: "Макс. уклон", value: "45°+" },
      { label: "Дальность", value: ">20 км" },
      { label: "Суставы", value: "12 (усиленные)" },
      { label: "Процессор", value: "Intel Core i5/i7" },
      { label: "Камеры", value: "Depth + Thermal (опц.)" },
      { label: "Вес (B2-W)", value: "85 кг" },
      { label: "Скорость (B2-W)", value: "15 км/ч" },
    ],
    features: [
      "Статическая нагрузка до 120 кг, динамическая 40 кг",
      "Работает при -20°C до +55°C — важно для Казахстана",
      "IP67 — защита от пыли и погружения в воду",
      "Варианты B2 и B2-W (колёсно-шагающий для скорости)",
      "Дальность >20 км, батарея 4–6 часов",
      "Инспекция опасных зон без риска для персонала",
    ],
    useCases: [
      "Инспекция нефтегазовых объектов и трубопроводов",
      "Обследование горнодобывающих объектов и шахт",
      "Патрулирование энергетической инфраструктуры",
      "Поисково-спасательные операции МЧС",
      "Охрана периметра промышленных объектов",
    ],
    variants: [
      { name: "B2", price: "от $76 900", note: "Стандартный промышленный квадрупод" },
      { name: "B2-W", price: "По запросу", note: "Колёсно-шагающий гибрид, скорость 15 км/ч" },
    ],
    faqs: [
      { q: "Подходит ли B2 для работы в условиях казахстанской зимы?", a: "Да. B2 работает при температурах от -20°C до +55°C с IP67 защитой. Идеален для объектов нефтегаза на севере Казахстана." },
      { q: "Чем B2-W отличается от B2?", a: "B2-W — колёсно-шагающий гибрид. На ровных поверхностях едет на колёсах (15 км/ч, дальность >25 км), при необходимости переходит на шаговую ходьбу для преодоления препятствий." },
      { q: "Нужен ли специальный оператор?", a: "Мы обучаем операторов. Базовое управление через джойстик или планшет. Для автономных миссий нужен инженер с опытом ROS." },
    ],
  },
  {
    id: "g1",
    name: "Unitree G1",
    category: "Гуманоид",
    tagline: "Гуманоидный ИИ-аватар",
    description:
      "Unitree G1 — самый доступный полноразмерный гуманоидный робот на рынке. Умеет делать флипы, кувырки и сальто — первый в мире гуманоид с такими способностями. Поддерживает имитационное и подкрепляющее обучение из коробки.",
    price: "от $13 500",
    priceNote: "Стандартная версия",
    badge: "Гуманоид",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    forRent: true,
    videoId: "eUdBIFkMh-M",
    videoTitle: "Unitree G1 Kungfu Kid — демо навыков",
    images: [
      { src: "https://www.unitree.com/images/52688de58de044358e4792a5b7c1593d_2740x1720.jpg", alt: "G1 гибкость" },
      { src: "https://www.unitree.com/images/a7458205b63e4ff5a501c1ae84d0988b_2740x1720.jpg", alt: "G1 движение" },
      { src: "https://www.unitree.com/images/a0e8042bd2df4c47af28ff371bb6b4fa_2740x1720.jpg", alt: "G1 возможности" },
      { src: "https://www.unitree.com/images/5d03fc0c0d894b47ba7a08ec9c76a773_2740x1720.jpg", alt: "G1 задачи" },
    ],
    specs: [
      { label: "Рост", value: "127 см" },
      { label: "Вес", value: "~35 кг" },
      { label: "DOF", value: "23–43" },
      { label: "Батарея", value: "~2 ч" },
      { label: "Payload рук", value: "2–3 кг" },
      { label: "AI", value: "UnifoLM" },
    ],
    specsExtended: [
      { label: "Крутящий момент (бедро)", value: "88 Н·м" },
      { label: "Крутящий момент (колено)", value: "88 Н·м" },
      { label: "Крутящий момент (голень)", value: "45 Н·м" },
      { label: "Камеры", value: "Depth + Wide-angle" },
      { label: "Процессор (EDU)", value: "NVIDIA Jetson Orin NX" },
      { label: "Кисти", value: "Dex3-1 (опция)" },
      { label: "Мин. темп.", value: "0°C" },
      { label: "Связь", value: "WiFi + Ethernet" },
    ],
    features: [
      "Первый в мире гуманоид с флипом и кувырком",
      "Имитационное обучение (IL) и RL из коробки",
      "ROS 2, Python API, NVIDIA Jetson Orin NX (EDU)",
      "Поддержка Unitree UnifoLM — ИИ модели робота",
      "Кастомизируемые кисти рук (Dex3-1, Dex5-1)",
      "Участник боевых соревнований UFC",
    ],
    useCases: [
      "Исследования воплощённого ИИ в университетах",
      "Разработка алгоритмов манипуляции объектами",
      "Демонстрации и корпоративные мероприятия",
      "Обучение по программированию гуманоидов",
      "Технологические стартапы и R&D лаборатории",
    ],
    variants: [
      { name: "G1 Стандарт", price: "$13 500", note: "23 DOF, базовая конфигурация" },
      { name: "G1 EDU", price: "По запросу", note: "43 DOF, Jetson Orin, полный API, кисти рук" },
    ],
    faqs: [
      { q: "Что умеет G1, чего не умеют другие гуманоиды?", a: "G1 — первый гуманоид, выполнивший флип назад, кувырок вперёд и боковое сальто. Обладает UnifoLM ИИ для обучения задачам из демонстрации." },
      { q: "Можно ли обучить G1 новым задачам?", a: "Да. G1 EDU поддерживает имитационное обучение (вы показываете — робот повторяет) и обучение с подкреплением. Есть интеграция с NVIDIA Isaac Sim." },
      { q: "Можно ли арендовать G1 для выставки?", a: "Да. G1 доступен для аренды от 1 дня. Мы обучаем оператора и обеспечиваем техподдержку в течение всего срока аренды." },
    ],
  },
  {
    id: "h2",
    name: "Unitree H2",
    category: "Гуманоид / Премиум",
    tagline: "Пробуждение предназначения",
    description:
      "Unitree H2 — вершина линейки гуманоидов Unitree. Ростом 182 см, 70 кг, с вычислительной мощностью 2070 TOPS ИИ и нагрузкой рук до 15 кг. Предназначен для тяжёлых промышленных задач и передовых AI-исследований.",
    price: "от $29 900",
    priceNote: "Предзаказ, поставка 2026",
    badge: "Премиум",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    forRent: false,
    videoId: "24h4FTH7plY",
    videoTitle: "Unitree H2 — Destiny Awakening",
    images: [
      { src: "https://www.unitree.com/images/cab91f8a6c024197a4641d342ec44895_3840x2160.jpg", alt: "H2 hero 4K" },
      { src: "https://www.unitree.com/images/32686742408341c5af3b5dc2f4c85b0e_3840x2160.jpg", alt: "H2 showcase" },
      { src: "https://www.unitree.com/images/6d2e9f7a1e034ed5b0da345888bbc5fc_3840x2160.jpg", alt: "H2 product" },
      { src: "https://www.unitree.com/images/a89249d4e2284243b8379205259bcd0c_1920x1877.png", alt: "H2 спецификации" },
    ],
    specs: [
      { label: "Рост", value: "182 см" },
      { label: "Вес", value: "~70 кг" },
      { label: "DOF", value: "31" },
      { label: "Батарея", value: "~3 ч" },
      { label: "Payload рук", value: "15 кг" },
      { label: "AI TOPS", value: "2070" },
    ],
    specsExtended: [
      { label: "Крутящий момент (колено)", value: "360 Н·м" },
      { label: "Процессор", value: "Intel Core i7" },
      { label: "GPU", value: "Полноразмерная дискретная" },
      { label: "Камеры", value: "Multi-camera array" },
      { label: "Скорость", value: ">3 м/с" },
      { label: "Силовые датчики", value: "Во всех суставах" },
      { label: "Связь", value: "5G / WiFi 6" },
      { label: "Статус", value: "Предзаказ 2025–2026" },
    ],
    features: [
      "2070 TOPS ИИ-вычислений — мощнейший из гуманоидов",
      "Нагрузка рук 15 кг — способен к тяжёлым операциям",
      "Intel Core i7 + полноразмерная GPU для Edge AI",
      "Ростом 182 см — полноразмерный рабочий гуманоид",
      "Предназначен для промышленных и исследовательских задач",
    ],
    useCases: [
      "Промышленные манипуляции и сборочные линии",
      "Передовые AI-исследования уровня AGI",
      "Военные и спасательные миссии",
      "Образование топ-уровня (PhD, R&D лаборатории)",
    ],
    variants: [
      { name: "H2", price: "от $29 900", note: "Предзаказ, поставка 2026" },
    ],
    faqs: [
      { q: "Когда будет доступен H2?", a: "H2 принимается на предзаказ. Ориентировочная поставка — 2026 год. Свяжитесь с нами для бронирования." },
      { q: "Чем H2 отличается от G1?", a: "H2 на 50% тяжелее, ростом 182 см против 127 см у G1. Нагрузка рук 15 кг против 2–3 кг у G1. Вычислительная мощность 2070 TOPS против ~100 TOPS у G1 EDU. H2 для тяжёлых задач, G1 для исследований." },
    ],
  },
  {
    id: "r1",
    name: "Unitree R1",
    category: "Гуманоид / Лёгкий",
    tagline: "Ультралёгкий, полностью настраиваемый",
    description:
      "Unitree R1 — самый доступный полноразмерный гуманоид. При ростом 123 см и весе от 25 кг, R1 AIR стартует от $5 900 — уникальное ценовое предложение для стартапов, вузов и разработчиков. Три версии: AIR, Pro, EDU.",
    price: "от $5 900",
    priceNote: "R1 AIR",
    badge: "Доступный",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    forRent: true,
    videoId: "ve9USu7zpLU",
    videoTitle: "Unitree R1 — Intelligent Companion",
    images: [
      { src: "https://www.unitree.com/images/eec8d82f279b440ea170982ffa80b3fa_3840x2160.jpg", alt: "R1 hero" },
      { src: "https://www.unitree.com/images/2f7d65a5229f40a5b9ba3ce7328f3c8d_3840x2160.jpg", alt: "R1 showcase" },
      { src: "https://www.unitree.com/images/5ff59387aa7647a1ae159ca9ad5b7774_3840x2160.jpg", alt: "R1 demo" },
      { src: "https://www.unitree.com/images/920433c1a6c743cf8265fb2ec2eb41a0_1920x1301.png", alt: "R1 возможности" },
    ],
    specs: [
      { label: "Рост", value: "123 см" },
      { label: "Вес", value: "25–29 кг" },
      { label: "DOF", value: "20–40" },
      { label: "Батарея", value: "~1 ч" },
      { label: "Цена", value: "от $5 900" },
      { label: "Версии", value: "AIR / Pro / EDU" },
    ],
    specsExtended: [
      { label: "Вес AIR", value: "25 кг" },
      { label: "DOF AIR", value: "20" },
      { label: "DOF Pro", value: "26" },
      { label: "DOF EDU", value: "40" },
      { label: "Процессор AIR", value: "ARM CPU" },
      { label: "Процессор Pro", value: "Qualcomm" },
      { label: "Процессор EDU", value: "Jetson Orin" },
      { label: "Связь", value: "WiFi + BT" },
    ],
    features: [
      "Самый доступный полноразмерный гуманоид в мире",
      "3 версии для разных бюджетов: AIR / Pro / EDU",
      "Полная кастомизация платформы под задачи",
      "Открытый SDK, Python API, ROS 2 поддержка",
      "Идеален для стартапов, вузов, разработчиков ИИ",
    ],
    useCases: [
      "Стартапы в сфере воплощённого ИИ",
      "Университеты и политехнические колледжи",
      "Демонстрации и выставочные мероприятия",
      "Разработка приложений для гуманоидных роботов",
      "Образовательные программы по робототехнике",
    ],
    variants: [
      { name: "R1 AIR", price: "$5 900", note: "20 DOF, ARM CPU, старт для разработчиков" },
      { name: "R1 Pro", price: "~$16 000", note: "26 DOF, Qualcomm, расширенные возможности" },
      { name: "R1 EDU", price: "По запросу", note: "40 DOF, Jetson Orin, полный исследовательский набор" },
    ],
    faqs: [
      { q: "Чем R1 AIR отличается от R1 EDU?", a: "R1 AIR ($5 900) — 20 DOF, ARM процессор, базовый SDK. R1 EDU — 40 DOF, NVIDIA Jetson Orin, полный исследовательский набор с поддержкой ROS 2 и Isaac Sim." },
      { q: "Подходит ли R1 для университетских лабораторий?", a: "Да, R1 EDU — отличный выбор для вузов. Мы также проводим курсы обучения для преподавателей и студентов." },
      { q: "Можно ли установить на R1 кисти рук?", a: "Да. На R1 Pro и EDU можно установить кисти Dex3-1 (3-пальцевые) или Dex5-1 (5-пальцевые) от Unitree." },
    ],
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id: string): Product[] {
  return products.filter((p) => p.id !== id).slice(0, 3)
}

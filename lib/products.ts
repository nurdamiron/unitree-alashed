export type ProductVariant = {
  name: string
  priceUSD: number | null
  priceKZT?: number | null // fixed KZT price from pricelist (without НДС)
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
  priceUSD: number
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
      "Unitree Go2 — самый доступный и популярный квадрупод Unitree. Идеален для образования, исследований, демонстраций и разработки. Оснащён 4D LiDAR, поддерживает ROS 2, Python API и голосовое управление.",
    priceUSD: 1600,
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
      { name: "Go2 Air", priceUSD: 1600, note: "Базовая, без контроллера" },
      { name: "Go2 Air + контроллер", priceUSD: 1850, note: "Базовая с джойстиком" },
      { name: "Go2 Pro", priceUSD: 2800, note: "Улучшенные сенсоры, голос. управление" },
      { name: "Go2 Pro + контроллер", priceUSD: 3050, note: "3.5 м/с, 4G связь" },
      { name: "Go2 X + контроллер", priceUSD: 4500, note: "Максимальная комплектация" },
      { name: "Go2 EDU", priceUSD: 11200, note: "40 TOPS Jetson, ROS 2, полный SDK" },
      { name: "Go2 EDU Plus", priceUSD: 13250, note: "Расширенные вычисления" },
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
    priceUSD: 76900,
    priceNote: "Цена договорная, свяжитесь с менеджером",
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
      { name: "B2", priceUSD: 76900, note: "Стандартный промышленный квадрупод" },
      { name: "B2-W", priceUSD: 88900, note: "Колёсно-шагающий гибрид, 15 км/ч" },
      { name: "B2 + LiDAR", priceUSD: 95000, note: "С лидаром для автономной навигации" },
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
      "Unitree G1 — самый доступный полноразмерный гуманоидный робот на рынке. Умеет делать флипы, кувырки и сальто. Поддерживает имитационное и подкрепляющее обучение из коробки. 7 конфигураций от Basic до Ultimate D.",
    priceUSD: 13500,
    priceNote: "G1 Basic — начальная версия без SDK",
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
      { label: "Крутящий момент", value: "90–120 Н·м" },
      { label: "Оси талии", value: "1–3 оси (Z, X, Y)" },
      { label: "DOF руки", value: "5–7 DoF" },
      { label: "Камеры", value: "RGB-D + 3D-LiDAR" },
      { label: "Процессор (EDU)", value: "8-ядерный CPU + Jetson Orin 100 TOPS" },
      { label: "Сенсоры", value: "4 микрофона, 5 Вт динамик" },
      { label: "Связь", value: "Wi-Fi 6, Bluetooth 5.2, Ethernet" },
      { label: "Гарантия", value: "12–18 мес." },
    ],
    features: [
      "Первый в мире гуманоид с флипом и кувырком",
      "Имитационное обучение (IL) и RL из коробки",
      "ROS 2, Python/C++ API, NVIDIA Jetson Orin NX (EDU)",
      "7 конфигураций: от Basic (23 DOF) до Ultimate D (41 DOF)",
      "Варианты кистей: Dex3-1, Inspire RH56DFQ/DFTP",
      "Полная поддержка вторичной разработки (EDU версии)",
    ],
    useCases: [
      "Исследования воплощённого ИИ в университетах",
      "Разработка алгоритмов манипуляции объектами",
      "Демонстрации и корпоративные мероприятия",
      "Обучение по программированию гуманоидов",
      "Технологические стартапы и R&D лаборатории",
    ],
    variants: [
      { name: "G1 Basic", priceUSD: 13500, priceKZT: 16487000, note: "23 DOF, без SDK, только демонстрации" },
      { name: "G1 Edu Standard", priceUSD: 41375, priceKZT: 21291234, note: "23 DOF, Jetson Orin, полный SDK" },
      { name: "G1 Edu Plus", priceUSD: 45288, priceKZT: 25345466, note: "29 DOF, 3-осевая талия, рекомендуем" },
      { name: "G1 Edu Ultimate A", priceUSD: 58365, priceKZT: 32136306, note: "43 DOF, руки Dex3-1 (3 пальца)" },
      { name: "G1 Edu Ultimate B", priceUSD: 67900, priceKZT: 33454793, note: "43 DOF, тактильные руки (33 сенсора)" },
      { name: "G1 Edu Ultimate C", priceUSD: 67900, priceKZT: 33454793, note: "41 DOF, 5-пальцевые руки Inspire" },
      { name: "G1 Edu Ultimate D", priceUSD: 73900, priceKZT: 35987828, note: "41 DOF, топ комплектация, тактильные" },
    ],
    faqs: [
      { q: "Что умеет G1, чего не умеют другие гуманоиды?", a: "G1 — первый гуманоид, выполнивший флип назад, кувырок вперёд и боковое сальто. Обладает UnifoLM ИИ для обучения задачам из демонстрации." },
      { q: "Можно ли обучить G1 новым задачам?", a: "Да. G1 EDU поддерживает имитационное обучение (вы показываете — робот повторяет) и обучение с подкреплением. Есть интеграция с NVIDIA Isaac Sim." },
      { q: "Чем отличаются версии G1?", a: "Basic ($13 500) — 23 DOF, без SDK, для демонстраций. Edu Standard (~$41 000) — полный SDK, Jetson Orin. Edu Plus (~$45 000) — 29 DOF, 3-осевая талия. Ultimate A–D ($58 000–$74 000) — 41–43 DOF с разными типами кистей рук." },
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
    priceUSD: 29900,
    priceNote: "Предзаказ",
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
      { name: "H2", priceUSD: 29900, note: "Предзаказ" },
    ],
    faqs: [
      { q: "Когда будет доступен H2?", a: "H2 принимается на предзаказ. Свяжитесь с нами для бронирования." },
      { q: "Чем H2 отличается от G1?", a: "H2 на 50% тяжелее, ростом 182 см против 127 см у G1. Нагрузка рук 15 кг против 2–3 кг у G1. Вычислительная мощность 2070 TOPS против ~100 TOPS у G1 EDU. H2 для тяжёлых задач, G1 для исследований." },
    ],
  },
  {
    id: "r1",
    name: "Unitree R1",
    category: "Гуманоид / Лёгкий",
    tagline: "Ультралёгкий, полностью настраиваемый",
    description:
      "Unitree R1 — самый доступный полноразмерный гуманоид в мире. При росте 123 см и весе от 25 кг, R1 Air стартует от $4 900. Идеален для стартапов, вузов и разработчиков. Предзаказ, отгрузка с апреля 2026.",
    priceUSD: 4900,
    priceNote: "R1 Air — предзаказ",
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
      { label: "Payload", value: "<2 кг" },
      { label: "Версии", value: "Air / EDU / Pro" },
    ],
    specsExtended: [
      { label: "Вес Air", value: "25 кг" },
      { label: "DOF Air", value: "20" },
      { label: "DOF EDU Standard", value: "26" },
      { label: "DOF Pro D", value: "40" },
      { label: "Процессор Air", value: "ARM CPU" },
      { label: "Процессор EDU", value: "Jetson 40–100 TOPS" },
      { label: "SDK", value: "Только EDU/Pro версии" },
      { label: "Связь", value: "WiFi + BT" },
    ],
    features: [
      "Самый доступный полноразмерный гуманоид в мире",
      "Множество конфигураций: Air, EDU, Pro",
      "Полная кастомизация платформы под задачи",
      "Открытый SDK, Python API, ROS 2 (EDU/Pro)",
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
      { name: "R1 Air", priceUSD: 4900, note: "Пульт ДУ, без SDK, для демонстраций" },
      { name: "R1 Basic", priceUSD: 5900, note: "Пульт ДУ, без SDK" },
      { name: "R1 EDU Standard", priceUSD: 10000, note: "Jetson, ROS 2, SDK" },
      { name: "R1 EDU Smart", priceUSD: 15000, note: "Расширенные вычисления" },
      { name: "R1 EDU Pro A", priceUSD: 20000, note: "40–100 TOPS Jetson" },
      { name: "R1 EDU Pro D", priceUSD: 28000, note: "Топ исследовательская конфигурация" },
    ],
    faqs: [
      { q: "Чем R1 Air отличается от R1 EDU?", a: "R1 Air ($4 900) — только пульт ДУ, нет SDK, для демонстраций. R1 EDU Standard ($10 000) — NVIDIA Jetson, полный SDK, ROS 2, Python/C++. Для разработки нужен минимум EDU." },
      { q: "Подходит ли R1 для университетских лабораторий?", a: "Да, R1 EDU — отличный выбор для вузов. Мы также проводим курсы обучения для преподавателей и студентов." },
      { q: "Когда начнутся поставки R1?", a: "R1 в статусе предзаказа. Отгрузка с апреля 2026. Свяжитесь с нами для бронирования." },
    ],
  },
  {
    id: "as2",
    name: "Unitree As2",
    category: "Квадрупод / Промышленный",
    tagline: "Компактный размер, промышленные возможности",
    description:
      "Unitree As2 — компактный промышленный квадрупод с производительностью вдвое выше Go2. Максимальный крутящий момент ~90 Н·м, грузоподъёмность до 65 кг (стоя), батарея 648 Вт·ч на 4+ часа работы. IP54, температурный режим от -20°C до +50°C.",
    priceUSD: 0,
    priceNote: "Цена по запросу",
    badge: "Промышленный",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    forRent: true,
    videoId: "6zPvT0ig1VM",
    videoTitle: "Unitree As2 — промышленный квадрупод",
    images: [
      { src: "https://www.unitree.com/images/2b9855f7c43845819ab6d8156c75aeea_3840x2143.jpg", alt: "As2 в действии" },
      { src: "https://www.unitree.com/images/0f85cb18cf0d440e92e78caf8dcb4856_3840x2143.jpg", alt: "As2 детали" },
      { src: "https://www.unitree.com/images/42b7cde0acca4b5a9bced78971437428_3840x2143.jpg", alt: "As2 возможности" },
      { src: "https://www.unitree.com/images/6de0a21293414569ad4af5113559202e_3840x2143.jpg", alt: "As2 на местности" },
    ],
    specs: [
      { label: "Скорость", value: "до 5 м/с" },
      { label: "Защита", value: "IP54" },
      { label: "Вес", value: "~18 кг" },
      { label: "Батарея", value: "4+ ч" },
      { label: "Payload (стоя)", value: "65 кг" },
      { label: "Темп.", value: "-20°C / +50°C" },
    ],
    specsExtended: [
      { label: "Крутящий момент", value: "~90 Н·м (EDU)" },
      { label: "Макс. уклон", value: "40°" },
      { label: "Высота ступени", value: "25 см" },
      { label: "DOF", value: "12 суставов" },
      { label: "Процессор", value: "8-ядерный CPU" },
      { label: "LiDAR", value: "Индустриальный 64–128 линий" },
      { label: "Связь", value: "WiFi 6, BT 5.2, Ethernet" },
      { label: "Зарядка", value: "Быстрая 51V 9A (PRO/EDU)" },
    ],
    features: [
      "Производительность ≈ 2× Go2 при компактных размерах",
      "Промышленные подшипники и моторы PMSM",
      "IP54 защита — дождь, пыль, грязь",
      "ISS 3.0 система точного следования (PRO/EDU)",
      "Автономная работа до 4 часов, дальность до 20 км",
      "Поддержка NVIDIA Jetson Orin NX (EDU, опционально)",
    ],
    useCases: [
      "Промышленная инспекция объектов",
      "Автономное патрулирование",
      "Исследования воплощённого ИИ",
      "Навигация по сложной местности",
      "Образование и разработка",
    ],
    variants: [
      { name: "As2 Air", priceUSD: null, note: "~65 Н·м, стандартная батарея, без ISS" },
      { name: "As2 Pro", priceUSD: null, note: "~75 Н·м, IP54, ISS 3.0, 4G/GPS" },
      { name: "As2 EDU", priceUSD: null, note: "~90 Н·м, полный SDK, док-станция" },
    ],
    faqs: [
      { q: "Чем As2 отличается от Go2?", a: "As2 — промышленная версия с производительностью вдвое выше Go2. Крутящий момент до 90 Н·м (против 45 Н·м у Go2), грузоподъёмность до 65 кг (стоя), IP54 защита, батарея на 4+ часа." },
      { q: "Какая цена на As2?", a: "Цена формируется по запросу в зависимости от конфигурации (Air / Pro / EDU). Свяжитесь с нами для расчёта." },
      { q: "Можно ли разрабатывать ПО для As2?", a: "Да, As2 EDU поддерживает вторичную разработку с полным SDK. Опционально расширяется NVIDIA Jetson Orin NX." },
    ],
  },
  {
    id: "a2",
    name: "Unitree A2",
    category: "Квадрупод / Промышленный",
    tagline: "Stellar Explorer — ловкий и выносливый",
    description:
      "Unitree A2 — промышленный квадрупод среднего класса. Вес ~42 кг, крутящий момент до 180 Н·м, грузоподъёмность до 100 кг (стоя), 25 кг в движении. Двойные горячезаменяемые батареи, 5+ часов работы. IP56–IP67, от -20°C до +55°C.",
    priceUSD: 0,
    priceNote: "Цена по запросу",
    badge: "Промышленный",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    forRent: false,
    videoId: "-0n_MFLKD3M",
    videoTitle: "Unitree A2 — промышленный квадрупод",
    images: [
      { src: "https://www.unitree.com/images/3d0ef2032b2440e79841c86b5b5db233_3841x2952.jpg", alt: "A2 hero" },
      { src: "https://www.unitree.com/images/4bdd76b2475e4401a495f9449d6f6393_2380x1196.jpg", alt: "A2 в действии" },
      { src: "https://www.unitree.com/images/77f4f4fe22a4405397e461af8d503242_2380x1196.jpg", alt: "A2 инспекция" },
      { src: "https://www.unitree.com/images/182892cad68f4c90a6c344e42d020c4c_1920x1080.png", alt: "A2 рендер" },
    ],
    specs: [
      { label: "Скорость", value: "до 5 м/с" },
      { label: "Защита", value: "IP56–IP67" },
      { label: "Вес", value: "~42 кг" },
      { label: "Батарея", value: "5+ ч" },
      { label: "Payload (стоя)", value: "100 кг" },
      { label: "Темп.", value: "-20°C / +55°C" },
    ],
    specsExtended: [
      { label: "Крутящий момент", value: "~180 Н·м" },
      { label: "Макс. уклон", value: "45°" },
      { label: "Высота ступени", value: "30 см" },
      { label: "DOF", value: "12 суставов" },
      { label: "Процессор", value: "8-ядерный CPU + Intel Core i7" },
      { label: "LiDAR", value: "1–2 индустриальных (PRO: передний + задний)" },
      { label: "Связь", value: "WiFi 6, BT 5.2, Gigabit Ethernet ×2" },
      { label: "Батарея", value: "Двойная 9000 мАч (907 Вт·ч суммарно)" },
    ],
    features: [
      "Горячезаменяемые двойные батареи — бесперебойная работа",
      "Двухсторонняя перцепция 360° без слепых зон (PRO)",
      "Грузоподъёмность до 100 кг стоя, 25 кг в движении",
      "Опция колёсно-шагающей платформы",
      "Intel Core i7 для пользовательских AI-задач",
      "RS485, CAN, USB 3.0, Ethernet — все промышленные интерфейсы",
    ],
    useCases: [
      "Инспекция энергетической инфраструктуры",
      "Логистика на сложной местности",
      "Пожарно-спасательные операции",
      "Промышленный мониторинг объектов",
      "Автономное патрулирование периметра",
    ],
    variants: [
      { name: "A2", priceUSD: null, note: "1 LiDAR + камера, базовые модули" },
      { name: "A2 Pro", priceUSD: null, note: "2 LiDAR (перед + зад), IP67, расширенные модули" },
    ],
    faqs: [
      { q: "Чем A2 отличается от B2?", a: "A2 (~42 кг) — более лёгкий и маневренный, чем B2 (~60 кг). A2 имеет горячезаменяемые батареи, двухстороннюю перцепцию (PRO), Intel Core i7 для AI. B2 тяжелее и имеет бо́льшую грузоподъёмность (120 кг стоя)." },
      { q: "Как работают горячезаменяемые батареи?", a: "A2 имеет 2 батарейных слота. Можно менять одну батарею на ходу без остановки робота. Суммарная ёмкость: 907 Вт·ч, 5+ часов работы." },
      { q: "Какая цена на A2?", a: "Цена формируется по запросу. Свяжитесь с нами для расчёта стоимости A2 или A2 Pro." },
    ],
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id: string): Product[] {
  return products.filter((p) => p.id !== id).slice(0, 3)
}

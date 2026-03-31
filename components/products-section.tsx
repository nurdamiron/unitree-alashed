import Image from "next/image"
import Link from "next/link"

/* Background texture from unitree.com */
const CARD_BG =
  "https://www.unitree.com/images/07f40a5254ec42c298d1a541db9d07eb_1860x1550.png"

/* Row 1 — 3 standard cards */
const row1 = [
  {
    id: "as2",
    tagline: "Compact Size Industrial Capability",
    name: "As2",
    image:
      "https://www.unitree.com/images/35961e8791b349abb9277038a690835c_1860x1550.png",
    href: "/products/as2",
  },
  {
    id: "h2",
    tagline: "Destiny Awakening",
    name: "H2",
    image:
      "https://www.unitree.com/images/24585f511f8b4ba086c733abed084ea2_1126x1320.png",
    href: "/products/h2",
  },
  {
    id: "r1",
    tagline: "Ultra-lightweight, fully customizable",
    name: "R1",
    image:
      "https://www.unitree.com/images/be9e7bde5e104a40bc1a8e8eccf71a00_1860x1550.png",
    href: "/products/r1",
  },
]

/* Row 2 — G1, [B2+A2 split], Go2 */
const row2Standard = [
  {
    id: "g1",
    tagline: "Humanoid agent AI avatar",
    name: "G1",
    image:
      "https://www.unitree.com/images/6613c61ef0d1412682b771fc62432a50_1464x1400.png",
    href: "/products/g1",
  },
  {
    id: "go2",
    tagline: "New Creature of Embodied AI",
    name: "Go2",
    image:
      "https://www.unitree.com/images/a0811393701b4b95ba66ab1663c96fa4_1830x1600.png",
    href: "/products/go2",
  },
]

const splitCard = {
  left: {
    id: "b2",
    tagline: "Go Beyond the Limits",
    name: "B2",
    image:
      "https://www.unitree.com/images/34d683b71937497295436b87381239db_1349x1205.png",
    href: "/products/b2",
  },
  right: {
    id: "a2",
    tagline: "Stellar Explorer",
    name: "A2",
    image:
      "https://www.unitree.com/images/bba11f01833641a89ca07ca9ddcbb862_1589x1476.png",
    href: "/products/a2",
  },
}

/* ── Standard full-cell card ─────────────────────────────────── */
function StandardCard({
  tagline,
  name,
  image,
  href,
}: {
  tagline: string
  name: string
  image: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="product-card group relative block overflow-hidden rounded-[20px] text-center"
      style={{
        backgroundImage: `url(${CARD_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Tagline */}
      <p className="absolute top-[7%] left-0 w-full text-[14px] sm:text-[18px] text-black/50 z-[1] px-4">
        {tagline}
      </p>
      {/* Model name */}
      <p className="absolute top-[14%] left-0 w-full text-[28px] sm:text-[36px] font-bold text-black z-[1]">
        {name}
      </p>
      {/* Product render */}
      <div className="absolute bottom-0 left-0 right-0 h-[75%] z-[3] transition-all duration-300 ease-out group-hover:h-[90%] group-hover:-translate-x-[30px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </Link>
  )
}

/* ── Split card (B2 + A2 side by side) ───────────────────────── */
function SplitCardCell() {
  return (
    <div
      className="product-card flex justify-between overflow-hidden rounded-[20px]"
      style={{
        backgroundImage: `url(${CARD_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* B2 */}
      <Link
        href={splitCard.left.href}
        className="group relative flex flex-col w-[48%] h-full px-2 sm:px-3 pb-1 box-border overflow-hidden"
      >
        <div className="flex-grow pt-[13%] text-center">
          <p className="text-[11px] sm:text-[14px] lg:text-[18px] text-black/50">
            {splitCard.left.tagline}
          </p>
          <p className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-black">
            {splitCard.left.name}
          </p>
        </div>
        <div className="relative w-full aspect-square transition-transform duration-300 ease-out group-hover:scale-[1.2] group-hover:-translate-x-[10px] group-hover:-translate-y-[20px]">
          <Image
            src={splitCard.left.image}
            alt={splitCard.left.name}
            fill
            className="object-contain object-center"
            sizes="(max-width: 1024px) 25vw, 16vw"
          />
        </div>
      </Link>

      {/* A2 */}
      <Link
        href={splitCard.right.href}
        className="group relative flex flex-col w-[48%] h-full px-2 sm:px-3 pb-1 box-border overflow-hidden"
      >
        <div className="flex-grow pt-[13%] text-center">
          <p className="text-[11px] sm:text-[14px] lg:text-[18px] text-black/50">
            {splitCard.right.tagline}
          </p>
          <p className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-black">
            {splitCard.right.name}
          </p>
        </div>
        <div className="relative w-full aspect-square transition-transform duration-300 ease-out group-hover:scale-[1.2] group-hover:translate-x-[10px] group-hover:-translate-y-[20px]">
          <Image
            src={splitCard.right.image}
            alt={splitCard.right.name}
            fill
            className="object-contain object-center"
            sizes="(max-width: 1024px) 25vw, 16vw"
          />
        </div>
      </Link>
    </div>
  )
}

/* ── Section ─────────────────────────────────────────────────── */
export default function ProductsSection() {
  return (
    <section id="products" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-[6px] sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-[6px]">
          {/* Row 1 — As2, H2, R1 */}
          {row1.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 px-[6px] mb-3">
              <StandardCard {...item} />
            </div>
          ))}

          {/* Row 2 — G1, [B2+A2], Go2 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-[6px] mb-3">
            <StandardCard {...row2Standard[0]} />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-[6px] mb-3">
            <SplitCardCell />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-[6px] mb-3">
            <StandardCard {...row2Standard[1]} />
          </div>
        </div>
      </div>
    </section>
  )
}

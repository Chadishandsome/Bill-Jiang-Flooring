const productsInfo = [
  {
    path: "red-oak",
    title: "Red Oak",
    img: {},
    details: [
      "Wood Species: Red Oak (Quercus rubra)",
      "Origin: Harvested from Eastern North America",
      "Grade: Select grade wood with minimal knots",
      "Finish: Satin finish for a smooth sheen",
      "Width: 4\" Width",
      "Length: Random lengths ranging from 2 to 7 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Nail-down or staple-down",
      "Character: Reddish hue with a prominent grain pattern",
      "Grain: Open grain, showcasing natural texture",
      "Versatility: Ideal for traditional and modern settings",
      "Maintenance: Durable and easy to clean"
    ]
  },
  {
    path: "golden-oak",
    title: "Golden Oak",
    img: {},
    details: [
      "Wood Species: White Oak (Quercus alba)",
      "Origin: Sourced from Appalachian forests",
      "Grade: Premium grade with consistent color",
      "Finish: UV-cured golden finish",
      "Width: 3.5\" Width",
      "Length: Random lengths from 1 to 6 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Glue-down or nail-down",
      "Character: Warm golden tones with subtle grain",
      "Grain: Straight grain, smooth texture",
      "Versatility: Complements a wide range of interiors",
      "Maintenance: Scratch-resistant and easy to maintain"
    ]
  },
  {
    path: "driftwood-oak",
    title: "Driftwood Oak",
    img: {},
    details: [
      "Wood Species: White Oak (Quercus alba)",
      "Origin: Sourced from sustainably managed forests in North America",
      "Grade: Rustic grade with natural knots",
      "Finish: Weathered, driftwood-gray finish",
      "Width: 5\" Width",
      "Length: Random lengths up to 8 feet",
      "Thickness: 1/2\" Engineered thickness",
      "Installation: Floating or glue-down",
      "Character: Aged, weathered appearance with pronounced grain",
      "Grain: Distinctive, weathered grain",
      "Versatility: Perfect for coastal or rustic-themed homes",
      "Maintenance: Low maintenance, easy to clean"
    ]
  },
  {
    path: "white-oak",
    title: "White Oak",
    img: {},
    details: [
      "Wood Species: White Oak (Quercus alba)",
      "Origin: Sourced from the United States",
      "Grade: Clear grade, minimal knots and blemishes",
      "Finish: Matte finish to highlight natural color",
      "Width: 6\" Width",
      "Length: Fixed lengths of 7 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Nail-down or glue-down",
      "Character: Light, neutral tones with a tight grain",
      "Grain: Uniform and straight grain",
      "Versatility: Versatile for contemporary or classic designs",
      "Maintenance: Resistant to moisture, easy upkeep"
    ]
  },
  {
    path: "natural-maple",
    title: "Natural Maple",
    img: {},
    details: [
      "Wood Species: Hard Maple (Acer saccharum)",
      "Origin: Northeastern United States and Canada",
      "Grade: Select & Better grade",
      "Finish: Natural, clear finish",
      "Width: 4.25\" Width",
      "Length: Random lengths ranging from 2 to 8 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Nail-down installation",
      "Character: Light, creamy color with subtle grain",
      "Grain: Fine, even grain",
      "Versatility: Suited for modern and minimalist spaces",
      "Maintenance: Stain-resistant and easy to maintain"
    ]
  },
  {
    path: "hard-maple",
    title: "Hard Maple",
    img: {},
    details: [
      "Wood Species: Hard Maple (Acer saccharum)",
      "Origin: Sourced from sustainable forests in North America",
      "Grade: Premium grade with minimal imperfections",
      "Finish: Satin finish to enhance durability",
      "Width: 5\" Width",
      "Length: Random lengths from 1 to 7 feet",
      "Thickness: 3/4\" Solid wood thickness",
      "Installation: Nail-down or staple-down",
      "Character: Pale to creamy white color, uniform appearance",
      "Grain: Tight, consistent grain pattern",
      "Versatility: Ideal for high-traffic areas",
      "Maintenance: Low maintenance, resistant to wear"
    ]
  },
  {
    path: "birdseye-maple",
    title: "Birdseye Maple",
    img: {},
    details: [
      "Wood Species: Hard Maple with Birdseye figure (Acer saccharum)",
      "Origin: Found in select regions of North America",
      "Grade: Specialty grade, known for its unique appearance",
      "Finish: Glossy finish to enhance the birdseye figure",
      "Width: 3.25\" Width",
      "Length: Random lengths from 1 to 5 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Glue-down or floating",
      "Character: Unique swirling eyes in the grain, luxurious look",
      "Grain: Distinctive birdseye pattern",
      "Versatility: Used for high-end residential and commercial spaces",
      "Maintenance: Requires gentle cleaning to preserve appearance"
    ]
  },
  {
    path: "curly-maple",
    title: "Curly Maple",
    img: {},
    details: [
      "Wood Species: Curly Maple (Acer saccharum)",
      "Origin: Sourced from select regions in North America",
      "Grade: Specialty grade for decorative use",
      "Finish: Semi-gloss finish to highlight the curly grain",
      "Width: 4\" Width",
      "Length: Fixed lengths of 5 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Nail-down installation",
      "Character: Wavy, curly grain that catches light",
      "Grain: Figured, with a wavy pattern",
      "Versatility: Ideal for statement pieces or accent areas",
      "Maintenance: Careful maintenance to avoid scratches"
    ]
  },
  {
    path: "natural-hickory",
    title: "Natural Hickory",
    img: {},
    details: [
      "Wood Species: Hickory (Carya spp.)",
      "Origin: Sourced from the Appalachian Mountains",
      "Grade: Character grade with natural color variation",
      "Finish: Satin finish for a natural look",
      "Width: 5\" Width",
      "Length: Random lengths from 1 to 7 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Nail-down or staple-down",
      "Character: Strong contrasts between light and dark areas",
      "Grain: Bold, varied grain with natural imperfections",
      "Versatility: Perfect for rustic or country-style homes",
      "Maintenance: Durable, stands up to heavy use"
    ]
  },
  {
    path: "rustic-hickory",
    title: "Rustic Hickory",
    img: {},
    details: [
      "Wood Species: Hickory (Carya spp.)",
      "Origin: Harvested from American forests",
      "Grade: Rustic grade with knots and character marks",
      "Finish: Hand-scraped finish for added texture",
      "Width: 4\" Width",
      "Length: Random lengths from 1 to 6 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Glue-down or nail-down",
      "Character: Rich, warm tones with a textured surface",
      "Grain: Pronounced grain with natural imperfections",
      "Versatility: Suited for cabins or traditional homes",
      "Maintenance: Low maintenance, easy to clean"
    ]
  },
  {
    path: "hand-scraped-hickory",
    title: "Hand-Scraped Hickory",
    img: {},
    details: [
      "Wood Species: Hickory (Carya spp.)",
      "Origin: Sourced from the United States",
      "Grade: Character grade with hand-scraped texture",
      "Finish: Low gloss, hand-scraped finish",
      "Width: 5\" Width",
      "Length: Random lengths from 1 to 8 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Nail-down, glue-down, or floating",
      "Character: Textured surface with rich color variation",
      "Grain: Distinct, bold grain with natural character",
      "Versatility: Ideal for traditional and rustic designs",
      "Maintenance: Easy to maintain, hides wear well"
    ]
  },
  {
    path: "engineered-hickory",
    title: "Engineered Hickory",
    img: {},
    details: [
      "Wood Species: Hickory (Carya spp.)",
      "Origin: Sourced from sustainably managed forests",
      "Grade: Select grade, engineered for stability",
      "Finish: Smooth, satin finish",
      "Width: 6\" Width",
      "Length: Random lengths up to 7 feet",
      "Thickness: 1/2\" Engineered thickness",
      "Installation: Floating, nail-down, or glue-down",
      "Character: Stable construction with natural hickory appearance",
      "Grain: Subtle grain with smooth texture",
      "Versatility: Suitable for various interior styles",
      "Maintenance: Easy to install, low maintenance"
    ]
  },
  {
    path: "american-black-walnut",
    title: "American Black Walnut",
    img: {},
    details: [
      "Wood Species: American Black Walnut (Juglans nigra)",
      "Origin: Sustainably sourced from American forests",
      "Grade: Premium grade wood",
      "Finish: Matte finish",
      "Width: 5\" Width",
      "Length: Random lengths ranging from 1 to 6 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Nail-down, glue-down, or floating",
      "Character: Rich dark brown color with occasional sapwood streaks",
      "Grain: Striking grain patterns",
      "Versatility: Suitable for residential and commercial use",
      "Maintenance: Easy to clean and maintain"
    ]
  },
  {
    path: "claro-walnut",
    title: "Claro Walnut",
    img: {},
    details: [
      "Wood Species: Claro Walnut (Juglans hindsii)",
      "Origin: Sourced from California and Oregon",
      "Grade: Specialty grade with vibrant color contrasts",
      "Finish: Satin finish to highlight natural colors",
      "Width: 4\" Width",
      "Length: Fixed lengths of 4 to 7 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Nail-down or glue-down",
      "Character: Rich, varied colors with unique grain",
      "Grain: Swirling grain with deep tones",
      "Versatility: Ideal for custom and luxury spaces",
      "Maintenance: Requires gentle care to maintain its beauty"
    ]
  },
  {
    path: "brazilian-walnut",
    title: "Brazilian Walnut",
    img: {},
    details: [
      "Wood Species: Brazilian Walnut (Ipe)",
      "Origin: Sourced from sustainable plantations in South America",
      "Grade: Premium grade, known for its extreme hardness",
      "Finish: Natural oil finish",
      "Width: 3\" Width",
      "Length: Fixed lengths of 3 to 6 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Nail-down, glue-down, or floating",
      "Character: Dark brown to olive-green with natural variation",
      "Grain: Fine, consistent grain with a smooth texture",
      "Versatility: Perfect for high-traffic areas and outdoor use",
      "Maintenance: High durability, requires minimal maintenance"
    ]
  },
  {
    path: "european-walnut",
    title: "European Walnut",
    img: {},
    details: [
      "Wood Species: European Walnut (Juglans regia)",
      "Origin: Sourced from Europe",
      "Grade: Select grade, even coloration",
      "Finish: Satin or gloss finish",
      "Width: 4.5\" Width",
      "Length: Random lengths up to 8 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Nail-down or glue-down",
      "Character: Lighter color with fine grain",
      "Grain: Straight grain with subtle character",
      "Versatility: Suited for modern and classic interiors",
      "Maintenance: Resistant to wear, easy to maintain"
    ]
  },
  {
    path: "american-cherry",
    title: "American Cherry",
    img: {},
    details: [
      "Wood Species: American Cherry (Prunus serotina)",
      "Origin: Sourced from Eastern United States",
      "Grade: Select grade with consistent color",
      "Finish: Natural finish that deepens over time",
      "Width: 3.5\" Width",
      "Length: Random lengths from 1 to 6 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Nail-down or glue-down",
      "Character: Reddish-brown color that darkens with age",
      "Grain: Fine, even grain with minimal knots",
      "Versatility: Ideal for traditional and classic interiors",
      "Maintenance: Easy to clean, requires occasional refinishing"
    ]
  },
  {
    path: "brazilian-cherry",
    title: "Brazilian Cherry",
    img: {},
    details: [
      "Wood Species: Brazilian Cherry (Jatoba)",
      "Origin: Harvested from sustainable forests in Brazil",
      "Grade: Premium grade with rich color",
      "Finish: Glossy finish to highlight the natural color",
      "Width: 5\" Width",
      "Length: Random lengths up to 7 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Nail-down, glue-down, or floating",
      "Character: Deep red color with varied grain patterns",
      "Grain: Pronounced, interlocking grain",
      "Versatility: Suitable for high-end residential and commercial spaces",
      "Maintenance: Durable, resists wear and tear"
    ]
  },
  {
    path: "black-cherry",
    title: "Black Cherry",
    img: {},
    details: [
      "Wood Species: Black Cherry (Prunus serotina)",
      "Origin: Sourced from North America",
      "Grade: Premium grade with uniform color",
      "Finish: Matte finish that enhances natural beauty",
      "Width: 4\" Width",
      "Length: Fixed lengths of 3 to 5 feet",
      "Thickness: 3/4\" Thickness",
      "Installation: Nail-down or glue-down",
      "Character: Darker, richer color with smooth grain",
      "Grain: Fine, straight grain with minimal variation",
      "Versatility: Perfect for sophisticated interiors",
      "Maintenance: Requires gentle care to avoid scratches"
    ]
  },
  {
    path: "cherry-burl",
    title: "Cherry Burl",
    img: {},
    details: [
      "Wood Species: Cherry Burl (Prunus serotina)",
      "Origin: Sourced from select regions in North America",
      "Grade: Specialty grade for decorative use",
      "Finish: High-gloss finish to enhance the burl figure",
      "Width: Custom width, typically 3 to 5 inches",
      "Length: Fixed lengths for custom applications",
      "Thickness: 3/4\" Thickness",
      "Installation: Custom installation methods",
      "Character: Unique, swirling grain patterns with deep color",
      "Grain: Complex burl patterns",
      "Versatility: Used in custom furniture and high-end interiors",
      "Maintenance: Requires careful maintenance to preserve its appearance"
    ]
  }
]

productsInfo.forEach(product => {
  product.img =`${product.path}.png`;
});

export default productsInfo;
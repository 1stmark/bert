import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "Mark",
      email: "mark@1stmark.co.uk",
      password: hashSync("2705", 10),
      role: "admin",
    },
    {
      name: "Malc",
      email: "sales@1stmark.co.uk",
      password: hashSync("1234", 10),
      role: "user",
    },
  ],
  brands: [
    {
      id: "92c077c8-715f-4410-8083-e0321d820eb3",
      name: "Polo",
    },
    {
      id: "5af3a0a2-3aae-4428-ba6b-4e64cadafd9d",
      name: "Brooks Brothers",
    },
    {
      id: "f5b76682-d4ee-49f1-9487-a30d63976713",
      name: "Tommy Hilfiger",
    },
    {
      id: "b2f155db-73bc-475a-b0f5-dc7bd30fda16",
      name: "Calvin Klein",
    },
  ],
  products: [
    {
      name: "Polo Sporting Stretch Shirt",
      slug: "polo-sporting-stretch-shirt",
      category: "Men's Dress Shirts",
      description: "Classic Polo style with modern comfort",
      images: [
        "/images/sample-products/p1-1.jpg",
        "/images/sample-products/p1-2.jpg",
      ],
      price: 59.99,
      rating: 4.5,
      numReviews: 10,
      stock: 5,
      isFeatured: true,
      banner: "banner-1.jpg",
      brandId: "92c077c8-715f-4410-8083-e0321d820eb3",
    },
    {
      name: "Brooks Brothers Long Sleeved Shirt",
      slug: "brooks-brothers-long-sleeved-shirt",
      category: "Men's Dress Shirts",
      description: "Timeless style and premium comfort",
      images: [
        "/images/sample-products/p2-1.jpg",
        "/images/sample-products/p2-2.jpg",
      ],
      price: 85.9,
      rating: 4.2,
      numReviews: 8,
      stock: 10,
      isFeatured: true,
      banner: "banner-2.jpg",
      brandId: "5af3a0a2-3aae-4428-ba6b-4e64cadafd9d",
    },
    {
      name: "Tommy Hilfiger Classic Fit Dress Shirt",
      slug: "tommy-hilfiger-classic-fit-dress-shirt",
      category: "Men's Dress Shirts",
      description: "A perfect blend of sophistication and comfort",
      images: [
        "/images/sample-products/p3-1.jpg",
        "/images/sample-products/p3-2.jpg",
      ],
      price: 99.95,
      rating: 4.9,
      numReviews: 3,
      stock: 0,
      isFeatured: false,
      banner: null,
      brandId: "f5b76682-d4ee-49f1-9487-a30d63976713",
    },
    {
      name: "Calvin Klein Slim Fit Stretch Shirt",
      slug: "calvin-klein-slim-fit-stretch-shirt",
      category: "Men's Dress Shirts",
      description: "Streamlined design with flexible stretch fabric",
      images: [
        "/images/sample-products/p4-1.jpg",
        "/images/sample-products/p4-2.jpg",
      ],
      price: 39.95,
      rating: 3.6,
      numReviews: 5,
      stock: 10,
      isFeatured: false,
      banner: null,
      brandId: "b2f155db-73bc-475a-b0f5-dc7bd30fda16",
    },
    {
      name: "Polo Ralph Lauren Oxford Shirt",
      slug: "polo-ralph-lauren-oxford-shirt",
      category: "Men's Dress Shirts",
      description: "Iconic Polo design with refined oxford fabric",
      images: [
        "/images/sample-products/p5-1.jpg",
        "/images/sample-products/p5-2.jpg",
      ],
      price: 79.99,
      rating: 4.7,
      numReviews: 18,
      stock: 6,
      isFeatured: false,
      banner: null,
      brandId: "92c077c8-715f-4410-8083-e0321d820eb3",
    },
  ],
};

export default sampleData;

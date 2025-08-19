import { NextResponse } from "next/server";

const data = [
  {
    id: 78,
    image: "/MacBook-Pro-Banner.jpg",
    title: "MacBook 14 Pro",
    description: "Featuring Apple's M1 Pro chip for exceptional performance"
  },
  {
    id: 126,
    image: "/oppo.jpg",
    title: "Oppo F19 Pro Plus",
    description: "Feature-rich smartphone with a focus on camera capabilities."
  },
  {
    id: 79,
    image: "/zenbook.jpg",
    title: "Asus Zenbook Pro",
    description: "Dual Screen Laptop is a high-performance device with dual screens"
  },
  {
    id: 136,
    image: "/vivo-x21.jpg",
    title: "Vivo X21",
    description: "Premium smartphone with a focus on cutting-edge technology"
  }
]

// Handle GET request
export async function GET(request: Request) {
  if(request) {
    return NextResponse.json(data);
  }
}
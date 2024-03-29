import { Button } from "@/stories/Button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      imageUrl: "product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.99,
      imageUrl: "product2.jpg",
    },
  ];

  const specialOffers = [
    {
      id: 1,
      title: "Limited Time Offer",
      description: "Get 20% off on selected items. Hurry up!",
      ctaText: "Shop Now",
    },
    {
      id: 2,
      title: "Free Shipping",
      description: "Enjoy free shipping on orders over $50.",
      ctaText: "Browse Products",
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Amazing products! The quality is top-notch.",
      author: "John Doe",
      imageUrl: "john-doe.jpg",
    },
    {
      id: 2,
      quote: "Prompt delivery and excellent customer service.",
      author: "Jane Smith",
      imageUrl: "jane-smith.jpg",
    },
  ];

  const latestBlogPosts = [
    {
      id: 1,
      title: "10 Tips for a Healthy Lifestyle",
      imageUrl: "blog-post1.jpg",
      publicationDate: "January 15, 2024",
    },
    {
      id: 2,
      title: "Exploring the Great Outdoors: A Nature Adventure",
      imageUrl: "blog-post2.jpg",
      publicationDate: "January 10, 2024",
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            {/* <img src="/logo.png" alt="Your Logo" className="h-8 mr-2" /> */}
            <span className="text-xl font-bold">K SHOP</span>
          </div>

          {/* Search */}
          <div className="ml-auto">
            <input
              type="text"
              placeholder="Search products"
              className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Authentication links */}
          <div className="ml-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <span className="mx-2 text-gray-600">|</span>
            <Link href="/signup" className="text-gray-600 hover:text-gray-900">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-4 ml-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Shop
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Categories
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Cart
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Account
          </a>
        </nav>
      </header>

      <div className="w-full h-96 overflow-hidden relative">
        <Image src="/banner.jpg" alt="banner" layout="fill" objectFit="cover" />
      </div>

      <main className="px-8 md:px-16 lg:px-24">
        {/* Hero Section */}
        <section className="p-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Vote for your ARTIST</h1>
            <p className="text-lg mb-6">
              You can celebrate your artist&#39;s birthday by voting every day
            </p>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">
              Vote Now
            </button>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-md shadow-md"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-32 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section className="bg-gray-200 py-8 p-12">
          <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialOffers.map((offer) => (
              <div key={offer.id} className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                  {offer.ctaText}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials or Reviews */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-4 rounded-md shadow-md"
              >
                <p className="text-gray-600 italic mb-2">
                  &quot;{testimonial.quote} &quot;
                </p>
                <div className="flex items-center">
                  <p className="font-semibold">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestBlogPosts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded-md shadow-md">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-32 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.publicationDate}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-8">
        {/* Contact information, links, newsletter subscription, social media */}
        {/* Your footer content goes here */}
        All rights reserved.
      </footer>
    </div>
  );
};

export default Home;

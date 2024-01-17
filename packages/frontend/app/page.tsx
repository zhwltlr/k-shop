import { Button } from "@/stories/Button";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Your Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold">Your E-Commerce</span>
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
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Login
          </a>
          <span className="mx-2 text-gray-600">|</span>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Sign Up
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="p-8">
        {/* Large banner, CTA button */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Discover Amazing Products</h1>
          <p className="text-lg mb-6">
            Explore our latest collections and special offers.
          </p>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">
            Shop Now
          </button>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-8">
        {/* Display product categories */}
        {/* Each category card with image, title, and link */}
      </section>

      {/* Featured Products */}
      <section className="py-8">
        {/* Showcase featured products */}
        {/* Product cards with image, name, price, and "Shop Now" button */}
      </section>

      {/* Special Offers */}
      <section className="bg-gray-200 py-8">
        {/* Display ongoing promotions or special offers */}
        {/* Visuals, descriptions, and call-to-action buttons */}
      </section>

      {/* Testimonials or Reviews */}
      <section className="py-8">
        {/* Display customer testimonials or reviews */}
        {/* Cards with customer quotes, images, and names */}
      </section>

      {/* Latest Blog Posts */}
      <section className="py-8">
        {/* Display latest blog posts */}
        {/* Cards with featured images, post titles, and publication dates */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-8">
        {/* Contact information, links, newsletter subscription, social media */}
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
};

export default Home;

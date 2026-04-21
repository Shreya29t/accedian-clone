"use client";
import { useEffect, useState } from "react";

export default function Features() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data.features);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load features");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 text-center">
        <p className="text-gray-500">Loading features...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 text-center">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        Our Features
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-black">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
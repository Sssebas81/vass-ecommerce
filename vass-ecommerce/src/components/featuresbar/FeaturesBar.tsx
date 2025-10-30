function FeaturesBar() {
  return (
    <section className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center m-8">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="1.5" d="M12 3l3.09 6.26L21 9.27l-4.5 4.38L17.82 21 12 17.27 6.18 21l1.32-7.35L3 9.27l5.91-.01L12 3z" />
          </svg>
          <h3 className="font-semibold text-lg">Top Tech Quality</h3>
          <p className="text-sm text-gray-300">Tech & gaming brands.</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path strokeWidth="1.5" d="M9 12l2 2 4-4" />
          </svg>
          <h3 className="font-semibold text-lg">Warranty & Guarantee</h3>
          <p className="text-sm text-gray-300">Official warranty included.</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="1.5" d="M3 8h18v8H3z" />
            <path strokeWidth="1.5" d="M3 8l9 6 9-6" />
          </svg>
          <h3 className="font-semibold text-lg">Free Shipping</h3>
          <p className="text-sm text-gray-300">Nationwide fast delivery.</p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="1.5" d="M12 1.5a9 9 0 00-9 9V15a3 3 0 003 3h2.25v4.5h9.5V18H18a3 3 0 003-3v-4.5a9 9 0 00-9-9z" />
          </svg>
          <h3 className="font-semibold text-lg">Tech Support 24/7</h3>
          <p className="text-sm text-gray-300">Expert gaming support.</p>
        </div>

      </div>
    </section>
  );
}

export default FeaturesBar;

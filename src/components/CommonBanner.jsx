
const CommonBanner = ({ bannerHeading }) => {
  return (
    <div className="bg-gradient-to-br from-teal-600 to-teal-700">
      <div className="flex justify-center items-center gap-8 max-w-7xl mx-auto py-16 lg:py-32">
        <div className="max-w-xl p-4 text-center">
          <header>
            <h1 className='banner-highlighted-text text-5xl font-bold'>{ bannerHeading }</h1>
          </header>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
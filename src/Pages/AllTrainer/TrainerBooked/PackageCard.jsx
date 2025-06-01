const PackageCard = ({ data }) => {
  const { packages } = data;
  console.log('from card',packages)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-9/12 mx-auto my-3">
      <div className="border border-blue-200 shadow-xl rounded-lg p-4">
        <h2 className="text-2xl text-blue-600 font-semibold">BASIC</h2>
        <h2 className="text-xl">
          $10 <small className="font-semibold text-blue-500">1 month</small>
        </h2>
        <p>FACILITIES</p>
        <li>Access to gym facilities during regular operating hours</li>
        <li>Use of cardio and strength training equipment</li>
        <li>Access to locker rooms and showers</li>
      </div>
    </div>
  );
};

export default PackageCard;

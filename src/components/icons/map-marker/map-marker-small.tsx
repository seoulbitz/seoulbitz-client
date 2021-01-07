import * as React from 'react';

function MapMarkerSmall(props) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx={8} cy={6} fill="#0511F2" r={3.333} />
      <path
        d="M8 0a5.801 5.801 0 00-5.795 5.795c0 3.965 5.186 9.786 5.407 10.032.207.23.57.23.776 0 .221-.246 5.407-6.067 5.407-10.032C13.795 2.599 11.195 0 8 0zm0 8.71a2.919 2.919 0 01-2.915-2.915A2.919 2.919 0 018 2.879a2.919 2.919 0 012.915 2.916A2.919 2.919 0 018 8.71z"
        fill="#0511F2"
      />
    </svg>
  );
}

export default MapMarkerSmall;

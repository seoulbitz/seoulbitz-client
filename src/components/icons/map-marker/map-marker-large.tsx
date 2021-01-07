import * as React from 'react';

function MapMarkerLarge(props) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx={16} cy={12} fill="#fff" r={6.667} />
      <path
        d="M16 0C9.61 0 4.41 5.199 4.41 11.59c0 7.93 10.372 19.572 10.814 20.064a1.044 1.044 0 001.552 0c.442-.492 10.813-12.134 10.813-20.065C27.59 5.2 22.39 0 16 0zm0 17.42a5.837 5.837 0 01-5.83-5.83A5.837 5.837 0 0116 5.757a5.837 5.837 0 015.83 5.831A5.837 5.837 0 0116 17.42z"
        fill="#0511F2"
      />
    </svg>
  );
}

export default MapMarkerLarge;

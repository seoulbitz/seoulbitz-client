import * as React from 'react';

function Close(props) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path fill="#0511F2" d="M.5 7h15v2H.5z" />
      <path d="M9 .5v15H7V.5h2z" fill="#0511F2" />
    </svg>
  );
}

export default Close;

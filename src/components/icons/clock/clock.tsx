import * as React from 'react';
type ClockProps = {
  fillColor?: string;
};

const Clock: React.FC<ClockProps> = ({ fillColor = '#8288F9', ...rest }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        d="M12.035 3a9.121 9.121 0 018.553 6.116c.327.938.49 1.925.482 2.919A9.035 9.035 0 1112.035 3v0z"
        stroke={fillColor}
        strokeWidth={1.5}
      />
      <path d="M12.25 7.25v5.348h5.338" stroke={fillColor} strokeWidth={1.5} />
    </svg>
  );
};

export default Clock;

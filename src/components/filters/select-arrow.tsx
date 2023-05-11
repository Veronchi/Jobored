interface ArrowProps {
  rotate: boolean;
}

export const SelectArrow = ({ rotate }: ArrowProps) => {
  return (
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate ? 0 : 180}deg)` }}
    >
      <path
        d="M1 0.999999L7.21905 6.33061C7.66844 6.7158 8.33156 6.7158 8.78095 6.33061L15 1"
        stroke={rotate ? '#acadb9' : '#5e96fc'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

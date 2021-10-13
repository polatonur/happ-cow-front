function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        d="M132.411 190.733l50.435 31.954c6.447 4.084 14.452-1.99 12.539-9.516l-14.572-57.323a8.757 8.757 0 012.837-8.876l45.228-37.643c5.942-4.946 2.875-14.809-4.76-15.304l-59.064-3.834a8.418 8.418 0 01-7.248-5.35l-22.028-55.473a8.319 8.319 0 00-15.556 0L98.194 84.84a8.418 8.418 0 01-7.248 5.35l-59.064 3.834c-7.635.495-10.702 10.358-4.76 15.304l45.228 37.643a8.757 8.757 0 012.837 8.876l-13.514 53.16c-2.295 9.031 7.31 16.32 15.046 11.42l46.87-29.695a8.214 8.214 0 018.822 0z"
        fill="none"
        stroke="#787878"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </svg>
  );
}

export default SvgComponent;

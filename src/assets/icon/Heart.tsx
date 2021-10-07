function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="#ed5454"
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        d="M128.018 216s-100-56-100-124a52.009 52.009 0 01100-20.035h0a52.009 52.009 0 01100 20.035c0 68-100 124-100 124z"
        fill="none"
        stroke="#ed5454"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </svg>
  );
}

export default SvgComponent;

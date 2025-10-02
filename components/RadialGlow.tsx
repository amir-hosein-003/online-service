type Props = {
  className?: string;
  color?: string;
  size?: string;
};

const RadialGlow = ({ className = "", color = "#0ea5e9", size = "12rem" }: Props) => {
  return (
    <div
      className={`absolute left-0 top-0 rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}80 0%, ${color}20 40%, transparent 70%)`,
      }}
    />
  );
};

export default RadialGlow;

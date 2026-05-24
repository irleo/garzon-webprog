import { Link } from "react-router-dom";

const variantClasses = {
  primary:
    "border-primary/70 bg-primary text-primary-foreground shadow-[0_0_16px_rgba(139,92,246,0.28)] hover:bg-primary/80",
  secondary:
    "border-border bg-card/70 text-foreground backdrop-blur hover:border-primary/60 hover:bg-primary/15",
};

const Button = ({
  children,
  to,
  type = "button",
  variant = "secondary",
  className = "",
}) => {
  const classes = [
    "inline-flex items-center justify-center rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95",
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(" ")
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;

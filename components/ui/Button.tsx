import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'gold' | 'ghost';

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-maroon text-cream hover:bg-maroon-dark transition-colors',
  secondary: 'border-2 border-maroon text-maroon hover:bg-maroon hover:text-cream transition-colors',
  gold: 'bg-gold text-maroon hover:bg-gold-light transition-colors font-semibold',
  ghost: 'border-2 border-gold text-gold hover:bg-gold hover:text-maroon transition-colors font-semibold',
};

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  target,
  rel,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200';
  const variantClass = variantStyles[variant];
  const combinedClasses = `${baseClasses} ${variantClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}

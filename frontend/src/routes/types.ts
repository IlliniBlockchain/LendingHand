export interface BadgeInterface {
  text: string;
  filled?: boolean;
}

export interface ButtonInterface {
  text: string;
  type: string;
  href: string;
  filled?: boolean;
  icon?: JSX.Element;
}

export interface CardInterface {
  reason?: string;
  badge?: BadgeInterface;
  valuation?: string;
  duration?: string;
  btn?: ButtonInterface;
  name?: string;
  image?: string;
}
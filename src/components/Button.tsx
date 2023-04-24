interface ButtonProps {
  styles: string;
  type: "button" | "submit" | "reset";
  clickAction?: () => void;
  children: React.ReactNode;
}

export default function Button({styles, type, clickAction, children}: ButtonProps) {
  return (
    <button className={styles} type={type} onClick={clickAction}>
      {children}
    </button>
  );
}

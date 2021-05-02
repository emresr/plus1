import styles from "../styles/Button.module.scss";

type ButtonProps = {
   number: number;
   title: string;
};

const Button = ({ number, title }: ButtonProps) => {
   return (
      <div>
         <label>{number}</label>
      </div>
   );
};
export default Button;

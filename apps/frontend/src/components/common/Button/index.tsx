import { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
}

function Button({ className, children }: PropsWithChildren<ButtonProps>) {
  return (
    <button className={classNames(styles.button, className)}>{children}</button>
  );
}

export default Button;

import { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface ContainerProps {
  className?: string;
}

function Container({ className, children }: PropsWithChildren<ContainerProps>) {
  return <div className={classNames('container', className)}>{children}</div>;
}

export default Container;

import { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface ContainerProps {
  className?: string;
}

function Container({ className, children }: PropsWithChildren<ContainerProps>) {
  return (
    <div data-testid="container" className={classNames('container', className)}>
      {children}
    </div>
  );
}

export default Container;

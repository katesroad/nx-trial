import React from 'react';

import './Button.scss';

const Button: React.FC<Props> = ({ children }) => (
  <button className="button">{children}</button>
);

interface Props {
  children: React.ReactNode;
}

export default Button;

import React from 'react';

import wrapper from './wrapper';

const DEFAULT_NAME = 'spring';

export default function mation(_name, _config) {
  if (React.isValidElement(_name)) {
    return wrapper(DEFAULT_NAME, undefined, _name);
  }
  const name = typeof _name === 'string' ? _name : DEFAULT_NAME;
  const config = typeof _name === 'object' ? _name : _config;
  return component => wrapper(name, config, component);
}

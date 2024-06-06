import js from '@eslint/js';
import bestPractices from './rules/best-practices';
import errors from './rules/errors';
import es6 from './rules/es6';
import node from './rules/node';
import style from './rules/style';
import formatting from './rules/formatting';
import variables from './rules/variables';
import ignored from './rules/ignored';
import configPrettier from 'eslint-config-prettier';

const elbrusConfig = [
  js.configs.all,
  bestPractices,
  errors,
  es6,
  node,
  variables,
  style,
  formatting,
  configPrettier,
  ignored,
];

export default elbrusConfig;

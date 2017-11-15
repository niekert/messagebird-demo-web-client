import { oneOf } from 'prop-types';
import { INITIAL, PENDING, OK, ERROR } from 'app-constants';

export const status = oneOf([INITIAL, PENDING, OK, ERROR]);

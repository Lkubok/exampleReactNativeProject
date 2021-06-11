/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { get } from 'lodash';
import styles from './styles';

const stylesMapping = {
  error: styles.toastContainer,
  info: styles.toastContainer,
  success: styles.toastContainer,
  warning: styles.toastContainer,
  noWifi: styles.toastContainer,
  chatCount: styles.toastContainer,
  chatWarning: styles.toastContainer,
};

const badgeStylesMapping = {
  error: styles.badgeError,
  info: styles.badgeSuccess,
  success: styles.badgeSuccess,
  warning: styles.badgeError,
  noWifi: styles.badgeError,
  chatCount: styles.badgeSuccess,
  chatWarning: styles.badgeError,
};

const textStylesMapping = {
  error: styles.text,
  info: styles.text,
  success: styles.text,
  warning: styles.text,
  noWifi: styles.text,
  chatCount: styles.text,
  chatWarning: styles.text,
};

export const getToastStyles = (type: string) => get(stylesMapping, [type]);

export const getBadgeStyles = (type: string) => get(badgeStylesMapping, [type]);

export const getToastTextStyles = (type: string) => get(textStylesMapping, [type]);

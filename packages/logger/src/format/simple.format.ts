import * as winston from 'winston';
import { cleanSecrets } from './secrets.format';

const colorizer = winston.format.colorize();

const getMeta = (
  fieldColors: winston.config.AbstractConfigSetColors,
  log: winston.Logform.TransformableInfo,
): string | null => {
  const fieldNames = Object.keys(fieldColors);
  const metaString = fieldNames
    .map((key) => [key, log[key]])
    .filter(([, value]) => value != null)
    .map(([key, value]) => colorizer.colorize(key, value))
    .join(' ');

  return metaString ? `[${metaString}]` : null;
};

export const simple = (
  secrets?: string[],
  fieldColors: winston.config.AbstractConfigSetColors = {},
): winston.Logform.Format => {
  winston.addColors(fieldColors);

  return winston.format.combine(
    cleanSecrets({ secrets }),
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.simple(),
    winston.format.printf((log) => {
      const { timestamp, level, message, context, stack } = log;
      const extra = context ? JSON.stringify(context) : '';
      const meta = getMeta(fieldColors, log);

      return [timestamp, meta, `${level}:`, message, stack, extra]
        .filter((v) => v != null && v !== '')
        .join(' ');
    }),
  );
};
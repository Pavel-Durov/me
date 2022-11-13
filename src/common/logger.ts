import pino from 'pino'

export const logger = pino({
  level: 'trace',
  prettyPrint: { colorize: true }
})

import { cyan, red } from 'chalk'

import { makeError } from '../utils/makeError'

/**
 * Colors the first line of error message red, and colors all links in following lines cyan.
 */
export function formatError(error: unknown) {
  const { message } = makeError(error)

  const [firstLine, ...rest] = message.split('\n')

  return [red(firstLine), ...rest.map(colorLinksCyan)].join('\n')
}

const URL_REGEX = /(https:\/\/[^\s]+)/g
function colorLinksCyan(str: string) {
  return str.replace(URL_REGEX, (match) => cyan.underline(match))
}

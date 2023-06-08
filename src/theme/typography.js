/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
export default colors => ({
  fontFamily: ['Open Sans', 'sans-serif'].join(','),
  h6: {
    fontWeight: 500,
    color: colors?.grey900,
    fontSize: '0.75rem'
  },
  h5: {
    fontSize: '0.875rem',
    color: colors?.grey900,
    fontWeight: 500
  },
  h4: {
    fontSize: '1rem',
    color: colors?.grey900,
    fontWeight: 600
  },
  h3: {
    fontSize: '1.25rem',
    color: colors?.grey900,
    fontWeight: 600
  },
  h2: {
    fontSize: '1.5rem',
    color: colors?.grey900,
    fontWeight: 700
  },
  h1: {
    fontSize: '2.125rem',
    color: colors?.grey900,
    fontWeight: 700
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    color: colors.grey900
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: colors.grey500
  },
  subtitle3: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: colors.grey900
  },
  caption: {
    color: colors.grey500,
    fontWeight: 400
  },
  body1: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.334em'
  },
  body2: {
    letterSpacing: '0em',
    fontWeight: 400,
    lineHeight: '1.5em',
    color: colors.grey700
  },
  button: {
    textTransform: 'capitalize'
  }
})

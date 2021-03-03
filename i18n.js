/* eslint-disable @typescript-eslint/no-var-requires */

const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ko'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  detection: {
    cookieMinutes: 24 * 60 * 365, // 1 year
    cookieSecure: true,
    cookiePath: '/',
    cookieSameSite: 'strict',
    lookupCookie: 'language',
    lookupQuerystring: 'language',
    caches: ['cookie'],
    order: ['querystring', 'cookie', 'header']
  }
});

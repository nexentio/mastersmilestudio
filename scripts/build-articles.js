
const fs = require('fs');

// Generates full rich data for all 28 articles
console.log('Building all articles...');

// 1. CELEBRITY ARTICLES ALL
const celebrityAll = require('../src/data/blog-articles/celebrity-articles-1').CELEBRITY_ARTICLES_1;
const celebrity2 = require('../src/data/blog-articles/celebrity-articles-2').CELEBRITY_ARTICLES_2;
const celebrity3 = require('../src/data/blog-articles/celebrity-articles-3').CELEBRITY_ARTICLES_3;
const celebrity4 = require('../src/data/blog-articles/celebrity-articles-4').CELEBRITY_ARTICLES_4;

console.log('Combined loaded articles count:', Object.keys({...celebrityAll, ...celebrity2, ...celebrity3, ...celebrity4}).length);

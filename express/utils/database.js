const pgp = require('pg-promise')(/* options */);
const express = require('express');
const config = require('./config')

const db = pgp(config.POSTGRES_URL);

module.exports = { db }
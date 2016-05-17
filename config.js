#!/usr/bin/env node
'use strict';

/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Load env
require('dotenv').load();

// Necessary Libs
var cfenv = require('cfenv');
var Path  = require('path');
var fs    = require('fs');

// Handle Configs
var appEnv = cfenv.getAppEnv();

fs.writeFile('./config.json', JSON.stringify({
  credentials: appEnv.getServiceCreds('six-degrees'),
}), (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});
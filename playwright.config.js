// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './pwtests',
    timeout: 500*1000 ,

  use:
  {
    browserName:'chromium',
    headless:false,
    screenshot : 'on',
     trace : 'on',
     //ignoreHTTPSErrors : true
      //viewport : {width:720,height:720}
     //video : 'retain-on-failure'
     //permissions : ['geolocation '],


  },
  reporter:'html'
  
});


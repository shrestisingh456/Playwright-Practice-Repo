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
    retries:1, // if it fail itwill retry the test 1 time
    workers:3, //3 testfiles will pick at the parallel testing 

    projects :[

      {
      name : 'chrome',
      use:
  {
    browserName:'chromium',
    headless:false,
    screenshot : 'on',
     trace : 'on'
      }},

      {
        name : 'safari',
        use :
        {
    browserName:'chromium',
    headless:false,
    screenshot : 'off',
     trace : 'on'
        }
      },
       {
        name : "firefox",
        use :
        {
    browserName:'firefox',
    headless:true,
    screenshot : 'only-on-failure',
     trace : 'on'
        }
       }


    ],
reporter:'html'

  
});


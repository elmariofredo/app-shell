import 'script!systemjs/dist/system';
import 'whatwg-fetch';
import * as objectAssign from 'object-assign';
import { shellConfig } from './constants';

/**
 * Load pearl application bundle
 * @param pearlName
 * @param bootConfig
 */
export function loadPearl(
  pearlName: string,
  bootConfig: any
): void {

  const pearlConfig = bootConfig.pearls[ pearlName ];

  const AppShellAPI = objectAssign(
    {},
    bootConfig,
    shellConfig
  );

  window.__AppShell_publicPath__ = pearlConfig.publicPath;

  SystemJS.import( `${pearlConfig.publicPath}${pearlConfig.main}` )
    .then(( app ) => {

      if ( typeof app.main !== 'function' ) {

        throw new Error( `Unable to find 'main' function` );

      }

      app.main( AppShellAPI, () => console.log( `App '${ pearlName }' loaded` ) );

    });

}

/**
 * Load boot config data from shell backend
 * @param entryPoint
 */
export function loadBootConfig( entryPoint: string ): Promise<any> {

  return fetch( entryPoint, {
    headers: {
      'Accept': 'application/json'
    }
  } )
    .then(( response ) => { return response.json() });

}

/**
 * Get pearl app name from url
 * @param pathName
 * @returns {string}
 */
export function extractAppName( pathName: string ): string {

  return /\/([^/]*)/.exec( pathName )[1];

}
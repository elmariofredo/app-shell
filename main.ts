import { loadBootConfig, extractAppName, loadPearl } from './load-helpers';

loadBootConfig( '/api/boot' ).then(( bootConfig: any ) => {

  const appName = extractAppName( window.location.pathname );

  if ( bootConfig.pearls[ appName ] ) {

    loadPearl( appName, bootConfig );

  } else {

    throw new Error( 'App pearl no defined' );

  }

});


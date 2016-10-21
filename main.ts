import 'script!systemjs/dist/system';

const appName = /\/([^/]*)/.exec( window.location.pathname )[1];

if ( appName !== '' ) {

  SystemJS.import( 'http://localhost:8081/app.js' )
    .then(( app ) => {

      if ( typeof app.main !== 'function' ) {

        throw new Error( `Unable to find 'main' function` );

      }

      app.main( {
        system: {
          mountPoint: 'app-shell-content'
        },
        user: {
          name: 'John',
          surname: 'Doe'
        }
      }, () => console.log( `App '${ appName }' loaded` ) );

    });

}
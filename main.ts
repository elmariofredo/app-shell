import { AppShell } from 'app-shell-toolbox';

const appShell = new AppShell( '/api/boot', 'app-shell-content' );

const currentAppName = /\/([^/]*)/.exec( window.location.pathname )[1];

appShell.boot()
  .then(() => {
    appShell.loadApp( currentAppName )
  });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDja4oeAVpfk0cJJAA-tsURMDCqqV23Fuk",
    authDomain: "casulo-portfolio.firebaseapp.com",
    databaseURL: "https://casulo-portfolio.firebaseio.com",
    projectId: "casulo-portfolio",
    storageBucket: "casulo-portfolio.appspot.com",
    messagingSenderId: "394929133002"
  }
};

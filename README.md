# Ionic Components, by MOVENTES


## Install the dependency

in your own Ionic project:

1. install it with NPM
```bash
$ npm i mv-ionic-components --save
```

2. import it in `app.module.ts`:

```ts
import { ComponentsIonicModule } from 'mv-ionic-components';

@NgModule({
  imports: [
    /* .. */
    ComponentsIonicModule.forRoot()
  ],
})
export class AppModule { }
```

3. import it in the page module if needed


## Run the sample project

```bash
$ git clone git@github.com:Moventes/ionic-components.git
$ npm i
$ ionic serve
```

## Add a new component to this library

1. add your code in `[PROJECT_ROOT]/componentes/src/components/`
2. declare your new component in `[PROJECT_ROOT]/componentes/src/componentes.module.ts`
3. declare your new component in `[PROJECT_ROOT]/componentes/src/lib.module.ts`
4. add it in `[PROJECT_ROOT]/componentes/src/public_api.ts`
5. add an example of use in `[PROJECT_ROOT]/src/pages`
6. increase the version number of the library in `[PROJECT_ROOT]/componentes/package.json`
7. publish on NPM repository with the command `npm run publish:npm`

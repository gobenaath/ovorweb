# Ovorang

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## githubpages

Always use same name for project and repository
https://dzone.com/articles/publish-your-angular-github-repository-as-a-github?fromrel=true
ng build --prod --base-href "https://gobenaath.github.io/ovorweb/"
npm i angular-cli-ghpages --save-dev

npx ngh --no-silent --dir=dist/ovorang (I have to use ovorang)

If you are not sure about the difference between npm and npx, I recommend you read my article here.

Here, the –dir property is used to specify the folder where the build contents are generated. Please note that, by default, the directory name is dist, so if your Angular CLI version is under 6, you don’t need to specify the folder name.

If you are getting an error while you run the ngh command, please make sure that you installed the package:

PS C:\Users\SibeeshVenu\source\repos\Azure-AI-Image-Text-Reader> npx ngh --dir='dist/azure-ai-image-text-reader' --branch=page
npx: installed 87 in 8.588s
Path must be a string. Received undefined
(node:16984) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.

UserName and Password while npx ngh
git remote set-url https://<username>:<pw>@github.com/gobenaath/ovorweb.git

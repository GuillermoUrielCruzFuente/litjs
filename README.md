# LitElement Basics

## Set up your local repository

Clone this repository by runnig the following command:

-   `git clone https://github.com/GuillermoUrielCruzFuente/litjs.git`

Then, get into the generated folder and install the dependencies:

-   `cd litjs && npm install`

## Run the dev server

<a href="" target="_blank"></a>

In order to execute the development server run the following command `npm run dev`.

This project use <a href="https://vitejs.dev/" target="_blank">vite</a> as bundler. If you have any
doubt about its functionality just read the documentation
<a href="https://vitejs.dev/guide/" target="_blank">here</a>.

## Generate the build assets

Run the following command:

-   `npm run build`

You can check the generated build by running the following command:

-   `npm run preview`

## Deploy

This project is deployed on <a href="https://render.com/" target="_blank">render</a>, you can check
it out <a href="https://lit-rick.onrender.com" target="_blank">here</a>, also make sure to see the
Rick and Morty API page
<a href="https://lit-rick.onrender.com/pages/rick.html" target="_blank">here</a>.

## Code format styles

I highly recommend to use the <a href="https://prettier.io/" target="_blank">prettier</a> extension
and configure your IDE or text editor to format the code on every save (ctrl + s). In Visual Studio
Code enter the settings and search `format on save` and simply check that option.

In the project root there is a `.prettierrc` file, this file contain the prefered code formatting
options that will be applied by the extension, that's all you have to do in order to maintain the
project code formatting standards.

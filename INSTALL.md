# How to install the project and run it on my computer

You need to have [NodeJS](https://nodejs.org/) (at least v13) and [NPM](https://www.npmjs.com/) installed on your computer. We recommend you to use [NVM](https://github.com/nvm-sh/nvm) as it will allow you to easily switch your Node version.


## Clone the project

1. Open a terminal where you want to create the project on your computer
2. Clone the Git project running `git clone https://github.com/Orange-OpenSource/a11y-guidelines.git` (assuming you want to use HTTPS and not SSH)


## Install Node dependencies & build the website

1. In your terminal, navigate to the project folder which has just been created (or open a new terminal in it, as you like). Then, run the `npm install` command which will install all dependencies needed to build the website
2. If everything went well, you can run the `npm run serve:dev` command which will launch the build of the website and provide a local server with hot reload feature (you won't need to manually refresh your browser, it will do so everrytime you save a file)

### What commands are available ?
We provide 2 sets of commands to build the website and each command has a flag that sets the environment :

#### Commands
- `build` will only build the website. This command is used for building Netlify et GitHub Pages environments
- `serve` will build the website but also launch a local webserver providing hot reloading thanks to [Browsersync](https://www.browsersync.io/)

#### Flags
- `:dev` for local development and Netlify builds 
- `:prod` for the GitHub Pages environment

So, depending on what you need, you can run:
- `npm run build:dev`
- `npm run build:prod`
- `npm run serve:dev`
- `npm run serve:prod`

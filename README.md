# Responsize 

Here is the new application from [Silex Labs](http://www.silexlabs.org/ "Silex Labs") who allow you to edit in live your website and got your css directly on your [Dropbox](http://www.dropbox.com "Dropbox")

# Developer
## How to install
**Warning** The server work only on Mac/Linux computer (sorry windows users :'( )

## First step

With this project, you can work directly online with some **cloud service**, or on **localhost**, as you wish.

*If you don't want to use these tool's at all (Hooo -_-") jump to the second step -> clone and build the project*

In order to use these services, you need to sign up on:

- [GitHub](https://github.com/) (**required**) you must create a account on github (if you have not one yet !) in order to work on this project and fork them

- [Cloud9](https://c9.io/) (**optional**) you can signing with your GitHub / Bitbucket account if you have one, your project will be accessible from your dashboard then

**GitHub** will be our online versionned working copy

and

**Cloud9** will be our working station (node virtual machine, working IDE, testing server, etc...)

or

**localhost / bash** hmmm i like black screen :)


When you have created your account, if you want try Cloud9, please go to your Cloud9 dashboard, and create a new workspace, then start editing it.

# Clone and build the project

First, you need to fork the project from the original repository. Click on the *Fork* button on the top right corner of main project page.

When it's done, clone it !

If you are not in Cloud9, open a terminal, otherwise, you have a opened terminal in your cloud9 window, at the bottom. If they not, you can show it with *Tools > show console* **or** *Tools > terminal > new terminal*

clone the project:

    > git clone https://github.com/[YOUR_ACCOUNT]/ResponsiveDesign.git && cd ResponsiveDesign

Ok it's done, you can now build the project and start to work !

# Build your project

To install and launch your app, just launch the following command in your terminal

    > npm install && node app.js

It will install this dependencies : 

* [Express](http://expressjs.com/, "Express")
* [Jade](http://jade-lang.com/, "Jade")
* [Unifile](https://github.com/silexlabs/unifile, "Unifile")
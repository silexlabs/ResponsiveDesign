BackNode
========

POC for [CIFACOM](http://www.cifacom.com/) Week project

## First step

With this project, you can work directly online with some **cloud service**, or on **localhost**, as you wish.

I advise you to use these online services, just for production test / meeting if you want, or try to
work only with it like me on this project ! It's verry fun !

*If you don't want to use these tool's at all (Hooo -_-") jump to the second step -> clone and build the project*

In order to use these services, you need to sign up on:

- [Cloud9](https://c9.io/) (**1 account per person**) you can signing with your GitHub / Bitbucket account if you have one, your project will be accessible from your dashboard then
- [heroku](https://id.heroku.com/login) (**1 account per team !**)

**Cloud9** will be our working station (node virtual machine, working IDE, testing server, etc...)

**heroku** will be our production server (**WARNING !** Just one account by team, it will be the production version of your team's project)

When you have created your account, please go to your Cloud9 dashboard, and create a new workspace, then start editing it.

# Clone and build the project

If you are not in Cloud9, open a terminal, otherwise, you have a opened terminal in your cloud9 window, at the bottom. If they not, you can show it with *Tools > show console*
**or** *Tools > terminal > new terminal*

clone the project:

    > git clone https://github.com/RonanDrouglazet/BackNode.git && cd BackNode

When all your's team members are ready, one of you (**just one!**) create your team's feature branch. You have to choose a team name. In your Terminal:

    > git checkout -b feature_TeamName
    > git push -u origin feature_TeamName

When it's done, tell to your team's members to do this step:

    > git fetch origin
    > git checkout feature_TeamName

allright, all your team's members are in the same feature branch, you can start to build the project

## Build the project

just enter make in your terminal :)

    > make

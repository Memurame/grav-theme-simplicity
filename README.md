# Simplicity Theme

![screenshot](https://user-images.githubusercontent.com/15847494/63199854-6f2b5080-c07f-11e9-97f0-7ea314a96c75.jpg)

A simple design with which you can make your own portfolio. Modular page layout and separate project overview and detail page

# Installation

Installing the Simplicity theme can be done in one of two ways. 
Our GPM (Grav Package Manager) installation method enables you to quickly and easily 
install the theme with a simple terminal command, while the manual method enables you to do so via a zip file.

## GPM Installation (Preferred)

The simplest way to install this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm) 
through your system's Terminal (also called the command line).  From the root of your Grav install type:

    bin/gpm install simplicity

This will install the Simplicity theme into your `/user/themes` directory within Grav. 
Its files can be found under `/your/site/grav/user/themes/simplicity`.

>> This method will copy the sample pages provided in the `_demo/pages` folder to your `user/pages` 
folder so that the theme will work out of the box with placeholder content. 

## Manual Installation

To install this theme, just download the zip version of this repository and unzip it under `/your/site/grav/user/themes`. 
Then, rename the folder to `simplicity`. 
You can find these files either on [GitHub](https://github.com/memurame/grav-theme-simplicity) 
or via [GetGrav.org](http://getgrav.org/downloads/themes).

You should now have all the theme files under

    /your/site/grav/user/themes/simplicity
    
>> NOTE: If you want to use the demo content, 
move the contents of `_demo/pages` into your grav installations's `user/pages` directory. 
This will ensure that the theme templates work out of the box.

# Updating

As development for the Simplicity theme continues, new versions may become available that add additional features and functionality, 
improve compatibility with newer Grav releases, and generally provide a better user experience. 
Updating Simplicity is easy, and can be done through Grav's GPM system, as well as manually.

## GPM Update (Preferred)

The simplest way to update this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm). 
You can do this with this by navigating to the root directory of your Grav install using your system's Terminal 
(also called command line) and typing the following:

    bin/gpm update simplicity

This command will check your Grav install to see if your Simplicity theme is due for an update. 
If a newer release is found, you will be asked whether or not you wish to update. 
To continue, type `y` and hit enter. The theme will automatically update and clear Grav's cache.

## Manual Update

Manually updating Simplicity is pretty simple. Here is what you will need to do to get this done:

* Delete the `your/site/user/themes/simplicity` directory.
* Download the new version of the Simplicity theme from either [GitHub](https://github.com/memurame/grav-plugin-simplicity) 
or [GetGrav.org](http://getgrav.org/downloads/themes#extras).
* Unzip the zip file in `your/site/user/simplicity` and rename the resulting folder to `simplicity`.
* Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in terminal and typing `bin/grav clear-cache`.

# Setup

If you want to set Simplicity as the default theme, you can do so by following these steps:

* Navigate to `/your/site/grav/user/config`.
* Open the **system.yaml** file.
* Change the `theme:` setting to `theme: simplicity`.
* Save your changes.
* Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in Terminal and typing `bin/grav clear-cache`.

Once this is done, you should be able to see the new theme on the frontend. 
Keep in mind any customizations made to the previous theme will not be reflected as all of the theme and 
templating information is now being pulled from the **simplicity** folder.

# Configure the Theme

## Header
<img width="1144" alt="Bildschirmfoto 2019-08-16 um 23 38 28" src="https://user-images.githubusercontent.com/15847494/63199894-89fdc500-c07f-11e9-836c-7037477b0648.png">

In the theme settings you can change the corresponding information about yourself and also upload your own profile picture.

Or change manual in the file `/your/site/grav/user/config/themes/simplicity.yaml`.

```yaml
enabled: true
header:
  name: 'Hans Müller'
  subtitle: Web-Entwickler
  social:
    github: 'https://github.com/mueller'
    facebook: 'https://facebook.com'
    twitter: 'https://twitter.com'
    linkedin: 'https://linkedin.com'
    google: 'https://google.com'
  image:
    user/themes/simplicity/images/custom/default_avatar.png:
      name: default_avatar.png
      type: image/png
      size: 69163
      path: user/themes/simplicity/images/custom/default_avatar.png
```

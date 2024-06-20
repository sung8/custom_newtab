# Custom New Tab Page

Catppuccin

https://github.com/pivoshenko/catppuccin-startpage/assets/40499728/d96c8bd6-168e-408f-b4f0-0e339569c696

> [!NOTE]
> A live demo can be found [here](https://pivoshenko.github.io/catppuccin-startpage)

## Overview

Clone of [pivoshenko](https://github.com/pivoshenko/catppuccin-startpage)'s Catppuccin-themed Browser New Tab/Startup Page.

Full credits to [pivoshenko](https://github.com/pivoshenko/).

## Usage

1. Create your own repository for the startpage and clone it
2. Clone this repository with:

```shell
git clone https://github.com/pivoshenko/catppuccin-startpage.git pivoshenko-catppuccin-startpage
```

3. Copy the assets and configs from `pivoshenko-catppuccin-startpage` to your repository:

```shell
cp pivoshenko-catppuccin-startpage/* <YOUR REPOSITORY>
```

4. Remove `.github` directory as it contains only PR templates, issue labels etc that are linked to this repository
5. Update [`userconfig.js`]:
   - Set your location for the weather widget
   - Update the number of pages and their banners
   - Update bookmarks and quick links for the one you are using the most :3

> [!TIP]
> You can find icons for your bookmarks using [`tabler-icons`]
>
> If you want to reduce the loading time of the icons, you could install the icon [font] locally and activate the option `"localIcons": true` in the config to disable the remote styles

#### As Homepage

- Click the menu button and select `Options/Preferences`
- Click the home panel
- Click the menu next to the homepage and new windows and choose to show custom URLs and add your GitHub Pages link

#### As New Tab

You can use different Add-ons/Extensions for it

- If you use Firefox: [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/?src=search) and make sure you enable "Force links to open in the top frame (experimental)" in the extension's preferences page
- If you use Chromium (Brave, Chrome): [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia)

[`dawn`]: https://github.com/b-coimbra/dawn
[Catppuccin]: https://github.com/catppuccin/catppuccin
[`tartarus-startpage`]: https://github.com/AllJavi/tartarus-startpage
[`dotfiles`]: https://github.com/pivoshenko/dotfiles
[`userconfig.js`]: userconfig.js
[`tabler-icons`]: https://tabler.io/icons
[font]: src/fonts

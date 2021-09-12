# allow-calc
A chrome extension to always allow calculator on hegartymaths.

## Installation
### Get from the webstore
[![Get on the webstore](https://github.com/jacobhq/allow-calc/blob/main/webstore-small.png)](https://chrome.google.com/webstore/detail/hegarty-allow-calculator/ompglifjmnnpmfoomlgonhoaehkbbndm?hl=en-GB)

### Sideload
Get the latest release, and unzip. Then go to `chrome://extensions` and click pack extension. Next upload your extracted zip file, and enjoy.

### Install canary build
Go and [get the latest build](https://github.com/jacobhq/allow-calc/actions/workflows/main.yml) by clicking on the latest run and downloading the artifact named `build`. Extract it and then add the extension from your disk.

## Development setup
Clone the repo, and run `pnpm install`. If you've run `npm install` by mistake, delete the lockfile created by npm. Now run `pnpm dev` to spin up the server.

Now you'll need to add the extension to chrome, by adding the directory `extension`. You'll now get hot reload on the extension when you make a change.

## Coffee
Why not <a href="https://www.buymeacoffee.com/jem" target="_blank">buy me a coffee</a>? It would be appriciated!

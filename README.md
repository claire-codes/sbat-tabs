# Sbat tabs

Because sometimes you just want to reverse the order of your tabs.

Chrome extension to reverse the layout of the tabs in your currently active window. Only reverses normal tabs, ignoring pinned tabs.

![Gif demo](sbat4.gif 'Gif demo')

## Development

-   Clone this repo.
-   Open `chrome://extensions` in Chrome and toggle Developer mode in the top right corner. Click the `Load unpacked` button that appears in the top left corner.
-   Navigate to the where the cloned directory is in your filesystem and select it.
-   When you make a change to the code, reload the extension from this page by clicking the round reload arrow.

### Debugging

As the extension doesn't use a HTML file it's a bit trickier to debug than an extension that does: you're not able to simply right-click on the extension icon and click `Inspect`. Instead, click on the `Details` button from the `chrome://extensions` page and find the `Inspect Views` option. Click `background page (inactive)` and a Dev Tools window will appear ready for debugging.

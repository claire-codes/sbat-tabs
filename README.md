# Sbat

Because sometimes you just want to reverse the order of your current tabs in Chrome.

Works only on your currently active window and only reverses normal tabs - leaves pinned ones alone.

## Development

Go to `chrome://extensions` in Chrome and click `Load unpacked extension`. Open this directory and there you have it. Don't forget to Reload it between changes.

As this doesn't use a HTML file it's a bit trickier to debug - instead of right-clicking on the extension icon and selecting Inspect, click the Inspect Views: background page option from the `chrome://extensions` page. To force it run with DevTools open, type `location.reload(true)` in console.
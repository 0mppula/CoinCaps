<a href=".">
    <img src="https://github.com/0mppula/Coin_Caps/blob/master/src/images/branding/logo_dark.png?raw=true" alt="Coin Caps logo" title="Coin Caps" align="right" height="60" />
</a>

# Coin Caps Web-Application

### What is Coin Caps?

[Coin Caps][1] is a web-application where the user can view data of the 1000 most valuable cryptocurrencies by market capitalization. In addition, the user can select in which currency the app shows the price data for the cryptos.

All of the applications data and statistics are retrieved from the [CoinGecko][2] API with different `AJAX` calls. The app contains a total of 3 individually different `AJAX` calls.

You can view individual cryptocurrencies in detail from the crypto table in the application by interacting with the downward-facing Chevron element. When the chevron element is clicked, more information about the active cryptocurrency will slide down for the user to check out. The additional information includes other useful metrics of the crypto, including a `chart.js` graphical chart element showing the price movement of the past 30 days.

All of the cryptos can be filtered out with the search field at the top of the `HTML` table of the app. When the user is filtering the cryptos only cryptos that match the search query will be shown on the crypto table. Additionally, the paginator is temporarily disabled during the filtering. When the search field is cleared, the crypto table retains it's previous state.

The cryptos are initially paginated to display 25 cryptos per page, which the user can change to 50 or 100 from the row selector element of the paginator.

From the applications navigation bar, it is possible to select the active currency of the app. Once a new currency is selected, the whole app reloads with new price data matching the new active currency. Additionally, the active currency is saved to `LocalStorage` for the next time the app is loaded.

It is also possible to toggle between dark or light mode from the navbar. The currently selected mode is saved to `LocalStorage` as well, and defaults to light mode if no `LocalStorage` data is detected.

The application has good accessibility. All of the interactive elements have their own conditional `tabindex` value (depending on whether the element is currently active or not). Additionally, the contrast ratio of the app is mainly rated at AA or AAA.

The app also has a lot of modern conveniences like a scroll-to-top element, a responsive structure, different loader elements and click-outside-to-close functionality.

[1]: https://www.jamk.fi/
[2]: https://www.coingecko.com/en/api

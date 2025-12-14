# easy-countrydata
Library to provide comprehensive country data including name, dial code, ISO code, currency, language code, coordinates, and timezone information.

# Install 

```
npm i @cloudparker/easy-countrydata --save-dev
```

# CDN install

```
<script src="https://cdn.jsdelivr.net/gh/paramanandapradhan/easy-countrydata@main/dist/index.js" />
```

# Usage

### Nodejs
```js
import EasyCountryData from "@cloudparker/easy-countrydata@1.0.0";

EasyCountryData.getCountry({name:'United States'});
// Output: {
//   "isoCode": "US",
//   "dialCode": "+1",
//   "name": "United States",
//   "currency": "USD",
//   "languageCode": "en-US",
//   "coordinates": [38.9072, -77.0369],
//   "timezoneOffset": ["-10:00", "-09:00", "-08:00", "-07:00", "-06:00", "-05:00", "-04:00"]
// }

EasyCountryData.getCountry({dialCode:'+1'});
// Output: {
//   "isoCode": "US",
//   "dialCode": "+1",
//   "name": "United States",
//   "currency": "USD",
//   "languageCode": "en-US",
//   "coordinates": [38.9072, -77.0369],
//   "timezoneOffset": ["-10:00", "-09:00", "-08:00", "-07:00", "-06:00", "-05:00", "-04:00"]
// }

EasyCountryData.getCountry({isoCode:'US'});
// Output: {
//   "isoCode": "US",
//   "dialCode": "+1",
//   "name": "United States",
//   "currency": "USD",
//   "languageCode": "en-US",
//   "coordinates": [38.9072, -77.0369],
//   "timezoneOffset": ["-10:00", "-09:00", "-08:00", "-07:00", "-06:00", "-05:00", "-04:00"]
// }

EasyCountryData.getCountries();
// Output: [
//   {
//     "isoCode": "AF",
//     "dialCode": "+93",
//     "name": "Afghanistan",
//     "currency": "AFN",
//     "languageCode": "fa-AF",
//     "coordinates": [34.5553, 69.2075],
//     "timezoneOffset": ["+04:30"]
//   },
//   ...
// ]
```

### Browser
```js
<script src="https://cdn.jsdelivr.net/gh/paramanandapradhan/easy-countrydata@main/dist/index.js" />

EasyCountryData.getCountry({name:'United States'});
// Output: {
//   "isoCode": "US",
//   "dialCode": "+1",
//   "name": "United States",
//   "currency": "USD",
//   "languageCode": "en-US",
//   "coordinates": [38.9072, -77.0369],
//   "timezoneOffset": ["-10:00", "-09:00", "-08:00", "-07:00", "-06:00", "-05:00", "-04:00"]
// }

EasyCountryData.getCountry({dialCode:'+1'});
// Output: {
//   "isoCode": "US",
//   "dialCode": "+1",
//   "name": "United States",
//   "currency": "USD",
//   "languageCode": "en-US",
//   "coordinates": [38.9072, -77.0369],
//   "timezoneOffset": ["-10:00", "-09:00", "-08:00", "-07:00", "-06:00", "-05:00", "-04:00"]
// }

EasyCountryData.getCountry({isoCode:'US'});
// Output: {
//   "isoCode": "US",
//   "dialCode": "+1",
//   "name": "United States",
//   "currency": "USD",
//   "languageCode": "en-US",
//   "coordinates": [38.9072, -77.0369],
//   "timezoneOffset": ["-10:00", "-09:00", "-08:00", "-07:00", "-06:00", "-05:00", "-04:00"]
// }

EasyCountryData.getCountries();
// Output: [
//   {
//     "isoCode": "AF",
//     "dialCode": "+93",
//     "name": "Afghanistan",
//     "currency": "AFN",
//     "languageCode": "fa-AF",
//     "coordinates": [34.5553, 69.2075],
//     "timezoneOffset": ["+04:30"]
//   },
//   ...
// ]
```

# Data Structure

Each country object contains the following fields:

- **isoCode**: ISO 3166-1 alpha-2 country code (e.g., "US", "GB")
- **dialCode**: International dialing code (e.g., "+1", "+44")
- **name**: Country name (e.g., "United States", "United Kingdom")
- **currency**: ISO 4217 currency code (e.g., "USD", "GBP")
- **languageCode**: Primary language code in IETF format (e.g., "en-US", "fr-FR")
- **coordinates**: Array of [latitude, longitude] for the capital/main city
- **timezoneOffset**: Array of UTC timezone offsets (e.g., ["+05:30"], ["-08:00", "-07:00", "-06:00"])

Countries with multiple timezones will have multiple values in the `timezoneOffset` array.

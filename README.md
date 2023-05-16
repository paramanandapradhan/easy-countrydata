# easy-countrydata
Library to provide country name, dialCode and isoCode

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
// Output: {"isoCode":"US","dialCode":"+1","name":"United States"}
EasyCountryData.getCountry({dialCode:'+1'});
// Output: {"isoCode":"US","dialCode":"+1","name":"United States"}
EasyCountryData.getCountry({isoCode:'US'});
// Output: {"isoCode":"US","dialCode":"+1","name":"United States"}
EasyCountryData.getCountries(  )	;
// Output: [{"isoCode":"US","dialCode":"+1","name":"United States"}, ...]

```

### Browser
```js
<script src="https://cdn.jsdelivr.net/gh/paramanandapradhan/easy-countrydata@main/dist/index.js" />

EasyCountryData.getCountry({name:'United States'});
// Output: {"isoCode":"US","dialCode":"+1","name":"United States"}
EasyCountryData.getCountry({dialCode:'+1'});
// Output: {"isoCode":"US","dialCode":"+1","name":"United States"}
EasyCountryData.getCountry({isoCode:'US'});
// Output: {"isoCode":"US","dialCode":"+1","name":"United States"}
EasyCountryData.getCountries(  )	;
// Output: [{"isoCode":"US","dialCode":"+1","name":"United States"}, ...]

```

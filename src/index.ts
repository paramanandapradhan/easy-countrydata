import { data } from "./data";

export type Country = {
    name: string,
    isoCode: string,
    dialCode: string,
    currency: string,
    languageCode: string,
    coordinates: [number, number],
    timezoneOffset: string[],
}

type CountryData = [string, string, string, string, string, [number, number], string[]];

export function getCountries(): Country[] {
    return (data||[]).map((item: CountryData) => {
        return {
            isoCode: item[0] || '',
            dialCode: item[1] || '',
            name: item[2] || '',
            currency: item[3] || '',
            languageCode: item[4] || '',
            coordinates: item[5] || [0, 0],
            timezoneOffset: item[6] || ['+00:00'],
        }
    })
}

export function getCountry({ isoCode, dialCode, name }: { isoCode?: string, dialCode?: string, name?: string }): Country | null {
    let item: CountryData | undefined = undefined;
    isoCode = (isoCode || '').toLowerCase()
    name = (name || '').toLowerCase()
    if (isoCode || dialCode || name) {
        item = (data||[]).find((country: CountryData) => {
            if (isoCode) {
                return isoCode === (country[0] || '').toLowerCase();
            } else if (dialCode) {
                return dialCode === country[1];
            } else {
                return name === (country[2] || '').toLowerCase();
            }
        });
    }

    if (item) {
        return {
            isoCode: item[0] || '',
            dialCode: item[1] || '',
            name: item[2] || '',
            currency: item[3] || '',
            languageCode: item[4] || '',
            coordinates: item[5] || [0, 0],
            timezoneOffset: item[6] || ['+00:00'],
        }
    }

    return null;
}


import { data } from "./data";

export type Country = {
    name: string,
    isoCode: string,
    dialCode: string,
}
export function getCountries(): Country[] {
    return (data||[]).map((item) => {
        return {
            isoCode: item[0] || '',
            dialCode: item[1] || '',
            name: item[2] || '',
        }
    })
}

export function getCountry({ isoCode, dialCode, name }: { isoCode?: string, dialCode?: string, name?: string }): Country {
    let item = null;
    isoCode = (isoCode || '').toLowerCase()
    name = (name || '').toLowerCase()
    if (isoCode || dialCode || name) {
        item = (data||[]).find((country) => {
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
        }
    }

    return null;
}


export type Country = {
    name: string;
    isoCode: string;
    dialCode: string;
    currency: string;
    languageCode: string;
    coordinates: [number, number];
    timezoneOffset: string[];
};
export declare function getCountries(): Country[];
export declare function getCountry({ isoCode, dialCode, name }: {
    isoCode?: string;
    dialCode?: string;
    name?: string;
}): Country | null;

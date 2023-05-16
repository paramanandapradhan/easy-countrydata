export type Country = {
    name: string;
    isoCode: string;
    dialCode: string;
};
export declare function getCountries(): Country[];
export declare function getCountry({ isoCode, dialCode, name }: {
    isoCode?: string;
    dialCode?: string;
    name?: string;
}): Country;

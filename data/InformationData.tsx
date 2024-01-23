import { ImageProps } from "react-native"

export type PersonalData = {
    personalImage: ImageProps,
    name: string,
    iconsUrls: string[],
    iconsMedia: ImageProps[],
    info: string,
    qrURL: string,
}
export const peopleData: PersonalData[] = [
    {
        personalImage: require('../assets/Profile.jpg'),
        name: 'Gabriel Díaz',
        iconsUrls: ["@Gabri_diazz", "@Gabrieldz2003", "Carlos Gabriel Diaz Zapata"],
        iconsMedia: [require('../assets/logoInsta.png'), require('../assets/logoTwitter.png'), require('../assets/logolinkeding.png')],
        info: 'Me llamo Gabriel, tengo 20 años y estudio desarrollo de aplicaciones multiplataforma  ',
        qrURL: 'https://github.com/GabrielDiazZapata',
    }
]



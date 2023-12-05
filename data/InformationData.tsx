import { ImageProps } from "react-native"

export type PersonalData = {
    personalImage: ImageProps,
    name: string,
    iconsUrls: string[],
    iconsMedia: ImageProps[],
    info: string,
    qrURL: string,
    informationData: string[]
}
export const peopleData: PersonalData[] = [
    {
        personalImage: require('../assets/Profile.jpg'),
        name: 'Gabriel Díaz',
        iconsUrls: ["@GabrielDiazZapata", "@TwitterDeGabri", "Gabriel Diaz Zapata"],
        iconsMedia: [require('../assets/logoInsta.png'), require('../assets/logoTwitter.png'), require('../assets/logolinkeding.png')],
        info: 'Un pive de Tenerife yoquese',
        qrURL: 'https://github.com/GabrielDiazZapata',
        informationData: ["Er Furbo", "Er Jimnazio", "Acé depoté", "Condusi el coxe"]
    }
]

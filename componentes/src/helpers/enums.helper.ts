export class EnumsHelper {
    static getEnum(enumeration, enumName) {
        let wrappedEnum: { [k: string]: any } = {};
        let enumKeys = Object.keys(enumeration).filter(key => !isNaN(Number(enumeration[key])))
        enumKeys.forEach(value => {
            wrappedEnum[value] = `${enumName.toUpperCase()}.${value.toUpperCase()}`
        })
        wrappedEnum.keys = function () {
            return enumKeys;
        }
        return wrappedEnum;
    }
}

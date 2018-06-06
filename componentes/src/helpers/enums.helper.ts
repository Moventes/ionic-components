export class EnumsHelper {
    static getEnum(enumeration, enumName) {
        const wrappedEnum: { [k: string]: any } = {};
        const enumKeys = Object.keys(enumeration).filter(key => !isNaN(Number(enumeration[key])));
        enumKeys.forEach(value => {
            wrappedEnum[value] = `${enumName.toUpperCase()}.${value.toUpperCase()}`;
        });
        wrappedEnum.keys = function () {
            return enumKeys;
        };
        return wrappedEnum;
    }
}

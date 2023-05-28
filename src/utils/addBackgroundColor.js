export const addBackgroundColor = function (value) {
    if (value >= 80) {
        return 'rgb(77, 210, 90)'
    }
    if (value >= 50 && value < 80) {
        return 'rgb(245, 247, 123)'
    }
    return 'rgb(245, 116, 116)'
}
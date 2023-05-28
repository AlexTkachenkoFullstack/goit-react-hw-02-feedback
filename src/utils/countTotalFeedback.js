export const countTotalFeedback = function (state) {
    const arrayFeedbackes = Object.values(state);
    const totalFeedbackes = arrayFeedbackes.reduce((acc, item) => {
        return acc+=item
    }, 0)
    return totalFeedbackes
}
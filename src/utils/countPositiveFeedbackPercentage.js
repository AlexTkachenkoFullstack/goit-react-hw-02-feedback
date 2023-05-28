export const countPositiveFeedbackPercentage = function ({ good, neutral, bad }) {
    if (good === 0 && neutral === 0 && bad === 0) {
        return 0
    }
    const positiveFeedback = Math.round(good / (good + neutral + bad) * 100);
    return positiveFeedback
}
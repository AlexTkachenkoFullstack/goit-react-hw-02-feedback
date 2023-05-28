import css from './Notification.module.css'
export const Notification = function ({ message }) {
    return (
        <p className={css.text}>{ message}</p>
    )
}


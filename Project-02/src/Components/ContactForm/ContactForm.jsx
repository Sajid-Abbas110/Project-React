import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

const ContactForm = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button icon={<MdMessage fontSize={24} />} text="VIA SUPPORT CHAT" />
                    <Button icon={<FaPhoneAlt fontSize={24} />} text="VIA CALL" />
                </div>

            </div>
            <div className={styles.contact_image}>
                <img src="/images/service.svg" alt="service" />
            </div>
        </section>
    )
}

export default ContactForm

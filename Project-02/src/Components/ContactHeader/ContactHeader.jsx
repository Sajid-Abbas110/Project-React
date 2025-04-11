import styles from "./ContactHeader.module.css"
const ContactHeader = () => {
    console.log(styles);
    return (
        <div>
            <h1 className={`styles.contact_section`}>CONTACT US</h1>
            <P>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </P>
        </div>
    )
}

export default ContactHeader

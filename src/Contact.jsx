import "../src/css/Contact.css"
import { useContext } from "react";
import { MobileContext } from "./Utils/Context";
import Puzzle from "./Utils/Puzzle";
import { AnswerBoxContext } from "./AnswerBoxContext";

function Contact() {
    const { answerBoxOpen} = useContext(AnswerBoxContext);

    let {isMobile} = useContext(MobileContext);
    return (
        <div className="conatct-container page">
            <div className="contact-info"></div>
            <div className="contact-avatar"></div>
            <div className="white-ractange-attachhment">
                TALK
                <a className="contact-mail" href="mailto:rohitrai.26csb@licet.ac.in">
                    {
                        isMobile ?
                            <>
                                <i class="fa-solid fa-envelope"></i>Mail Me!

                            </> :
                            <>
                                rohitrai.26csb@licet.ac.in
                            </>
                    }
                </a>
            </div>
            <div className="contact-footer">
                <a href="https://github.com/RohitRai1141">
                    <i class="fa-brands fa-github contact-footer-icon" ></i>
                </a>
                <a href="https://www.linkedin.com/in/rohitrai-a-29183b335/">
                    <i class="fa-brands fa-linkedin contact-footer-icon" ></i>
                </a>
            </div>

            {answerBoxOpen.findMode && <Puzzle
                id={7}
                t={100}
                r={isMobile ? -30 : 200}
                question={"19 15 12 9 20 1 18 25"}
                isInverted={true}
            />}
        </div>
    );
}

export default Contact;
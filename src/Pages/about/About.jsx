import styles from "./about.module.css";
import grpic from "./d1.jpg";
import eye from "./Eye.png";
import rocket from "./Rocket.png";

function AboutComponent(){
    return(
        <section className={styles.Abt_Us}>
            <div className={styles.abt_us_1}>
                <div className={styles.abt_us_cont}>
                    <h1>ABOUT US</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className={styles.pic}>
                    
                    <div className={styles.back}>
                    </div>
                    <div className={styles.front}> 
                    </div>
                    
                </div>
            </div>
            <div className={styles.abt_us_2}>
                <div className={styles.mission}>
                    <div className={styles.rkt_icon}></div>
                    <h2>OUR MISSION</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, .</p>
                </div>
                <div className={styles.vision}>
                    <div className={styles.eye_icon}></div>
                    <h2>OUR VISION</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, .</p>
                </div>
            </div>
        </section>
    );
}

export default AboutComponent
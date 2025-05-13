import styles from "@/styles/chatgptPageTimeline.module.scss";
import { Timeline } from "@/components/Timeline";

export default function ChatGPTPageTimeline() {
    return (
        <div className={styles.container}>
            <h2>ChatGPT Evolution</h2>

            <Timeline />
            {/* <div className={styles.timelineContainer}>
                <Timeline />
            </div> */}
        </div>
    )
}

import styles from './VideoYoutube.module.scss'
import img from '../../assets/youtube.png'

const VideoYoutube = () => {
    return (
        <div className={styles.youtube}>
            <img src={img} alt="" />
        </div>
    )
}

export default VideoYoutube;
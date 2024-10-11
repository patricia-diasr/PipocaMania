import styles from "./Banner.module.css";

function Banner({ path_image }) {
    return (
        <div
            className={styles.banner}
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${path_image})` }}
        ></div>
    );
}

export default Banner;

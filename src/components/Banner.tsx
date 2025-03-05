import bannerImg from "../assets/banner.jpg";
import "../styles/Banner.css";

const Banner = () => {
    return (
        <section>
            <div id="banner">
                <img className="banner-img" src={bannerImg} alt="Banner" />
            </div>
        </section>
    )
};

export default Banner;

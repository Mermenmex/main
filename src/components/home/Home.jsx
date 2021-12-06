/* Layut de l'écran principal */


import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData, userData2 } from "../../components/chart/data";
import FeaturedInfo2 from "../../components/featuredInfo/FeaturedInfo2";


export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="Views Analytics" grid dataKey="Views" />
            <FeaturedInfo2 />
        </div>
    );
}
//<Chart data={userData} title="Views Analytics" grid dataKey="Views" />
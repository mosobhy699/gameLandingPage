import { BiSolidDownArrow } from 'react-icons/bi'
import { TiDelete } from "react-icons/ti"
import gold from "../../assets/LOL-Iron.png"
import silver from "../../assets/LOL-Silver.png"
import one from "../../assets/1.png"
import two from "../../assets/2.png"
import three from "../../assets/3.png"
import four from "../../assets/4.png"
export const boost = [{
    name: "Rank Boosting",
    background: '#2E2E2E'
}, {
    name: "Win Boosting"
}, {
    name: "Placement Games"
}, {
    name: "Normal Games"
}];

export const region = [{
    title: "Region",
    country: "North America",
    icon: <BiSolidDownArrow />
},
{
    title: "Queue Type",
    country: "Solo",
    icon: <BiSolidDownArrow />
},
{
    title: "LP",
    country: "0-20",
    icon: <BiSolidDownArrow />
},
{
    title: "Current Rank",
    country: "Iron IV",
    icon:  <BiSolidDownArrow />,
    img: gold
},
{
    title: "Desired Rank",
    country: "Silver I",
    icon:<BiSolidDownArrow />,
    img: silver
},
{
    title: "Champions",
    country: "Select champions",
    icon: <BiSolidDownArrow />,
},
{
    title: "Roles",
    country: "Select roles",
    icon: <BiSolidDownArrow />,
}];

export const select_champions = [{
    img: one,
    name: "Ezreal",
    icon: <TiDelete />
}, {
    img: two,
    name: "Elise",
    icon: <TiDelete />
}, {
    img: three,
    name: "Aphelios",
    icon: <TiDelete />
}, {
    img: four,
    name: "Fizz",
    icon: <TiDelete />
},
]

export const select_roles = [{
    name: "Top",
    icon: <TiDelete />
}, {
    name: "Mid",
    icon: <TiDelete />
}, {
    name: "Support",
    icon: <TiDelete />
}, {
    name: "Jungle",
    icon: <TiDelete />
},
{
    name: "Bot",
    icon: <TiDelete />
}
]

export const Addons = [{
    price: "free",
    para: "Apper Offline",
    bg: "#2E2E2E",
    col: "green",
},
{
    price: "free",
    para: "Use VPN",
    bg: "#2E2E2E",
    col: "green",
},
{
    price: "+50%",
    para: "Dou with Booster",
    bg: "#2E2E2E",

},
{
    price: "+10%",
    para: "Extra Win",
    bg: "#2E2E2E",

},
{
    price: "+20%",
    para: "Priority",
    bg: "#2E2E2E",

},
{
    price: "+10%",
    para: "Solo Only", bg: "#2E2E2E",

},
{
    price: "+20%",
    para: "Livestream", bg: "#2E2E2E",

},
{
    price: "free",
    para: "Specific Agents", bg: "#2E2E2E",

}];

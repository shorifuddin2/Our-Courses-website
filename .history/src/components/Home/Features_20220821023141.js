import { Link } from "react-router-dom";
import demo from "../../images/demo3.PNG";









const features = [
    {
        id:"1",
        img:"https://i.ibb.co/DYgWPqM/javascript.jpg",
        name: "Amalfi Coast",
        price:'$5310',
        description:
            "The Amalfi Coast (Italian: Costiera amalfitana) is a stretch of coastline in southern Italy overlooking the Tyrrhenian Sea and the Gulf of Salerno.Deemed an outstanding example of landscape by Unesco ...",
            button: 'click me'
                   
    },
    {
        id:"2",
        img:"https://i.ibb.co/LgZH81c/jquery.jpg",
        name: "Roman Forum",
        price:'$5120',
        description:
            "The Roman Forum, also known by its Latin name Forum Romanum (Italian: Foro Romano), is a rectangular forum (plaza) surrounded by the ruins of several most important forum in ancient Rome ...",
            button: 'click me'
    },
    {
        id:"3",
        img:"https://i.ibb.co/XCWkbZw/nodeJs.png",
        name: "French Riviera",
        price:'$5520',
        description:
            "The French Riviera is the Mediterranean coastline of the southeast corner of France. There is no official boundary, but it is usually considered to extend The French Riviera: 8 Must-See Spots on the Côte d'Azur ...",
            button: 'click me'
    },
    {
        id:"4",
        img:`https://i.ibb.co/51PZ0fs/react.jpg`,
        name: "React Js",
        price:'$4520',
        description:
            "Enjoy one full day access to Aquaventure Waterpark with 105 record-breaking slides, attractions and experiences, including a private beach and the Surf's Up the exclusive passes of Rayna Tours ...",
    },
    {
        id:"5",
        img:"https://i.ibb.co/RzwyMYf/react-Native.jpg",
        name: "React Native",
        price:'$6820',
        description:
            "The French Riviera is the Mediterranean coastline of the southeast corner of France. There is no official boundary, but it is usually considered to extend The French Riviera: 8 Must-See Spots on the Côte d'Azur ...",
            button: 'click me'
    },
    {
        id:"6",
        img:`https://i.ibb.co/jfFmFS4/vue.png`,
        name: "Vue Js",
        price:'$7320',
        description:
            "Enjoy one full day access to Aquaventure Waterpark with 105 record-breaking slides, attractions and experiences, including a private beach and the Surf's Up the exclusive passes of Rayna Tours ...",
    },
];

const Features = () => {
    return (
        <div className="bg-fuchsia-200">
            <p className="feature-title mt-40">
                Services
            </p>
            <div className=" grid md:grid-cols-3 grid-cols-1 w-4/5 mx-auto  gap-5">
                {/* <div className="features"> */}
                    {features.map((feature) => (
                        <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50 p-2 rounded-3">
                            <img className=" p-2 w-100 h-60" src={feature.img} alt="" />
                            <p className="font-bold">ID: {feature.id}</p>
                            <p className="font-bold">Name: {feature.name}</p>
                            <p className="font-bold">Price: {feature.price}</p>
                            <div className="w-100 font-bold p-2">{feature.description}</div>
                            <div><Link className="bg-rose-500  py-1 px-2 font-bold hover:bg-cyan-600 rounded text-center" to="/checkout">Click Me</Link></div> 
                        </div>
                    ))}
            </div>
            <button className="text-center m-8">see more</button>
        </div>
        
    );
    
};

export default Features;
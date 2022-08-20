import { Link } from "react-router-dom";
import demo from "../../images/demo3.PNG";









const features = [
    {
        id:"1",
        img:"https://i.ibb.co/DYgWPqM/javascript.jpg",
        name: "Javascript",
        price:'$5310',
        description:
            "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, ...",
            button: 'click me'
                   
    },
    {
        id:"2",
        img:"https://i.ibb.co/LgZH81c/jquery.jpg",
        name: "Jquery",
        price:'$5120',
        description:
            "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation ...",
            button: 'click me'
    },
    {
        id:"3",
        img:"https://i.ibb.co/XCWkbZw/nodeJs.png",
        name: "Node Js",
        price:'$5520',
        description:
            "Node.js is an open source server environment; Node.js is free; Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.) ; Node.js can generate ...",
            button: 'click me'
    },
    {
        id:"4",
        img:`https://i.ibb.co/51PZ0fs/react.jpg`,
        name: "React Js",
        price:'$4520',
        description:
            "React · Declarative. React makes it painless to create interactive UIs. · Component-Based. Build encapsulated components that manage their own state, then compose ...",
    },
    {
        id:"5",
        img:"https://i.ibb.co/RzwyMYf/react-Native.jpg",
        name: "React Native",
        price:'$6820',
        description:
            "This tutorial is designed for JavaScript and React developers who aspire to learn mobile building skills. By following this course, you will expand your React ...",
            button: 'click me'
    },
    {
        id:"6",
        img:`https://i.ibb.co/jfFmFS4/vue.png`,
        name: "Vue Js",
        price:'$7320',
        description:
            "Vue.js lets you extend HTML with HTML attributes called directives. Vue.js directives offers functionality to HTML applications. Vue.js provides built-in ...",
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
                            <div><Link className="bg-rose-500  py-1 px-2 font-bold hover:bg-cyan-600 rounded text-center" to="/">Click Me</Link></div> 
                        </div>
                    ))}
            </div>
            <button className="text-center m-8">see more</button>
        </div>
        
    );
    
};

export default Features;
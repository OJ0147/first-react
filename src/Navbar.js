
 /* jsx - javascript xml -extension to javascript language syntax 
        -jsx tags have tag name and attributes
        -jsx is not a necessity to write react applications
        -jsx makes your react code simpler and elegant
        -jsx by it self transpiles to pure javascript which is understood by thr browser

        ----------------jsx difference-----------------
        -class ---->className
        -for ---->htmlFor
        camelCase property naming styles
        rafce
        rfc export at top
        sfc
        */

import Main from "./Main";

const Navbar = () => {
    let link ='https://www.facebook.com/';
    let description = 'senior dev';
    let age = 50
    return (
       
       <div>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </nav>
        <a href={link} >facebook</a>
        <h2>esther is a {description}  and she is {age}years old </h2>
        <h2>{Math.ceil(Math.random()*20)} </h2>
        <Main/>
       </div>

        
    );
}
 
export default Navbar;
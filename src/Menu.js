import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <div className="Menu">
            <ul className="nav nav-tabs">
                <li className="nav-item"><Link to="/MakeUp" className="nav-link"> Make-Up </Link> </li>
                <li className="nav-item"><Link to={{pathname: "/Events", state: {login:"Bem-vindo :)",
                        event:"Evento X",
                        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas arcu eros, posuere non risus tincidunt, convallis dignissim quam. Maecenas consequat dapibus pretium. Aenean a semper velit, in finibus nisl. Pellentesque maximus, velit ut interdum varius, purus neque gravida dolor, in lacinia nisi massa et magna. Vivamus molestie consequat euismod. Ut id est ac ligula vehicula auctor. Donec sed lobortis tortor.
                        Morbi sodales lacinia felis in convallis. Fusce ac egestas lorem. Morbi varius erat ligula, eu lobortis ipsum consectetur at. Aliquam libero felis, laoreet sed imperdiet nec, sodales quis augue. Duis dictum, turpis quis sollicitudin congue, justo libero malesuada diam, sit amet fringilla enim augue a diam. Nullam non luctus ante, ut ullamcorper augue. Pellentesque eu dapibus nulla, sit amet ultricies sapien. Duis interdum ornare purus eu interdum. Quisque et tincidunt lorem, nec pulvinar urna. Praesent accumsan dolor et leo convallis, venenatis elementum arcu fringilla. Mauris rhoncus porta arcu commodo porta. Donec iaculis sit amet augue quis bibendum. Donec sit amet enim tempus, euismod arcu eget, tempus dui.
                        Vestibulum sed eros mi. Sed cursus blandit lacus. Integer cursus neque non est vulputate, nec venenatis tortor egestas. Aliquam rutrum eros ipsum, vel iaculis diam faucibus ut. Etiam dapibus, augue non molestie facilisis, nulla turpis consequat mauris, nec pretium erat neque sit amet velit. Donec blandit elementum lacinia. Etiam varius ut lectus sed accumsan. Integer blandit in arcu a vehicula. Suspendisse quis tincidunt massa. In sodales ex vitae turpis hendrerit, sit amet consectetur diam aliquam. Sed consectetur leo ut sem feugiat, quis maximus justo convallis. Duis mattis vitae ipsum sit amet porttitor.
                `
                }}} className="nav-link"> Cocktails </Link></li>
                <li className="nav-item"><Link to="/Produtos" className="nav-link" >WTV</Link> </li>
                <li className="nav-item"><Link to="/Contacts" className="nav-link"> Something </Link> </li>
            </ul>
        </div>
    );
}

export default Menu;
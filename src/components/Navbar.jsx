import React, { useState } from 'react'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import avtarImg from "../assets/avatar.png";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

function Navbar() {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const navigation = [
        { name: "Dashboard", href: "/Dashboard" },
        { name: "Orders", href: "/Orders" },
        { name: "Add to Cart", href: "/addToCart" },
        // { name: "Log Out", href: "/logout" },
    ];
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        logout();
        // navigate("/login");
    }

    // note: The component re-renders when cartItems changes because the useSelector hook subscribes to the Redux store and 
    // triggers a re-render whenever the selected slice of state (state.cart.cartItems) updates. This behavior occurs regardless 
    // of the variable type because useSelector is specifically designed to monitor and react to changes in the Redux state.
    const cartItems = useSelector((state) => state.cart.cartItems);

    // console.log(cartItems,"cartItems");

    return (
        <header className='bottom-0 items-center py-6 mx-auto max-w-screen-2xl' >
            <nav className='flex justify-between'>
                {/* left side  */}
                <div className='flex gap-x-4 md:gap-x-6'>
                    <Link to="/"> <HiBars3CenterLeft /></Link>

                    {/* serach input */}
                    <div className="relative border border-red-500">
                        <IoIosSearch className='absolute left-0 top-1 b-1' />
                        <input type="text" placeholder='Search here' className='bg-[#EAEAEA] px-6  rounded-md 
                        focus:outline-none' />
                        {/* inset-y-2: Vertically centers the icon by setting equal spacing (8px, or 2 * 4px) from the top and bottom edges of the parent container. */}
                        {/* focus:outline-none => to not focus when click outside of this input field */}
                    </div>
                </div>

                {/* right side */}

                <div className='relative flex gap-4 '>
                    {
                        currentUser ?
                            <>
                                <button onClick={(e) => setIsDropDownOpen(!isDropDownOpen)}>
                                    {/* {console.log()} */}
                                    <img src={avtarImg} alt="" className={`size-6 rounded-sm ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />        {/* NOTE: {avtarImg} is used as the value of the src attribute, which indicates that avtarImg is a variable containing the path (or URL) to the image file. */}
                                </button>

                                {/* show dropdown  : NOte: the parentheses () in JSX are used to group the JSX content that's being returned, improving readability*/}
                                {
                                    isDropDownOpen && (
                                        <div className="absolute z-50 w-48 bg-white rounded-md shadow-lg top-5 right-2">
                                            <ul className="py-2">
                                                {
                                                    navigation.map((item) => (
                                                        <li key={item.name} onClick={() => setIsDropDownOpen(false)}>
                                                            <Link to={item.href} className="block w-full px-4 py-2 text-sm hover:bg-gray-200">
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))

                                                }
                                                <li>
                                                    <button onClick={handleLogout} className='block w-full px-4 py-2 text-sm text-left hover:bg-red-500'>Logout</button>
                                                </li>

                                            </ul>
                                        </div>
                                    )
                                }

                            </> :
                            <>
                                <Link to="/login">
                                    <IoMdPerson className='size-6' />
                                </Link>
                            </>
                    }
                    <button>
                        <CiHeart className='size-6' />
                    </button>
                    <NavLink to="/cart" className='flex items-center p-1 bg-primary'>
                        <IoCart />
                        <span>{cartItems.length}</span>
                    </NavLink>

                </div>
            </nav>
        </header>

    )
}

export default Navbar


// The issue in your code arises from inconsistent styling and alignment between the <Link> component and the <button> inside the <ul>.

/*

Need to see this : 
Here’s a breakdown of why the issue occurred:

1. Block vs. Inline-Block Elements:
By default, a <button> is a block-level element (meaning it takes up the full width available to it, like w-full).
A <Link> component (which renders as an <a> tag) is typically inline-block by default. This means it will only take the space required by its content and won’t span the full width of the parent container unless you explicitly apply w-full and block to it.
2. Padding and Alignment:
In your code, both the Link and button have w-full, but their internal styling differs.
The Link (<a> tag) inside the <li> is aligned by default to the left, but it behaves as an inline-block element unless you force it to be block-level.
The Logout button is block-level due to w-full and px-4 py-2, and since it is block-level, it takes up the full width, which causes it to look "centered" in terms of content alignment, even though it might seem like it's aligned with the other list items.
3. Different Behavior of Link vs. button:
The <Link> and <button> are both given w-full, but the button element is inherently block-level (with no need to adjust the display), while the <Link> still acts like an inline-block unless you specify block.
The padding and the display type (block or inline-block) affect how the text inside each element is aligned. Since the button is block-level, the padding and text appear centered by default, while the Link (without block) stays aligned to the left and doesn't take up the full width.
Solution in Your Code:
To fix the issue, you needed to make sure that both the <Link> and the <button> are styled the same way, i.e., making them both block-level elements and left-aligned.

*/
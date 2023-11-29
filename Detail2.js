import React from 'react';
import Detcss from './Detail2.module.css';

function Detail() {
    return (
        <div>

            {/* <div className={Detcss.header}>
                <ul>
                    <li className={Detcss.logo}>Logo</li>
                    <li className={Detcss.search}><input type="text" placeholder="Search" className={Detcss.input} /></li>
                    <li className={Detcss.signin}><button className={Detcss.button}><b>SIGN UP</b></button></li>
                    <li><button className={Detcss.button}><b>LOGIN</b></button></li>
                </ul>
            </div> */}

            <div className={Detcss.main} >
                <div className={Detcss.head}>
                    <h1>Simplicity meets elegance <br />in this tasteful delight.</h1>
                </div>
                <div className={Detcss.image}></div>
                <div className={Detcss.detail}>
                    <h3>Smoothie Bowl</h3> <br />
                    Smoothie bowls are a great aesthetic meal to make because they are both delicious and visually appealing. Smoothie bowls are a great way to get creative with the way you present a meal. You can top smoothie bowls with a variety of fruits, nuts, granola, and other toppings to make them look vibrant and colorful.

                    Plus, making smoothie bowls is incredibly easy. To make a smoothie bowl, you simply need to blend your favorite fruits, such as bananas, strawberries, blueberries, mangoes, etc., with a liquid base such as almond milk, coconut water, or yogurt. Once blended, pour the mixture into a bowl and top with your favorite toppings. You can find some easy smoothie bowl recipes below.
                    <br />
                    <h3>Ingredients</h3>
                    Caramel and Cashews - Strawberry Mango Smoothie
                    <br />
                    Laura Fuentes - Peaches and Cream Smoothie</div>
            </div>

        </div>
    )
}

export default Detail;

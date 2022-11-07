import React from 'react';

import { Div } from './btnStyles';

function BurgerBtn() {
    return (
        <Div>
            <div className="container">
                <button className="burgermenu">
                    <span></span>
                </button>
            </div>
        </Div>
 );
}

export default BurgerBtn;
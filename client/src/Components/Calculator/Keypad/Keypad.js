import React from 'react';

import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../Components/Button/Button';
import LargeButton from '../../../Components/Button/LargeButton/LargeButton';
import ClearButton from '../../../Components/Button/ClearButton/ClearButton'

const keypad = props => (
    <section className="keypad">
        {/* row #1 */}
        <KeypadRow>
            <ClearButton type="primary" onButtonPress={props.onButtonPress}>C</ClearButton>
            <Button type="primary" onButtonPress={props.onButtonPress}>&larr;</Button>
            <Button type="operator" onButtonPress={props.onButtonPress}>%</Button>
            <Button type="operator" onButtonPress={props.onButtonPress}>/</Button>
        </KeypadRow>

        {/* row #2 */}
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>7</Button>
            <Button onButtonPress={props.onButtonPress}>8</Button>
            <Button onButtonPress={props.onButtonPress}>9</Button>
            <Button type="operator" onButtonPress={props.onButtonPress}>*</Button>
        </KeypadRow>

        {/* row #3 */}
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>4</Button>
            <Button onButtonPress={props.onButtonPress}>5</Button>
            <Button onButtonPress={props.onButtonPress}>6</Button>
            <Button type="operator" onButtonPress={props.onButtonPress}>-</Button>
        </KeypadRow>

        {/* row #4 */}
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>1</Button>
            <Button onButtonPress={props.onButtonPress}>2</Button>
            <Button onButtonPress={props.onButtonPress}>3</Button>
            <Button type="operator" onButtonPress={props.onButtonPress}>+</Button>
        </KeypadRow>

        {/* row #5 */}
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>0</Button>
            <Button onButtonPress={props.onButtonPress}>.</Button>
            <LargeButton onButtonPress={props.onButtonPress}>=</LargeButton>
        </KeypadRow>
    </section>
);

export default keypad;
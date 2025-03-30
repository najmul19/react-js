import './Sunglass.css'
import Watch from '../Watch/Watch'
import { add, mul, divideTheFirstNumberByTheSecondNumber as divide } from '../../Utils/Calculate';
import { useEffect } from 'react';
// import add from '../../Utils/Calculate';
const Sunglass = () => {
    const f = 39;
    const s=93;
    const sum = add(f,s); 
    const multi=mul(f,s)
    const vag = divide(f,s);
    console.log(sum, multi, vag)
    useEffect()
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;
import React from 'react';
import { Link } from 'react-router-dom';

const TotalFeeSection = () => {
    return (
        <div className='py-10 px-6 flex flex-col items-center'>
<div className="text-center w-[313px] px-4 py-2 border-[1px] border-black rounded-[25px]">
Fee : 10,0 00 Tk
</div>
<Link to='/diagonosticBookingDetails'>
<button className="text-center mt-4 h-[41px] bg-[#00A662] w-[313px] px-4 py-2 border-[1px] rounded-[25px]">
Confirm

</button></Link>
        </div>
    );
};

export default TotalFeeSection;
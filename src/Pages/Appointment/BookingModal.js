import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date,setTreatment }) => {

    const {_id,name,slots } = treatment;

    const handleBooking=event=>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id,name,slot);
        setTreatment(null);
    }
    
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-lg">Booking For : {name}</h3>
                    <form onSubmit={handleBooking} className="grid cols-span-1 gap-3 justify-items-center lg:my-10">
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        {/* Dropdown List Input */}
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {slots.map(slot => <option key={slot}>{slot}</option>)}
                        </select>
                        <input required type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input required type="email" name="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input required type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input required type="submit" value="Submit" className="btn btn-secondary uppercase text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
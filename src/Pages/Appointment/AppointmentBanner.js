import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className='lg:px-12 px-4'>
            <div
                style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl lg:m-20" alt="chair" />
                    <div className="lg:m-20">
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
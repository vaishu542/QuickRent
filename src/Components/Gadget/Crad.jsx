import React from 'react';

const Crad = ({ photoName, category, onClick }) => {
    return (
        <div className="m-5">
            <div
                className="transform transition duration-300 hover:scale-105 cursor-pointer rounded-lg shadow-lg hover:shadow-xl bg-white"
                onClick={onClick}
            >
                <div className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 rounded-lg">
                    <div className="flex px-3 justify-center items-end">
                        <div className="left px-5 p-5 flex flex-col">
                            <h2 className="font-semibold text-3xl tracking-wide">{category}</h2>
                            <button
                                className="bg-purple-500 cursor-pointer text-white px-2 py-1 mt-2 rounded-md transition duration-150 hover:bg-purple-600 w-max"
                                type="button"
                            >
                                Shop by {category}
                            </button>
                        </div>
                        <div className="right">
                            <img
                                src={`./images/Gadgets/Category/${photoName}.png`}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Crad;
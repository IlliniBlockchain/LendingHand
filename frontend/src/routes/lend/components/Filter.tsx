import React from 'react';
import { useState } from "react";
import "./Filter.css"

interface FilterProps {

}

export const Filter: React.FC<FilterProps> = ({}) => {
        const [isOpen, setIsOpen] = useState(false);
        
        return (
        <>
                <div className="outer-box">

                        <div className="item-wrapper">
                                <div className="check-box-wrapper">
                                        <div className="check-box"></div>
                                </div>
                                <div className="check-box-text-wrapper">item 1</div>
                        </div>
                        <div className="item-wrapper">
                                <div className="check-box-wrapper">
                                        <div className="check-box"></div>
                                </div>
                                <div className="check-box-text-wrapper">item 2</div>
                        </div>
                        <div className="item-wrapper">
                                <div className="check-box-wrapper">
                                        <div className="check-box"></div>
                                </div>
                                <div className="check-box-text-wrapper">item 3</div>
                        </div>
                        <div className="item-wrapper">
                                <div className="check-box-wrapper">
                                        <div className="check-box"></div>
                                </div>
                                <div className="check-box-text-wrapper">item 4</div>
                        </div>
                        <div className="item-wrapper">
                                <div className="check-box-wrapper">
                                        <div className="check-box"></div>
                                </div>
                                <div className="check-box-text-wrapper">item 5</div>
                        </div>
                        <div className="item-wrapper">
                                <div className="check-box-wrapper">
                                        <div className="check-box"></div>
                                </div>
                                <div className="check-box-text-wrapper">item 6</div>
                        </div>
                        <div className="item-wrapper">
                                <div className="check-box-wrapper">
                                        <div className="check-box"></div>
                                </div>
                                <div className="check-box-text-wrapper">item 7</div>
                        </div>
                        <div className="item-wrapper">
                                <div className="check-box-wrapper">
                                        <div className="check-box"></div>
                                </div>
                                <div className="check-box-text-wrapper">item 8</div>
                        </div>
                        
                </div>
        </>
        );
}
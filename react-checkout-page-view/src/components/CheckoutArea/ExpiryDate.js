import React, { Component } from 'react';

/**
 * This component is for Card details which includes expiry date of card
 */
export default class ExpiryDate extends Component {
    render() {
        return (
            <div className="ExpiryDate">
                <div>
                    <label>Expires on</label>
                    <div className="Expiry">
                        <select>
                            <option value="">January</option>
                            <option value="">February</option>
                            <option value="">March</option>
                            <option value="">April</option>
                            <option value="">May</option>
                            <option value="">June</option>
                            <option value="">July</option>
                            <option value="">August</option>
                            <option value="">September</option>
                            <option value="">October</option>
                            <option value="">November</option>
                            <option value="">December</option>
                        </select>
                        <select name="" id="">
                            <option value="">2016</option>
                            <option value="">2017</option>
                            <option value="">2018</option>
                            <option value="">2019</option>
                            <option value="">2020</option>
                            <option value="">2021</option>
                        </select>
                    </div>
                </div>
                <div className="CVCField">
                    <label>CVC</label>
                    <input placeholder="000" type="number" />
                </div>
            </div>
        );
    }
}
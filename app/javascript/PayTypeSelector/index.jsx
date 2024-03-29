import React from 'react'

import NoPayType from './NoPayType'
import CheckPayType from './CheckPayType'
import CreditCardPayType from './CreditCardPayType'
import PurchaseOrderPayType from './PurchaseOrderPayType'

class PayTypeSelector extends React.Component {
    constructor(props) {
        super(props);
        this.onPayTypeSelected = this.onPayTypeSelected.bind(this);
        this.state = { selectedPayType: null };
    }

    onPayTypeSelected(event) {
        this.setState({ selectedPayType: event.target.value });
    }

    render() {
        let PayTypeCustomComponent = NoPayType;
        if(this.state.selectedPayType === "Credit card") {
            PayTypeCustomComponent = CreditCardPayType;
        }
        else if(this.state.selectedPayType === "Check") {
            PayTypeCustomComponent = CheckPayType;
        }
        else if(this.state.selectedPayType === "Purchase order") {
            PayTypeCustomComponent = PurchaseOrderPayType;
        }

        return (
            <div>
                <div className="field">
                    <label htmlFor="order_pay_type">Pay Type</label>
                    <select onChange={this.onPayTypeSelected} id="pay_type" name="order[pay_type]">
                        <option value="">Select a payment method</option>
                        <option value="Check">Check</option>
                        <option value="Credit card">Credit card</option>
                        <option value="Purchase order">Purchase order</option>
                    </select>
                </div>
                <PayTypeCustomComponent />
            </div>
        );
    }
}

export default PayTypeSelector
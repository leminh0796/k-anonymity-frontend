import React, {Component} from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

class QiSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldArray: [
                { key: "Option 1"},
                { key: "Option 2"},
                { key: "Option 3"}
            ],
            selectedValues: [
            ]
        }
    }
    render() {
        const {fieldArray, selectedValues} = this.state;
        return (
            <div class='d-sm-flex'>
                <label class="text-left" style={{marginRight: '11px'}}>Chọn các cột cần ẩn danh:</label>
                <Multiselect
                options={fieldArray}
                selectedValues={selectedValues}
                displayValue="key"
                />
            </div>
        )
    }
}

export default QiSelect;
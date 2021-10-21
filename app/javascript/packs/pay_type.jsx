import React from 'react'
import ReactDOM from 'react-dom'
import PayTypeSelector from 'PayTypeSelector'

$(document).on('turbolinks:load', function() {
    let element = $('#pay-type-component')[0];
    ReactDOM.render(<PayTypeSelector />, element);
});
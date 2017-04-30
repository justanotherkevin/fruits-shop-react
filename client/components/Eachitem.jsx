import React from 'react';
// import $ from "jquery";

$.getJSON("../../json_files/store_items.json", function(data) {
    console.log(data);
});
export default class EachItem extends React.Component {

    render() {
        return (
            <div>json here</div>
        );

    }
}

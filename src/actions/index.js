import axios from 'axios';

export function loadColor(){
    return(dispatch) => {
        return axios.get("http://www.colr.org/json/color/random")
        .then((response) => {
            console.log(response.data)
            dispatch(changeColor("#" + response.data.new_color));
        })
        .catch((err) => {
            console.log('data did not load', err.response.data);
        })
    }
};

export function changeColor(color) {
    return {
        type: "CHANGE_COLOR",
        color: color
    }
}


let patterns = {
	name: /^[a-z ,.'-]+$/i,
	email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    age: /^[0-9]{0,2}$/,
    css:/^[a-z ,.'-]+$/i,
    html:/^[a-z ,.'-]+$/i,
    js:/^[a-z ,.'-]+$/i,
    about:/^[a-z ,.'-]+$/i
}

export {patterns}
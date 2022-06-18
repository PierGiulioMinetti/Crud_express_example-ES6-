/**
 * library that generate a unique id
 */
import { v4 as uuidv4 } from 'uuid';

let users = [{
    firstName: "John",
    lastName: "Doe",
    age: 25,
    id: uuidv4()
}]


export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

export const getUser = (req, res) => {
    const filteredUser = users.find(user => user.id === req.params.id)
    console.log(req.params);
    res.send(users);
}

export const createUser = (req, res) => {
    const requestBody = req.body;
    /**
     *  library to generate a unique id
     */
    const userId = uuidv4();

    const user = { ...requestBody, userId }


    users.push(user);
    console.log(`User with the name: ${user.firstName}, added to the Database!`);
    res.send(users);
}

export const patchUser = (req, res) => {
    const userFiltered = users.find(user => user.id === req.params.id);
    const { firstName, lastName, age } = req.body;

    if (firstName) {
        userFiltered.firstName = firstName;
    };

    if (lastName) {
        userFiltered.lastName = lastName;
    };

    if (age) {
        userFiltered.age = age;
    };

    res.send(userFiltered);
}

export const deleteUser = (req, res) => {
    const filtered = users.filter((user) => {
        return user.id != req.params.id;
    });

    res.send(filtered);
};
import {Button, Col, Form, Image, InputGroup, Row, Stack} from "react-bootstrap";
import searchIcon from "../../res/search.svg";
import * as React from "react";
import {useEffect, useState} from "react";
import {_getAllUsers} from "../../api/users";
import {tokenKey} from "../../utilities/apiHelpers";
import UsersList from "../ListsComponents/UsersList";
import UserDetails from "../ProfileComponents/UserDetails";

const UsersAdmin = () => {
    const [users, setUsers] = useState({list: [], isFetching: false, fetched: false});
    const [selectedUser, setSelectedUser] = useState(1)

    useEffect(() => {
        SetUsersList(fetchUsers);
    }, []);

    const fetchUsers = async () => {
        try {
            setUsers(users => ({list: users.list, isFetching: true, fetched: false}));
            const response = await _getAllUsers(localStorage.getItem(tokenKey))
            return response.message
        } catch (e) {
            console.log(e);
            return false
        }
    };

    function SetUsersList(fetchUsers) {
        fetchUsers().then(res => {
            if (res === false) {
                setUsers((users) => ({list: users.list, isFetching: false, fetched: false}));
            } else {
                setUsers({list: [...res], isFetching: true, fetched: true});
            }
        })
    }

    return (
        <Row>
            <h2 className="blue-text">Usuários</h2>
            <Col md={6}>
            <Stack className="w-100 list-height-large p-0 mb-5" gap={4}>
                    <InputGroup>
                        <Form.Control/>
                        <Button variant="outline-primary">
                            <Image src={searchIcon} alt="icon de lupa" className="mr-4"/>
                            Buscar
                        </Button>
                    </InputGroup>
                    <UsersList users={users}/>
            </Stack>
            </Col>
            <Col md={6}>
                <UserDetails admin={true} user={selectedUser}/>
            </Col>

        </Row>


    )
}

export default UsersAdmin

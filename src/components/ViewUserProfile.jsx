import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, CardBody, CardFooter, Col, Container, Row, Table } from 'reactstrap'
import { getCurrentUserDetail, isLoggedIn } from '../auth'
const ViewUserProfile = ({ user, updateProfileClick }) => {


    const [currentUser, setCurrentUser] = useState(null)
    const [login, setLogin] = useState(false)
    useEffect(() => {
        setCurrentUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
    }, [])
    return (
        <Card className='mt-2 border-0 rounded-0 shadow-sm'>
            <CardBody>
                <h3 className='text-uppercase'>user Information</h3>

                <Container className='text-center'>
                    <img style={{ maxWidth: '200px', maxHeight: '200px' }} src={user.image ? user.image : 'https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300&vertical=top'} alt="user profile picture" className='img-fluid  rounded-circle' />
                </Container>
                <Table responsive striped hover bordered={true} className='text-center mt-5'>
                    <tbody>
                        <tr>
                            <td >
                                LCWDBlLOGS ID
                            </td>
                            <td>
                                LCWD{user.id}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                USER NAME
                            </td>
                            <td>
                                {user.name}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                USER EMAIL
                            </td>
                            <td>
                                {user.email}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                ABOUT
                            </td>
                            <td>
                                {user.about}
                            </td>

                        </tr>
                        <tr>
                            <td>
                                ROLE
                            </td>
                            <td>
                                {user.roles.map((role) => {
                                    return (
                                        <div key={role.id}>{role.name}</div>
                                    )
                                })}
                            </td>
                        </tr>
                    </tbody>
                </Table>

                {currentUser ? (currentUser.id == user.id) ? (
                    <CardFooter className='text-center'>
                        <Button onClick={updateProfileClick} color='warning' >Update Profile</Button>
                    </CardFooter>
                ) : '' : ''}

            </CardBody>
        </Card>

    )
}

export default ViewUserProfile
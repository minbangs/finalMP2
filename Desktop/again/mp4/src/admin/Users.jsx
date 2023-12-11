

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import useGetData from '../custom-hooks/useGetData'
import { ThreeDots } from 'react-loader-spinner'
import '../styles/users.css'
import { db } from "../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const Users = () => {

    const {data: usersData, loading} = useGetData('users')


    const deleteUser = async (id) => {
        await deleteDoc(doc(db, "users", id));
        toast.success('Deleted')
      
      };
  return (
    <section>
        <Container id='user--cont'>
            <Row>
                <Col lg='12'><h4 className="fw-bold">Users</h4></Col>
                <Col lg='12' className='pt-5'>
                    <table className='table' id='user--table'>
                        <thead>
                            <th id='user--name'>Username</th>
                            <th id='user--email'>Email</th>
                            <th id='user--actn'>Action</th>
                        </thead>
                        <tbody>
                {loading ? (
                  <span className="d-flex align-items-center justify-content-center">
                    <ThreeDots
                      height="80"
                      width="80"
                      radius="9"
                      color="black"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClassName=""
                      visible={true}
                    />
                  </span>
                ) : (
                  usersData.map((user) => (
                    <tr key={user.uid}>
                      <td id='user--disp'>{user.displayName}</td>
                      <td id='email--disp'>{user.email}</td>
                      <td id='btn--disp'>
                        <button
                          onClick={() => {
                            deleteUser(user.uid);
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            
                    </table>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

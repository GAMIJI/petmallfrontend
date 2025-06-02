import React from 'react'
import SideBar from './SideBar';
import { Link } from 'react-router-dom';



function MyProducts() {
    const students = [
        {
            name: "Samantha William",
            id: "123456789",
            date: "March 25, 2021",
            parent: "Mana William",
            city: "Jakarta",
            image: "images/trans/1.jpg",
            grade: "VII A"
        },
        {
            name: "John Doe",
            id: "987654321",
            date: "April 10, 2021",
            parent: "Jane Doe",
            city: "New York",
            image: "images/trans/2.jpg",
            grade: "VI B"
        }
    ];

    return (
        <>
            <div>
              <section className="blog__area pt-50 pb-100 account__page">
                <div className="container-fluid">
                  <div className="row">
                    <SideBar />
                    <div className="col-xl-9 col-lg-8 col-sm-7">
        

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="page-title flex-wrap">
                                        <div className="input-group search-area mb-md-0 mb-3">
                                            <input type="text" placeholder="Search here..." className="form-control" />
                                            <span className="input-group-text">
                                                <a href="javascript:void(0)">
                                                    <svg width={15} height={15} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.5605 15.4395L13.7527 11.6317C14.5395 10.446 15 9.02625 15 7.5C15 3.3645 11.6355 0 7.5 0C3.3645 0 0 3.3645 0 7.5C0 11.6355 3.3645 15 7.5 15C9.02625 15 10.446 14.5395 11.6317 13.7527L15.4395 17.5605C16.0245 18.1462 16.9755 18.1462 17.5605 17.5605C18.1462 16.9747 18.1462 16.0252 17.5605 15.4395V15.4395ZM2.25 7.5C2.25 4.605 4.605 2.25 7.5 2.25C10.395 2.25 12.75 4.605 12.75 7.5C12.75 10.395 10.395 12.75 7.5 12.75C4.605 12.75 2.25 10.395 2.25 7.5V7.5Z" fill="#01A3FF" />
                                                    </svg>
                                                </a>
                                            </span>
                                        </div>
                                        <div>
                                            <Link to="/addproduct">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary">
                                                + New Student
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div data-wow-delay="1.5s" className="col-xl-12 wow fadeInUp">
                                    <div className="table-responsive full-data">
                                        <table id="example-student" className="table-responsive-lg table display dataTablesCard student-tab dataTable no-footer">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <input type="checkbox" id="checkAll" required className="form-check-input" />
                                                    </th>
                                                    <th>Name</th>
                                                    <th>ID</th>
                                                    <th>Date</th>
                                                    <th>Parent Name</th>
                                                    <th>City</th>
                                                    <th>Contact</th>
                                                    <th>Grade</th>
                                                    <th className="text-end">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {students.map((student, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="checkbox me-0 align-self-center">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" id={`check-${index}`} required className="form-check-input" />
                                                                    <label htmlFor={`check-${index}`} className="custom-control-label" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="trans-list">
                                                                <img src={student.image} alt="" className="avatar avatar-sm me-3" />
                                                                <h4>{student.name}</h4>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary font-w600">ID {student.id}</span></td>
                                                        <td>
                                                            <div className="date">{student.date}</div>
                                                        </td>
                                                        <td><h6 className="mb-0">{student.parent}</h6></td>
                                                        <td><h6 className="mb-0">{student.city}</h6></td>
                                                        <td>
                                                            <div className="d-flex">
                                                                {/* Add your icon buttons here or componentize them */}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="badge bg-secondary">{student.grade}</div>
                                                        </td>
                                                        <td>
                                                            <div className="dropdown custom-dropdown float-end">
                                                                <div data-bs-toggle="dropdown" className="btn sharp tp-btn">
                                                                    {/* Action Icon */}
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </div>
          </div>
        </div>
      </section>
    </div>
        </>
          
    )
}

export default MyProducts
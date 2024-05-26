import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Modal } from "react-bootstrap";

export const ReactDataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [deleteid, setdeleteid] = useState([])

  const [show, setShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);

    const response = await axios.get("http://localhost:5000/students");

    setData(response.data);
    setTotalRows(response.data.length);
    setLoading(false);
  };

  const handleDelete = async (studentId) => {
    console.log(studentId);
    const response = await axios.delete('http://localhost:5000/student/'+studentId)
    //console.log(response.status);
    if (response.status === 204) {
    
      fetchUsers()
    }
    setShow(false)
  }
  const handlePageChange = page => {
    // Not required for this example
  };

  const handleShow = row => {
    setSelectedRow(row);
    setShow(true);
    setdeleteid(row._id)

  };

  const handleClose = () => {
    setSelectedRow(null);
    setShow(false);
  };

  const handleEdit = () => {
    // Not implemented in this example
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    {
      name: "Name",
      selector: "name",
    },
    {
      name: "Phone",
      selector: "phone",
    },
    {
      name: "Marks",
      selector: "marks",
    },
    {
      name: "Actions",
      selector: "actions",
      cell: row => (
        <div>
          <button onClick={() => handleShow(row)}>Delete</button>
          <button onClick={() => handleEdit(row)}>Edit</button>
        </div>
      ),
    },
  ];

  return (
    <>
      <DataTable
        title="Users"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
      />

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the user: {selectedRow && selectedRow.name}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger"onClick={()=>{ handleDelete(deleteid) }}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import plus from "../assets/Plus sign .png";
import deleteIcon from "../assets/fluent_delete-24-regular.png";
import editIcon from "../assets/clarity_note-edit-line.png";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";

const MyTask = ({ baseURL }) => {
  const test = useFetch(`${baseURL}/api/task`);

  const { data, setData, loading, error } = test;

  // ========= DELETE FUNCTION====Nest "handleDelete container" it in button with the onClick function in the return ====

  const handleDelete = async (id) => {
    setData((prevData) => {
      return prevData.filter((task) => {
        return task._id !== id;
      });
    });

    const deleteTask = {
      method: "DELETE",
    };
    const respon = await fetch(`${baseURL}/api/task/${id}`, deleteTask);
    const data = await respon.json();

    if (respon.status === 200) {
      toast.success(data.message);
      return;
    } else {
      toast.error(data.message);
    }

    
  };
  // ================================================
  return (
    <div className="alltasks-con">
      {/* ==============URGENT TASK================== */}
      {/* =========Links to NEW====================== */}
      <div className=" my-tasks d-flex justify-content-between align-items-center">
        <h2 className="m-0">My Tasks</h2>
        <Link
          to="/new"
          className="d-flex justify-content-between align-items-center "
        >
          <img src={plus} alt="" />
          <p className="m-0">Add New Task</p>
        </Link>
      </div>

      {/* =========Links to Edit===================== */}

      {data
        ? data.map((Task) => {
            const { title, description, tag, _id } = Task;

            const tagColor = tag === "Urgent" ? "#F38383" : "#73C3A6";

            return (
              <div key={_id} className="task-content">
                <div className="inner-tak d-flex justify-content-between align-items-end">
                  <p className="m-0" style={{ color: tagColor }}>
                    {tag}
                  </p>
                  <div className="tasks-but d-flex gap-4">
                    <Link
                      to={`/edit/${Task._id}`}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <img src={editIcon} alt="" />
                      <p className="m-0">Edit</p>
                    </Link>
                    <button
                      onClick={() => {
                        return handleDelete(_id);
                      }}
                      className="d-flex align-items-center "
                    >
                      <img src={deleteIcon} alt="" />
                      <p className="m-0">Delete</p>
                    </button>
                  </div>
                </div>
                <hr />
                <div className="task-detail text-start">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            );
          })
        : null}

      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}

      {/* =================IMPORTANT TASK=========== */}

      {/* ========================================== */}
      <div className="bk-top my-5">
        <a href="#">Back to Top</a>
      </div>
    </div>
  );
};

export default MyTask;

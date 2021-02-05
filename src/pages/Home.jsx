import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, deleteTasks } from "../stores/actions/tasks";

const Home = () => {
  const { tasks } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [tasks]);

  // console.log(tasks)

  function deleteTask(id) {
    // console.log(id)
    dispatch(deleteTasks(id));
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => {
                  return (
                    <tr key={task.id}>
                      <td>{task.title}</td>
                      <td>{task.category}</td>
                      <button
                        onClick={() => {
                          deleteTask(task.id);
                        }}
                      >
                        delete
                      </button>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

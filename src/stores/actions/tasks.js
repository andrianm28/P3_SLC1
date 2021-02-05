const url = "https://0c45f.sse.codesandbox.io/tasks";

export function fetchTasks() {
  return async (dispatch) => {
    try {
      const res = await fetch(url, { method: "GET" });
      const data = await res.json();

      // console.log(data)
      dispatch({ type: "SET_TASKS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteTasks(id) {
  return async (dispatch) => {
    try {
      await fetch(url + `/${id}`, { method: "DELETE" });

      const res = await fetch(url, { method: "GET" });
      const data = await res.json();

      // console.log(data)
      dispatch({ type: "SET_TASKS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addTasks(task) {
  //console.log(task, '---- dari action')
  //if(task.category)
  return async (dispatch) => {
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ category: task.category, title: task.title })
      });
      //await axios.post(url)
      const res = await fetch(url, { method: "GET" });
      const data = await res.json();

      // console.log(data)
      dispatch({ type: "SET_TASKS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

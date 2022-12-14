import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import styles from "../style";
import layout from "../style";

const Home = () => {
  const [itemText, setItemText] = useState("");
  const [updateItemText, setUpdateItemText] = useState("");
  const [isUpdating, setIsUpdating] = useState("");
  const [listItems, setListItems] = useState([]);

  //Create function to fetch all todo items from database
  useEffect(() => {
    const getItemList = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/todolist/items");
        setListItems(res.data);
        console.log("render");
      } catch (err) {
        console.log(err.message);
      }
    };
    getItemList();
  }, []);

  //Add item when click on add
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/todolist/item", {
        item: itemText,
      });
      setListItems((prev) => [...prev, res.data]);
      setItemText("");
    } catch (err) {
      console.log(err.message);
    }
  };

  //Delete item when click on delete
  const deleteItem = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/todolist/item/${id}`
      );
      const newListItems = listItems.filter((item) => item._id !== id);
      setListItems(newListItems);
    } catch (err) {
      console.log(err.message);
    }
  };

  //Update item when click on update
  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `http://localhost:4000/api/todolist/item/${isUpdating}`,
        {
          item: updateItemText,
        }
      );
      console.log(res.data);
      const updatedItemIndex = listItems.findIndex(
        (item) => item._id === isUpdating
      );
      const updatedItem = (listItems[updatedItemIndex].item = updateItemText);
      setUpdateItemText("");
      setIsUpdating("");
    } catch (err) {
      console.log(err.message);
    }
  };

  //before updating item we need to show input field where we will create our updated item
  const renderUpdateForm = () => (
    <div
        className={`w-full mx-auto`}
      >
    <form className={`flex justify-between`} onSubmit={(e) => updateItem(e)}>
      <input
        className="w-9/12 p-4"
        type="text"
        placeholder="Add Todo Item"
        onChange={(e) => setUpdateItemText(e.target.value)}
        value={updateItemText}
      />
      <button
        className="focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold p-4 my-auto rounded-lg text-center sm:w-24 bg-primary highlight-white/20 hover:bg-secondary hover:drop-shadow-lg"
        type="submit"
      >
        Update
      </button>
    </form>
    </div>
  );

  return (
    <Fragment>
      <div
        className={`${layout.section} ${styles.padding}${styles.flexCenter} text-black rounded-xl backdrop-blur-xl bg-white/30 m-10 w-3/4 mx-auto`}
      >
        <form className={`flex justify-between px-6 py-4`} onSubmit={(e) => addItem(e)}>
          <input
            className="w-9/12 p-4"
            type="text"
            placeholder="Add Todo Item"
            onChange={(e) => setItemText(e.target.value)}
            value={itemText}
          />
          <button
            className="focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold p-4 my-auto rounded-lg text-center sm:w-24 bg-primary highlight-white/20 hover:bg-secondary hover:drop-shadow-lg"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
      <div
        className={`${layout.section} ${styles.padding}${styles.flexCenter} text-black rounded-xl backdrop-blur-xl bg-white/30 m-16 w-3/4 mx-auto`}
      >
        <ul className="flex flex-col justify-between">
          {listItems.map((item) => (
            <li
              className={`px-6 py-4 flex justify-between border-b-2 border-b-secondary`}
              key={item.id}
            >
              {isUpdating === item._id ? (
                renderUpdateForm()
              ) : (
                <>
                  <p className="py-3 align-middle text-2xl text-secondary">{item.item}</p>
                  <div className="flex">
                    <button
                      className="focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold p-4 rounded-lg text-center sm:w-24 bg-primary highlight-white/20 hover:drop-shadow-lg"
                      onClick={() => setIsUpdating(item._id)}
                    >
                      Update
                    </button>
                    <button
                      className="focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold p-4 ml-4 rounded-lg text-center sm:w-24 bg-secondary highlight-white/20 hover:drop-shadow-lg"
                      onClick={() => deleteItem(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Home;

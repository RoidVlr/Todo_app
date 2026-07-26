import { Button, Spin, Select } from "antd";
import { useEffect, useState } from 'react';
import { DeleteOutlined, DownOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems, addItem, filterDeleted } from "../store";

// const options = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

const Recycle = () => {

  const dispatch = useDispatch();

  const deleted = useSelector(state => state.deleted.value);
  const {items, loading, error} = useSelector(state => state.items);
  
  const options = deleted.map(item => item.title);
  
  const [restoreDisabled, setRestoreDisabled] = useState(true);

  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = options.filter(item => !selectedItems.includes(item));
  
  useEffect(() => {
    if (selectedItems.length) setRestoreDisabled(false);
    else setRestoreDisabled(true);
  }, [selectedItems]);


  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const restore = () => {
    // selectedItems.forEach(item => {
    //   dispatch(addItem(item));
    //   dispatch(filterDeleted(item));
    //   console.log(deleted);
    // });
    // const aboutToRestores = deleted.filter(item => {
    //   selectedItems.forEach(str => {
    //     return item.title === str;
    //   });
    // });
    // aboutToRestores.forEach(item => {
    //   dispatch(addItem(item));
    // });
  }

  return <>
    {loading
      ? <>
          <Spin style={{marginTop: '10px'}} /> <br />
        </>
      : items.length !== 0
      ? items.map(item =>
          <p>{item.id}. {item.title}</p>
        )
      : <p>no found</p>
    }
    <br />
    {deleted.map(item =>
      <p>{item.id}. {item.title}</p>
    )}
    <Button
      className="recycle-restore-btn"
      type="text"
      variant="filled"
      color="gold"
      disabled={restoreDisabled}
      onClick={restore}
    > Restore from the recycle bin
    <DeleteOutlined /><DownOutlined />
    </Button>
    <br />
    <Select
      className="recycle-restore-select"
      mode="multiple"
      placeholder="Select todos to restore"
      value={selectedItems}
      onChange={setSelectedItems}
      options={filteredOptions.map(item => ({
        value: item,
        label: item,
      }))}
    />
  </> 
};

export default Recycle;
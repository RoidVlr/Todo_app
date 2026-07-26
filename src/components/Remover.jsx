import { useState, useEffect } from 'react';
import { animate } from "animejs";
import { Button, Modal, Checkbox } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { setReaskTrue, setReaskFalse, unshiftNewDeleted } from "../store";

const Remover = ({item, list, setList}) => {

  const reask = useSelector(state => state.reask.value);
  const dispatch = useDispatch();
  
  const [modal, openModal] = useState(false);
  const [active, setActive] = useState(false);

  const remove = (item, node) => {
    animate(node, {
      opacity: [1, 0],
      duration: 300
    });
    setTimeout(() => {
      setList(list.filter(elem => elem.id !== item.id));
      // dispatch(unshiftNewDeleted(item));
    }, 300);
  }

  const cancel = () => {
    dispatch(setReaskTrue());
    openModal(false);
  }

  useEffect(() => {
    if (reask) setActive(false);
    else setActive(true);
  }, [reask]);

  const changeReask = () => {
    if (reask) {
      dispatch(setReaskFalse());
    } else {
      dispatch(setReaskTrue());
    }
  }

  return <>
    <Button
      className="remover"
      variant="solid"
      color="danger"
      onClick={e => {
        if (reask) openModal(true);
        else {
          const elem = e.currentTarget.closest('.item');
          remove(item, elem);
        }
      }}
    >-</Button>
    <Modal
      className="modal"
      title="Внимание!"
      footer={
        <>
          <Button
            onClick={cancel}
            variant="filled"
            color="gold"
            type="text"
          >Отмена</Button>
          <Button
            type="text"
            variant="solid"
            color="danger"
            onClick={e => {
              openModal(false);
              const elem = e.currentTarget.closest('.item');
              remove(item, elem);
            }}
          >Удалить</Button>
        </>
      }
      mask={{enabled: true, blur: false}}
      open={modal}
      onCancel={cancel}
    >
      <p>Вы уверены, что хотите удалить эту задачу?</p>
      <Checkbox
        className="modal-switch"
        value={active}
        onChange={changeReask}
      > Больше на спрашивать
      </Checkbox>
    </Modal>
  </>
}

export default Remover;
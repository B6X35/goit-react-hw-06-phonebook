import ContactItem from "./ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { removePhone } from "../../../redux/phonebook/phoneAction";
import { memo } from "react";
const ContactList = () => {
  const dispatch = useDispatch();
  const phones = useSelector((state) => state.phone);
  const filter = useSelector((state) => state.filter);
  const removePhones = (id) => dispatch(removePhone(id));

  const getItems = () => {
    if ( filter === '') return phones;
    return phones.filter((phone) => phone.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const items = getItems();

  const elements = items.map(({ id, ...item}) => (
    <ContactItem
      key={id}
      {...item}
      id={id}
      delet={removePhones}
    />
  ));
  return <ul>{elements}</ul>;
};

export default memo(ContactList);
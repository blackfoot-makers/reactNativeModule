import { useRoute } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { useList } from './context';

const useListData = () => {
  const { name } = useRoute();
  const [list, setListe] = useList();
  const [input, setInput] = useState('');
  const trueList = list.filter(({ selected }) => name === 'All' || (name === 'Selected' && selected) || (name === 'NotSelected' && !selected));
  const id = useRef(0);
  const submitInput = () => {
    if (input) {
      setListe([...list, { value: input, selected: false, id: id.current }]);
      setInput('');
      id.current++;
    }
  };
  const toogleSelected = (selectedId) => () => {
    setListe(list.map((listData) => ({
      ...listData,
      selected: listData.id === selectedId ? !listData.selected : listData.selected
    })));
  }
  return {
    trueList,
    submitInput,
    input,
    setInput,
    toogleSelected
  }
}

export default useListData;
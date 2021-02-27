import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList: CheckboxValueType[] = ['Apple', 'Orange'];

const CheckboxList = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} style={{ padding: '5px 16px' }}>
        Check all
      </Checkbox>
      <div style={{ height: 1, backgroundColor: '#ddd', margin: '5px 0'}}/>
      <CheckboxGroup value={checkedList} onChange={onChange} style={{ padding: '5px 16px' }}>
        <Checkbox value='Apple'>Apple</Checkbox>
        <div style={{ marginBottom: 7 }} />
        <Checkbox value='Pear'>Pear</Checkbox>
        <div style={{ marginBottom: 7 }} />
        <Checkbox value='Orange'>Orange</Checkbox>
      </CheckboxGroup>
    </>
  );
};

export default CheckboxList;

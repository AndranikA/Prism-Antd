import React, { useState } from 'react';
import { Layout, Typography, Divider, Space } from 'antd';

import './App.less';

import Select, { Option, SelectValue } from './components/selects/Select';
import Button from './components/buttons/Button';
import Tooltip from './components/tooltips/Tooltip';
import Dropdown from './components/dropdowns/Dropdown';
import CheckboxList from './components/checkboxes/CheckboxList';
import { IconSelectArrow, IconVoltage, IconClose } from './components/Icons';

const { Header, Content } = Layout;
const { Title } = Typography;
const text = 'This is a custom positioned tooltip';
const buttonWidth = 70;

function App() {
  const [value, setValue] = useState<SelectValue>('');

  const handleChange = (value: SelectValue) => {
    setValue(value);
  };

  return (
    <Layout>
      <Header>Header</Header>
      <Content style={{ padding: 50 }}>
        <Title style={{ marginBottom: 30 }}>Buttons</Title>
        <Button type='primary' style={{ marginRight: 30 }}>
          Primary
        </Button>
        <Button type='primary' icon={<IconVoltage className='ant-btn_icon' />} style={{ marginRight: 30 }}>
          Primary
        </Button>
        <Button type='primary' style={{ marginRight: 30 }}>
          Primary
          <IconVoltage className='ant-btn_icon__suffix' />
        </Button>
        <Button
          type='primary'
          icon={<IconVoltage className='ant-btn_icon__single' />}
          style={{ marginRight: 30, verticalAlign: 'top' }}
        ></Button>
        <div style={{ marginBottom: 30 }} />
        <Button style={{ marginRight: 30 }}>Secondary</Button>
        <Button icon={<IconVoltage className='ant-btn_icon' color='#666C77' />} style={{ marginRight: 30 }}>
          Secondary
        </Button>
        <Button style={{ marginRight: 30 }}>
          Secondary
          <IconVoltage className='ant-btn_icon__suffix' color='#666C77' />
        </Button>
        <Button
          icon={<IconVoltage className='ant-btn_icon__single' color='#666C77' />}
          style={{ marginRight: 30, verticalAlign: 'top' }}
        ></Button>
        <Divider />
        <Title style={{ marginBottom: 30 }}>Tooltips</Title>
        <div className='demo'>
          <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
            <Tooltip placement='topLeft' title={text}>
              <Button>TL</Button>
            </Tooltip>
            <Tooltip placement='top' title={text}>
              <Button>Top</Button>
            </Tooltip>
            <Tooltip placement='topRight' title={text}>
              <Button>TR</Button>
            </Tooltip>
          </div>
          <div style={{ width: buttonWidth, float: 'left' }}>
            <Tooltip placement='leftTop' title={text}>
              <Button>LT</Button>
            </Tooltip>
            <Tooltip placement='left' title={text}>
              <Button>Left</Button>
            </Tooltip>
            <Tooltip placement='leftBottom' title={text}>
              <Button>LB</Button>
            </Tooltip>
          </div>
          <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
            <Tooltip placement='rightTop' title={text}>
              <Button>RT</Button>
            </Tooltip>
            <Tooltip placement='right' title={text}>
              <Button>Right</Button>
            </Tooltip>
            <Tooltip placement='rightBottom' title={text}>
              <Button>RB</Button>
            </Tooltip>
          </div>
          <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
            <Tooltip placement='bottomLeft' title={text}>
              <Button>BL</Button>
            </Tooltip>
            <Tooltip placement='bottom' title={text}>
              <Button>Bottom</Button>
            </Tooltip>
            <Tooltip placement='bottomRight' title={text}>
              <Button>BR</Button>
            </Tooltip>
          </div>
        </div>
        <Divider />
        <Tooltip title='prompt text' trigger='click'>
          <Button
            type='primary'
            icon={<IconVoltage className='ant-btn_icon__single' />}
            style={{ marginRight: 30, verticalAlign: 'top' }}
          ></Button>
        </Tooltip>
        <Tooltip
          placement='topRight'
          arrowPointAtCenter
          title='This is maximum heigh and width top positioned tooltip. Padding 10px from eachside, not including triangle.'
        >
          <Button
            type='primary'
            icon={<IconVoltage className='ant-btn_icon__single' />}
            style={{ float: 'right', verticalAlign: 'top' }}
          ></Button>
        </Tooltip>
        <Tooltip
          title='long explanation of short text'
          color='white'
          trigger='click'
          overlayClassName='ant-tooltip__light'
        >
          <Button
            type='primary'
            icon={<IconVoltage className='ant-btn_icon__single' />}
            style={{ verticalAlign: 'top' }}
          ></Button>
        </Tooltip>
        <Divider />
        <Tooltip title='long explanation of short text'>
          <span style={{ display: 'inline-block', marginRight: 50 }}>short text</span>
        </Tooltip>
        <Tooltip title='long explanation of short text' color='white' overlayClassName='ant-tooltip__light'>
          <span style={{ display: 'inline-block', marginRight: 50 }}>short text</span>
        </Tooltip>
        <Divider />
        <Title style={{ marginBottom: 30 }}>Selects</Title>
        <Title level={3} style={{ marginBottom: 30 }}>
          Single Selects
        </Title>
        <Select
          style={{ width: 240, marginBottom: 30, marginRight: 30 }}
          onChange={handleChange}
          placeholder='Select a person'
          suffixIcon={<IconSelectArrow />}
        >
          <Option value='jack'>Jack</Option>
          <Option value='lucy'>Lucy</Option>
          <Option value='disabled'>Disabled</Option>
          <Option value='Yiminghe'>yiminghe</Option>
        </Select>
        <Select
          style={{ width: 240, marginBottom: 30, marginRight: 30 }}
          allowClear
          clearIcon={<IconClose />}
          onChange={handleChange}
          placeholder='Select a person'
          suffixIcon={<IconSelectArrow />}
        >
          <Option value='jack'>Jack</Option>
          <Option value='lucy'>Lucy</Option>
          <Option value='disabled'>Disabled</Option>
          <Option value='Yiminghe'>yiminghe</Option>
        </Select>
        <Select
          style={{ width: 240, marginBottom: 30, marginRight: 30 }}
          allowClear
          clearIcon={<IconClose />}
          onChange={handleChange}
          placeholder='Select a person'
          suffixIcon={<IconSelectArrow />}
          defaultValue='Yiminghe'
        >
          <Option value='jack'>Jack</Option>
          <Option value='lucy'>Lucy</Option>
          <Option value='disabled'>Disabled</Option>
          <Option value='Yiminghe'>yiminghe</Option>
        </Select>
        <Select
          style={{ width: 240, marginBottom: 30, marginRight: 30 }}
          allowClear
          clearIcon={<IconClose />}
          onChange={handleChange}
          placeholder='Select a person'
          suffixIcon={<IconSelectArrow />}
          showSearch
          onSearch={(val) => console.log(val)}
          filterOption={(input, option) => option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value='jack'>Jack</Option>
          <Option value='lucy'>Lucy</Option>
          <Option value='disabled'>Disabled</Option>
          <Option value='Yiminghe'>yiminghe</Option>
          <Option value='Yiminghe1'>yiminghe 1</Option>
          <Option value='Yiminghe2'>yiminghe 2</Option>
          <Option value='Yiminghe3'>yiminghe 3</Option>
          <Option value='Yiminghe4'>yiminghe 4</Option>
        </Select>
        <Divider />
        <Title level={3} style={{ marginBottom: 30 }}>
          Multiple Selects
        </Title>
        <Select
          style={{ width: 240, marginBottom: 30, marginRight: 30 }}
          onChange={handleChange}
          placeholder='Select a person'
          suffixIcon={<IconSelectArrow />}
          mode='multiple'
        >
          <Option value='jack'>Jack</Option>
          <Option value='lucy'>Lucy</Option>
          <Option value='disabled'>Disabled</Option>
          <Option value='Yiminghe'>yiminghe</Option>
        </Select>
        <Select
          style={{ width: 240, marginBottom: 30, marginRight: 30 }}
          allowClear
          onChange={handleChange}
          placeholder='Select a person'
          suffixIcon={<IconSelectArrow />}
          mode='multiple'
          clearIcon={<IconClose />}
          defaultValue={['jack', 'lucy']}
        >
          <Option value='jack'>Jack</Option>
          <Option value='lucy'>Lucy</Option>
          <Option value='disabled'>Disabled</Option>
          <Option value='Yiminghe'>yiminghe</Option>
        </Select>
        <Select
          style={{ width: 240, marginBottom: 30, marginRight: 30 }}
          allowClear
          onChange={handleChange}
          placeholder='Select a person'
          suffixIcon={<IconSelectArrow />}
          mode='multiple'
          clearIcon={<IconClose />}
        >
          <Option value='jack'>Jack</Option>
          <Option value='lucy'>Lucy</Option>
          <Option value='disabled'>Disabled</Option>
          <Option value='Yiminghe'>yiminghe</Option>
        </Select>
        <Divider />
        <Title style={{ marginBottom: 30 }}>Dropdowns</Title>
        <Space size='large'>
          <Dropdown overlay={<CheckboxList />} placement='bottomLeft' trigger={['click']}>
            <Button>Sort: by something</Button>
          </Dropdown>
          <Dropdown overlay={<CheckboxList />} placement='bottomLeft'>
            <Button
              type='primary'
              icon={<IconVoltage className='ant-btn_icon__single' />}
              style={{ marginRight: 30, verticalAlign: 'top' }}
            ></Button>
          </Dropdown>
        </Space>
      </Content>
    </Layout>
  );
}

export default App;

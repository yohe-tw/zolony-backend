import { useEffect, useState } from 'react';
import { Form, Input, Avatar, Image, Button, Select, Modal, Slider } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Canvas from '../components/Canvas';
import './css/Info.css'
import { UseHook } from '../hook/usehook';
import Utils from '../classes/Utils';

const { TextArea } = Input;
const Info = ({ setOpenModal }) => {
  const [selectItems, setSelectItems] = useState([]);
  const [openMapModal, setOpenMapModal] = useState(false);

  const [mapName, setMapName] = useState('');
  const [xLen, setXLen] = useState(0);
  const [yLen, setYLen] = useState(0);
  const [zLen, setZLen] = useState(0);
  const [cvs, setCvs] = useState(null);

  const { initialMyMap, deleteUserMap, user, password, bio, maps, avatar } = UseHook();

  useEffect(() => {
    setSelectItems(maps.map(a => ({ label: a.mapName, value: a.mapName })));
  }, [maps]);


  const onSelect = async (value) => {
    const data = JSON.parse(JSON.stringify(maps.filter(m => m.mapName === value)[0]));

    setMapName(value);
    setCvs(null);
    await Utils.Sleep(0);
    setCvs(<Canvas canvaswidth={500} canvasheight={500} xlen={data.xLen} yLen={data.yLen} zLen={data.zLen} preloaddata={data} storable={true} />);
  }

  const handleModalOk = async () => {
    const data = await initialMyMap(user, password, parseInt(xLen), parseInt(yLen), parseInt(zLen), mapName);

    setCvs(null);
    await Utils.Sleep(0);
    setCvs(<Canvas canvaswidth={500} canvasheight={500} xlen={data.xLen} yLen={data.yLen} zLen={data.zLen} preloaddata={data} storable={true} />);
    setOpenMapModal(false);
  }

  const handleMapDelete = async () => {
    const data = await deleteUserMap(user, password, mapName);
    setCvs(null);
  }

  const profileForm = <>
    <Form>
      <div id='Info-username' className='Info-left'>
        <Form.Item label="Username">
          <Input defaultValue={user} disabled={true}/>
        </Form.Item>
      </div>
      <div id='Info-avatar' className='Info-left'>
        <Avatar
          src={<Image src={avatar}/>}
          style={{
            width: 400,
            height: 400,
          }}
        />
      </div>
      <div id='Info-bio' className='Info-left'>
        <Form.Item label="Bio">
          <TextArea rows={4} defaultValue={bio ?? "在這裡放上自介"} disabled={true}/>
        </Form.Item>
      </div>
      <div id='Info-btn' className='Info-left'>
        <Form.Item>
          <Button onClick={() => setOpenModal(3)}>
            修改密碼/編輯個人資料
          </Button>
        </Form.Item>
      </div>
    </Form>
  </>

  const MapModal = <>
    <Input placeholder="輸入你的地圖名稱" prefix={<RightOutlined />} onChange={e => setMapName(e.target.value)}/>
    <br/>
    <br/>
    <span> 輸入長寬高↓ </span>
    <div id='Map-Modal-xyz-wrapper'>
      <Input placeholder="xlen" className='Map-Modal-xyz' onChange={e => setXLen(e.target.value)}/>
      <Input placeholder="ylen" className='Map-Modal-xyz' onChange={e => setYLen(e.target.value)}/>
      <Input placeholder="zlen" className='Map-Modal-xyz' onChange={e => setZLen(e.target.value)}/>
    </div>
  </>

  return(
    <div id='Info-wrapper'>
      <div id='Info-left-wrapper'>
        {profileForm}
      </div>
      <div id='Info-right-wrapper'>
        <div id='Info-right-header'>
          <div id='Info-select'>
            <Form><Form.Item><Select
              showSearch
              placeholder="Select a map"
              optionFilterProp="children"
              onSelect={onSelect}
              onChange={onSelect}
              style = {{
                width: '100%'
              }}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={selectItems}
            /></Form.Item></Form>
          </div>
          <div id='Info-del'>
            <Button onClick={handleMapDelete} className="Info-del-btn" disabled={!cvs}>
              刪減目前地圖
            </Button>
          </div>
          <div id='Info-add'>
            <Button onClick={() => setOpenMapModal(true)} className="Info-add-btn"> 
              增加地圖
            </Button>
          </div>
        </div>
        <div id='Info-right-section'>
            {cvs ?? <></>}
        </div>
      </div>

      <Modal
        title="新增地圖"
        centered
        open={openMapModal}
        onOk={() => handleModalOk()}
        onCancel={() => setOpenMapModal(false)}
      >
        {MapModal}
      </Modal>
    </div>
  );
}

export default Info;
import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

function ColorPicker() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="ColorPicker" className='mb-15'/>
      <div className='text-center'>
        <div id='preview' className='mb-25'/>
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-14'>Inline Pallete</p>
            <ColorPickerComponent 
            id='Inline Pallete'
            mode='Pallete'
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
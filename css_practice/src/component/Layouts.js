import React from 'react'
import Layout1 from './layouts/Layout1';
import Layout2 from './layouts/Layout2';
import Tabs from '../reactive/tab/Tabs';

const Layouts = () => {
  return (
      <>
        <Tabs>
          <Tabs.Tab tabName={'Layout 1'}>
            <Layout1/>
          </Tabs.Tab>

          <Tabs.Tab tabName={'Layout 2'}>
            <Layout2/>
          </Tabs.Tab>
        </Tabs>
      </>
  )
}

export default Layouts

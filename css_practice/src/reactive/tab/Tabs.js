// Src: https://codepen.io/piotr-modes/pen/ErqdxE?editors=0010
// CODEPEN: https://codepen.io/dipenparmar12/pen/YzZmeEN

import React, {useState} from 'react'
import './Tabs.scss'

export default function Tabs({children, active = 0}) {
  const [activeTab, setActiveTab] = useState(active);

  const changeTab = (tab) => {
    setActiveTab(tab)
  }

  let tabList = [];
  let content = null

  return (
      <>
        <TabButtons activeTab={activeTab} tabList={tabList} changeTab={changeTab}/>
        {React.Children.map(children, (child, i) => {
          const tabName = child.props?.tabName || child.props['data-tabName'] || 'tab-' + i;
          tabList.push(tabName)
          if (tabName === activeTab) {
            content = child?.props?.children
          }
        })}
        {content}
      </>
  )
}

export const Tab = props => (
    <>
      {props.children}
    </>
)

Tabs.Tab = Tab

const TabButtons = ({tabList, changeTab, activeTab}) => {
  // console.log("Tabs ::",buttons, changeTab, activeTab )
  return (
      <div className={'tabButtons'}>
        {
          tabList.map(btn => (
              <button
                  key={btn}
                  className={`tabButton ` + (btn === activeTab ? 'activeTab' : '')}
                  onClick={() => changeTab(btn)}
              >
                {btn}
              </button>
          ))
        }
      </div>
  )
}

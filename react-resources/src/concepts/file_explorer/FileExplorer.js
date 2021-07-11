import React from 'react'
import { Center } from '../chatapp/styles'
import './styles.css'

const Li = ({ children }) => {
  let count = 0
  let name = ''

  React.Children.forEach(children, (child) => {
    if (child === 'string') name = child
    if (child.type === 'ul') count += 1
  })

  return (
    <li
      onClick={(e) => {
        e.stopPropagation()
        e.currentTarget.classList.toggle('expanded')
      }}
    >
      <img
        src="https://img.icons8.com/ios/50/000000/folder-invoices--v1.png"
        width={'12px'}
        alt={'folder'}
        style={{ marginRight: '7px' }}
      />
      {children}
      {count !== 0 && (
        <div className="arrow" style={{ marginLeft: '-3px' }}>
          <img
            src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png"
            width={'15px'}
            alt={'arrow'}
          />
        </div>
      )}
    </li>
  )
}

const FileExplorer = () => {
  // const [active, setActive] = React.useState('')
  const dirs = [
    {
      name: 'A'
    },
    {
      name: 'B',
      children: [{ name: 'B-1' }, { name: 'B-2', children: [{ name: 'BB-1' }] }]
    },
    {
      name: 'C',
      children: [{ name: 'C-1' }]
    }
  ]

  return (
    <Center ptop={'30px'}>
      <div className="folder-tree-wrapper">
        <ul className="folder-tree">
          <Li>
            This PC
            <ul>
              <Li>Drive A</Li>
              <Li>
                Drive B
                <ul>
                  <Li>Music</Li>
                  <Li>
                    Videos
                    <ul>
                      <Li>Series</Li>
                      <Li>
                        Movies
                        <ul>
                          <Li> Soul </Li>
                          <Li> Wall-E</Li>
                        </ul>
                      </Li>
                    </ul>
                  </Li>
                </ul>
              </Li>
            </ul>
          </Li>
        </ul>
      </div>
    </Center>
  )
}

export default FileExplorer

/* ------------------------------------
  src
  https://github.com/shunjizhan/react-folder-tree
 ------------------------------------ */

/* ------------------------------------
  function loop(nodes) {
    let dir = []
    Object.values(nodes).forEach((node, i) => {
      dir.push({
        li: <Li> {node.name}</Li>
      })
      if (node.children) {
        dir[i].children = <ul> {node.children}</ul>
        loop(node.children)
      }
    })
    return dir
  }

  let dir = loop(dirs)
  const mapRecursive = (children, callback) =>
    children.map((child) =>
      child.children
        ? [callback(child), mapRecursive(child.children, callback)]
        : callback(child)
    )

  const listRender = mapRecursive(dirs, (e) => {
    return <li key={Math.random()}> {e.name}</li>
  })
 ------------------------------------ */

/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import './styles.css'
import './Components/Internet/styles.css'
import UserListOneModal from './Components/ModalOptimizedUsesList'
import { TableSortExample } from './hooks/useSortableData'
import TableExtendable from './Components/TableExtendable'
import TableSortFilter from './Components/TableSortFilter/TableSortFilter'

// import { fileDragDropExample } from './Components/FileDrapDrop'
// import { Toggle } from "./Components/Toggle";
// import { toolTipExample } from "./Components/ToolTip";

export default function App() {
  return (
    <div className="App">
      <h1 className="text-3xl">React CodeSandbox dev 2</h1>
      {/* {toolTipExample} */}
      {/* <Toggle /> */}
      {/* {fileDragDropExample} */}

      <Box className="bg-gray-100">
        <TableSortFilter />
      </Box>

      <Box className="bg-gray-100">
        <TableExtendable />
      </Box>

      <Box className="bg-gray-100">
        <TableSortExample />
      </Box>

      <Box className="bg-gray-200">
        <UserListOneModal />
      </Box>
    </div>
  )
}

function Box({ children, className, ...props }) {
  return (
    <>
      <div className={'border mt-10 mb-10 py-2 ' + className} {...props}>
        {children}
      </div>
    </>
  )
}

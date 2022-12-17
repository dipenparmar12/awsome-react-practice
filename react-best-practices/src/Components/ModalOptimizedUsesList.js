import React from 'react'
import Dialog from '@reach/dialog'
import '@reach/dialog/styles.css'

export default function UserList() {
  const [users, setUsers] = React.useState([])
  const modalRef = React.useRef()

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setUsers(users.splice(0, 3)))
  }, [])

  return (
    <>
      <div>
        <h1 className="text-2xl">User List Dry Modal </h1>
        {users?.map((user) => (
          <User key={user.id} data={user} modalRef={modalRef} />
        ))}
      </div>
      <ViewModal
        ref={modalRef}
        title={'User View'}
        Body={({ data, ...props }) => (
          <>
            <JsonPrint data={data} />
          </>
        )}
      />
    </>
  )
}

function User({ data, modalRef }) {
  return (
    <div className="p-3">
      <div>Id: {data.id}</div>
      <div>Name: {data.name}</div>
      <button
        onClick={() => {
          modalRef.current.modalOpen()
          modalRef.current.setData(data)
        }}
      >
        View Details{' '}
      </button>
    </div>
  )
}

const ViewModal = React.forwardRef(({ Body, ...props }, ref) => {
  const [showDialog, setShowDialog] = React.useState(false)
  const [data, setData] = React.useState()

  const methods = {
    modalOpen: () => setShowDialog(true),
    modalClose: () => setShowDialog(false),
    setData: setData,
  }
  React.useImperativeHandle(ref, () => methods)

  return (
    <div>
      <Dialog
        aria-label={data?.id || ' -'}
        isOpen={showDialog}
        onDismiss={methods.modalClose}
      >
        <button className="close-button" onClick={methods.modalClose}>
          <span aria-hidden>×</span>
        </button>

        <Body
          {...props}
          data={data}
          setData={setData}
          onOpen={methods.modalOpen}
          onClose={methods.modalClose}
        />
      </Dialog>
    </div>
  )
})

function JsonPrint({ data, fontSize = 14, color = '#000', ...rest }) {
  return (
    <pre
      style={{
        color: color,
        fontSize: fontSize + 'px',
        borderBottom: '1px solid red',
        marginBottom: '5px',
      }}
      {...rest}
    >
      {JSON.stringify(data, null, 4)}
    </pre>
  )
}

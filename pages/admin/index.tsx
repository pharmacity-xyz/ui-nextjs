import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../components/AdminLayout'

function AdminIndex() {
  return (
    <AdminLayout title="Dashboard">
      <div>
        <h1>Hello World</h1>
      </div>
    </AdminLayout>
  )
}

export default AdminIndex

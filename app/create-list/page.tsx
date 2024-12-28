'use client'

import { useState } from 'react'
import { ListManagement } from '@/components/list-management'
import { MapSearch } from '@/components/map-search'

export default function CreateListPage() {
  const [listName, setListName] = useState('')
  const [selectedBusinesses, setSelectedBusinesses] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const handleAddBusiness = (business) => {
    setSelectedBusinesses((prev) => [...prev, business])
  }

  const handleSearch = (keyword) => {
    // This is where you'd typically call an API to get search results
    // For now, we'll just simulate some results
    const mockResults = [
      { id: 1, name: 'Business 1', address: '123 Main St' },
      { id: 2, name: 'Business 2', address: '456 Elm St' },
      { id: 3, name: 'Business 3', address: '789 Oak St' },
    ]
    setSearchResults(mockResults)
  }

  return (
    <div className="flex h-screen pt-20">
      <div className="w-1/2 p-4 border-r">
        <ListManagement
          listName={listName}
          setListName={setListName}
          selectedBusinesses={selectedBusinesses}
          searchResults={searchResults}
          onAddBusiness={handleAddBusiness}
        />
      </div>
      <div className="w-1/2 p-4">
        <MapSearch onSearch={handleSearch} />
      </div>
    </div>
  )
}


import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function MapSearch({ onSearch }) {
  const [keyword, setKeyword] = useState('')

  const handleSearch = () => {
    onSearch(keyword)
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Enter business keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="h-96 bg-gray-200 flex items-center justify-center">
        <p>Google Maps Placeholder</p>
      </div>
    </div>
  )
}


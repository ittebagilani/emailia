import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ListManagement({ listName, setListName, selectedBusinesses, searchResults, onAddBusiness }) {
  return (
    <div className="space-y-4">
      <Input
        placeholder="Enter list name"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Selected Businesses</h2>
        {selectedBusinesses.map((business) => (
          <div key={business.id} className="p-2 border rounded">
            <p>{business.name}</p>
            <p className="text-sm text-gray-500">{business.address}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Search Results</h2>
        {searchResults.map((business) => (
          <div key={business.id} className="p-2 border rounded flex justify-between items-center">
            <div>
              <p>{business.name}</p>
              <p className="text-sm text-gray-500">{business.address}</p>
            </div>
            <Button onClick={() => onAddBusiness(business)}>Add to List</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

